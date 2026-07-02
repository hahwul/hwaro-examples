+++
title = "Quiet Static"
date = "2025-07-22"
description = "End title sequence for the indie drama The Long Corridor, holding each credit on a curve that pulls back before it ever fully commits."
[extra]
client = "Farview Pictures"
kind = "End Titles"
year = 2025
duration = "1:58"
frame_count = "2,832"
fps = 24
in_point = "00:00:00:00"
out_point = "00:01:58:00"
curve_name = "Static Hold"
curve_bezier = "cubic-bezier(0.36, 0.00, 0.66, -0.42)"
curve_short = ".36 0 .66 -.42"
curve_d = "M24.0,134.5 C78.7,134.5 124.3,163.6 176.0,65.5"
+++

*The Long Corridor* ends on eleven minutes of a hospital waiting room with almost no dialogue, and the director, Tomas Ferreira, asked that the end credits not break the film's mood the way most crawls do. No fast wipes, no triumphant swell. The card should feel like the room the audience just left.

<!-- more -->

The curve we built for this — **Static Hold**, `cubic-bezier(0.36, 0, 0.66, -0.42)` — behaves almost like a normal ease until its final approach, where the second control point sits below zero and pulls the motion backward for a few frames before it finally reaches its resting value. Applied to a credit card, it reads as a small flinch right before the card settles: an entrance that hesitates at the very end instead of the beginning, which is the reverse of how most anticipation curves work and exactly the effect Ferreira wanted — nothing in this film arrives easily.

## Beat sheet

**00:00 – 00:10 — Cast, above the line.** Eight cards, white text on the near-black of the hospital corridor's actual production plate, held for four seconds each with a full second of Static Hold's characteristic pull-back on entrance. The pull-back is subtle enough that most viewers register it as hesitation rather than motion.

**00:10 – 01:20 — Full crawl.** The below-the-line crawl runs at a fixed vertical rate with no curve applied to the scroll itself — Static Hold governs only the fade-in and fade-out of section headers (CASTING, SOUND, GRIP) that appear at fixed intervals along the crawl, each one hesitating into view a beat before the corresponding names begin.

**01:20 – 01:50 — Return to the corridor.** With ninety seconds of names elapsed, the background plate — a static shot of the empty waiting room — very slowly desaturates, timed against Static Hold stretched across the full thirty seconds so the color loss itself reads as a hesitation that never fully resolves before the card ends.

**01:50 – 01:58 — Final card.** FARVIEW PICTURES on Static Hold at full duration, the longest single application of the curve in the sequence, so its held-back approach becomes the last thing the audience consciously notices before the screen goes to black.

```text
curve      static-hold
in         00:00:00:00
out        00:01:58:00
duration   2,832 frames @ 24fps
bezier     0.36, 0, 0.66, -0.42
reused on  one further Farview release, one festival trailer
```

Static Hold is the only curve in the studio library that Ferreira has since asked for by name on a second project — unusual, since most directors describe a feeling and let us pick the math. He calls it "the corridor curve." We have not corrected him.
