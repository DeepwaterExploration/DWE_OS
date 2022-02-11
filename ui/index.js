const express = require('express');
const path = require('path');
const app = express();

const { findDevices } = require('./devices');

app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoints
app.get('/devices', (req, res) => {
    findDevices().then((exploreHD_cameras) => {
        let devices = [];
        for (let cam of exploreHD_cameras) {
            devices.push(cam.device);
        }
        res.send({
            devices
        });
    });
});

// send a friendly page instead of 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
