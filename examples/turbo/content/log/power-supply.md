+++
title = "A power supply that still smelled of 1991"
date = "2026-05-18"
description = "Random resets under load, a five-volt rail at 4.71, and eleven capacitors that had been tired for years."
tags = ["repair", "hardware"]
[extra]
file = "PSU.TXT"
bytes = "4,655"
+++

The machine began resetting itself at random, but only with the hard disk seeking and the floppy motor running at once. Faults that need two things to happen together are usually about power.

<!-- more -->

Logic of this generation wants five volts and tolerates about five percent either way, so the floor is 4.75. Measured at a drive connector with the machine idle, the rail read 4.96. With both drives busy it sagged to 4.71 and carried 180 millivolts of ripple, which is the supply telling you its output capacitors have stopped smoothing anything.

## Inside the supply

Unplug it and leave it for a day first. The primary capacitors hold enough charge to matter long after the cord is out.

Two of the output capacitors had domed tops. None had leaked, but an electrolytic capacitor can lose most of its value while still looking respectable, and these had spent thirty-five years next to a heatsink.

All eleven electrolytics on the secondary side were replaced with low-impedance parts rated for 105 degrees:

```text
QTY   VALUE      RATING   RAIL
  4   2200 uF    10 V     +5
  2   1000 uF    16 V     +12
  2    470 uF    16 V     -12, -5
  3     47 uF    50 V     control
```

The fan was replaced at the same time. It was the loudest part of the computer and moved the least air.

## Result

Idle, 5.04 volts. Both drives busy, 5.01, with ripple under 30 millivolts. No resets in two weeks, including an afternoon spent copying the whole disk to floppies on purpose.
