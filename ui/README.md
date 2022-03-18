<a href="https://exploredeepwater.com/">
    <img src="https://docs.exploredeepwater.com/_static/dwe_transparent.png" alt="DWE Logo" title="DeepWater Exploration" align="right" height="60" />
</a>

# dwe-controls

Control system for the DeepWater Exploration exploreHD and HDCam. Additional compatibility is available for other UVC compatible H264 devices.

## Install

On linux devices:

`npm install -g @deepwaterexploration/dwe-controls`

## Usage

**Running**

Start the server: `dwe-controls start [port=5000] [host=0.0.0.0]`

Loading auto-launch: `dwe-controls load`

Unloading auto-launch: `dwe-controls unload`

**JavaScript Example**

Setting a control:
```js
const { findDevices, DeviceManager } = require('dwe-controls');

var deviceManager = new DeviceManager();

async function init() {
    let h264_cameras = await findDevices();
    await deviceManager.initStorage();
    await deviceManager.enumerateCameras(h264_cameras);
    deviceManager.setOption(0, 'gop', 0); // set the gop of the 0th indexed camera to 0
}

init();
```

Running the server:
```js
require('dwe-controls').serve();
```
