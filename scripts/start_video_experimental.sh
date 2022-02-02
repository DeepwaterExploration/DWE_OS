#!/bin/bash
export LD_LIBRARY_PATH=/usr/local/lib/

for DEVICE in $(ls /dev/video*); do
	.$HOME/companion/scripts/explorehd_camera_controls/explorehd_UVC_TestAP --xuset-br 1500000 --xuset-gop 0 --xuset-cvm 2 $DEVICE
done

if [ -z "$1" ]; then
    WIDTH=$(cat ~/vidformat.param | xargs | cut -f1 -d" ")
    HEIGHT=$(cat ~/vidformat.param | xargs | cut -f2 -d" ")
    FRAMERATE=$(cat ~/vidformat.param | xargs | cut -f3 -d" ")
    DEVICE=$(cat ~/vidformat.param | xargs | cut -f4 -d" ")
    DEVICE2=$(cat ~/vidformat.param | xargs | cut -f5 -d" ")
    DEVICE3=$(cat ~/vidformat.param | xargs | cut -f6 -d" ")
else
    WIDTH=$1
    HEIGHT=$2
    FRAMERATE=$3
    DEVICE=$4
    DEVICE2=$5
    DEVICE3=$6
fi

echo "start videos with width $WIDTH height $HEIGHT framerate $FRAMERATE devices $DEVICE, $DEVICE2"

# Load Pi camera v4l2 driver
if ! lsmod | grep -q bcm2835_v4l2; then
    echo "loading bcm2835 v4l2 module"
    sudo modprobe bcm2835-v4l2
fi

# check if this device is H264 capable before streaming
# It would be better not to specify framerate, but there is an issue with RPi camera v4l2 driver, it will cause kernel error to use default framerate (90 fps)
gst-launch-1.0 -v v4l2src device=$DEVICE do-timestamp=true num-buffers=1 ! video/x-h264 ! h264parse ! queue ! rtph264pay config-interval=10 pt=96 ! fakesink

# if it is not, check all available devices, and use the first h264 capable one instead
if [ $? != 0 ]; then
    echo "specified device $DEVICE failed"
    for DEVICE in $(ls /dev/video*); do
        echo "attempting to start $DEVICE"
        gst-launch-1.0 -v v4l2src device=$DEVICE do-timestamp=true num-buffers=1 ! video/x-h264 ! h264parse ! queue ! rtph264pay config-interval=10 pt=96 ! fakesink
        if [ $? == 0 ]; then
            echo "Success!"
            break
        fi
    done
fi

# load gstreamer options
gstOptionsBRF=$(tr '\n' ' ' < $HOME/gstreamer2_BRF.param)
gstOptionsBRT=$(tr '\n' ' ' < $HOME/gstreamer2_BRT.param)
gstOptionsAHD=$(tr '\n' ' ' < $HOME/gstreamer2_AHD.param)

# start auxiliary camera in a separate thread
# screen -dm -S video_ahd bash -c "export LD_LIBRARY_PATH=/usr/local/lib && gst-launch-1.0 -v v4l2src do-timestamp=true $gstOptionsAHD"

# make sure framesize and framerate are supported

# workaround to make sure we don't attempt 1080p@90fps on pi cameras
v4l2-ctl --device $DEVICE --set-parm $FRAMERATE
v4l2-ctl --device $DEVICE2 --set-parm $FRAMERATE
v4l2-ctl --device $DEVICE3 --set-parm $FRAMERATE

echo "attempting device $DEVICE with width $WIDTH height $HEIGHT framerate $FRAMERATE options $gstOptionsBRF"
gst-launch-1.0 -v v4l2src device=$DEVICE do-timestamp=true num-buffers=1 ! video/x-h264, width=$WIDTH, height=$HEIGHT, framerate=$FRAMERATE/1 ! h264parse ! queue ! rtph264pay config-interval=10 pt=96 ! fakesink

if [ $? != 0 ]; then
    echo "Device is not capable of specified format, using device current settings instead"
    screen -dm -S video_brf bash -c "export LD_LIBRARY_PATH=/usr/local/lib/ && gst-launch-1.0 -v v4l2src device=$DEVICE do-timestamp=true ! video/x-h264 $gstOptionsBRF"
    screen -dm -S video_brt bash -c "export LD_LIBRARY_PATH=/usr/local/lib/ && gst-launch-1.0 -v v4l2src device=$DEVICE2 do-timestamp=true ! video/x-h264 $gstOptionsBRT"
    screen -S video_ahd bash -c "export LD_LIBRARY_PATH=/usr/local/lib/ && gst-launch-1.0 -v v4l2src device=$DEVICE3 do-timestamp=true ! video/x-h264 $gstOptionsAHD"

else
    echo "starting devices ($DEVICE, $DEVICE2) with width $WIDTH height $HEIGHT framerate $FRAMERATE options ($gstOptionsBRF, $gstOptionsBRT)"
    screen -dm -S video_brf bash -c "export LD_LIBRARY_PATH=/usr/local/lib/ && gst-launch-1.0 -v v4l2src device=$DEVICE do-timestamp=true ! video/x-h264, width=$WIDTH, height=$HEIGHT, framerate=$FRAMERATE/1 $gstOptionsBRF"
    screen -dm -S video_brt bash -c "export LD_LIBRARY_PATH=/usr/local/lib/ && gst-launch-1.0 -v v4l2src device=$DEVICE2 do-timestamp=true ! video/x-h264, width=$WIDTH, height=$HEIGHT, framerate=$FRAMERATE/1 $gstOptionsBRT"
    screen -S video_ahd bash -c "export LD_LIBRARY_PATH=/usr/local/lib/ && gst-launch-1.0 -v v4l2src device=$DEVICE3 do-timestamp=true ! video/x-h264, width=$WIDTH, height=$HEIGHT, framerate=$FRAMERATE/1 $gstOptionsAHD"

    # if we make it this far, it means the gst pipeline failed, so load the backup settings
    cp ~/vidformat.param.bak ~/vidformat.param && rm ~/vidformat.param.bak
fi

# cleanup
# TODO: refactor so video streams can be restarted independently
screen -X -S video_brf quit
screen -X -S video_brt quit
screen -X -S video_ahd quit
