#!/bin/bash

# This file will install the dwe-os application
# install.sh

set -e

echo "Installing DWE OS 1.0..."

echo -e "Installing NodeJS/NPM...\n"
# Install version 20.x of nodejs
if ! [ -x "$(command -v node)" ]; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
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

echo -e "Installing libraries...\n"
# Install development libraries, gstreamer plugins
apt install libudev-dev libgstreamer-plugins-base1.0-dev libgstreamer1.0-dev gstreamer1.0-plugins-good gstreamer1.0-plugins-bad -y


echo -e "Installing DWE OS 1...\n"
# Globally install dwe-os-1
npm install -g @dwe.ai/dwe-os-1 --unsafe

# Install pm2
npm install -g pm2

echo "Starting DWE OS 1..."

# Start the dwe-os-1 application
sudo -u "$SUDO_USER" pm2 start dwe-os-1

echo "Setting up autostart..."
# Save the startup list for autostart
sudo -u "$SUDO_USER" pm2 save

# Startup
pm2 startup -u $SUDO_USER --hp /home/$SUDO_USER/

# Get all IPv4 addresses, filtering out localhost and removing duplicates
IP_ADDRESSES=$(hostname -I | awk '{for (i=1; i<=NF; i++) if ($i !~ /^127/ && $i !~ /:/) print $i}' | sort -u)

# Check if any IP addresses were found
if [ -z "$IP_ADDRESSES" ]; then
    echo "No IPv4 addresses found."
else
    echo "Installation of DWE OS was successful. Please navigate to one of the following to access the interface."
    # Print the URL for each IP address
    for ip in $IP_ADDRESSES; do
        echo "- http://$ip:5000"
    done
fi
