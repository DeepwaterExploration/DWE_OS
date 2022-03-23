const { findDevices, DeviceManager } = require('./devices');
const { setOption, getOption } = require('./driver');
const StreamManager = require('./streams');
const serve = require('../lib/server');

module.exports = { findDevices, DeviceManager, serve, setOption, getOption, StreamManager };
