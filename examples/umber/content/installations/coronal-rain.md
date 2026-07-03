+++
title = "Coronal Rain"
date = "2025-03-14"
description = "A 22-minute dome show scoring the Sun's corona and solar wind for a 24-speaker hemispheric array."
[extra]
venue = "Halvorsen Dome, Bristol Harbor Science Center"
format = "Planetarium dome show"
duration = "22 min"
topology = "24-speaker dome array + 4 floor subs"
speakers = 24
subs = 4
wave = [2, 7, 11, 8, 10, 16, 17, 25, 26, 27, 28, 30, 26, 31, 29, 38, 30, 38, 32, 38, 36, 37, 38, 33, 33, 38, 38, 33, 38, 38, 31, 34, 30, 31, 33, 27, 31, 22, 22, 27, 21, 19, 18, 15, 11, 4, 8, 5]
+++

Coronal Rain scores a 22-minute dome show following the Sun's corona from a quiet photosphere to a coronal mass ejection sweeping past Earth. The commission came from Bristol Harbor's education team, who wanted the eruption sequence to be felt in the seat, not just seen overhead.

<!-- more -->

## Speaker topology

The dome carries a 24-speaker hemispheric array in four rings of six, flown behind a perforated aluminum skin that swallows almost everything above 8kHz — the venue's chief engineer measured a 6dB rolloff at 10kHz during commissioning, and that curve shaped every reverb decision in the mix. Four infrasonic transducers sit under the seating riser, one per quadrant, reserved for the CME cue and nothing else.

```
CH01-06  dome.ring.a[1-6]           -4.5 dB  LPF 9.5kHz
CH07-12  dome.ring.b[1-6]           -4.5 dB  LPF 9.5kHz
CH13-18  dome.ring.c[1-6]           -6.0 dB  LPF 9.5kHz
CH19-24  dome.ring.d[1-6]           -6.0 dB  LPF 9.5kHz
SUB1-4   riser.infra.[nw,ne,sw,se]  -2.0 dB  HPF 16Hz LPF 80Hz
```

## Mix notes

Panning tracks the visualization team's camera path object by object rather than layering a static ambience bed — the corona's plasma texture literally follows the flythrough around the dome. Program loudness sits at -23 LUFS integrated, calibrated against the room's NC-25 ambient floor with the HVAC running, so the quiet passages never have to fight the air handlers.

The CME cue is the one place the subs get to speak on their own: two seconds of near-silence on the ring array, then the floor pad's 18Hz swell arrives half a beat ahead of the visual flash. On every walkthrough so far, that half-beat reads as the room itself flinching.
