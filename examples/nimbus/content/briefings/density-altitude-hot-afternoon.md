+++
title = "Density Altitude on a Hot Afternoon"
date = "2025-07-09"
description = "Why a clear, calm summer METAR at a mountain field can be the most dangerous report you read all year."
tags = ["density-altitude", "performance", "mountain"]
toc = true
[extra]
station = "KTRK"
kind = "METAR"
metar = "KTRK 092355Z 22009KT 10SM SKC 31/06 A3018"
decoded = "Truckee, late afternoon: light wind, sky clear, 31°C at a 5,900-foot field. Beautiful VFR — and a density altitude near 9,000 feet."
+++

The scariest METAR is not always the stormy one. This report from Truckee is severe clear, light wind, unlimited visibility &mdash; the kind of afternoon that lures a low-time pilot into a short, hot, high takeoff that the airplane simply cannot make.

<!-- more -->

## The report looks harmless

```text
22009KT   light wind, favoring runway 20
10SM SKC  ten miles, sky clear
31/06     31°C — very warm for a 5,900 ft field
A3018     altimeter 30.18
```

Nothing here trips a VFR alarm. The danger is a number the METAR does not print: **density altitude**, the altitude the air *feels* like to your wing and propeller.

## Estimating it in your head

A workable field approximation:

```text
Pressure altitude ≈ field elevation + (29.92 − altimeter) × 1000
                  ≈ 5900 + (29.92 − 30.18) × 1000
                  ≈ 5900 − 260 = 5640 ft

Density altitude ≈ pressure altitude + 120 × (OAT − ISA temp)
ISA temp at 5640 ft ≈ 15 − (2 × 5.64) ≈ 4°C
                  ≈ 5640 + 120 × (31 − 4)
                  ≈ 5640 + 3240 ≈ 8,880 ft
```

Your normally aspirated trainer will accelerate, climb, and turn as if it were nearly **9,000 feet up** &mdash; on the ground. Takeoff roll lengthens, climb rate sags, and the service ceiling drops toward your cruising altitude.

## The go/no-go questions

- **Does the performance chart still close?** Run the actual takeoff and climb numbers for 8,900 ft DA and your real weight, then add margin. If the runway math is tight at sea level, it will not work here.
- **When is the coolest air?** Density altitude tracks temperature. A dawn departure at 12°C instead of a 5 pm departure at 31°C can lop thousands of feet off the effective altitude.
- **Are you at max gross?** High, hot, and heavy is the classic accident chain. Trade fuel or bags for margin, or split the trip.

A clear-sky mountain METAR in July deserves more respect than a rainy one in the flatlands. Read the temperature against the elevation, do the arithmetic, and let the numbers &mdash; not the blue sky &mdash; make the call.
