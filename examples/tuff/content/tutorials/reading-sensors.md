+++
title = "Reading Sensors"
description = "Bumpers, the line sensor, and the telemetry stream: make the rover react to the world instead of just rolling through it."
date = "2025-06-02"
weight = 4
toc = true
[extra]
difficulty = 2
difficulty_label = "tinkerer"
minutes = 40
+++

A rover that only follows a script is a very slow way to draw squares. This
tutorial wires up the Pebble's senses — bumpers, the downward line sensor,
and the battery — so your code can answer the world instead of ignoring it.

<!-- more -->

## Read a sensor once

Every sensor hangs off `rover.sensors` and can be read directly, no
callbacks required:

```python
import tuff

rover = tuff.Rover.connect("wifi://pebble-42.local")

print(rover.sensors.battery.percent)     # 87
print(rover.sensors.bumper.front)        # False
print(rover.sensors.line.position)       # -0.4  (left of the line)
```

Reads are cheap — the rover streams sensor frames continuously over wifi,
and reading just grabs the freshest one. You are never waiting on a round
trip to ask a question.

## React with handlers

For events that should interrupt whatever is happening, register a handler.
Handlers run in Tuff's background thread the moment a matching frame comes
in:

```python
@rover.sensors.bumper.on_press
def backpedal(event):
    rover.stop()
    rover.drive(distance=-0.2)
    rover.turn(120)

rover.drive(speed=0.4)    # wander until something objects
```

That is a whole roaming robot: drive until a bumper fires, back off, turn
most of the way around, and — because `drive(speed=...)` with no distance
just keeps going — resume wandering. Vacuum-cleaner robotics in nine lines.

## Follow a line

The line sensor reports where the tape is under the rover as a number from
-1.0 (far left) to 1.0 (far right). Steering toward zero is the entire
algorithm:

```python
while True:
    error = rover.sensors.line.position
    rover.steer(turn=error * 0.6, speed=0.3)
```

Lay a loop of electrical tape on the floor and set the Pebble down on it.
The 0.6 is a gain: too low and it corners lazily and slides off, too high
and it wiggles down the straightaways like an excited dog. Tune it and
watch the behavior change — that feedback loop is the actual lesson here.

## Watch everything at once

When behavior gets confusing, open the firehose in a second terminal:

```bash
tuff telemetry pebble-42 --fields line,bumper,battery
```

It prints one line per frame, live. Most "why did it do that" mysteries
dissolve the moment you can see what the robot saw. Next: back to the arm,
this time with something in its hand — [Pick and Place](/tutorials/pick-and-place/).
