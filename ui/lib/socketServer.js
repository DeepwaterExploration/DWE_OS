const { Server } = require('socket.io');

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

        // emitted when a stream is added
        this.deviceManager.on('stream added', (device) => {
            this.io.sockets.emit('stream added', device.getSerializable());
        });

        // emitted when a stream is removed
        this.deviceManager.on('stream removed', (device) => {
            this.io.sockets.emit('stream removed', device.getSerializable());
        });

        // emitted when a stream is restarted
        this.deviceManager.on('stream restarted', (device) => {
            this.io.sockets.emit('stream restarted', device.getSerializable());
        });
    }
}

module.exports = SocketServer;
