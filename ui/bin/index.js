#!/usr/bin/env node

const { hideBin } = require('yargs/helpers');
const yargs = require('yargs/yargs');
const controls = require('../lib/index');

yargs(hideBin(process.argv))
    .command('*', 'default command', () => { }, () => controls.serve())
    .command('start [port] [host]', 'start the server', (yargs) => {
        return (yargs
            .positional('port', {
                describe: 'port to bind on', 
                default: 5000
            })
            .positional('host', {
                describe: 'host address to bind on',
                default: '0.0.0.0'
            }));
    }, (argv) => {
        controls.serve(argv.port, argv.host);
    })
    .command('stream', 'stream all connected H.264 devices with gstreamer', () => { }, async () => {
        let deviceManager = new controls.DeviceManager();
        let streamManager = new controls.StreamManager();

        let h264_cameras = await controls.findDevices();
        await deviceManager.initStorage(); // storage must be initialized before enumeration
        await deviceManager.enumerateCameras(h264_cameras);
        for (let device of deviceManager.devices) {
            streamManager.startStream(device.cam.device);
        }
        setInterval(function() { }, 2 << 30);
    })
    .help()
    .parse();
