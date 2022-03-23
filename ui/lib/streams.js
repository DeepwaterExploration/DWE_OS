const gstreamer = require('gstreamer-superficial');

function buildPipeline(device, host, port) {
    return new gstreamer.Pipeline(
        `v4l2src device=${device} ! video/x-h264, width=1920,height=1080! h264parse ! queue ! rtph264pay config-interval=10 pt=96 ! udpsink host=${host} port=${port} sync=false`
    );
}

class Stream {
    constructor(device, port) {
        this.port = port;
        this.device = device;
        this.pipeline = buildPipeline(device, '127.0.0.1', port);
    }

    rebuildPipeline() {
        this.pipeline = buildPipeline(device, '127.0.0.1', port);
    }

    start() {
        this.pipeline.play();
    }

    stop() {
        this.pipeline.stop();
    }
}

class StreamManager {
    constructor() {
        this.nextPort = 5600;
        this.streams = [];
        this.freePorts = [];
    }

    getNextPort() {
        if (this.freePorts.length !== 0) {
            this.nextPort = this.freePorts.pop();
        } else {
            this.nextPort = 5600 + this.streams.length;
        }
        return this.nextPort;
    }

    addStream(device) {
        let stream = new Stream(device, this.getNextPort());
        console.log(`Created stream for ${device} on port ${stream.port}`);
        this.streams.push(stream);
        return stream;
    }

    startStream(device) {
        let streamIndex = this.streams.findIndex(stream => stream.device === device);
        let stream = null;
        if (streamIndex === -1) {
            stream = this.addStream(device);
        } else {
            stream = this.streams[streamIndex];
        }
        stream.start();
    }

    stopStream(device) {
        let streamIndex = this.streams.findIndex(stream => stream.device === device);
        if (streamIndex === -1) return;
        
        // destroy the found stream
        let stream = this.streams[streamIndex];
        if (stream !== null) {
            stream.stop();
            let freePort = stream.port;
            this.freePorts.push(freePort);
            this.streams.splice(streamIndex, 1);
            console.log(`Deleted stream for ${device} previously running on port ${freePort}`);
        }
    }
}

module.exports = StreamManager;
