const path = require('path')
const config = require('./config.json')
const { execFile } = require('child_process')

const OPTION_NAMES = ['gop', 'bitrate', 'cvm']

// invoke the driver executable directly with args
function invokeDriver(args) {
  return new Promise((resolve, reject) => {
    execFile(
      path.join(__dirname, config.DRIVER_EXECUTABLE),
      args,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`)
          reject(error)
        }

        if (stderr) {
          console.error(`stderr: ${stderr}`)
          reject(stderr)
        }

        let lines = stdout.split('\n')
        let res = {
          info: [],
          output: {},
        }
        for (let line of lines) {
          if (line.startsWith('I: ')) res.info.push(line.split(': ')[1])
          else if (line.startsWith('V: ')) {
            let split = line.split(': ')[1].split('=')
            let name = split[0]
            let value = Number(split[1])
            res.output = { name, value }
          }
        }
        resolve(res)
      }
    )
  })
}

function setOption(device, option, value) {
  return invokeDriver(['-d', device, '-s', option, value])
}

function getOption(device, option) {
  return invokeDriver(['-d', device, '-g', option])
}

async function getDriverOptions(device) {
  let rawOptions = {}
  for (let optionName of OPTION_NAMES) {
    let { output } = await getOption(device, optionName)
    rawOptions[optionName] = output.value
  }
  let options = {
    bitrate: rawOptions.bitrate / 1000000, // convert to Mbps
    vbr: rawOptions.cvm == 2, // 1: cbr, 2: vbr
    h264: rawOptions.gop == 29, // 29: h264
  }
  return options
}

async function setDriverOptions(device, newOptions) {
  let options = await getDriverOptions(device)
  newOptions = { ...newOptions } // make a copy of the original object
  newOptions = {
    bitrate: newOptions.bitrate * 1000000,
    gop: newOptions.h264 ? 29 : 0,
    cvm: newOptions.vbr ? 2 : 1,
  }
  options = {
    bitrate: options.bitrate * 1000000,
    gop: options.h264 ? 29 : 0,
    cvm: options.vbr ? 2 : 1,
  }
  for (let optionName of OPTION_NAMES) {
    // check if new option is different from current
    if (newOptions[optionName] != options[optionName]) {
      await setOption(device, optionName, newOptions[optionName])
    }
  }
}

module.exports = {
  getOption,
  setOption,
  getDriverOptions,
  setDriverOptions,
}
