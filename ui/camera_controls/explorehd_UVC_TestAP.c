/*
 *      USB Video Class test application
 *
 *      Copyright (C) 2005-2008
 *          Laurent Pinchart (laurent.pinchart@skynet.be)
 * 
 * 		This driver application is based on the UVC test application and other sources.
 *
 *		Modifications of this application are sourced under GPL version 3 of the license
 *
 *      This program is free software; you can redistribute it and/or modify
 *      it under the terms of the GNU General Public License as published by
 *      the Free Software Foundation; either version 2 of the License, or
 *      (at your option) any later version.
 *
 */

#include <stdio.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdint.h>
#include <stdlib.h>
#include <errno.h>
#include <getopt.h>
#include <sys/ioctl.h>
#include <sys/mman.h>
#include <sys/select.h>
#include <sys/time.h>		//for timestamp incomplete error in kernel 2.6.21
#include <linux/videodev2.h>
#include <linux/version.h>
#include <sys/utsname.h>
#include <pthread.h>

#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#include "explorehd_opts.h" /* Options enum */
#include "v4l2uvc.h"
#include "explorehd_xu_ctrls.h"
#include "debug.h"
#include "cap_desc_parser.h"
#include "cap_desc.h"

#define TESTAP_VERSION		"v1.0.22_explorehd_UVC_TestAP_Multi"

#ifndef min
#define min(x,y) (((x)<(y))?(x):(y))
#endif

#ifndef V4L2_PIX_FMT_H264
#define V4L2_PIX_FMT_H264 v4l2_fourcc('H','2','6','4') /* H264 */
#endif

#ifndef V4L2_PIX_FMT_MP2T
#define V4L2_PIX_FMT_MP2T v4l2_fourcc('M','P','2','T') /* MPEG-2 TS */
#endif

#ifndef KERNEL_VERSION
#define KERNEL_VERSION(a,b,c) ((a)<<16+(b)<<8+(c))
#endif

struct H264Format *gH264fmt = NULL;
int Dbg_Param = 0x1f;

struct thread_parameter
{
	struct v4l2_buffer *buf;
	void *mem[16];
	int *dev;
	unsigned int *nframes ;
	unsigned char multi_stream_mjpg_enable;
};

typedef struct _still_info{
	int width;
	int height;
	unsigned int format;
}still_info;

typedef struct _sf_cmd{
	unsigned int addr;
	unsigned int length;
}sf_cmd_t;


typedef struct _i2c_cmd{
	unsigned char SlaveId;
	unsigned int addr;
	unsigned int addr_length;
	unsigned char data[5];
	unsigned int data_length;
}i2c_cmd_t;

static int get_vendor_verson(int dev, unsigned char szFlashVendorVer[12])
{
	return XU_SF_Read(dev, 0x154, szFlashVendorVer, 12);
}

static int video_open(const char *devname)
{
	struct v4l2_capability cap;
	int dev, ret;

	dev = open(devname, O_RDWR);
	if (dev < 0) {
		TestAp_Printf(TESTAP_DBG_ERR, "E: Error opening device %s: %d.\n", devname, errno);
		return dev;
	}

	memset(&cap, 0, sizeof cap);
	ret = ioctl(dev, VIDIOC_QUERYCAP, &cap);
	if (ret < 0) {
		TestAp_Printf(TESTAP_DBG_ERR, "E: Error opening device %s: unable to query device.\n",
		 	devname);
		close(dev);
		return ret;
	}

	printf("I: Device %s opened: %s.\n", devname, cap.card);
	return dev;
}

static void uvc_set_control(int dev, unsigned int id, int value)
{
	struct v4l2_control ctrl;
	int ret;

	ctrl.id = id;
	ctrl.value = value;

	ret = ioctl(dev, VIDIOC_S_CTRL, &ctrl);
	if (ret < 0) {
		TestAp_Printf(TESTAP_DBG_ERR, "unable to set gain control: %s (%d).\n",
			strerror(errno), errno);
		return;
	}
}

static int video_set_format(int dev, unsigned int w, unsigned int h, unsigned int format)
{
	struct v4l2_format fmt;
	int ret;

	memset(&fmt, 0, sizeof fmt);
	fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
	fmt.fmt.pix.width = w;
	fmt.fmt.pix.height = h;
	fmt.fmt.pix.pixelformat = format;
	fmt.fmt.pix.field = V4L2_FIELD_ANY;

	ret = ioctl(dev, VIDIOC_S_FMT, &fmt);
	if (ret < 0) {
		TestAp_Printf(TESTAP_DBG_ERR, "Unable to set format: %d.\n", errno);
		return ret;
	}

	TestAp_Printf(TESTAP_DBG_FLOW, "Video format set: width: %u height: %u buffer size: %u\n",
		fmt.fmt.pix.width, fmt.fmt.pix.height, fmt.fmt.pix.sizeimage);
	return 0;
}

static int video_set_still_format(int dev, unsigned int w, unsigned int h, unsigned int format)
{
	struct v4l2_format fmt;
	int ret;

	memset(&fmt, 0, sizeof fmt);
	fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
	fmt.fmt.pix.width = w;
	fmt.fmt.pix.height = h;
	fmt.fmt.pix.pixelformat = format;
	fmt.fmt.pix.field = V4L2_FIELD_ANY;

	if(GetKernelVersion()> KERNEL_VERSION (3, 0, 36))
		ret = ioctl(dev, UVCIOC_STILL_S_FMT_KNL3, &fmt);
	else
		ret = ioctl(dev, UVCIOC_STILL_S_FMT_KNL2, &fmt);

	if (ret < 0) {
		TestAp_Printf(TESTAP_DBG_ERR, "Unable to set still format: %d.\n", errno);
		if(errno == EINVAL)
		TestAp_Printf(TESTAP_DBG_ERR, "still function doesn't support?(%d)\n", errno);	
		return ret;
	}

	TestAp_Printf(TESTAP_DBG_FLOW, "still format set: width: %u height: %u buffer size: %u\n",
		fmt.fmt.pix.width, fmt.fmt.pix.height, fmt.fmt.pix.sizeimage);
	return 0;
}


static int video_set_framerate(int dev, int framerate, unsigned int *MaxPayloadTransferSize)
{
	struct v4l2_streamparm parm;
	int ret;

	memset(&parm, 0, sizeof parm);
	parm.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;

	ret = ioctl(dev, VIDIOC_G_PARM, &parm);
	if (ret < 0) {
		TestAp_Printf(TESTAP_DBG_ERR, "Unable to get frame rate: %d.\n", errno);
		return ret;
	}

	TestAp_Printf(TESTAP_DBG_FLOW, "Current frame rate: %u/%u\n",
		parm.parm.capture.timeperframe.numerator,
		parm.parm.capture.timeperframe.denominator);

	parm.parm.capture.timeperframe.numerator = 1;
	parm.parm.capture.timeperframe.denominator = framerate;

	ret = ioctl(dev, VIDIOC_S_PARM, &parm);
	if (ret < 0) {
		TestAp_Printf(TESTAP_DBG_ERR, "Unable to set frame rate: %d.\n", errno);
		return ret;
	}

    //yiling: get MaxPayloadTransferSize from explorehd driver
    if(MaxPayloadTransferSize)
        *MaxPayloadTransferSize = parm.parm.capture.reserved[0];

	ret = ioctl(dev, VIDIOC_G_PARM, &parm);
	if (ret < 0) {
		TestAp_Printf(TESTAP_DBG_ERR, "Unable to get frame rate: %d.\n", errno);
		return ret;
	}

	TestAp_Printf(TESTAP_DBG_FLOW, "Frame rate set: %u/%u\n",
		parm.parm.capture.timeperframe.numerator,
		parm.parm.capture.timeperframe.denominator);
	return 0;
}

int video_get_framerate(int dev, int *framerate)
{
	struct v4l2_streamparm parm;
	int ret;

	memset(&parm, 0, sizeof parm);
	parm.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;

	ret = ioctl(dev, VIDIOC_G_PARM, &parm);
	if (ret < 0) {
		TestAp_Printf(TESTAP_DBG_ERR, "Unable to get frame rate: %d.\n", errno);
		return ret;
	}

	TestAp_Printf(TESTAP_DBG_FLOW, "Current frame rate: %u/%u\n",
		parm.parm.capture.timeperframe.numerator,
		parm.parm.capture.timeperframe.denominator);
    *framerate = parm.parm.capture.timeperframe.denominator;
    
	return 0;
}

typedef enum {gop, bitrate, cvm, NONE} SETTING;

const static struct {
	SETTING setting;
	const char *str;
} conversion [] = {
	{gop, "gop"},
	{bitrate, "bitrate"},
	{cvm, "cvm"}
};

void usage(char *argv[]) {
	fprintf(stderr, "Usage: %s [-s] [option] [value] [-g] [option] [-d] [device]\n", argv[0]);
}

SETTING option_from_string(const char *str) {
	for (int i = 0; i < sizeof(conversion) / sizeof(conversion[0]); i++) {
		if (!strcmp(str, conversion[i].str)) return conversion[i].setting;
	}
	return NONE;
}

int set_option(int fd, char *setting, char* value) {
	SETTING option = option_from_string(setting);
	char *ptr;
	int ret;
	switch (option) {
		case gop: ret = XU_H264_Set_GOP(fd, atoi(value)); break;
		case bitrate: ret = XU_H264_Set_BitRate(fd, strtod(value, &ptr)); break;
		case cvm: ret = XU_H264_Set_Mode(fd, atoi(value)); break;
		default: ret = 1;
	}
	return ret;
}

int get_option(int fd, char *setting) {
	SETTING option = option_from_string(setting);
	char *ptr;
	int ret;
	unsigned int _gop;
	double _bitrate;
	unsigned int _cvm;
	switch (option) {
		case gop:
			ret = XU_H264_Get_GOP(fd, &_gop);
			printf("V: GOP=%d\n", _gop);
			break;
		case bitrate:
			ret = XU_H264_Get_BitRate(fd, &_bitrate);
			printf("V: BITRATE=%f\n", _bitrate);
			break;
		case cvm:
			ret = XU_H264_Get_Mode(fd, &_cvm);
			printf("V: MODE=%d\n", _cvm);
			break;
		default: ret = 1;
	}
	return ret;
}

int main(int argc, char *argv[])
{
	int dev, ret;

	int opt;
	enum { SET_OPT, GET_OPT } mode = SET_OPT;
	while ((opt = getopt(argc, argv, "sgd")) != -1) {
		switch (opt) {
			case 's': mode = SET_OPT; break;
			case 'g': mode = GET_OPT; break;
			case 'd':
				if (optind < argc) {
					/* Open the video device. */
					dev = video_open(argv[optind]);
					if (dev < 0)
						return 1;
					optind++;
				}
				break;
			default:
				usage(argv);
				return 1;
		}
	}

	if (!dev) {
		usage(argv);
	}

	char* setting = {0};
	char* value = {0};
	switch (mode) {
		case SET_OPT:
			if (optind > argc - 2) {
				usage(argv);
				return 1;
			}
			setting = argv[optind++];
			value = argv[optind];
			set_option(dev, setting, value);
			break;
		case GET_OPT:
			if (optind > argc - 1) {
				usage(argv);
				return 1;
			}
			setting = argv[optind++];
			get_option(dev, setting);
			break;
	}

	close(dev);
	return 0;
}
