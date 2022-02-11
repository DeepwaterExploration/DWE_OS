const { exec } = require('child_process');
const v4l2camera = require("v4l2camera-pr48");

function getUdevOptions(device) {
    return new Promise((resolve, reject) => {
        exec(`udevadm info ${device}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                reject(error);
            }
    
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                reject(stderr);
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
            resolve(info);
        });
    })
}

function findDevices() {
    return new Promise((resolve, reject) => {
        // exploreHD device
        let exploreHD_cameras = [];
        let promises = [];
        for (let i = 0; i < 64; i++) {
            try {
                let cam = new v4l2camera.Camera('/dev/video' + i);
                let h264Support = false;
                cam.formats.forEach((format) => {
                    if (format.formatName == 'H264') {
                        h264Support = true;
                    }
                });
                if (h264Support) {
                    // TODO: fallback for failed udev
                    promises.push(getUdevOptions(cam.device).then((info) => {
                        let vid = info.ID_VENDOR_ID;
                        let pid = info.ID_MODEL_ID;
                        // check vid/pid for exploreHD
                        if (vid === '0c45' && pid === '6366') { // DO NOT REMOVE: Could result in issues with unsupported cameras
                            exploreHD_cameras.push(cam);
                            // console.log(`Found exploreHD: ${cam.device}`);
                        }
                    }));
                }
            } catch (err) { // error due to camera not found; continue
                continue;
            }
        }
        // resolve once all promises are resolved
        Promise.all(promises).then(() => resolve(exploreHD_cameras));
    });
}

module.exports.findDevices = findDevices;
