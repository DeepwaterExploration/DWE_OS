const express = require('express')
const path = require('path')
const http = require('http')

const DeviceManager = require('./deviceManager')
const APIServer = require('./APIServer')
const SocketServer = require('./socketServer')

const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.json())

var deviceManager = new DeviceManager()

var apiServer = new APIServer(app, deviceManager)
apiServer.createEndpoints()

var socketServer = new SocketServer(server, deviceManager)
socketServer.constructEvents()

// send a friendly page instead of 404
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// server
async function serve(port = 5000, host = '0.0.0.0') {
  // device manager events
  await deviceManager.startMonitoring()

  // server
  server.listen(port, host, () => {
    console.log(`App listening on port: ${port}`)
  })
}

module.exports = serve
