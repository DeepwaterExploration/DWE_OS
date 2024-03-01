const DeviceManager = require("./deviceManager");
const StreamManager = require("./streamManager");
const { setOption, getOption } = require("./utils/driver");
const serve = require("./server");

module.exports = { DeviceManager, serve, setOption, getOption, StreamManager };
