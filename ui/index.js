#!/usr/bin/env node

const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);

const { findDevices } = require('./devices');
const { setOption, getOption } = require('./driver');

const storage = require('node-persist');
const homedir = require('os').homedir();
const port = process.env.PORT || 5000;

var settings = { };

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

async function init() {
    await storage.init({
        dir: path.join(homedir, '/.dwe/driver')
    });
    settings = await storage.getItem('settings') || await storage.setItem('settings', []);
    let h264_cameras = await findDevices();
    let index = 0;
    for (let cam of h264_cameras) {
        if (cam.info.vid === '0c45' && cam.info.pid === '6366') { // DO NOT REMOVE: Could result in issues with unsupported cameras
            if (settings[index])
                setDeviceState({ device: cam.device, index: index, options: settings[index] });
            else break
            index++;
            if (index >= settings.length) break;
        }
    }
    server.listen(port, '0.0.0.0', () => {
        console.log(`App listening on port: ${port}`);
    });
}

async function updateSettings(index, options) {
    try {
        settings[index] = options;
    } catch {
        settings.push(options);
    }
    await storage.setItem('settings', settings);
}

// async function to ensure the driver is not invoked more than once at the same time
async function exploreHDCamera(device, index) {
    let options = ['gop', 'cvm', 'bitrate'];
    let values = [];
    for (let option of options) {
        values.push(await getOption(device, option));
    }
    let result = { };
    result.device = device;
    result.index = index;
    result.options = { };
    values.forEach(obj => {
        let output = obj.output;
        let name = output.name;
        let value = output.value;
        result.options[name] = value;
    });
    // Update settings
    updateSettings(index, result.options);
    return result;
}

async function setDeviceState(deviceState) {
    const optionMap = {
        'GOP': 'gop', 
        'MODE': 'cvm',
        'BITRATE': 'bitrate'
    };
    let device = deviceState.device;
    let options = deviceState.options;
    // Update settings
    updateSettings(deviceState.index, options);
    for (let option of Object.keys(options)) {
        let arg = optionMap[option];
        await setOption(device, arg, options[option].toString());
    }
}

// API endpoints
// TODO: make devices sent over socket
app.get('/devices', (req, res) => {
    findDevices().then((h264_cameras) => {
        let devices = [];
        let promises = [];
        let index = 0;
        for (let cam of h264_cameras) {
            if (cam.info.vid === '0c45' && cam.info.pid === '6366') { // DO NOT REMOVE: Could result in issues with unsupported cameras
                promises.push(exploreHDCamera(cam.device, index).then((result) => {
                    devices.push({
                        options: result.options, 
                        driverCompatible: true, 
                        cam_info: cam.info, 
                        device: cam.device, 
                        index: index++
                    });
                }));
            } else {
                devices.push({
                    driverCompatible: false, 
                    cam_info: cam.info, 
                    device: cam.device
                })
            }
        }
        Promise.all(promises).then(() => {
            res.send({
                devices
            });
        })
    });
});

app.post('/option', (req, res) => {
    setDeviceState(req.body).then(() => {
        res.sendStatus(200);
    });
})

// send a friendly page instead of 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

init();
