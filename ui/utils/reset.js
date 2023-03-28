const storage = require('node-persist')
const path = require('path')
const homedir = require('os').homedir()

async function reset() {
  await storage.init({
    dir: path.join(homedir, '/.dwe/controls'),
  })
  await storage.clear()
}

module.exports = reset
