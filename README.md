<a href="https://exploredeepwater.com/">
    <img src="https://docs.exploredeepwater.com/_static/dwe_transparent.png" alt="DWE Logo" title="DeepWater Exploration" align="right" height="60" />
</a>

# exploreHD Controls

**NOTE: exploreHD settings can only be adjusted on the lower bandwidth / configurable firmware. Learn how to upgrade [here](https://docs.exploredeepwater.com/software/firmware.html)**.

- [Documentation](#documentation)
    - [Basic Setup Guides](#basic-setup-guides)
- [Getting Started](#getting-started)
    - [Connecting](#connecting)
    - [Installing with Docker](#installing-with-docker)
    - [Installing On Raspberry Pi](#installing-on-raspberry-pi)
    - [Installing Manually](#installing-manually)
        - [Auto Launch](#auto-launch)
        - [Running Manually](#running-manually)
- [Interface](#interface)

## Documentation

The guide in [COMPANION.md](./COMPANION.md) has been superseded by our [documentation site](https://docs.exploredeepwater.com/).

### Basic Setup Guides
- [Pi Setup](https://docs.exploredeepwater.com/guides/pi_setup.html)
- [ArduSub Companion Setup](https://docs.exploredeepwater.com/guides/ardusub_companion.html)

## Getting Started

### Connecting

To connect to the pi, we suggest using ssh with Putty. You can read our documentation on that on [SSH Into a Raspberry Pi](https://docs.exploredeepwater.com/guides/ssh_into_pi.html) of our pi setup docs.

### Installing with Docker

Recommended for Raspberry Pi instead of [Installing On Raspberry Pi](#installing-on-raspberry-pi) or [Installing Manually](#installing-manually).

To install with docker, you can use the installation script provided with the following command:
```
curl -fsSL https://raw.githubusercontent.com/DeepwaterExploration/exploreHD_Controls/main/scripts/install-docker.sh | sudo -E bash -
```

Once installed, the script should exit with the following message:
`Installation of dwe-controls with docker was successful. Please navigate to http://192.168.2.2:5000 to access the interface.`

You can now jump to [Interface](#interface) to access the functionality.

### Uninstalling with Docker

If you have installed with docker, you can uninstall dwe-controls with the following commands:

```
docker rm dwe-controls --force
rm /usr/lib/systemd/system/dwe-controls.service
```

### Installing On Raspberry Pi

To install for the raspberry pi, you can use the installation script by executing the following command:
```
curl -fsSL https://raw.githubusercontent.com/DeepwaterExploration/exploreHD_Controls/main/scripts/install.sh | sudo -E bash -
```

Once installed, the script should exit with the following message:
`Installation of exploreHD_Controls was successful. Please navigate to http://192.168.2.2:5000 to access the interface.`

You can now jump to [Interface](#interface) to access the functionality.

### Installing Manually

You can install manually (for raspberry pi or other systems) with the following commands:

First, install nodejs with:
```sh
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install nodejs
curl -L https://npmjs.org/install.sh | sudo sh
```

Next, install the required dependencies:

`sudo apt install libudev-dev libgstreamer-plugins-base1.0-dev libgstreamer1.0-dev`

`sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad`

Finally, install the dwe-controls application from npmjs with:

`sudo npm install -g @deepwaterexploration/dwe-controls`

#### Auto Launch

To enable auto-launch (recommended for raspberry pi):

- Install [pm2](https://www.npmjs.com/package/pm2):
`sudo npm install -g pm2`

- Start dwe-controls from pm2:
`pm2 start dwe-controls`

- Save the process list:
`pm2 save`

- Enable startup for pm2: `sudo pm2 startup systemd -u <your username> --hp /home/<your username>`
    - Raspberry Pi: `sudo pm2 startup systemd -u pi --hp /home/pi`

#### Running Manually
To run the application **temporarily** (this is only if you do **not want to install** with auto-launch):

- Run: `dwe-controls start`

### **Interface**
To use the interface, navigate to <http://192.168.2.2:5000> (or <http://companion.local:5000> if running the ArduSub companion software).

![driverui](./images/driverui.png#gh-light-mode-only)
![driverui](./images/driverui-dark.png#gh-dark-mode-only)
