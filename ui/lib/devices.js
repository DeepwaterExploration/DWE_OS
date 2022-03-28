const v4l2camera = require("v4l2camera-pr48");

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

module.exports = findDevices;
