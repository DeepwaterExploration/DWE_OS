const StreamManager = require('./streamManager');

class APIServer {
    constructor(app, deviceManager) {
        this.app = app;
        this.deviceManager = deviceManager;
    }

    createEndpoints() {
        // get the device list
        this.app.get('/devices', (req, res) => {
            res.send(this.deviceManager.getSerializableDevices());
        });

        // update options
        this.app.post('/options', async (req, res) => {
            let device = this.deviceManager.getDeviceFromPath(req.body.devicePath);
            await device.setDriverOptions(req.body.options);
            res.send();
        });

        // create a stream
        this.app.post('/addStream', async (req, res) => {
            let device = this.deviceManager.getDeviceFromPath(req.body.devicePath);
            await device.addStream(req.body.stream.hostAddress);
            res.send({
                port: device.stream.port
            });
        });

        // remove a stream
        this.app.post('/removeStream', async (req, res) => {
            let device = this.deviceManager.getDeviceFromPath(req.body.devicePath);
            await device.removeStream();
            res.send();
        });
        
        // restart a stream
        this.app.post('/restartStream', async (req, res) => {
            let device = deviceManager.getDeviceFromPath(req.body.devicePath);
            await device.restartStream(req.body.stream.hostAddress, req.body.stream.port);
            res.send({
                port: device.stream.port
            });
        });
        
        // reset the settings
        this.app.post('/resetSettings', async (req, res) => {
            StreamManager.resetAll();
            await this.deviceManager.resetSettings();
            res.send();
        });
    }
}

module.exports = APIServer;
