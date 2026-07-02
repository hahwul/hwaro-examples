+++
title = "Hello, Arm"
description = "Install the SDK, find your arm on a serial port, and make it wave — all before your tea goes cold."
date = "2025-02-11"
weight = 1
toc = true
[extra]
difficulty = 1
difficulty_label = "warm-up"
minutes = 20
+++

This is the tutorial every Tuff project starts with. By the end of it your
arm will have homed itself, waved at you, and parked — and you will have
seen the whole shape of the SDK, because honestly, there is not much more
shape than this.

<!-- more -->

## What you need

A Crabby A2 or A4 arm (or anything running `tuffball` firmware), a USB
cable, and Python 3.10 or newer. No soldering, no drivers to hunt down —
the serial transport uses the port your operating system already exposes.

## Install the SDK

One package, batteries included:

```bash
pip install tuff
```

That gives you the library and the `tuff` command line. Check the install
and list every robot Tuff can see:

```bash
tuff devices
```

```text
FOUND  serial:/dev/ttyUSB0   Crabby A2  fw 2.4.1  "crabby-7f3"
```

If the list is empty on Linux, your user probably is not in the `dialout`
group yet. Run `sudo usermod -aG dialout $USER`, log out, log back in, and
try again. On macOS and Windows the port shows up on its own.

## Connect and wave

Open a Python file — or just the REPL — and write your first robot program:

```python
import tuff

arm = tuff.Arm.connect("auto")   # grabs the first arm it finds
arm.home()                       # slow, careful trip to a known pose
arm.wave(times=2)                # the traditional greeting
arm.park()                       # folds down and releases the servos
```

Run it. The arm sweeps to its home pose, waves twice, and settles. The
`"auto"` string is a convenience for one-robot desks; when you own more
hardware you can be explicit: `tuff.Arm.connect("serial:/dev/ttyUSB0")`.

## What just happened

Every Tuff verb is a blocking call that returns when the motion is done, so
scripts read top-to-bottom like a story. `home()` is always your first move
after connecting — it gives the arm a known starting point so later moves
mean what you think they mean. And `park()` matters: it powers the servos
down gently instead of leaving them straining against gravity all night.

Next up: the same ten-minute treatment for a robot with wheels, in
[Rover, Meet Wifi](/tutorials/rover-meet-wifi/).
