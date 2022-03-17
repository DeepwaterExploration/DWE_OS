#!/usr/bin/env node

const { hideBin } = require('yargs/helpers');
const yargs = require('yargs/yargs');
const serve = require('./server');
const path = require('path');
const AutoLaunch = require('auto-launch');

var launcher = new AutoLaunch({
    name: 'dwe-controls', 
    path: path.join(__dirname, './index.js')
});

yargs(hideBin(process.argv))
.command(['start [port] [host]', '*'], 'start the server', (yargs) => {
    return (yargs.
        positional('port', {
            describe: 'port to bind on', 
            default: 5000
        }).
        positional('host', {
            describe: 'host address to bind on',
            default: '0.0.0.0'
        }));
    }, (argv) => {
        serve(argv.port, argv.host);
    })
    .command('load', 'load the service', (yargs) => {
        return yargs;
    }, (argv) => {
        launcher.enable();
    })
    .command('unload', 'unload the service', (yargs) => {
        return yargs
    }, (argv) => {
        launcher.disable();
    })
    .help()
    .parse();
