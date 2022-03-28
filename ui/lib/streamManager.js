const gstreamer = require('gstreamer-superficial');

function buildPipeline(device, host, port) {
    // construct the gstreamer streaming pipeline
    // TODO: support for width and height variability
    return new gstreamer.Pipeline(
        `v4l2src device=${device} ! video/x-h264, width=1920,height=1080! h264parse ! queue ! rtph264pay config-interval=10 pt=96 ! udpsink host=${host} port=${port} sync=false`
    );
}

// simple abstraction representing a gstreamer stream
class Stream {
    constructor(device, port, host) {
        this.port = port;
        this.device = device;
        this.host = host;
        this.rebuildPipeline();
    }

    rebuildPipeline() {
        this.pipeline = buildPipeline(this.device, this.host, this.port);
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
        // if there is an additional free port, utilize that
        // otherwise, offset from the current stream length
        if (this.freePorts.length !== 0) {
            this.nextPort = this.freePorts.pop();
        } else {
            this.nextPort = 5600 + this.streams.length;
        }
        return this.nextPort;
    }

    restartStream(device, host) {
        this.stopStream(device);
        this.startStream(device, host);
    }

    addStream(device, host) {
        // create stream using the specified host and device while computing the port
        let stream = new Stream(device, this.getNextPort(), host);
        console.log(`Created stream for ${device} on port ${stream.port} to ${host}`);
        this.streams.push(stream);
        return stream;
    }

    findStreamIndex(device) {
        return this.streams.findIndex(stream => stream.device === device);
    }

    startStream(device, host) {
        // find the index of the stream with the specified device
        let streamIndex = this.findStreamIndex(device);
        let stream = null;
        // if the stream cannot be found, create one
        if (streamIndex === -1) {
            stream = this.addStream(device, host);
        } else {
            stream = this.streams[streamIndex];
        }
        stream.start();
    }

    stopStream(device) {
        let streamIndex = this.findStreamIndex(device);
        if (streamIndex === -1) return;
        
        // destroy the found stream
        let stream = this.streams[streamIndex];
        if (stream !== null) {
            stream.stop();
            let freePort = stream.port;
            this.freePorts.push(freePort);
            this.streams.splice(streamIndex, 1);
            console.log(`Deleted stream for ${device} previously running on port ${freePort}`);
        } else {
            throw new Error(`The specified stream from '${device}' cannot be found!`);
        }
    }
}

module.exports = StreamManager;
