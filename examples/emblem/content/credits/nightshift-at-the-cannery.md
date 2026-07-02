+++
title = "Nightshift at the Cannery"
date = "2025-04-08"
description = "A small indie horror game where tension is built from granular synthesis layers driven by a single proximity parameter."

[extra]
studio = "Copperfen Games"
role = "Composer & Sound Designer"
engine = "FMOD Studio 2.02 · Unity 2022 LTS"
sample_rate = "44.1kHz / 24-bit"
status = "shipped"
platform = "PC"
+++

Nightshift at the Cannery is a three-hour horror game set inside a decommissioned fish-processing plant, built by a five-person team with no dedicated audio budget for a live orchestra or a large stem library. The whole score had to come from a handful of source recordings — metal, water, distant machinery — stretched and layered by the engine itself.

<!-- more -->

Tension is driven by a single RTPC, `Proximity`, tied to the distance between the player and the game's one antagonist. As Proximity climbs, granular-synthesis layers in FMOD progressively lengthen their grain size and lower their pitch, turning a clean recording of dripping water into something closer to breathing. There is no traditional "chase stinger" — the granular bed itself becomes unbearable before the antagonist is ever in view.

```
Event: amb_cannery_tension
  Parameter: Proximity (0-1, continuous)
  Layer A (metal drone):   grain size  40ms -> 400ms
  Layer B (water drip):    pitch       0st  -> -700c
  Layer C (distant hum):   gain        -18dB -> -3dB
```

I also handled full sound design on this title — foley, room tone, the cannery machinery bed — since the team was too small to split composition and sound design into separate roles. Working both sides made the granular tension system easier to build, since the "music" and the "ambience" were never really separate signals; they were the same four source files, aimed at different ends of the same fear.
