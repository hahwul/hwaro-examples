+++
title = "Dyeing PBT: A Deep Violet Set for the Derecho60"
date = "2026-03-08"
description = "The board that named the site. A blank PBT set dyed a deep violet-black at the kitchen stove, dried under the desk lamp, and dropped onto Alpaca linears over a polycarbonate plate."
tags = ["60-percent", "linear", "keycaps"]

[extra]
no = "LOG 06"
board = "Derecho60"
switches = "Alpaca V2, hand-lubed"
plate = "Polycarbonate"
+++

This is the board the whole site is named after, so it had better be good. I could not find a keycap set in the exact deep violet I kept picturing — the color of the sky right before a summer storm — so I dyed one. Blank PBT caps, a pot of iDye Poly, and an afternoon at the stove turned a pack of white blanks into the set that ties this whole desk together.

<!-- more -->

## Why PBT dyes and ABS does not

Dye works by soaking into the plastic, and PBT takes it evenly where ABS blotches and warps. It only ever goes darker, never lighter, so you start with white or a pale color and go down from there. I wanted near-black with a violet cast, which meant a long soak and a little patience.

## The dye bath

The process is closer to cooking than to a build, but it is worth logging precisely because a few degrees matters:

- Water just under a simmer — around 90°C, never a rolling boil, or the caps deform.
- One bottle of violet iDye Poly plus a small squeeze of black to deepen it.
- A splash of dish soap so the dye wets the plastic evenly.
- Caps in for about twenty minutes, stirred constantly so nothing rests on the hot base of the pot.

I pulled them a shade lighter than my target because wet PBT always looks darker than dry. Then a cold rinse, a soapy wash to stop the dye, and a slow dry spread on a towel directly under the desk lamp overnight. The warm light did nothing chemically; it just looked right, forty-eight violet caps glowing under the arm lamp while they dried.

## The board underneath

The caps went onto a build chosen to match their mood. Alpaca V2 linears, lubed with 205g0, on a polycarbonate plate — PC is flexy and warm-sounding, which keeps a 60% from feeling brittle. I left the underglow on a slow breathing animation in a matching hue:

```c
// rgblight — one slow violet breath, nothing flashy
rgblight_sethsv(205, 180, 120);
rgblight_mode(RGBLIGHT_MODE_BREATHING + 2);
```

## Worth it?

Completely. The set is not perfectly uniform — one row came out a hair lighter, and if you look under bright daylight you can find it. Under the desk lamp, at night, typing, it is exactly the storm-violet I had in my head. Some projects you build to learn. This one I built to look at.
