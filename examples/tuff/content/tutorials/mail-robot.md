+++
title = "The Mail Robot"
description = "The capstone: a rover courier and an arm that loads it, coordinated by one script into a two-robot delivery service."
date = "2026-01-27"
weight = 6
toc = true
[extra]
difficulty = 3
difficulty_label = "deep end"
minutes = 90
+++

This is the tutorial the other five were secretly training you for. One
Crabby arm on the desk, one Pebble rover on the floor, and a script that
turns them into a mail service: the arm loads a small parcel onto the
rover's deck, the rover ferries it across the room, and everything reports
back when the delivery lands.

<!-- more -->

## Two robots, one script

`tuff.Team` connects several robots and shuts them all down safely no
matter how the script exits — it is `park()` and `stop()` with the
discipline of a context manager:

```python
import tuff

with tuff.Team(
    arm=tuff.Arm.connect("auto"),
    rover=tuff.Rover.connect("wifi://pebble-42.local"),
) as team:
    run_mail_route(team.arm, team.rover)
```

If `run_mail_route` raises, the arm still parks and the rover still stops.
Capstone rule number one: the failure path is part of the project.

## Mark the loading dock

The rover needs to stop in exactly the same spot for the arm to load it —
that spot is the loading dock. Lay a short tape line ending in a cross-bar
where the rover should halt, right at the edge of the arm's calibrated
workspace. The rover follows the tape in, feels the cross-bar with its line
sensor, and stops square every time:

```python
def dock(rover):
    while rover.sensors.line.width < 0.9:      # cross-bar fills the sensor
        error = rover.sensors.line.position
        rover.steer(turn=error * 0.6, speed=0.2)
    rover.stop()
```

That trick — navigate sloppily, then land on a precise mark — is how real
warehouse robots do it too. Dead reckoning gets you near; the mark makes
you exact.

## The route

With docking solved, the route is a story in four sentences:

```python
def run_mail_route(arm, rover):
    dock(rover)                              # rover arrives at the dock

    arm.goto_pose("over_parcel")             # poses from teach mode
    arm.move_to(x=150, y=200, z=6)
    arm.gripper.close(force=0.25)
    arm.move_to(x=150, y=40, z=80)           # over the rover's deck
    arm.gripper.open()                       # parcel delivered to courier
    arm.goto_pose("rest")

    rover.turn(180)
    rover.drive(distance=3.0, speed=0.5)     # across the room
    print("Mail delivered:", rover.sensors.battery.percent, "% battery left")
```

Every line is a verb you already know — teach-mode poses, coordinate moves,
gripper force, line docking. Nothing new was needed; that is the point.

## Where to take it

The Bench forum's mail-robot thread has variants with two rovers running
opposite directions, a doorbell webhook that triggers a run, and one
legendary build that delivers toast. The pattern scales because the
architecture is honest: robots do verbs, sensors answer questions, and one
script reads like the plan you would explain to a friend.

You have finished the trail. Go build the thing you actually bought the
robot for — and when it works, tell the Bench.
