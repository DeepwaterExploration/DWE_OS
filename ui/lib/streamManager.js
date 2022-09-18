const gstreamer = require('gstreamer-superficial');

function buildPipeline(device, host, port, width=1920, height=1080) {
    // construct the gstreamer streaming pipeline
    // TODO: support for width and height variability
    return new gstreamer.Pipeline(
        `v4l2src device=${device} ! video/x-h264, width=${width},height=${height}! h264parse ! queue ! rtph264pay config-interval=10 pt=96 ! udpsink host=${host} port=${port} sync=false`
    );
}

// simple abstraction representing a gstreamer stream
class Stream {
    constructor(device, host, port, width=1920, height=1080) {
        this.device = device;
        this.host = host;
        this.port = port;
        this.width = width;
        this.height = height;

        this.usingPortSuggestion = false;
        this.rebuildPipeline();
    }

    rebuildPipeline() {
        this.pipeline = buildPipeline(this.device, this.host, parseInt(this.port), this.width, this.height);
    }

    start() {
        this.pipeline.play();
    }

    stop() {
        this.pipeline.stop();
    }

    getSerializable() {
        return {
            device: this.device, host: this.host
        };
    }
}

class StreamManager {
    static nextPort = 5600;
    static streams = [];
    static freePorts = [];

    static getNextPort() {
        // if there is an additional free port, utilize that
        // otherwise, offset from the current stream length
        if (this.freePorts.length !== 0) {
            this.nextPort = this.freePorts.pop();
        } else {
            this.nextPort = 5600 + this.streams.length;
        }
        return this.nextPort;
    }

    static resetAll() {
        this.nextPort = 5600;
        // stop all streams
        for (let stream of this.streams) {
            stream.stop();
        }
        this.streams = [];
        this.freePorts = [];
    }

    static restartStream(device, host, port) {
        this.stopStream(device);
        
        return this.startStream(device, host, port);
    }

    static serializeStreams() {
        let result = [];
        for (let stream of this.streams) {
            let serialized = {
                host: stream.host
            };
            if (stream.usingPortSuggestion) serialized.port = stream.port;
            result.push(serialized);
        }
        return result;
    }

    static addStream(device, host) {
        // create stream using the specified host and device while computing the port
        let stream = new Stream(device, host, this.getNextPort());
        console.log(`Created stream for ${device} on port ${stream.port} to ${host}`);
        this.streams.push(stream);
        return stream;
    }

    static findStreamIndex(device) {
        return this.streams.findIndex(stream => stream.device === device);
    }

    static getStream(device) {
        return this.streams.find(stream => stream.device === device);
    }

    static startStream(device, host, port=null) {
        // find the index of the stream with the specified device
        let streamIndex = this.findStreamIndex(device);
        let stream = null;
        let usingPortSuggestion = false;
        
        if (port != null) {
            if (this.streams.find((stream) => stream.port == port) == undefined) {
                this.freePorts.push(port); // suggest the port
                usingPortSuggestion = true;
            } else {
                console.log('Port suggestion is in use, using last used port instead.');
            }
        }

        // if the stream cannot be found, create one
        if (streamIndex === -1) {
            stream = this.addStream(device, host);
        } else {
            stream = this.streams[streamIndex];
        }
        stream.start();
        stream.usingPortSuggestion = usingPortSuggestion;
        return stream;
    }

    static stopStream(device) {
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
