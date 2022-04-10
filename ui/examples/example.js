const { DeviceManager } = require('../lib/index');

var deviceManager = new DeviceManager();
var exploreHD;

async function init() {
    // device manager events
    await deviceManager.startMonitoring();

    exploreHD = deviceManager.getExploreHD(0);
    if (!exploreHD) {
        console.log('No exploreHD found!');
        deviceManager.stopMonitoring();
        return;
    }

    console.log(`Found exploreHD at ${exploreHD.devicePath}, ${exploreHD.info.name}: ${exploreHD.info.manufacturer}`);

    await exploreHD.setDriverOptions({
        h264: true,
        vbr: false,
        bitrate: 5
    });
    await exploreHD.addStream('127.0.0.1'); // start a local stream
}

init();
