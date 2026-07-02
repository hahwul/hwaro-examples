+++
title = "Nul Modem"
date = "2026-06-01"
description = "The rhythmic peak of the night — modular techno patched live, kick drum built from scratch."
[extra]
slot_time = "22:30"
setup = "Eurorack + dedicated drum row"
mood = "Driving, hypnotic, physical"
+++

By half ten the room is warm and Nul Modem takes it somewhere physical. Aïsha Bekker builds techno the hard way: no drum machine, no samples, every hit synthesised from an oscillator and an envelope in front of you. Watching her assemble a kick drum from a decaying sine wave in the first two minutes of the set is half the appeal.

<!-- more -->

Her rig is split into two rows. The top row is voices — kick, a metallic hat made from ring-modulated noise, a stab that she detunes as the set builds. The bottom row is nothing but modulation and logic: clock dividers, Boolean gates, and a sequencer she reprograms on the fly by holding buttons and turning knobs while it plays.

The whole set sits around 132 BPM and rarely leaves it. The interest comes from the patch mutating underneath a steady pulse — a hat that slowly gains resonance, a stab that migrates across the stereo field over eight minutes.

### Building the kick

```text
[sine osc @ 55Hz] -> [VCA] -> out
[trigger] -> [env: A=0 D=140ms] -> VCA CV
[trigger] -> [env: A=0 D=8ms] -> osc FM depth   # the click
[clock /1] -> trigger
tune: pitch env optional; here, none — flat 55Hz
```

That fast second envelope on the FM input is the entire secret to a kick with punch: a few milliseconds of pitch movement the ear reads as attack.
