+++
title = "640K, counted honestly"
date = "2025-09-14"
description = "Four megabytes installed, 540K free. Where the rest went, and how to ask for it back."
tags = ["dos", "bios"]
[extra]
file = "HIMEM.TXT"
bytes = "5,204"
+++

The memory test counts to 4096K and prints OK. Then the machine boots, and a program that needs 590K of memory refuses to start because only 540K is free.

<!-- more -->

Both numbers are true. The first megabyte is the only memory a real-mode program can see, and the top 384K of that megabyte is reserved for video, option ROMs, and the BIOS itself. What remains is the famous 640K, and every driver you load at boot takes its share before your program gets a turn.

The other three megabytes sit above the line, counted and idle, until a memory manager is told to use them.

## The startup files, before and after

Before, as found:

```text
DEVICE=C:\DOS\ANSI.SYS
DEVICE=C:\MOUSE\MOUSE.SYS
FILES=40
BUFFERS=30
```

After:

```text
DEVICE=C:\DOS\HIMEM.SYS
DEVICE=C:\DOS\EMM386.EXE NOEMS
DOS=HIGH,UMB
DEVICEHIGH=C:\DOS\ANSI.SYS
DEVICEHIGH=C:\MOUSE\MOUSE.SYS
FILES=30
BUFFERS=15
```

The first two lines open the memory above one megabyte and carve the unused gaps in the reserved area into blocks. The third moves most of DOS itself up there. The `DEVICEHIGH` lines put each driver into a gap instead of into the 640K.

## Result

Free conventional memory went from 540K to 619K without removing a single driver. Order matters: the largest driver should load first, because the gaps are different sizes and a big driver arriving late finds only small ones left.
