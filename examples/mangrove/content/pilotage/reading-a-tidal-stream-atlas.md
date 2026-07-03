+++
title = "Reading a Tidal Stream Atlas"
date = "2025-04-18"
description = "Diamond references, hourly rate tables, and the spring-neap interpolation that turns an atlas page into a course to steer."
tags = ["tides", "tidal-streams"]
toc = true
weight = 1

[extra]
skill = "Tides and Streams"
+++

A tidal stream atlas is a set of chart panels, one for each hour before and after high water at a named standard port, showing the direction and rate of the tidal stream at lettered diamonds scattered across the area. Read correctly, it turns "the tide will be against us" into a specific set and drift you can lay off against your intended course.

<!-- more -->

## Finding your hour

Look up high water at the standard port the atlas is referenced to — Dover, for most atlases covering this coast — then count hours before or after it to find which panel applies to the time you will be at the diamond in question. The panel numbered "+2" applies two hours after that high water, regardless of what the tide is doing locally at your own position.

## Reading a diamond

Each diamond on the panel carries an arrow showing the stream's direction and a reference letter linking to a table of rates at that diamond for both springs and neaps.

| Hour relative to HW Dover | Spring rate (kn) | Neap rate (kn) | Direction |
|---|---|---|---|
| −3 | 1.8 | 0.9 | 245° |
| −2 | 2.4 | 1.2 | 251° |
| −1 | 2.6 | 1.3 | 258° |
| 0 (HW Dover) | 1.1 | 0.6 | 274° |
| +1 | 0.4 | 0.2 | 096° |
| +2 | 1.6 | 0.8 | 104° |

## Interpolating between springs and neaps

Few days fall exactly on a spring or a neap. Find how many days you are into the springs-to-neaps cycle, expressed as a fraction, and interpolate the rate on a straight line between the two columns:

```text
rate = neap + (spring − neap) × (days_since_neap / days_in_half_cycle)
```

A day roughly a third of the way from neaps to springs, at the +2 diamond above, gives 0.8 + (1.6 − 0.8) × 0.33 ≈ 1.07 knots — closer to the neap figure than the halfway point between the two, which is exactly what a linear interpolation should give that early in the cycle.

Treat atlas rates as a reliable average, not a guarantee for the exact minute — funnelling water round a headland or through a narrows can run noticeably faster than the open-water rate printed at the nearest diamond.
