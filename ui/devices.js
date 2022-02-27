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


function hexDecode(str_enc) {
    return str_enc.replace(/\\x20/g, ' ');
}

const NAME_LUT = {
    '0c45/6366': 'DWE', 
    '32e4/9422': 'ELP'
};

const MODEL_LUT = {
    '0c45/6366': 'DWE-EHDUSBR2', 
    '32e4/9422': 'ELP-USBFHD06H'
}

function updateName(name, vid, pid) {
    let vid_pid = `${vid}/${pid}`;
    if (!NAME_LUT[vid_pid]) return name;
    return `${NAME_LUT[vid_pid]}: ${name}`;
}

function getModelNum(vid, pid) {
    let vid_pid = `${vid}/${pid}`;
    return MODEL_LUT[vid_pid] || undefined;
}

function findDevices() {
    return new Promise((resolve, reject) => {
        let h264_cameras = []
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
                        let name = hexDecode(info.ID_MODEL_ENC);
                        h264_cameras.push({
                            info: {
                                vid: vid, 
                                pid: pid, 
                                name: updateName(name, vid, pid), 
                                model: getModelNum(vid, pid)
                            }, 
                            device: cam.device
                        });
                    }));
                }
            } catch (err) { // error due to camera not found; continue
                continue;
            }
        }
        // resolve once all promises are resolved
        Promise.all(promises).then(() => resolve(h264_cameras));
    });
}

module.exports.findDevices = findDevices;
