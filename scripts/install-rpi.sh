# This file will install the dwe-controls application
# install-rpi.sh

set -e

echo "Installing exploreHD_Controls..."

# Install version 14.x of nodejs
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
apt install nodejs

# Install npmjs
curl -L https://npmjs.org/install.sh | sudo sh

# Install development libraries
apt install libudev-dev libgstreamer-plugins-base1.0-dev libgstreamer1.0-dev -y

# Globally install dwe-controls
npm install -g @deepwaterexploration/dwe-controls

# Install pm2
npm install -g pm2

echo "Starting dwe-controls..."

# Start the dwe-controls application
pm2 start dwe-controls

echo "Initializing autostart..."
# Save the startup list for autostart
pm2 save

# Startup
pm2 startup systemd -u pi --hp /home/pi/

echo "Installation of exploreHD_Controls was successful. Please navigate to http://192.168.2.2:5000 to access the interface."
