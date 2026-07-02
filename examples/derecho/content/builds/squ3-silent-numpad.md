+++
title = "Silencing the Squ3 Numpad"
date = "2025-07-21"
description = "A pocket macropad built to be inaudible on late-night calls. Durock Silent Linears, a POM plate, and a VIA layout that turns three columns into a scene controller."
tags = ["macropad", "silent", "pom"]

[extra]
no = "LOG 03"
board = "Squ3 (3x4 macropad)"
switches = "Durock Silent Linear (Daybreak)"
plate = "POM"
+++

The brief for this one was unusual: it had to be silent enough to use on a video call without anyone hearing it. I take a lot of late calls and I like a physical macropad for muting, scene switching, and volume, but a clacky pad on a hot mic is a menace. The Squ3 is a tiny 3x4 hotswap board, which made it the perfect testbed for going as quiet as a mechanical board gets.

<!-- more -->

## Everything chosen for silence

Three decisions stack here, and each one matters:

- **Switches — Durock Silent Linears.** The stem dampers kill both the bottom-out and the upstroke click. They feel slightly mushy compared to a normal linear; that is the padding doing its job.
- **Plate — POM.** Plastic plates are quieter and softer than metal. POM in particular has a muted, slightly deadened knock that suits a silent build far better than a ringing aluminum plate would.
- **Foam everywhere.** Case foam under the PCB and a strip of PE foam between PCB and plate. On a board this small, foam is cheap and total.

## The VIA layout

The Squ3 runs QMK with VIA enabled, so no recompiling — I mapped it live from the VIA app. Twelve keys became mute, camera, and three OBS scenes, plus a small media column:

```json
{
  "name": "Squ3 — call deck",
  "layers": [
    ["MO(1)",     "KC_MUTE",  "KC_MPLY",
     "MEH(KC_1)", "MEH(KC_2)","MEH(KC_3)",
     "KC_VOLD",   "KC_VOLU",  "MEH(KC_M)",
     "KC_MPRV",   "KC_MNXT",  "TO(0)"]
  ]
}
```

The `MEH` combos (Ctrl+Alt+Shift) are the safest global hotkeys — nothing else on my system binds them, so OBS picks them up without conflicts. The top-left key is a momentary layer for a second page I have not needed yet.

## Did it actually go silent

Close. Held to my ear it makes a soft, padded tap; at arm's length on a call it is inaudible over room tone. The one sound left is the stabilizer-free spacebar — there is no spacebar. If you want true silence, a silent linear on a POM plate in a foamed case is as far as the hobby goes without going membrane.
