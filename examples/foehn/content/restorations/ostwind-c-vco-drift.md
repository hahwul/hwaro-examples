+++
title = "Ostwind Modell C: chasing a VCO that drifts with the weather"
date = "2025-07-08"
description = "A 1974 monosynth that goes sharp every afternoon. The fault is not in the oscillator at all — it is a missing tempco resistor and a workshop window that faces west."
tags = ["oscillators", "calibration"]
[extra]
maker = "Ostwind"
model = "Modell C"
year = "1974"
serial = "No. 0089"
+++

The Ostwind Modell C is early enough that its single VCO predates most of
the tricks later synths used to stay in tune. It holds pitch the way a cat
holds an opinion. This one, serial 89, had a stranger complaint: it was
stable all morning and drifted a reliable twenty cents sharp every
afternoon, then came back down overnight.

<!-- more -->

A fault with a daily schedule is a temperature fault — the same lesson the
[workshop's namesake wind](/about/) teaches every October. The question is
only where the thermometer is hiding.

## Finding the thermometer

The exponential converter in a VCO depends on a matched transistor pair, and
its scale factor moves with temperature unless a compensating resistor — a
tempco, usually +3350 ppm per degree — moves with it. The Modell C schematic
shows exactly such a resistor, mounted physically touching the transistor
pair so they feel the same heat.

On this board there was a plain metal-film resistor in that position.
Correct value, wrong species. Someone had replaced a failed tempco with what
they had in the drawer, and for years the synth only played in tune at the
temperature of that person's room.

My workshop window faces west. Every afternoon the bench warms four degrees,
the converter's gain shifts, and the instrument climbs sharp on cue. The
synth was fine. It was just honestly reporting the weather.

## The fix and the numbers

A proper +3350 ppm tempco went in, epoxied against the transistor pair, and
then two full days of logging with the counter:

```text
Time   Bench temp   A440 reading (before)   A440 reading (after)
09:00  19.2 C       440.0 Hz                440.0 Hz
14:00  23.4 C       445.1 Hz  (+20 cents)   440.2 Hz  (+0.8 cents)
18:00  24.1 C       445.9 Hz  (+23 cents)   440.2 Hz  (+0.8 cents)
23:00  20.0 C       441.1 Hz  (+4 cents)    440.0 Hz
```

Under one cent across a five-degree swing is better than this circuit
managed when it was new. Scale trim and high-end tracking followed the usual
octave-interval procedure and landed inside two cents from C1 to C6.

The owner asked if I had made it "modern". No. I made it 1974 again, which
was always good enough when the parts were honest.
