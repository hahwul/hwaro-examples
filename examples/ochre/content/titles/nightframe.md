+++
title = "Nightframe"
date = "2025-11-03"
description = "A five-second rebrand sting for the broadcast network Vantage One, snapping a geometric frame shut on a steep, symmetric easing curve."
[extra]
client = "Vantage One"
kind = "Network Ident"
year = 2025
duration = "0:05"
frame_count = "125"
fps = 25
in_point = "00:00:00:00"
out_point = "00:00:05:00"
curve_name = "Nightframe Snap"
curve_bezier = "cubic-bezier(0.83, 0.00, 0.17, 1.00)"
curve_short = ".83 0 .17 1"
curve_d = "M24.0,134.5 C150.2,134.5 49.8,65.5 176.0,65.5"
+++

Vantage One's rebrand replaced a soft, rounded logo with a hard rectangular frame mark, and asked every ident in the package to snap shut like a shutter rather than drift into place like the old brand had. The network's brief used the word "decisive" nine times in a two-page document. We took it seriously.

<!-- more -->

The whole package — six stings, a top-of-hour ident, and a sponsor bumper template — runs on one curve family built around **Nightframe Snap**, `cubic-bezier(0.83, 0, 0.17, 1)`. It is nearly symmetric and holds almost still through the middle third of its duration before accelerating hard into both ends, which reads as a pause-then-strike rather than a smooth glide. Where Undertow Pull is about a body fighting water, Nightframe Snap is about a shutter, a gate, a door with a good hinge.

## Beat sheet

**00:00 – 00:01 — Four frame edges enter.** Four thin rectangles slide in from beyond frame on each side, holding almost still at the two-second mark of the curve's near-flat middle before the final acceleration pulls them into a closed frame at center. The near-flat middle is the whole trick: it reads as tension before the snap.

**00:01 – 00:02 — Frame closes.** The four edges meet to form Vantage One's rectangular mark in a single hard beat, four frames long, timed to a low percussive hit in the network's four-note sonic ID. No overshoot, no bounce — the frame closes once and does not move again.

**00:02 – 00:04 — Hold and channel bug resolve.** The closed frame holds at full opacity while the current program's channel bug fades up inside it on a much gentler linear ramp — deliberately un-snapped, so the bug reads as information rather than branding.

**00:04 – 00:05 — Frame opens to program.** The reverse of the entrance: near-flat for the first half, then a hard acceleration as the four edges snap back out past frame, timed so the picture underneath is already rolling before the last edge clears.

```text
curve      nightframe-snap
in         00:00:00:00
out        00:00:05:00
duration   125 frames @ 25fps
bezier     0.83, 0, 0.17, 1
reused on  five further Vantage One stings, one sponsor template
```

The network's continuity team asked for a version with no snap at all, for use during breaking news, where a hard shutter sound reads as alarming rather than confident. That variant uses a flat linear ramp with the sonic ID muted — proof that a curve library is as much about knowing when not to use the signature move as it is about building it.
