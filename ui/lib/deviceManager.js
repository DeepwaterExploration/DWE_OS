const EventEmitter = require('events');
const usbDetect = require('usb-detection');
const v4l2camera = require("v4l2camera-pr48");
const SettingsManager = require('./settingsManager');
const { getDriverOptions, setDriverOptions } = require('./utils/driver');
const getUdevInfo = require('./utils/udev');

class Device {
    constructor(deviceManager) {
        this.deviceIndex = -1;
        this.devicePath = null;
        this.cam = null;
        this.info = { };
        this.options = {
            driver: null,
            streaming: {
                udp: false,
                hostAddress: '192.168.2.1'
            }
        };
        this.caps = {
            h264: false,
            driver: false
        };
        this.deviceManager = deviceManager;
    }

    getSerializable() {
        return {
            devicePath: this.devicePath,
            cam: this.cam,
            info: this.info,
            options: this.options,
            caps: this.caps,
            deviceIndex: this.deviceIndex
        };
    }

    async setDevicePath(devicePath) {
        this.devicePath = devicePath;
        this.cam = new v4l2camera.Camera(devicePath);
        // iterate through the formats
        this.cam.formats.forEach(format => {
            if (format.formatName == 'H264') {
                this.caps.h264 = true;
            }
        });
        if (this.caps.h264) {
            this.info = await getUdevInfo(devicePath);
            // check if device is compatible with the exploreHD driver
            if (this.info.vid === '0c45' && this.info.pid === '6366') {
                this.caps.driver = true;
                this.options.driver = await getDriverOptions(this.devicePath);
            }
        }
    }

    async setDriverOptions(options, flushChanges=true) {
        this.options.driver = options;
        await setDriverOptions(this.devicePath, options);

        if (flushChanges) await this.deviceManager.settingsManager.updateDevice(this);
    }

    async setStreamingOptions(options, flushChanges=true) {
        let { udp, hostAddress, restartStream } = options;
        this.options.streaming.hostAddress = hostAddress;
        if (udp !== this.options.streaming.udp) {
            this.options.streaming.udp = udp;
            this.deviceManager.emit('streamChange', this);
        }
        if (restartStream) {
            this.deviceManager.emit('restartStream', this);
        }

        if (flushChanges) await this.deviceManager.settingsManager.updateDevice(this);
    }
}

class DeviceManager extends EventEmitter {
    constructor() {
        super();

        this.devices = [];
        this.settingsManager = new SettingsManager();
    }

    getDeviceFromPath(devicePath) {
        return this.devices.find(device => device.devicePath === devicePath);
    }

    async startMonitoring() {
        // perform initial enumeration
        await this.enumerate(false);
        this.emit('added', this.devices);

        // start monitoring for usb device changes
        usbDetect.startMonitoring();
        usbDetect.on('change', () => setTimeout(() => this.enumerate(), 250)); // the timeout is to ensure Linux can initialize the device properly
    }

    async setDeviceOptions(devicePath, options) {
        let device = this.getDeviceFromPath(devicePath);
        if (!device) return;

        // driver options
        if (device.caps.driver) {
            let { gop, cvm, bitrate } = options;
            await device.setDriverOptions({ gop, cvm, bitrate });
        }

        // streaming options
        let { udp, hostAddress, restartStream } = options;
        await device.setStreamingOptions({ udp, hostAddress, restartStream });
    }

    // construct a serializable array of devices
    getSerializableDevices() {
        let devices = [];
        for (let device of this.devices) {
            devices.push(device.getSerializable());
        }
        return devices;
    }

    async enumerate(emitChanges=true) {
        let devices = [];
        let deviceIndex = 0;
        // enumerate over the possible devices
        for (let i = 0; i < 64; i++) {
            let device = new Device(this);
            // attempt to set the device path
            try { await device.setDevicePath('/dev/video' + i); }
            catch (err) { continue; }
            if (device.caps.h264) {
                devices.push(device);
                if (device.caps.driver) {
                    device.deviceIndex = deviceIndex++;
                    await this.settingsManager.loadDevice(device);
                }
            }
        }

        // find the removed and added devices
        let removedDevices = this.devices.filter(a => devices.find(b => a.devicePath == b.devicePath) == undefined);
        let addedDevices = devices.filter(a => this.devices.find(b => a.devicePath == b.devicePath) == undefined);

        // set the new devices
        this.devices = devices;

        // emit the added and removed events
        if (removedDevices.length !== 0 && emitChanges) this.emit('removed', removedDevices);
        if (addedDevices.length !== 0 && emitChanges) this.emit('added', addedDevices);
    }
}

module.exports = DeviceManager;
