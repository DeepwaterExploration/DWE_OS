const storage = require('node-persist');
const path = require('path');
const homedir = require('os').homedir();

class SettingsManager {
    constructor() {
        this.streams = null;
        this.driver = null;
        this.initialized = false;
    }

    async _initialize() {
        await storage.init({
            dir: path.join(homedir, '/.dwe/driver')
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

    async updateDevice(device) {
        if (!this.initialized) await this._initialize();

        // update the stored driver settings
        if (device.deviceIndex >= this.driver.length) {
            this.driver.push(device.options.driver);
        } else {
            this.driver[device.deviceIndex] = device.options.driver;
        }

        // update the stored stream settings
        if (device.deviceIndex >= this.streams.length) {
            this.streams.push(device.options.streaming);
        } else {
            this.streams[device.deviceIndex] = device.options.streaming;
        }

        await this.flushSettings();
    }

    async flushSettings() {
        await storage.setItem('settings', { driver: this.driver, streams: this.streams });
    }

    async loadDevice(device) {
        if (!this.initialized) await this._initialize();

        if (device.deviceIndex >= this.driver.length) {
            this.driver.push(device.options.driver);
        } else {
            await device.setDriverOptions(this.driver[device.deviceIndex], false);
        }

        if (device.deviceIndex >= this.streams.length) {
            this.streams.push(device.options.streaming);
        } else {
            await device.setStreamingOptions(this.streams[device.deviceIndex], false);
        }

        await this.flushSettings();
    }
}

module.exports = SettingsManager;
