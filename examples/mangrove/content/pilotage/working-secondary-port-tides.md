+++
title = "Working Secondary Port Tides"
date = "2025-06-02"
description = "Applying a standard port's tide table to a secondary port with time and height differences, and knowing when the method quietly breaks down."
tags = ["tides", "secondary-ports"]
toc = true
weight = 2

[extra]
skill = "Tides and Streams"
+++

Most anchorages and drying harbours on this coast do not have their own tide table. Instead, the almanac lists them as secondary ports: a set of time and height differences to apply against a nearby standard port that does get a full daily prediction. The arithmetic is short. Knowing when to trust it takes longer.

<!-- more -->

## The standard method

Look up the standard port's predicted high and low water, then apply the secondary port's listed differences directly.

```text
Standard port HW (Dover)          1148   5.4 m
Time difference (Halyard Sound)   −0042
Height difference (HW)            −1.3 m
-------------------------------------------
Secondary port HW                 1106   4.1 m
```

Low water is worked the same way against the standard port's predicted low water, using the secondary port's separate low-water differences — the time and height differences for high and low water are rarely the same figure, and almanacs list them as two distinct pairs for exactly that reason.

{{ alert(type="caution", body="Differences are only published for a limited range of standard-port heights. If the standard port's predicted range for the day falls outside that published range, interpolate between the nearest two rows rather than applying the closest one uncorrected — the error from picking the nearest row instead of interpolating can run to several tenths of a metre at a drying harbour, which matters far more there than it would on an open quay.") }}

## Interpolating a mid-range tide

Almanacs usually print differences for a mean spring range and a mean neap range. For a day's range between the two, interpolate the height difference the same way as a stream rate: proportionally, using where the day's actual range falls between the printed spring and neap ranges, not a flat average of the two.

## Where the method breaks down

Secondary port differences assume the tide at that port behaves like a time-and-height-shifted copy of the standard port's curve. That assumption holds well for most open coastal harbours and fails inside estuaries with their own resonance, river-flow effects, or a double high water — Halyard Sound shows a distinct stand at high water that a straight secondary-port calculation understates by nearly twenty minutes. Where a secondary port carries a note in the almanac about non-standard curve shape, treat the calculated figure as a starting estimate, not a number to plan a drying-out alongside a wall against.

Pair the height calculation here with [reading a tidal stream atlas](/pilotage/reading-a-tidal-stream-atlas/) — the same standard-port timing drives both, and a plan that gets the height right but the stream wrong is still a plan that arrives late.
