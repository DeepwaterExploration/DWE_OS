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

// API endpoints
app.get('/devices', (req, res) => {
    res.send(deviceManager.getSerializableDevices());
});

app.post('/options', async (req, res) => {
    let device = deviceManager.getDeviceFromPath(req.body.devicePath);
    await device.setDriverOptions(req.body.options);
    res.send();
});

app.post('/addStream', async (req, res) => {
    let device = deviceManager.getDeviceFromPath(req.body.devicePath);
    await device.addStream(req.body.stream.hostAddress);
    res.send({
        port: device.stream.port
    });
});

app.post('/removeStream', async (req, res) => {
    let device = deviceManager.getDeviceFromPath(req.body.devicePath);
    await device.removeStream();
    res.send();
});

app.post('/restartStream', async (req, res) => {
    let device = deviceManager.getDeviceFromPath(req.body.devicePath);
    await device.restartStream(req.body.stream.hostAddress, req.body.stream.port);
    res.send({
        port: device.stream.port
    });
});

app.post('/resetSettings', async (req, res) => {
    console.log('Resetting settings');
    StreamManager.resetAll();
    await deviceManager.resetSettings();
    res.send();
});

// send a friendly page instead of 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// server
async function serve(port=5000, host='0.0.0.0') {
    // device manager events
    await deviceManager.startMonitoring();

    // server
    server.listen(port, host, () => {
        console.log(`App listening on port: ${port}`);
    });
}

module.exports = serve;
