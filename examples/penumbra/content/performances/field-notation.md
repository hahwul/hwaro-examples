+++
title = "Field Notation"
date = "2026-05-18"
description = "Generative Eurorack that turns tape hiss and field recordings into slow, shifting structures."
[extra]
slot_time = "21:30"
setup = "Eurorack 84HP, tape loop, contact mics"
mood = "Grainy, patient, textural"
+++

Field Notation is Tomas Ferreira and a small skiff of Eurorack that he insists is "mostly the tape loop and a bit of luck." The set is generative in the honest sense: he builds a system of interacting modules, sets it running, and then spends the slot nudging it rather than driving it.

<!-- more -->

The signature sound comes from a quarter-inch tape loop threaded across two spindles bolted to the side of the case. He records the modular into the loop and plays it back a few seconds later, degraded, which the system then samples and re-pitches. Contact mics taped to the table pick up the mechanical clatter of the transport and fold it back in as percussion. Nothing is clean, and that is the point.

His sets reward patience. A single chord can take four minutes to fully arrive, and when it does the room usually goes quiet on its own.

### The generative core

```text
[quantizer] <- [noise -> S&H] (clocked at 1/16)
[quantizer] -> [osc x3] -> [mixer] -> [tape loop IN]
[tape loop OUT] -> [envelope follower] -> clock divider CV
[contact mic] -> [gate extractor] -> percussion trigger
scale: D dorian, S&H reseeded every 32 bars
```

Because the tape output feeds back into the clock, the tempo breathes — the machine is listening to itself, and Tomas is mostly there to stop it collapsing.
