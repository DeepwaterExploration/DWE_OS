const express = require('express');
const path = require('path');
const http = require('http');

const DeviceManager = require('./deviceManager');
const StreamManager = require('./streamManager');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());

var deviceManager = new DeviceManager();
var streamManager = new StreamManager();

// API endpoints
app.get('/devices', (req, res) => {
    res.send(deviceManager.getSerializableDevices());
});

app.post('/option', (req, res) => {
    deviceManager.setDeviceOptions(req.body.device.devicePath, req.body.options).then(() => {
        res.send();
    });
});

// send a friendly page instead of 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// server
async function serve(port=5000, host='0.0.0.0') {
    // device manager events
    deviceManager.on('added', (addedDevices) => {
        addedDevices.forEach(device => {
            if (device.options.streaming.udp) {
                streamManager.startStream(device.devicePath, device.options.streaming.hostAddress);
            }
        });
    });
    deviceManager.on('removed', (removedDevices) => {
        removedDevices.forEach(device => {
            try { streamManager.stopStream(device.devicePath); }
            catch { } // no stream exists for device
        });
    });
    deviceManager.on('streamChange', (device) => {
        if (device.options.streaming.udp) {
            streamManager.startStream(device.devicePath, device.options.streaming.hostAddress);
        } else {
            streamManager.stopStream(device.devicePath);
        }
    });
    deviceManager.on('restartStream', (device) => {
        try { streamManager.restartStream(device.devicePath, device.options.streaming.hostAddress); }
        catch { } // do not restart if there is no stream
    })
    await deviceManager.startMonitoring();

    // server
    server.listen(port, host, () => {
        console.log(`App listening on port: ${port}`);
    });
}

module.exports = serve;
