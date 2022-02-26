const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const { findDevices } = require('./devices');
const { setOption, getOption } = require('./driver');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

// async function to ensure the driver is not invoked more than once at the same time
async function exploreHDCamera(device) {
    let options = ['gop', 'cvm', 'bitrate'];
    let values = [];
    for (let option of options) {
        values.push(await getOption(device, option));
    }
    let result = { };
    result.device = device;
    result.options = { };

    values.forEach(obj => {
        let output = obj.output;
        let name = output.name;
        let value = output.value;
        result.options[name] = value;
    });
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
    for (let option of Object.keys(options)) {
        let arg = optionMap[option];
        await setOption(device, arg, options[option].toString());
    }
}

// API endpoints
// TODO: make devices sent over socket
app.get('/devices', (req, res) => {
    findDevices().then((exploreHD_cameras) => {
        let devices = [];
        let promises = [];
        for (let cam of exploreHD_cameras) {
            promises.push(exploreHDCamera(cam.device).then((result) => {
                devices.push(result);
            }));
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

// socket.io
io.on('connection', (socket) => {
    console.log('socket connected');
    socket.on('disconnect', () => {
        console.log('socket disconnected');
    });
    socket.on('set-value', (data) => {
        console.log(data);
    })
});

// send a friendly page instead of 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
server.listen(port, '0.0.0.0', () => {
    console.log(`App listening on port: ${port}`);
});
