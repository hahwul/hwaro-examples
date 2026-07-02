+++
title = "Duophon 4, part two: calibrating the twin oscillators"
date = "2026-04-30"
description = "With the power supply rebuilt, serial 0412 gets its real voice back: a full scale-and-offset calibration of both VCOs, and the small ceremony of the new sheet taped inside the lid."
tags = ["oscillators", "calibration", "power"]
[extra]
maker = "Vektor"
model = "Duophon 4"
year = "1977"
serial = "No. 0412"
+++

Serial 0412 returns to the log. In February the Duophon 4 got a
[rebuilt power supply](/restorations/duophon-4-power-supply/) and rails
that finally sit where the manual says they should.
Since then it has been playing quietly in the corner for two months —
burn-in is part of the job, especially before a calibration you intend
to stand behind.

<!-- more -->

The Duophon is duophonic: two independent VCOs, lowest key takes oscillator
one, highest key takes oscillator two. Duophony doubles the calibration work
and squares the ways it can sound wrong, because the two oscillators are
heard against each other constantly. A solo synth five cents flat is
character. Two oscillators five cents apart is seasickness.

## The procedure

Vektor's manual gives a scale-and-offset method that is still the right
way to do it: set the volt-per-octave scale at the middle of the range,
set the offset at the bottom, then check the top and touch up the
high-frequency tracking trimmer, which compensates the exponential
converter where it runs out of breath above 2 kHz.

```text
Step  Keys        Target             VCO 1 result   VCO 2 result
1     C2 vs C3    2:1 exactly        locked         locked
2     A0 offset   27.50 Hz           27.50 Hz       27.51 Hz
3     C6 check    within 3 cents     +1.2 cents     +1.9 cents
4     Beat test   unison, no beats   < 0.3 Hz beat at A4
```

The beat test is the one the counter cannot do for you. Both oscillators on
the same key, same footage, same waveform, and you listen. Under one beat
every three seconds at A4 is the shop standard; 0412 settled at about one
beat every four.

## The sheet in the lid

Every instrument leaves with a calibration sheet taped inside the lid:
date, rail voltages, scale readings, the beat-test result, and the bench
temperature at which all of it was true. Not because the owner will read
it, but because someone at a bench like this one, decades from now, will.
The coffee-ringed manual that came with this synth carried a sheet like
that from 1991, signed only "R." Whoever R. was, their offset trim was
still within eight cents after thirty-four years.

Sheet taped, lid closed, blanket on. The Duophon goes home Thursday.
