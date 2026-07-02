+++
title = "Pick and Place"
description = "Gripper control, coordinate moves, and a calibrated workspace — the arm finally earns its keep."
date = "2025-09-14"
weight = 5
toc = true
[extra]
difficulty = 3
difficulty_label = "deep end"
minutes = 60
+++

Everything so far moved the arm through poses you recorded by hand. This
tutorial adds the two things a working arm needs: a gripper that knows how
hard to squeeze, and a coordinate system so you can say *where* instead of
*which joint angles*. Clear the desk — you are about to sort real objects.

<!-- more -->

## Meet the gripper

The Crabby's gripper is just another device on the arm, with one crucial
parameter:

```python
import tuff

arm = tuff.Arm.connect("auto")
arm.home()

arm.gripper.open()
arm.gripper.close(force=0.3)    # fraction of max squeeze
```

`force=0.3` grips a wooden block firmly; `force=0.1` picks up a marshmallow
without denting it. The gripper stops closing the moment it meets the set
resistance, so one call handles objects of any size. If it closes fully
without meeting anything, `arm.gripper.holding` is `False` — check it, and
you know whether the pick actually worked.

## Calibrate a workspace

Coordinate moves need a shared origin. Tuff's calibration is teach mode
with a ruler — you touch the arm to three marked points and it solves the
rest:

```bash
tuff calibrate crabby-7f3
```

```text
Touch the tip to the FRONT-LEFT corner mark... ok
Touch the tip to the FRONT-RIGHT corner mark... ok
Touch the tip to the BACK-LEFT corner mark... ok
Workspace saved: 320mm x 240mm, origin front-left.
```

Print the corner marks on a sheet of paper (the box lid works too), tape it
down, and calibrate once. From then on, `x` and `y` are millimetres on that
sheet and `z` is height above it.

## Move by coordinates

With a workspace saved, `move_to()` opens up:

```python
arm.move_to(x=80, y=120, z=60)          # hover over the pickup spot
arm.move_to(x=80, y=120, z=8)           # descend to grab height
arm.gripper.close(force=0.3)

if arm.gripper.holding:
    arm.move_to(x=240, y=60, z=60)      # carry it to the drop zone
    arm.gripper.open()
else:
    print("Missed — nothing in the jaws.")
```

Under the hood Tuff runs inverse kinematics for the Crabby's four joints
and refuses moves outside the calibrated volume with a clear
`OutOfReachError` instead of a grinding noise. If you ask for something the
arm cannot do, you find out in Python, not in smoke.

## The sorting loop

Combine the pieces and you get the classic desk demo — an arm that sorts
blocks by where you drop them:

```python
PICKUP = dict(x=80, y=120)
BINS = {"left": dict(x=240, y=40), "right": dict(x=240, y=180)}

for target in ["left", "right", "left"]:
    arm.move_to(**PICKUP, z=60)
    arm.move_to(**PICKUP, z=8)
    arm.gripper.close(force=0.3)
    arm.move_to(**PICKUP, z=60)
    arm.move_to(**BINS[target], z=60)
    arm.gripper.open()

arm.park()
```

Run it with three blocks staged on the pickup mark. When the last one drops,
you have written a real pick-and-place cell — the same loop that runs in
factories, minus the safety cage. The finale puts this arm on delivery duty
with a rover courier: [The Mail Robot](/tutorials/mail-robot/).
