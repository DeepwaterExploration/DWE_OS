const EventEmitter = require('events')
const usbDetect = require('usb-detection')
const v4l2camera = require('v4l2camera-pr48')
const SettingsManager = require('./settingsManager')
const StreamManager = require('./streamManager')
const { getDriverOptions, setDriverOptions } = require('./utils/driver')
const reset = require('./utils/reset')
const getUdevInfo = require('./utils/udev')

class Device {
  constructor(deviceManager) {
    this.deviceIndex = -1
    this.managerIndex = -1
    this.devicePath = null
    this.cam = null
    this.info = {}
    this.options = null
    this.stream = null
    this.resolutions = null
    this.controls = []
    this.caps = {
      h264: false,
      driver: false,
    }
    this.deviceManager = deviceManager
    this.name = ''
  }

  updateControls() {
    this.controls = []
    try {
      for (let control of this.cam.controls) {
        let id = control.id
        this.controls.push({
          name: control.name,
          value: this.cam.controlGet(id),
          type: control.type,
          menu: control.menu,
          min: control.min,
          max: control.max,
          default: control.default,
          id,
        })
      }
    } catch (e) {}
    // TODO: Fix
  }

  getSerializable() {
    let resolution = this.resolutions[0]
    if (this.stream && this.stream.width) {
      resolution = this.stream.width + 'x' + this.stream.height
    }

    this.updateControls()

    let stream = {
      isStreaming: this.stream != null,
      host: this.stream ? this.stream.host : '192.168.2.1',
      port: this.stream ? this.stream.port : 5600,
      resolution: resolution,
    }
    return {
      devicePath: this.devicePath,
      cam: this.cam,
      resolutions: this.resolutions,
      info: this.info,
      options: this.options,
      caps: this.caps,
      deviceIndex: this.deviceIndex,
      stream,
      controls: this.controls,
      name: this.name,
    }
  }

  async setName(name) {
    this.name = name
    await this.deviceManager.settingsManager.updateDeviceNames(this)
  }

  async setDevicePath(devicePath) {
    this.devicePath = devicePath
    this.cam = new v4l2camera.Camera(devicePath)
    // iterate through the formats
    this.resolutions = []
    this.cam.formats.forEach((format) => {
      if (format.formatName == 'MJPG') {
        this.caps.h264 = true
        let resolution = `${format.width}x${format.height}`
        if (!this.resolutions.includes(resolution))
          this.resolutions.push(resolution)
        this.name = this.info.name
      }
    })
    if (this.caps.h264) {
      this.info = await getUdevInfo(devicePath)
      // check if device is compatible with the exploreHD driver
      if (this.info.vid === '0c45' && this.info.pid === '6366') {
        this.caps.driver = true
        this.options = await getDriverOptions(this.devicePath)
      }

      this.controls = []
      for (let control of this.cam.controls) {
        let id = control.id
        this.controls.push({
          name: control.name,
          value: this.cam.controlGet(id),
          type: control.type,
          menu: control.menu,
          min: control.min,
          max: control.max,
          default: control.default,
          id,
        })
      }
    }
  }

  async addStream(
    host,
    port = null,
    flushChanges = true,
    width = undefined,
    height = undefined
  ) {
    this.stream = StreamManager.startStream(
      this.devicePath,
      host,
      port,
      width,
      height
    )

    // emit the stream added event
    this.deviceManager.emit('stream added', this)

    if (flushChanges) this.deviceManager.settingsManager.updateStreams()
  }

  async removeStream(flushChanges = true) {
    StreamManager.stopStream(this.devicePath)
    this.stream = null

    // emit the stream removed event
    this.deviceManager.emit('stream removed', this)

    if (flushChanges) this.deviceManager.settingsManager.updateStreams()
  }

  async restartStream(
    host,
    port = null,
    flushChanges = true,
    width = undefined,
    height = undefined
  ) {
    this.stream = StreamManager.restartStream(
      this.devicePath,
      host,
      port,
      width,
      height
    )

    // emit the stream restart event
    this.deviceManager.emit('stream restarted', this)

    if (flushChanges) this.deviceManager.settingsManager.updateStreams()
  }

  async setDriverOptions(options, flushChanges = true) {
    this.options = options
    await setDriverOptions(this.devicePath, options)

    if (flushChanges)
      await this.deviceManager.settingsManager.updateDeviceOptions(this)
  }

  async setControl(controlID, controlValue, flushChanges = true) {
    try {
      this.cam.controlSet(controlID, controlValue)
      this.updateControls()
    } catch (e) {}
    if (flushChanges) this.deviceManager.settingsManager.updateUVCControls(this)
  }
}

class DeviceManager extends EventEmitter {
  constructor() {
    super()

    this.devices = []
    this.settingsManager = new SettingsManager()
  }

  async resetSettings() {
    await reset()
    await this.settingsManager._initialize()
    this.devices = []
    await this.enumerate(false)
  }

  getExploreHD(deviceIndex = 0) {
    return this.devices.find((device) => device.deviceIndex === deviceIndex)
  }

  getDeviceFromPath(devicePath) {
    return this.devices.find((device) => device.devicePath === devicePath)
  }

  async startMonitoring() {
    // perform initial enumeration
    await this.enumerate(false)
    this.emit('added', this.devices)

    // start monitoring for usb device changes
    usbDetect.startMonitoring()
    usbDetect.on('change', () => setTimeout(() => this.enumerate(), 250)) // the timeout is to ensure Linux can initialize the device properly
  }

  stopMonitoring() {
    usbDetect.stopMonitoring()
  }

  // construct a serializable array of devices
  getSerializableDevices() {
    let devices = []
    for (let device of this.devices) {
      devices.push(device.getSerializable())
    }
    return devices
  }

  async enumerate(emitChanges = true) {
    let devices = []
    let deviceIndex = 0
    // enumerate over the possible devices
    for (let i = 0; i < 64; i++) {
      let device = new Device(this)
      // attempt to set the device path
      try {
        await device.setDevicePath('/dev/video' + i)
      } catch (err) {
        continue
      }
      if (device.caps.h264) {
        if (device.caps.driver) {
          device.deviceIndex = deviceIndex++
          await this.settingsManager.loadDeviceOptions(device)
        }
        devices.push(device)
      }
    }

    devices.sort(
      (a, b) => a.deviceIndex - (b.deviceIndex >= 0 ? b.deviceIndex : Infinity)
    )
    for (let managerIndex in devices) {
      let device = devices[managerIndex]
      device.managerIndex = managerIndex
      await this.settingsManager.loadUVCControls(device)
      await this.settingsManager.loadDeviceName(device)

      let stream = StreamManager.getStream(device.devicePath)
      if (stream) {
        device.stream = stream
      } else {
        this.settingsManager.loadStreamOptions(device)
      }
    }

    // find the removed and added devices
    let removedDevices = this.devices.filter(
      (a) => devices.find((b) => a.devicePath == b.devicePath) == undefined
    )
    let addedDevices = devices.filter(
      (a) => this.devices.find((b) => a.devicePath == b.devicePath) == undefined
    )

    // set the new devices
    this.devices = devices

    // emit the added and removed events
    if (removedDevices.length !== 0 && emitChanges) {
      this.emit('removed', removedDevices)
      for (let device of removedDevices) {
        StreamManager.stopStream(device.devicePath)
      }
    }
    if (addedDevices.length !== 0 && emitChanges) {
      this.emit('added', addedDevices)
    }
  }
}

module.exports = DeviceManager
