<a href="https://dwe.ai/">
    <img src="https://docs.dwe.ai/_static/dwe_transparent.png" alt="DWE Logo" title="DeepWater Exploration" align="right" height="60" />
</a>

# DWE OS

Control system for the DeepWater Exploration exploreHD and HDCam. Additional streaming functionality is available for all UVC compatible H264 devices.

## Install

On linux devices:

`sudo apt install libudev-dev libgstreamer-plugins-base1.0-dev libgstreamer1.0-dev`

`sudo npm install -g @dwe.ai/dwe-os-1`

## Usage

**Running**

Start the server: `dwe-os-1 start [port=5000] [host=0.0.0.0]`

*[pm2](https://www.npmjs.com/package/pm2) is recommended for auto-start*

**JavaScript Example**

Using an exploreHD:
```js
const { DeviceManager } = require('./index');

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
        bitrate: 5 // 5 Mbps
    });
    await exploreHD.addStream('127.0.0.1'); // start a local stream
}

init();
```

Running the server:
```js
require('dwe-os-1').serve();
```
