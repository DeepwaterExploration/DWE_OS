#!/usr/bin/env node

const { hideBin } = require('yargs/helpers')
const yargs = require('yargs/yargs')
const controls = require('../lib/index')
const reset = require('../lib/utils/reset')

yargs(hideBin(process.argv))
  .command(
    '*',
    'default command',
    () => {},
    () => controls.serve()
  )
  .command(
    'start [port] [host]',
    'start the server',
    (yargs) => {
      return yargs
        .positional('port', {
          describe: 'port to bind on',
          default: 5000,
        })
        .positional('host', {
          describe: 'host address to bind on',
          default: '0.0.0.0',
        })
    },
    (argv) => {
      controls.serve(argv.port, argv.host)
    }
  )
  .command(
    'reset',
    'reset the settings file',
    () => {},
    async () => {
      await reset()
    }
  )
  .help()
  .parse()
