const { execFile } = require('child_process');
const v4l2camera = require("v4l2camera-pr48");
const { getOption, setOption } = require('./driver');
const storage = require('node-persist');
const path = require('path');
const StreamManager = require('./streams');
const homedir = require('os').homedir();

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
    '0c45/ae11': 'ArduCam'
};

const MODEL_LUT = {
    '0c45/6366': 'DWE-EHDUSBR2', 
    '32e4/9422': 'ELP-USBFHD06H', 
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

async function findDevices() {
    let h264_cameras = [];
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
                let info = await getUdevOptions(cam.device);
                let vid = info.ID_VENDOR_ID;
                let pid = info.ID_MODEL_ID;
                let name = hexDecode(info.ID_MODEL_ENC);
                h264_cameras.push({
                    info: {
                        vid: vid, 
                        pid: pid, 
                        name: name, 
                        manufacturer: getManufacturerName(vid, pid), 
                        model: getModelNum(vid, pid)
                    }, 
                    device: cam.device
                });
            }
        } catch (err) { // error due to camera not found; continue
            continue;
        }
    }
    return h264_cameras;
}

async function getOptions(device) {
    let optionNames = ['gop', 'cvm', 'bitrate'];
    let options = { streaming: false, hostAddress: '192.168.2.1' };
    for (let name of optionNames) {
        let value = await getOption(device, name);
        options[name] = value.output.value;
    }
    return options;
}

class DeviceManager {
    constructor() {
        this.devices = [];
        this.settings = [];
        this.streamManager = new StreamManager();
        this.streams = [];
    }

    loadSettings(settings) {
        // expect settings to be an array of options containing only compatible cameras
        for (let i in settings) {
            let result = this.getDeviceFromIndex(i);
            if (!result) break; // out of compatible cameras to enumerate
            let device = result.device;
            this.setState(device.cam.device, settings[i]);
        }
    }

    async initStorage() {
        await storage.init({
            dir: path.join(homedir, '/.dwe/driver')
        });
        this.settings = await storage.getItem('settings');
        if (!this.settings) {
            this.settings = [];
            await storage.setItem('settings', this.settings);
        }
    }

    getDeviceFromIndex(index) {
        let i = 0;
        let j = 0;
        for (let device of this.devices) {
            if (device.driverCompatible) {
                if (i == index) {
                    return { deviceIndex: i, index: j, device };
                }
                i++;
            }
            j++;
        }
        return null; // no compatible devices
    }

    getDeviceFromPath(devicePath) {
        let j = 0;
        let i = 0;
        for (let device of this.devices) {
            if (device.driverCompatible) {
                if (device.cam.device == devicePath) {
                    return { deviceIndex: i, index: j, device };
                }
                i++;
            }
            j++;
        }
        return null; // no compatible devices
    }

    async setState(device, options) {
        let optionNames = ['gop', 'cvm', 'bitrate'];
        let result = this.getDeviceFromPath(device);
        let index = result.deviceIndex;
        for (let name of optionNames) {
            let value = options[name];
            if (this.devices[result.index].options[name] === value) continue;
            await this.setOption(index, name, value);
        }

        if ('hostAddress' in options) {
            let hostAddress = options['hostAddress'];
            if (hostAddress !== this.devices[result.index].options['hostAddress']) {
                this.updateSetting(index, result.index, 'hostAddress', hostAddress);
            }
        }

        if ('restartStream' in options) {
            let restartStream = options['restartStream'];
            if (restartStream) {
                this.streamManager.stopStream(device);
                this.streamManager.startStream(device, this.devices[result.index].options['hostAddress']);
            }
        }

        if ('streaming' in options) {
            let streaming = options['streaming'];
            if (streaming !== this.devices[result.index].options['streaming']) {
                this.updateSetting(index, result.index, 'streaming', options['streaming']);
                if (streaming) {
                    this.streamManager.startStream(device, this.devices[result.index].options['hostAddress']);
                } else {
                    this.streamManager.stopStream(device);
                }
            }
        }
    }

    updateSetting(deviceIndex, index, option, value) {
        this.devices[index].options[option] = value;
        this.settings[deviceIndex][option] = value;
        storage.setItem('settings', this.settings);
    }

    setOption(deviceIndex, option, value) {
        let result = this.getDeviceFromIndex(deviceIndex);
        if (result) {
            let device = result.device;
            let index = result.index;
            this.updateSetting(deviceIndex, index, option, value);
            return setOption(device.cam.device, option, value);
        }
    }

    async getOption(deviceIndex, option) {
        let result = this.getDeviceFromIndex(deviceIndex);
        if (result) {
            let device = result.device;
            return (await getOption(device.cam.device, option)).output.value;
        }
    }

    async enumerateCameras(h264_cameras) {
        let oldDevices = this.devices.slice();
        this.devices = [];
        let deviceIndex = 0;
        for (let cam of h264_cameras) {
            let device = { cam };
            if (cam.info.vid === '0c45' && cam.info.pid === '6366') { // DO NOT REMOVE: Could result in issues with unsupported cameras
                device.options = await getOptions(cam.device);
                device.driverCompatible = true;
                if (deviceIndex >= this.settings.length) this.settings.push(device.options);
                deviceIndex++;
            } else {
                device.driverCompatible = false;
            }
            this.devices.push(device);
        }
        storage.setItem('settings', this.settings);
        this.loadSettings(this.settings);

        let removedDevices = oldDevices.filter(x => this.devices.find(val => val.cam.device == x.cam.device) == undefined);
        let addedDevices = this.devices.filter(x => oldDevices.find(val => val.cam.device == x.cam.device) == undefined);
        // console.log('removed devices: ', removedDevices);
        // console.log('added devices: ', addedDevices);

        for (let device of addedDevices) {
            let result = this.getDeviceFromPath(device.cam.device);
            if (!result) continue;
            if (this.settings[result.deviceIndex].streaming) {
                this.streamManager.startStream(device.cam.device, );
            }
        }
        for (let device of removedDevices) {
            this.streamManager.stopStream(device.cam.device)
        }
        return { removedDevices, addedDevices };
    }
}

module.exports.findDevices = findDevices;
module.exports.DeviceManager = DeviceManager;
