+++
title = "Kestrel & Anvil"
date = "2025-12-02"
description = "A tactics RPG whose battle score reads the fight's tension in real time and re-orchestrates itself, phase by phase."

[extra]
studio = "Ashgrove Interactive"
role = "Adaptive Music Designer"
engine = "Wwise 2022.1 · Unreal Engine 5.1"
sample_rate = "48kHz / 24-bit"
status = "shipped"
platform = "PC, PS5, Xbox Series X|S"
+++

Kestrel & Anvil is a turn-based tactics RPG where battles can run four minutes or forty depending on how badly the player has planned. A single looping battle theme was never going to survive that range, so the brief was a score that could hold tension for a long fight and still land hard on a short one.

<!-- more -->

The system tracks a single RTPC, `Threat`, that climbs with enemy unit count, falls with each kill, and spikes sharply when the player's own units drop below half health. Threat drives vertical layering across five orchestral stems — low strings and pulse first, brass and choir last — so the arrangement thickens and thins with the actual state of the fight rather than a fixed timer.

```
// Wwise: RTPC-driven layer gain, authored as curves per stem
RTPC "Threat" (0-100) -> Stem_Percussion.Volume   [0, -inf] -> [100, 0dB]
RTPC "Threat" (0-100) -> Stem_Brass.Volume        [0, -inf] -> [60, 0dB]
RTPC "Threat" (0-100) -> Stem_Choir.Volume        [0, -inf] -> [85, 0dB]
```

Critical hits and unit deaths fire short stingers through a priority ducking bus so they never collide with each other mid-cluster. The bar-quantized phase transitions — normal, desperate, victory-imminent — were the hardest part to tune; the first pass changed phase too eagerly on lucky crits, so phase changes now require the new Threat band to hold for a full bar before committing.

Reviewers singled out the "final round always feels like the final round" pacing, which is exactly the sentence I was hoping to earn.
