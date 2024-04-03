# Camera Controls

## Notes

This is a basic executable for interfacing with camera properties. It is invoked by the nodejs application to control exploreHD cameras and is only recommended for use if DWE OS does not provide enough control for the user.

## Building

`make`

## Invoking

Note: /dev/videoX is the video path of the H.264 enabled camera

### Bitrate Control

Set the Bitrate:
`./explorehd_UVC_TestAP -d /dev/videoX -s bitrate BITRATE_IN_MBPS`

Get the Bitrate:
`./explorehd_UVC_TestAP -d /dev/videoX -g bitrate`

### GOP Control

- A GOP of 0 indicates full MJPEG streaming
- A GOP of 29 indicates full H.264 compression

Set the GOP:
`./explorehd_UVC_TestAP -d /dev/videoX -s gop GOP_VALUE`

Get the GOP:
`./explorehd_UVC_TestAP -d /dev/videoX -g gop`

### Bitrate Mode

- A cvm of 2 indicates variable bitrate (only recommended for MJPEG)
- A cvm of 1 indicates constant bitrate (do not use if GOP is 0)

Set the mode:
`./explorehd_UVC_TestAP -d /dev/videoX -s cvm VIDEO_MODE`

Get the mode:
`./explorehd_UVC_TestAP -d /dev/videoX -g cvm`

### Retrieving values into another application

In the case you would like to retrieve values into your applicaiton, it may be useful to decode the values from the explorehd_UVC_TestAP.

Text should be decoded line by line from stdout.
- Lines predicated by `I: ` will contain informational text that should be stored for logging
- Lines predicated by `V: ` will contain a value returned from the program. EX:
  - Bitrate: `V: BITRATE=X`
  - GOP: `V: GOP=X`
  - MODE: `V: MODE=X`
