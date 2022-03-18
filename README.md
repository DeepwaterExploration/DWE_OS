<a href="https://exploredeepwater.com/">
    <img src="https://docs.exploredeepwater.com/_static/dwe_transparent.png" alt="DWE Logo" title="DeepWater Exploration" align="right" height="60" />
</a>

# exploreHD Controls

**NOTE: exploreHD settings can only be adjusted on the lower bandwidth / configurable firmware. Learn how to upgrade [here](https://docs.exploredeepwater.com/software/firmware.html)**.

## Documentation

The guide in [COMPANION.md](./COMPANION.md) has been superseded by our [documentation site](https://docs.exploredeepwater.com/).

### Follow our guides on streaming an exploreHD from a raspberry pi:
- [Pi Setup](https://docs.exploredeepwater.com/guides/pi_setup.html)
- [ArduSub Companion Setup](https://docs.exploredeepwater.com/guides/ardusub_companion.html)

## Getting Started

### Connecting

To connect to the pi, we suggest using ssh with Putty. You can read our documentation on that on [Step 8: SSH into the Pi](https://docs.exploredeepwater.com/guides/pi_setup.html#step-8-ssh-into-the-pi) of our pi setup docs.

### Installing

In order to run, first install nodejs with:
```sh
curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs
curl -L https://npmjs.org/install.sh | sudo sh
```

Next, install the dwe-controls application from npmjs with:

`sudo npm install -g @deepwaterexploration/dwe-controls`

### Usage

#### **Running**
To run once (will not persist on restart), run:

`dwe-controls start`

#### **Installation**
To enable auto-launch (will run automatically when restarted), run:

`dwe-controls load`
