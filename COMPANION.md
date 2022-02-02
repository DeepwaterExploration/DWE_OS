# Setup with ArduSub Companion

**This document is now outdated, read our [Documentation Page](https://docs.exploredeepwater.com/guides/pi_setup.html) for more info**

### Setup WinSCP and PuTTy. Open WinSCP and start a new session.
*File Protocol*
```
SFTP
```
*Host name*
```
192.168.2.2
```
*Port number*
```
22
```
*User name*
```
pi
```
*Password*
```
companion
```
*Navigate to*
```
/home/pi/companion/scripts/
```
*Replace start_video.sh with current start_video.sh in scripts folder in this repository. Copy explorehd_camera_controls folder and put it in the scripts folder.*
*Open a new PuTTy session and login with companion as passowrd. Type the following to terminal.*
```
cd companion/scripts/explorehd_camera_controls
cp Makefile.x86 Makefile
make
```
*Restart the pi to recieve the new stream.*
## H264
### Sending Stream
```
gst-launch-1.0 -v v4l2src device=/dev/video1 ! video/x-h264, width=1920,height=1080! h264parse ! queue ! rtph264pay config-interval=10 pt=96 ! udpsink host=192.168.2.1 port=5600 sync=false
```
### Rceiving Stream
*Two commands you can use*
```
gst-launch-1.0 -v udpsrc port=5600 ! application/x-rtp, encoding-name=H264,payload=96! rtpjitterbuffer ! rtph264depay ! avdec_h264 ! autovideosink
```
```
gst-launch-1.0 -v udpsrc port=5600 caps = "application/x-rtp, media=(string)video, clock-rate=(int)90000, encoding-name=(string)H264, payload=(int)96" ! rtph264depay ! decodebin ! videoconvert ! autovideosink
```
*OBS Pipeline*
```
udpsrc port=5600 ! application/x-rtp,media=(string)video,clock-rate=(int)90000,encoding-name=(string)H264 ! rtph264depay ! avdec_h264 output-corrupt=false ! videoconvert ! video. 
```

## Streaming YUYV encoded as MJPEG
```
gst-launch-1.0 -v v4l2src device=/dev/video0 ! video/x-raw,format=YUY2,width=640,height=480 ! jpegenc ! rtpjpegpay ! udpsink host=127.0.0.1 port=5000
```
## Streaming YUYV encoded as H264
```
gst-launch-1.0 -v v4l2src  device=/dev/video0 ! video/x-raw,framerate=30/1 ! videoscale ! videoconvert ! x264enc tune=zerolatency bitrate=500 speed-preset=superfast ! rtph264pay ! udpsink host=127.0.0.1 port=5000
```

## DeepStream 
DeepStream must be installed on your machine: https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_Quickstart.html </br>
For more info: https://developer.nvidia.com/deepstream-sdk </br>
### Displaying Video from Camera
```
gst-launch-1.0 v4l2src device=/dev/video0 io-mode=2 ! "image/jpeg,width=1920,height=1080" ! nvjpegdec ! nvvideoconvert ! 'video/x-raw(memory:NVMM),format=NV12' ! nveglglessink -e
```
### Receiving MJPG Stream
```
gst-launch-1.0 -v udpsrc port=5000 ! application/x-rtp, media=video, clock-rate=90000, encoding-name=JPEG, payload=26 ! rtpjpegdepay ! nvjpegdec ! nvvideoconvert ! 'video/x-raw(memory:NVMM),format=NV12' ! nveglglessink -e
```

## Recording MJPG Stream with NVENC GStreamer Plugin
```
gst-launch-1.0 -v udpsrc port=5000 ! application/x-rtp,media=video,clock-rate=90000,encoding-name=JPEG,payload=26 ! rtpjpegdepay ! jpegdec ! queue ! nvh264enc ! h264parse ! mp4mux ! filesink location=video.mp4
```