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

function exploreHDCamera(device) {
    this.device = device;
    this.options = { };
    let options = ['gop', 'cvm', 'bitrate'];
    let promises = [];
    for (let option of options) {
        promises.push(getOption(device, option));
    }
    Promise.all(promises).then((values) => {
        values.forEach(obj => {
            let output = obj.output;
            let name = output.name;
            let value = output.value;
            this.options[name] = value;
        });
    })
}

// API endpoints
app.get('/devices', (req, res) => {
    findDevices().then((exploreHD_cameras) => {
        let devices = [];
        for (let cam of exploreHD_cameras) {
            devices.push(new exploreHDCamera(cam.device));
        }
        res.send({
            devices
        });
    });
});

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
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
