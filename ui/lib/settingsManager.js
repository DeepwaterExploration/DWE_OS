const storage = require('node-persist');
const path = require('path');
const StreamManager = require('./streamManager');
const homedir = require('os').homedir();

class SettingsManager {
    constructor() {
        this.streams = [];
        this.driver = [];
        this.initialized = false;
    }

    async _initialize() {
        await storage.init({
            dir: path.join(homedir, '/.dwe/controls')
        });
        let settings = await storage.getItem('settings');
        if (!settings) {
            settings = { driver: [ ], streams: [ ] }
            await storage.setItem('settings', settings);
        }
        this.streams = settings.streams;
        this.driver = settings.driver;
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

    async flushSettings() {
        await storage.setItem('settings', { driver: this.driver, streams: this.streams });
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

    async loadStreamOptions(device) {
        if (!this.initialized) await this._initialize();

        if (device.managerIndex < this.streams.length) {
            let { host, port, width, height } = this.streams[device.managerIndex];
            await device.addStream(host, port, false, width, height);
        }
    }

    async updateStreams() {
        if (!this.initialized) await this._initialize();
        this.streams = StreamManager.serializeStreams();
        await this.flushSettings();
    }
}

module.exports = SettingsManager;
