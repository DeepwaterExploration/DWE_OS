const express = require('express');
const path = require('path');
const http = require('http');

const { findDevices, DeviceManager } = require('./devices');

const app = express();
const server = http.createServer(app);

var deviceManager = new DeviceManager();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());

async function serve(port=5000, host='0.0.0.0') {
    // initial camera enumeration
    let h264_cameras = await findDevices();
    await deviceManager.initStorage(); // storage must be initialized before enumeration
    await deviceManager.enumerateCameras(h264_cameras);

    // server
    server.listen(port, host, () => {
        console.log(`App listening on port: ${port}`);
    });
}

// API endpoints
app.get('/devices', (req, res) => {
    res.send(deviceManager.devices);
});

app.post('/option', (req, res) => {
    deviceManager.setState(req.body.device, req.body.options).then(() => {
        res.send();
    });
})

// send a friendly page instead of 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

module.exports = serve;
