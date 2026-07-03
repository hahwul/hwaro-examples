+++
title = "Nordlicht 12: the filter that refused to self-oscillate"
date = "2026-01-24"
description = "A transistor-ladder filter that behaves perfectly until you push the resonance, then simply gives up. Tracing a forty-year-old repair that was wrong in a very instructive way."
tags = ["filters", "calibration"]
[extra]
maker = "Nordlicht"
model = "Zwolf 12"
year = "1976"
serial = "No. 1150"
+++

A ladder filter that will not self-oscillate is like a kettle that will not
quite boil. Everything works — the cutoff sweeps, the resonance thickens the
sound, the envelopes bite — but push the resonance to the top and instead
of that pure singing sine, the Nordlicht 12 just hissed politely and sat
there.

<!-- more -->

Self-oscillation is not a luxury feature. On an instrument like this it is
the calibration reference: you tune the filter's tracking by playing the
resonating filter like an oscillator. No self-oscillation, no proper
calibration, so this had to be fixed before anything else could be measured.

## Reading the ladder

The ladder itself checked out: matched pairs matched, DC offsets sensible,
control current correct at both extremes. The fault had to be in the
feedback path that brings the output back to the top of the ladder — the
loop whose gain decides whether resonance peaks or sings.

There, at the feedback amplifier, sat history: one transistor visibly newer
than its neighbours, a 1980s part in a 1976 instrument. Somebody had repaired
a real failure long ago and used a substitute with roughly double the gain
of the original. Roughly double sounds generous. In a feedback loop it is a
different circuit. Whoever did it also halved the feedback resistor to tame
the screaming that must have resulted, and between the two changes the loop
landed in a place where maximum panel resonance reached a gain just below
oscillation. Stable, musical, and permanently short of the boil.

## The repair

The correct transistor type is long extinct, but its gain range is not: I
measured a dozen modern equivalents and picked the one that matched the
service manual's spec, then restored the original feedback resistor value.

```text
Resonance pot at max:  loop gain 0.94  (arrival, would never oscillate)
After transistor swap: loop gain 1.02  (sings at 2 dB over threshold)
Sine purity at A440:   1.8% THD        (manual allows 3%)
Tracking after cal:    within 3 cents over 4 octaves
```

Push the resonance now and the filter blooms into a clean whistle that
tracks the keyboard almost like a third oscillator. The previous repair
lasted forty years and kept the instrument on stage, so I will not call it
wrong — but it is pleasant to hand back a machine that finally boils.
