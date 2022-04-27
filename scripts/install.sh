#!/bin/bash

# This file will install the dwe-controls application
# install.sh

set -e

echo "Installing exploreHD_Controls..."

# Install version 14.x of nodejs
if ! [ -x "$(command -v node)" ]; then
    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    apt-get install nodejs -y
else
    echo "Nodejs already installed. Skipping..."
fi

# Install npmjs
if ! [ -x "$(command -v npm)" ]; then
    curl -L https://npmjs.org/install.sh | sudo sh
else
    echo "npm already installed. Skipping..."
fi

# Install development libraries
apt-get install libudev-dev libgstreamer-plugins-base1.0-dev libgstreamer1.0-dev -y

# Install gstreamer plugins
apt-get install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad -y

# Globally install dwe-controls
npm install -g @deepwaterexploration/dwe-controls --unsafe

# Install pm2
npm install -g pm2

echo "Starting dwe-controls..."

# Start the dwe-controls application
sudo -u "$SUDO_USER" pm2 start dwe-controls

echo "Initializing autostart..."
# Save the startup list for autostart
sudo -u "$SUDO_USER" pm2 save

# Startup
pm2 startup -u $SUDO_USER --hp /home/$SUDO_USER/

echo "Installation of exploreHD_Controls was successful. Please navigate to http://192.168.2.2:5000 to access the interface."
