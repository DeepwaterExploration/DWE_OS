const wifi = require('node-wifi');
const EventEmitter = require('events');

class Network {
    constructor(networkInfo) {
        this.ssid = networkInfo.ssid;
        this.quality = networkInfo.quality;
        this.signalStrength = Math.floor((this.quality / 100) * 2);

        let rsn = networkInfo.security_flags.rsn.split(' ');
        this.requiresPasskey = rsn.includes('psk');
    }

    connect(password=undefined) {
        wifi.connect({ssid: this.ssid, password: password}, () => {
            console.log(`Connected to WiFi Network: '${this.ssid}'`);
        })
    }
}

class WifiManager {
    constructor() {
        wifi.init({
            iface: null
        });
        this.networks = []
        setInterval(async () => {
            let connectedNetwork = await this.getConnectedNetwork();
            // TODO: Finish
        }, 1000);
    }

    async scan() {
        return new Promise((resolve, reject) => {
            this.networks = [];
            wifi.scan((error, networks) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    networks.forEach((networkInfo) => {
                        let network = new Network(networkInfo);
                        let existingNetworkIndex = this.networks.findIndex((n) => n.ssid == network.ssid);
                        let existingNetwork = existingNetworkIndex >= 0 ? this.networks[existingNetworkIndex] : null;
                        if (network.ssid !== '') {
                            if (!existingNetwork || network.quality > existingNetwork.quality) {
                                if (existingNetwork)
                                    this.networks.splice(existingNetworkIndex);
                                this.networks.push(network);
                            }
                        }
                    });
                    this.networks.sort((a, b) => b.quality - a.quality);
                    resolve(this.networks);
                }
            });
        })
    }

    connect(ssid, password=undefined) {
        let network = this.networks.find((network) => network.ssid == ssid);
        network.connect(password);
    }

    async getConnectedNetwork() {
        let currentConnections = await wifi.getCurrentConnections();
        let currentNetwork = currentConnections.length > 0 ? new Network(currentConnections[0]) : null;
        console.log(currentNetwork.ssid);
        return currentNetwork.ssid;
    }
}

module.exports = WifiManager;
