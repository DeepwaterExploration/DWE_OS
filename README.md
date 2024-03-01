<a href="https://dwe.ai/">
    <img src="https://docs.dwe.ai/_static/DWELogo_white_WEB.svg" alt="DWE Logo" title="DeepWater Exploration" align="right" height="60" />
</a>

# DWE OS 1

**NOTE: if you purchased an exploreHD before Jan 16th, 2024, upgrade your firmware [here](https://docs.dwe.ai/software/firmware.html)**.

- [DWE OS 1](#dwe-os-1)
    - [Basic Setup Guides](#basic-setup-guides)
  - [Getting Started](#getting-started)
    - [Connect to your Raspberry Pi](#connect-to-your-raspberry-pi)
    - [Installation Script On Raspberry Pi](#installation-script-on-raspberry-pi)
    - [Installing Manually](#installing-manually)
      - [Auto Launch](#auto-launch)
      - [Running Manually](#running-manually)
    - [**Interface**](#interface)

<!-- ## Documentation

The guide in [COMPANION.md](./COMPANION.md) has been superseded by our [documentation site](https://docs.dwe.ai/). -->

### Basic Setup Guides
- [Pi Setup](https://docs.dwe.ai/guides/pi_setup.html)
- [BlueOS Companion Setup](https://docs.dwe.ai/guides/blueos_companion.html)

## Getting Started

### Connect to your Raspberry Pi

Read our documentation here: [SSH Into a Raspberry Pi](https://docs.dwe.ai/guides/ssh_into_pi.html)

<!-- ### Installing with Docker

Recommended for Raspberry Pi instead of [Installing On Raspberry Pi](#installing-on-raspberry-pi) or [Installing Manually](#installing-manually).

To install with docker, you can use the installation script provided with the following command:
```
curl -fsSL https://raw.githubusercontent.com/DeepwaterExploration/DWE_OS/main/scripts/install-docker.sh | sudo -E bash -
```

Once installed, the script should exit with the following message:
`Installation of dwe-os-1 with docker was successful. Please navigate to http://192.168.2.2:5000 to access the interface.`

You can now jump to [Interface](#interface) to access the functionality.

### Uninstalling with Docker

If you have installed with docker, you can uninstall dwe-controls with the following commands:

```
docker rm dwe-controls --force
rm /usr/lib/systemd/system/dwe-controls.service
``` -->

### Installation Script On Raspberry Pi

To install for the Raspberry Pi, you can use the installation script by executing the following commands:
```
sudo apt update

sudo apt upgrade

curl -fsSL https://raw.githubusercontent.com/DeepwaterExploration/DWE_OS/main/scripts/install.sh | sudo -E bash -
```

Once installed, the script should exit with the following message:
`Installation of DWE OS was successful.`

You can now jump to [Interface](#interface) to access the functionality.

### Installing Manually

You can install manually (for raspberry pi or other systems) with the following commands:

First, install nodejs with:
```sh
sudo apt update
sudo apt upgrade
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs
curl -L https://npmjs.org/install.sh | sudo sh
```

Next, install the required dependencies:

```
sudo apt install libudev-dev libgstreamer-plugins-base1.0-dev libgstreamer1.0-dev gstreamer1.0-plugins-good gstreamer1.0-plugins-bad
```

Finally, install the dwe-os-1 application from npmjs with:

```
sudo npm install -g @dwe.ai/dwe-os-1
```

#### Auto Launch

To enable auto-launch (recommended for raspberry pi):

- Install [pm2](https://www.npmjs.com/package/pm2):
  ```
  sudo npm install -g pm2
  ```

- Start dwe-controls from pm2:
  ```
  pm2 start dwe-os-1
  ```

- Save the process list:
  ```
  pm2 save
  ```

- Enable startup for pm2:
  ```
  sudo pm2 startup systemd -u <your username> --hp /home/<your username>
  ```
    - Raspberry Pi:
      ```
      sudo pm2 startup systemd -u pi --hp /home/pi
      ```

#### Running Manually
To run the application **temporarily** (this is only if you do **not want to install** with auto-launch):

- Run: `dwe-os-1 start`

### **Interface**
To use the interface, navigate to <http://192.168.2.2:5000> (or <http://companion.local:5000> if running the ArduSub companion software) (or whatever the ip address of your raspberry pi may be).

![driverui](./images/driverui.png#gh-light-mode-only)
![driverui](./images/driverui-dark.png#gh-dark-mode-only)
