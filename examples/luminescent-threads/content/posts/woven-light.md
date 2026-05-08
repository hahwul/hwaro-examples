+++
title = "Woven Light"
date = "2024-03-08"
tags = ["weave", "process"]
+++

# Woven Light

A thread of light is not a single beam but a braid of phase-locked emitters drawn through a guide channel. The weave produces a coherent strand whose intensity remains stable along its length, and the strand can be folded, looped, or interlaced with other strands to form a fabric. The fabric is the foundation of every visible surface in the luminescent threads system.

Construction begins with the guide channel. The channel is a hollow conduit lined with reflective cladding. The cladding is tuned to the dominant wavelength of the emitters, and any deviation from the tuned wavelength produces loss. Loss accumulates along the channel, so longer strands require either higher initial power or periodic regeneration.

Phase locking is achieved through a feedback loop that compares the leading edge of each emitter pulse against a master clock. Emitters that drift outside the locking window are marked for replacement. The marking system relies on a serial bus that runs parallel to the guide channel and reports back to a central scheduler.

The scheduler manages emitter rotation. Active emitters carry the current load, standby emitters wait in a low-power state, and reserved emitters undergo testing. The scheduler maintains a balance among the three pools so that no emitter accumulates excessive runtime. Excessive runtime accelerates degradation and shortens the service life of the strand.

A finished strand is woven into the fabric using a knotless splice that preserves phase across the junction. The splice is the most delicate operation in the entire process and is performed under controlled atmosphere.
