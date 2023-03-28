const StreamManager = require('./streamManager')
const { version } = require('../package.json')

class APIServer {
  constructor(app, wifiManager, deviceManager) {
    this.app = app
    this.wifiManager = wifiManager
    this.deviceManager = deviceManager
  }

  createEndpoints() {
    // get the device list
    this.app.get('/devices', (req, res) => {
      res.send(this.deviceManager.getSerializableDevices())
    })

    this.app.get('/networks', (req, res) => {
      res.send(this.wifiManager.networks)
    })

    this.app.get('/connectedNetwork', async (req, res) => {
      res.send({
        network: await this.wifiManager.getConnectedNetwork(),
      })
    })

    this.app.get('/app', (req, res) => {
      res.send({
        version,
      })
    })

    this.app.get('/connectedNetwork', (req, res) => {
      res.send({
        network: this.wifiManager.getConnectedNetwork(),
      })
    })

    this.app.get('/app', (req, res) => {
      res.send({
        version,
      })
    })

    // update options
    this.app.post('/options', async (req, res) => {
      let device = this.deviceManager.getDeviceFromPath(req.body.devicePath)
      await device.setDriverOptions(req.body.options)
      res.send()
    })

    // create a stream
    this.app.post('/addStream', async (req, res) => {
      let device = this.deviceManager.getDeviceFromPath(req.body.devicePath)
      await device.addStream(req.body.stream.hostAddress)
      res.send({
        port: device.stream.port,
      })
    })

    // remove a stream
    this.app.post('/removeStream', async (req, res) => {
      let device = this.deviceManager.getDeviceFromPath(req.body.devicePath)
      await device.removeStream()
      res.send()
    })

    // restart a stream
    this.app.post('/restartStream', async (req, res) => {
      let device = this.deviceManager.getDeviceFromPath(req.body.devicePath)
      let width, height
      if (req.body.stream.resolution) {
        ;[width, height] = req.body.stream.resolution.split('x')
      }
      await device.restartStream(
        req.body.stream.hostAddress,
        parseInt(req.body.stream.port),
        true,
        parseInt(width),
        parseInt(height)
      )
      res.send({
        port: device.stream.port,
      })
    })

    // reset the settings
    this.app.post('/resetSettings', async (req, res) => {
      StreamManager.resetAll()
      await this.deviceManager.resetSettings()
      res.send()
    })

    this.app.post('/setControl', async (req, res) => {
      let device = this.deviceManager.getDeviceFromPath(req.body.devicePath)
      await device.setControl(req.body.id, req.body.value)
      res.send()
    })

    this.app.post('/setDeviceName', async (req, res) => {
      let device = this.deviceManager.getDeviceFromPath(req.body.devicePath)
      await device.setName(req.body.name)
      res.send()
    })

    this.app.post('/network', (req, res) => {
      this.wifiManager.connect(req.body.ssid, req.body.password)
      res.send()
    })

    // this.app.post('/setResolution', async (req, res) => {
    //     let device = this.deviceManager.getDeviceFromPath(req.body.devicePath);
    //     device.stream.setResolution(req.body.resolution);
    // })
  }
}

module.exports = APIServer
