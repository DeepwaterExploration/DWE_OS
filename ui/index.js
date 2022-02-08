const express = require('express');
const path = require('path');
const app = express();

const { exec } = require('child_process');
const v4l2camera = require("v4l2camera-pr48");

function getUdevOptions(device, onResult) {
    exec(`udevadm info ${device}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        /*
        P: /devices...
        N: video*
        L: 0
        S: v4l...
        S: v4l...
        E: ...
        */
        let lines = stdout.split('\n');
        let info = { };

        // FIXME: hacky way of parsing the data from udev
        // TODO: switch from subprocess to proper libudev
        for (let line of lines) {
            if (line.startsWith('E: ')) {
                line = line.split('E: ');
                let data = line[1].split('=');
                let name = data[0];
                let value = data[1];
                info[name] = value;
            }
        }
        onResult(info);
    });
}

// h264 cameras
var h264Cameras = [];
for (let i = 0; ; i++) {
    try {
        var cam = new v4l2camera.Camera('/dev/video' + i);
        var h264Support = false;
        cam.formats.forEach((format) => {
            if (format.formatName == 'H264') {
                h264Support = true;
            }
        });
        if (h264Support)
            h264Cameras.push(cam)
    } catch (err) { // error due to camera not found; finished enumerating
        break;
    }
}

// iterate through all h264 cameras
var exploreHD_cameras = [];
h264Cameras.forEach((cam) => {
    // TODO: fallback for failed udev
    getUdevOptions(cam.device, (info) => {
        let vid = info.ID_VENDOR_ID;
        let pid = info.ID_MODEL_ID;
        // check vid/pid for exploreHD
        if (vid === '0c45' && pid === '6366') {
            exploreHD_cameras.push(cam);
            console.log(`Found exploreHD: ${cam.device}`);
        }
    });
});

app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoints
app.get('/devices', (req, res) => {
    res.send({
        devices: exploreHD_cameras
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
