+++
title = "Rover, Meet Wifi"
description = "Pair a Pebble rover over your home network, drive a square, and learn the one safety habit that matters."
date = "2025-03-06"
weight = 2
toc = true
[extra]
difficulty = 1
difficulty_label = "warm-up"
minutes = 25
+++

Arms stay bolted to the desk, so a cable is fine. Rovers wander, so they
talk to Tuff over wifi instead — same library, same verbs, one pairing step.
This tutorial gets a Pebble rover on your network and drives it in a square
around the kitchen.

<!-- more -->

## Pair the rover

Fresh out of the box, a Pebble broadcasts its own setup network for five
minutes after power-on. You never have to join it by hand — the `tuff`
command line does the whole dance:

```bash
tuff pair --wifi
```

```text
Listening for rovers in setup mode... found "pebble-42"
Send home wifi credentials to pebble-42? [y/N] y
Pebble is joining your network... paired.
Reachable at wifi://pebble-42.local
```

Pairing happens once. The rover remembers your network, and from now on
`tuff devices` lists it whenever it is powered on and in range.

## Drive a square

Connecting over wifi looks exactly like connecting over serial — only the
address changes:

```python
import tuff

rover = tuff.Rover.connect("wifi://pebble-42.local")

for side in range(4):
    rover.drive(distance=0.5)   # metres, straight ahead
    rover.turn(90)              # degrees, positive is left

rover.stop()
```

Put the rover on the floor first — a table is a cliff from its point of
view — then run it. It traces a half-metre square and comes back to roughly
where it started. Roughly, because wheels slip; dead reckoning drifts, and
that is normal. The sensors tutorial tightens this up later.

## The safety habit

Wifi means the rover keeps doing whatever it was last told even if your
script crashes or your laptop sleeps. So Tuff rovers ship with a dead-man
timer: if the connection goes quiet for two seconds, the motors stop. You
can feel it work — start a long `drive()`, close your laptop lid, and the
Pebble coasts to a halt.

The habit worth building anyway: end every session with `rover.stop()`,
the same way you end every arm session with `arm.park()`. Robots that
finish in a known state are robots you still like next weekend.

With both transports under your fingers, it is time to teach the arm
something by hand in [Teach Mode and Poses](/tutorials/teach-mode/).
