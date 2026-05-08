+++
title = "Measuring Resonant Glass"
date = "2023-11-12"
description = "Notes on acoustic decay in laminated panels."
tags = ["materials", "acoustics"]
+++

A laminated glass panel responds to impulse in two distinct phases. The first is the audible strike, brief and broadband. The second is the resonant tail, narrow and surprisingly long, often persisting for two or three seconds in panels exceeding eight millimeters of total stack thickness. The ratio between these phases tells you most of what you need to know about the panel's internal structure.

We measure the tail with a contact microphone bonded to the inner laminate layer using a thin film of cyanoacrylate. A capacitive trigger fires a tungsten ball against the outer face from a fixed distance, and the resulting waveform is captured at 192 kilohertz. The first 50 milliseconds are discarded to remove direct strike artifacts, and the remaining signal is decomposed into a sum of decaying sinusoids using a least-squares fit.

What emerges from this process is a fingerprint. Each panel produces three to five dominant modes, and the relative amplitudes of those modes correspond directly to the geometry of the laminate stack. A symmetric panel resonates evenly. An asymmetric panel, even one that looks identical from both sides, betrays itself in the second and fourth harmonics.

The practical use of this measurement is quality control. A panel that drifts from its baseline fingerprint has experienced delamination, edge stress, or interior contamination. Catching that drift early extends panel life and prevents catastrophic failure during installation. The measurement takes under a minute per panel and requires no destructive contact beyond the temporary microphone bond.

We are now building a reference library of fingerprints for every panel geometry the studio has produced. Once complete, any returned panel can be diagnosed against its original signature without reference to the manufacturing batch.
