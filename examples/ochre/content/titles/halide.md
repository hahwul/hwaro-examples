+++
title = "Halide"
date = "2026-02-10"
description = "An eight-second channel ident for the documentary strand Meridian Docs, resolving out of film grain on a fast, honest deceleration curve."
[extra]
client = "Meridian Docs"
kind = "Broadcast Ident"
year = 2026
duration = "0:08"
frame_count = "200"
fps = 25
in_point = "00:00:00:00"
out_point = "00:00:08:00"
curve_name = "Halide Snap"
curve_bezier = "cubic-bezier(0.16, 1.00, 0.30, 1.00)"
curve_short = ".16 1 .30 1"
curve_d = "M24.0,134.5 C48.3,65.5 69.6,65.5 176.0,65.5"
+++

Meridian Docs runs an eight-second sting between every documentary on the channel, sometimes forty times a day. The brief was to make an ident that felt like it belonged to photography rather than broadcast — something closer to a contact sheet than a channel bug — and to make it fast enough that it never became the thing viewers reached for the remote during.

<!-- more -->

The name comes from silver halide, the light-sensitive compound in photographic film, and the curve that carries the whole ident is built to match how a print resolves out of a developing bath: **Halide Snap**, `cubic-bezier(0.16, 1, 0.3, 1)`. Almost all of its motion happens in the first quarter of its duration and then it coasts, barely moving, for the rest — the visual equivalent of an image appearing almost all at once and then only sharpening at the edges.

## Beat sheet

**00:00 – 00:01 — Flash frame.** A single overexposed white frame, four frames long at 25fps, standing in for a shutter click. No sound but a soft mechanical clack, sampled from an actual folding camera.

**00:01 – 00:04 — Grain resolves to logotype.** A field of monochrome film grain, generated procedurally and never repeating, sharpens into the Meridian Docs wordmark on Halide Snap. Because the curve front-loads nearly all its motion, the mark seems to arrive almost instantly and then hangs, very slightly still-refining, for the next two seconds — closer to how an eye adjusts than how a logo animates.

**00:04 – 00:06 — Hold.** The wordmark sits static over a slow, barely-perceptible grain shimmer. This is the only fully still beat in the ident and it is the one that does the branding work — everything before it is arrival, everything after it is exit.

**00:06 – 00:08 — Exit to black.** A short contrast pull, four frames, takes the frame to black exactly as the channel's continuity announcer starts the next line. No curve on the exit at all — a straight linear fade, deliberately, because Halide Snap is an entrance curve and using it on the way out would have made the ident feel like it was announcing itself twice.

```text
curve      halide-snap
in         00:00:00:00
out        00:00:08:00
duration   200 frames @ 25fps
bezier     0.16, 1, 0.3, 1
reused on  Meridian Docs' end-board and two sponsor bumpers
```

Because the ident runs so often, Meridian Docs asked for a version that could be trimmed to four seconds for tight breaks. Halide Snap survives the cut cleanly — you lose the hold, not the arrival — which is exactly what a front-loaded curve is for.
