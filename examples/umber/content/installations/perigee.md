+++
title = "Perigee"
date = "2026-02-21"
description = "A restrained 9-minute closing sequence for a dome show, its single pad decaying in step with the lighting cue."
[extra]
venue = "Undersill Planetarium, Coldwater Civic Observatory"
format = "Planetarium dome show"
duration = "9 min"
topology = "18-speaker ring array + 1 center floor pad"
speakers = 18
subs = 1
wave = [31, 31, 32, 33, 26, 24, 24, 28, 20, 26, 24, 17, 20, 18, 17, 22, 12, 11, 20, 13, 10, 11, 11, 17, 8, 8, 11, 10, 14, 13, 7, 5, 12, 13, 2, 10, 11, 8, 3, 9, 8, 3, 7, 2, 2, 3, 3, 4]
+++

Perigee is the closing sequence of Coldwater's winter program, nine minutes built around the Moon's closest approach of the year. Where the season's other pieces reach for scale — [Coronal Rain](/installations/coronal-rain/) most of all — this one is an exercise in restraint. The brief from the planetarium director was one line: let it go quiet.

<!-- more -->

## Speaker topology

An 18-speaker ring runs around the dome's equator, carrying a single sustained pad with no panning automation at all — every other piece in this catalog moves sound around the room; this one holds still and lets the visual do the work. One sub-bass floor pad sits under the center walkway for the moonrise swell that opens the sequence.

```
RING01-18  dome.equator[1-18]  -7.0 dB  LPF 4kHz   (static, no automation)
FLOOR      walkway.center.sub  -1.0 dB  HPF 20Hz LPF 55Hz
```

## Mix notes

The pad's decay curve was matched by hand to the DMX fade sheet for the closing lighting cue, so the room hits black and the sound bottoms out on the same frame — timed against the console's fade log rather than by ear, because a half-second of drift was audible in early previews and read as sloppy.

No reverb was added; the dome's own late reflections, usually treated as a problem to manage, carry the whole tail. It is the shortest piece in the catalog and the one visitors ask about most.
