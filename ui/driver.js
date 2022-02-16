const path = require('path');
const config = require('./config.json');
const { exec } = require('child_process');

/* FIXME: this code is outdated with the updated driver code */

// invoke the driver executable directly with args
function invokeDriver(args) {
    return new Promise((resolve, reject) => {
        exec(path.join(__dirname, config.DRIVER_EXECUTABLE) + ' ' + args, (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                reject(error);
            }
    
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                reject(stderr);
            }

            resolve(stdout);
        })
    })
}

function setOption(device, option, value) {
    let arg = config.OPTIONS[option]['set'];
    invokeDriver(`${device} ${arg} ${value}`);
}

function getOption(device, option) {
    let arg = config.OPTIONS[option]['get'];
    return invokeDriver(`${device} ${arg}`);
}

module.exports.setOption = setOption;
module.exports.getOption = getOption;
