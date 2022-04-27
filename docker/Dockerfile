FROM node:16-buster-slim

RUN apt-get update -y && apt-get upgrade -y

RUN apt-get install libudev-dev libgstreamer-plugins-base1.0-dev libgstreamer1.0-dev gstreamer1.0-plugins-good gstreamer1.0-plugins-bad -y

RUN npm install -g @deepwaterexploration/dwe-controls

ENTRYPOINT dwe-controls start
