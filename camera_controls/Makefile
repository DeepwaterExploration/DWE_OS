#compiler
#CC = /opt/buildroot-gcc342/bin/mipsel-linux-uclibc-gcc

#flags
#CFLAGS = -Wall -ansi -g
CFLAGS = -g 
CFLAGS += -I/usr/src/linux-$(shell uname -r)/include/generated/uapi -I/usr/src/linux-$(shell uname -r)/include/uapi #add include header directories for kernel 3.10.36
CFLAGS += -I/usr/src/linux-$(shell uname -r)/include
#CFLAGS = -g -I/usr/src/linux-2.6.36.4/include

#objects
OBJS = explorehd_UVC_TestAP.o explorehd_xu_ctrls.o v4l2uvc.o nalu.o cap_desc_parser.o cap_desc.o

#install path
INSTALL_PATH = ./

all: explorehd_UVC_TestAP

explorehd_UVC_TestAP: $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o $@ -lpthread

explorehd_UVC_TestAP.o: explorehd_UVC_TestAP.c explorehd_xu_ctrls.h
	$(CC) $(CFLAGS) -c -o $@ $<

explorehd_xu_ctrls.o: explorehd_xu_ctrls.c explorehd_xu_ctrls.h
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	-rm -f *.o *.ko .*.cmd .*.flags *.mod.c


