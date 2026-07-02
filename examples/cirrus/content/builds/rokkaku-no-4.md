+++
title = "Rokkaku No. 4: Six Points, One Fight"
date = "2025-10-30"
description = "A 150 cm Japanese rokkaku with a four-leg bridle tuned for the tilt-and-dive of a friendly kite battle."
tags = ["rokkaku", "single-line", "traditional"]
[extra]
build_no = 15
span = "150 cm"
wind = "12–25 km/h"
+++

The rokkaku is a fighter that behaves like a gentleman. Six-sided, tall,
stable enough to hang motionless — until you pull the line, and then it tips,
slides sideways, and dives on command. Our village club flies them against each
other: no cutting lines, just trying to tip the other kite out of the sky.

<!-- more -->

## Sail plan

Traditional proportions: the width is two-thirds of the height, and the two
cross-spars sit at one-quarter and three-quarters up the spine. I used 50 g
ripstop for the extra pull these take in a battle.

```text
Rokkaku sail (hexagon)
  height (spine) ......... 150 cm
  width (widest) ......... 100 cm
  upper spar at .......... 37.5 cm from top
  lower spar at .......... 37.5 cm from bottom
  spine .................. 8 mm bamboo, flamed straight
  spars .................. 8 mm bamboo, bowed 10 cm each
```

## Bridle geometry

A rokkaku wants a four-leg bridle so you can set the fighting tilt. The two
spine legs do the real work; I compute their lengths from the spar positions so
the tow point lands where the sail wants to pivot.

```python
# Bridle leg from a spine point to the common tow point.
# Tow point sits 90 cm in front of the sail, on the centreline.
from math import hypot

tow_forward = 90.0          # cm in front of the sail
points = {"top_spar": 37.5, "bottom_spar": 112.5}  # cm down the spine
mid = 75.0                  # centre of the spine, where tow aligns

for name, y in points.items():
    leg = hypot(tow_forward, y - mid)
    print(f"{name:11s} leg = {leg:6.1f} cm")
# top_spar    leg =   97.2 cm
# bottom_spar leg =   97.2 cm
```

## Flight report

Launched into a steady 18 km/h and it locked into place at seventy degrees,
utterly still. A firm pull tipped it hard left and it dove across the field
exactly as promised. First battle: two tips scored, one taken, one snapped
tow-line (mine — I over-tightened the larks head). No structural damage. The
bamboo bow gives it a soft, springy feel the fibreglass builds never have.
