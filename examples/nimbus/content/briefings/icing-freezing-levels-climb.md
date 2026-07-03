+++
title = "Icing, Freezing Levels, and the Climb"
date = "2026-01-20"
description = "Reading a winter METAR for the icing threat, and why the freezing level decides whether you climb."
tags = ["icing", "winter", "freezing-level"]
toc = true
[extra]
station = "KRNO"
kind = "METAR"
metar = "KRNO 201156Z 20015KT 6SM -SN BKN035 OVC050 M02/M05 A2966"
decoded = "Reno, before dawn in January: south wind 15 knots, 6 miles in light snow, broken 3,500 feet, freezing at the surface. Expect structural icing in the cloud layer."
+++

Winter METARs carry a threat that summer ones do not: ice on the airframe. For a VFR trainer with no de-ice equipment, the freezing level and the cloud layers together decide whether a climb is a routine departure or a slow-motion trap.

<!-- more -->

## The cold-weather groups

```text
20015KT    south wind at 15 knots
6SM -SN    6 miles in light snow
BKN035     broken cloud at 3,500 ft
OVC050     overcast at 5,000 ft
M02/M05    temperature −2°C, dew point −5°C  (M = minus)
A2966      altimeter 29.66 — a deep winter low
```

The `M` prefix is the whole story: **`M02` means −2°C at field level.** It is already below freezing on the ground, and it only gets colder as you climb. Any visible moisture &mdash; that `-SN` and those `BKN`/`OVC` layers &mdash; is a candidate for airframe ice.

## The icing danger zone

Structural icing needs two ingredients at once: **visible moisture** and a temperature **between roughly 0°C and −20°C**, with the nastiest clear ice near 0°C to −10°C. Read the report against that band:

- Surface is −2°C, so the freezing level is at or below the field.
- The cloud from 3,500 to above 5,000 feet sits squarely in the icing band.
- Light snow means the air is already shedding moisture &mdash; supercooled droplets are plausible in the layers.

A climb through `BKN035 OVC050` in these temperatures is a climb through an icing layer in an aircraft not certified for it.

## What to do with it

- **Find the freezing level and the layer tops.** If the tops are low and you can remain clear of cloud in above-freezing air, the picture changes. Here you cannot &mdash; it is freezing on the ground.
- **Ice steals climb performance exactly when you need it.** Airframe ice adds weight and wrecks the wing's lift while you are low, slow, and trying to out-climb terrain. The Sierra does not forgive that.
- **The winter no-go is a skill.** Reading `M02/M05` under a `BKN`/`OVC` deck and choosing to stay on the ground is not timidity; it is the correct answer to the report in front of you.

Ice is the one hazard a clear-eyed reading of a winter METAR will almost always warn you about in advance. Read the minus sign, find the moisture, and respect the band. For the summer inverse &mdash; a clear sky that still says no-go &mdash; see [Density Altitude on a Hot Afternoon](@/briefings/density-altitude-hot-afternoon.md).
