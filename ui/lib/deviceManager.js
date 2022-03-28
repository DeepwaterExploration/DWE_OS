const EventEmitter = require('events');
const usbDetect = require('usb-detection');
const v4l2camera = require("v4l2camera-pr48");
const { getDriverOptions, setDriverOptions } = require('./utils/driver');
const getUdevInfo = require('./utils/udev');

class Device {
    constructor() {
        this.devicePath = null;
        this.cam = null;
        this.info = { };
        this.options = {
            driver: null,
            streaming: {
                udp: false,
                host: '192.168.2.1'
            }
        };
        this.caps = {
            h264: false,
            driver: false
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
}

class DeviceManager extends EventEmitter {
    constructor() {
        super();
        this.devices = [];
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
            device.options.driver = { gop, cvm, bitrate };
            await setDriverOptions(devicePath, device.options.driver);
        }

        // streaming options
        let { streaming, hostAddress, restartStream } = options;
        device.options.streaming.host = hostAddress;
        if (streaming !== device.options.streaming.udp) {
            device.options.streaming.udp = streaming;
            this.emit('streamChange', device);
        }
        if (restartStream) {
            this.emit('restartStream', device);
        }
    }

    async enumerate(emitChanges=true) {
        let devices = [];
        // enumerate over the possible devices
        for (let i = 0; i < 64; i++) {
            let device = new Device();
            // attempt to set the device path
            try { await device.setDevicePath('/dev/video' + i); }
            catch (err) { continue; }
            if (device.caps.h264) devices.push(device);
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
