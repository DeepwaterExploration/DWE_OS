#!/usr/bin/env node

const express = require('express');
const path = require('path');
const http = require('http');

const { findDevices, DeviceManager } = require('./devices');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 5000;

var deviceManager = new DeviceManager();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

async function init() {
    // initial camera enumeration
    let h264_cameras = await findDevices();
    await deviceManager.initStorage(); // storage must be initialized before enumeration
    await deviceManager.enumerateCameras(h264_cameras);

    // server
    server.listen(port, '0.0.0.0', () => {
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

init();
