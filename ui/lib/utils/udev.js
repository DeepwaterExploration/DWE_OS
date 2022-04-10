const { execFile } = require('child_process');

function getUdevOptions(device) {
    return new Promise((resolve, reject) => {
        execFile('udevadm', ['info', device], (error, stdout, stderr) => {
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
    '0c45/6366': 'DeepWater Exploration Inc.', 
    '32e4/9422': 'Shenzhen Ailipu Technology Co., Ltd', 
    '05a3/9422': 'Shenzhen Ailipu Technology Co., Ltd', 
    '0c45/ae11': 'ArduCam'
};

const MODEL_LUT = {
    '0c45/6366': 'DWE-EHDUSBR2', 
    '32e4/9422': 'ELP-USBFHD06H', 
    '05a3/9422': 'ELP-USBFHD06H', 
    '0c45/ae11': 'UB0212'
}

function getManufacturerName(vid, pid) {
    let vid_pid = `${vid}/${pid}`;
    return NAME_LUT[vid_pid] || undefined;
}

function getModelNum(vid, pid) {
    let vid_pid = `${vid}/${pid}`;
    return MODEL_LUT[vid_pid] || undefined;
}

async function getUdevInfo(device) {
    let info = await getUdevOptions(device);
    let vid = info.ID_VENDOR_ID;
    let pid = info.ID_MODEL_ID;
    let name = hexDecode(info.ID_MODEL_ENC);
    return {
        vid, pid, name,
        manufacturer: getManufacturerName(vid, pid),
        model: getModelNum(vid, pid)
    };
}

module.exports = getUdevInfo;
