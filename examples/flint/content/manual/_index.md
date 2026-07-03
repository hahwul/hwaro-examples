+++
title = "The flint Manual"
description = "How the deterministic 2D physics module fits together, from the fixed timestep to rollback-safe state."
sort_by = "weight"
template = "section"
+++

Six chapters, read in order. They move from the shape of the simulation loop down through bodies, contact, and the solver, and end at the property that ties it all together: **determinism**. Every code sample is real flint API; every default shown is the shipped default in v0.9.

<!-- more -->

If you only read one page, read [Determinism &amp; Rollback](/manual/determinism/) — it is the reason flint exists and the constraint every other chapter is written to protect.
