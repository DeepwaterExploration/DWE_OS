const path = require('path');
const config = require('./config.json');
const { execFile } = require('child_process');

// invoke the driver executable directly with args
function invokeDriver(args) {
    return new Promise((resolve, reject) => {
        execFile(path.join(__dirname, config.DRIVER_EXECUTABLE), args, (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                reject(error);
            }
    
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                reject(stderr);
            }

            let lines = stdout.split('\n');
            let res = {
                info: [ ], 
                output: { }
            };
            for (let line of lines) {
                if (line.startsWith('I: ')) res.info.push(line.split(': ')[1]);
                else if (line.startsWith('V: ')) {
                    let split = line.split(': ')[1].split('=');
                    let name = split[0];
                    let value = Number(split[1]);
                    res.output = { name, value };
                }
            }
            resolve(res);
        })
    })
}

function setOption(device, option, value) {
    return invokeDriver(['-d', device, '-s', option, value]);
}

function getOption(device, option) {
    return invokeDriver(['-d', device, '-g', option]);
}

module.exports.setOption = setOption;
module.exports.getOption = getOption;
