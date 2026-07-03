+++
title = "Undertow"
date = "2026-05-18"
description = "Main title sequence for Marrow House Pictures' psychological thriller Undertow, built on a curve that overshoots and settles like a diver breaking the surface."
[extra]
client = "Marrow House Pictures"
kind = "Title Sequence"
year = 2026
duration = "0:42"
frame_count = "1,008"
fps = 24
in_point = "00:00:00:00"
out_point = "00:00:42:00"
curve_name = "Undertow Pull"
curve_bezier = "cubic-bezier(0.65, -0.55, 0.28, 1.55)"
curve_short = ".65 -.55 .28 1.55"
curve_d = "M24.0,134.5 C122.8,172.5 66.6,27.5 176.0,65.5"
+++

Rosalind Achebe's *Undertow* opens on a woman face-down in a flooded quarry, not moving, for eleven seconds before the audience learns whether she is dead. The brief from Marrow House was blunt: the titles should make the audience hold their breath the way the character does. Nothing about that is solved with a typeface. It is solved with timing.

<!-- more -->

We built one curve for this film and used it for almost everything: **Undertow Pull**, `cubic-bezier(0.65, -0.55, 0.28, 1.55)`. It dips below its own baseline before committing to motion — a held, sinking beat — then overshoots past its resting point on arrival and settles back, the way a body breaks the surface of water with more force than it needs and has to find stillness afterward. Every letterform, card, and wipe in the sequence rides some version of that same curve, restaged at different durations and distances so the whole piece breathes on one rhythm.

## Beat sheet

**00:00 – 00:04 — Black, then grain.** No logotype yet. A held frame of water grain, lit from below, with the score's low cello note the only thing moving. The audience is meant to feel like they are already underwater.

**00:04 – 00:12 — Logotype submerges and surfaces.** The five letters of UNDERTOW drop in from above the frame, each on Undertow Pull staggered four frames apart, and appear to sink past their resting baseline before the overshoot pulls them back up into position. The stagger means the word never arrives all at once — it keeps arriving, letter by letter, for a beat longer than feels comfortable.

**00:12 – 00:24 — Cast cards.** Six cards, each riding a scaled-down version of the same curve at a third of the duration, so the overshoot reads as a smaller flinch rather than a full sink. Cards are set in a condensed serif with heavy ink traps, printed-looking, water-stained at the edges by a procedural grain mask.

**00:24 – 00:34 — The pull under.** A rippling displacement matte drags the production credits diagonally across frame, timed so the distortion peaks exactly on the curve's overshoot moment — the one frame where the type is moving fastest is also the frame where the ripple is most violent.

**00:34 – 00:42 — Director card and cut to picture.** UNDERTOW written by Rosalind Achebe settles dead-center, overshoots by six pixels, and holds. On the frame it stops moving, the cello note resolves and the picture cuts to the flooded quarry. The stillness of the card is the point — after forty-two seconds of a curve that never quite settles, the one card that finally holds still is the one that hurts.

```text
curve      undertow-pull
in         00:00:00:00
out        00:00:42:00
duration   1,008 frames @ 24fps
bezier     0.65, -0.55, 0.28, 1.55
reused on  three broadcast promos, one teaser recut
```

Marrow House tested the sequence against an audience that had not read the script. Nobody could describe the curve. Several described the feeling of holding their breath without being asked to.
