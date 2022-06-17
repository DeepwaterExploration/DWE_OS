const { Server } = require('socket.io');
const StreamManager = require('./streamManager');

class SocketServer {
    constructor(server, deviceManager) {
        this.io = new Server(server);
        this.deviceManager = deviceManager;
    }

    constructEvents() {
        // emitted when a device is added
        this.deviceManager.on('added', (addedDevices) => {
            let serializableAddedDevices = [];
            for (let device of addedDevices) {
                serializableAddedDevices.push(device.getSerializable());
            }
            this.io.sockets.emit('added', serializableAddedDevices);
        });

        // emitted when a device is removed
        this.deviceManager.on('removed', (removedDevices) => {
            let serializableRemovedDevices = [];
            for (let device of removedDevices) {
                serializableRemovedDevices.push(device.getSerializable());
            }
            this.io.sockets.emit('removed', serializableRemovedDevices);
        });

        // update options
        this.io.on('set options', (devicePath, options) => {
            let device = this.deviceManager.getDeviceFromPath(devicePath);
            device.setDriverOptions(device, options);
        });

        // create a stream
        this.io.on('add stream', async (devicePath, hostAddress, callback) => {
            let device = this.deviceManager.getDeviceFromPath(devicePath);
            await device.addStream(hostAddress);
            callback(device.stream.port);
        });

        // remove a stream
        this.io.on('remove stream', async (devicePath) => {
            let device = this.deviceManager.getDeviceFromPath(devicePath);
            await device.removeStream();
        });

        // restart a stream
        this.io.on('restart stream', async (devicePath, hostAddress, port, callback) => {
            let device = this.deviceManager.getDeviceFromPath(devicePath);
            await device.restartStream(hostAddress, port);
            callback(port);
        });
        
        // reset the settings
        this.io.on('reset settings', async () => {
            StreamManager.resetAll();
            await this.deviceManager.resetSettings();
        });
    }
}

module.exports = SocketServer;
