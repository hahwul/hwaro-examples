+++
title = "Halva Circuit"
date = "2026-05-04"
description = "A West Coast opening set built on a single complex oscillator and no sequencer in sight."
[extra]
slot_time = "20:30"
setup = "Serge-style panels, no sequencer"
mood = "Bright, percussive, awake"
+++

Halva Circuit opens the night because someone has to wake the room up, and Renske Doorn does it with a single complex oscillator and a pair of function generators. There is no sequencer on her table — every note is a decision made in the moment, timing pulled by hand from a clock she taps against the edge of the case.

<!-- more -->

The West Coast lineage is audible: frequency modulation used as a tone-shaping tool rather than an effect, low-pass gates instead of filters, and a willingness to let a patch drift somewhere unexpected and simply follow it. Her sets never repeat. If you ask her to play something from last month, she will shrug — the patch is gone, un-cabled the moment she finished.

For the opener she keeps the palette narrow so newcomers can hear each cable do its job. Expect twenty-five minutes that start almost playful and end somewhere thornier.

### Starting patch

```text
[complex osc] --sine--> [wavefolder] --> [LPG A] --> mixer L
[complex osc] --square-> [/8 divider] --> [LPG B] --> mixer R
[func gen 1] (cycling ~2Hz) --> LPG A CV
[func gen 2] (one-shot, hand-triggered) --> wavefolder depth
clock: tapped by hand, ~96 BPM
```

The `/8` divider is the trick: one oscillator becomes both the melodic voice and its own sparse bassline, and the hand-tapped clock keeps the whole thing from ever locking into a grid.
