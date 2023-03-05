const storage = require('node-persist');
const path = require('path');
const StreamManager = require('./streamManager');
const homedir = require('os').homedir();

class SettingsManager {
    constructor() {
        this.streams = [];
        this.driver = [];
        this.deviceNames = [];
        this.uvcControls = [];
        this.initialized = false;
        this.isFlushing = false;
    }

    async _initialize() {
        await storage.init({
            dir: path.join(homedir, '/.dwe/controls')
        });
        let settings = await storage.getItem('settings');
        if (!settings) {
            settings = { driver: [ ], streams: [ ], uvcControls: [] }
            await storage.setItem('settings', settings);
        }
        this.streams = settings.streams || [];
        this.driver = settings.driver || [];
        this.uvcControls = settings.uvcControls || [];
        this.deviceNames = settings.deviceNames || [];
        this.initialized = true;
    }

    async updateDeviceOptions(device) {
        if (!this.initialized) await this._initialize();

        // update the stored driver settings
        if (device.deviceIndex >= this.driver.length) {
            this.driver.push(device.options);
        } else {
            this.driver[device.deviceIndex] = device.options;
        }

        await this.flushSettings();
    }

    async updateUVCControls(device) {
        if (!this.initialized) await this._initialize();

        // update the stored driver settings
        if (device.managerIndex >= this.uvcControls.length) {
            this.uvcControls.push(device.controls);
        } else {
            this.uvcControls[device.managerIndex] = device.controls;
        }

        await this.flushSettings();
    }

    async updateDeviceNames(device) {
        if (!this.initialized) await this._initialize();

        // update the stored driver settings
        if (device.managerIndex >= this.deviceNames.length) {
            this.deviceNames.push(device.name);
        } else {
            this.deviceNames[device.managerIndex] = device.name;
        }

        await this.flushSettings();
    }

    async flushSettings() {
        if (!this.isFlushing) {
            this.isFlushing = true;
            await storage.setItem('settings', { driver: this.driver, streams: this.streams, uvcControls: this.uvcControls, deviceNames: this.deviceNames });
            this.isFlushing = false;
        } else {
            setTimeout(async () => {
                await this.flushSettings();
            }, 25);
        }
    }

    async loadDeviceOptions(device) {
        if (!this.initialized) await this._initialize();

        if (device.deviceIndex >= this.driver.length) {
            this.driver.push(device.options);
        } else {
            await device.setDriverOptions(this.driver[device.deviceIndex], false);
        }

        await this.flushSettings();
    }

    async loadUVCControls(device) {
        if (!this.initialized) await this._initialize();
     
        if (device.managerIndex < this.uvcControls.length) {
            for (let control of this.uvcControls[device.managerIndex]) {
                device.setControl(control.id, control.value, false);
            }
        }
    }

    async loadStreamOptions(device) {
        if (!this.initialized) await this._initialize();

        if (device.managerIndex < this.streams.length) {
            let { host, port, width, height } = this.streams[device.managerIndex];
            await device.addStream(host, port, false, width, height);
        }
    }

    async loadDeviceName(device) {
        if (!this.initialized) await this._initialize();

        if (device.managerIndex < this.deviceNames.length) {
            device.name = this.deviceNames[device.managerIndex];
        }
    }

    async updateStreams() {
        if (!this.initialized) await this._initialize();
        this.streams = StreamManager.serializeStreams();
        await this.flushSettings();
    }
}

module.exports = SettingsManager;
