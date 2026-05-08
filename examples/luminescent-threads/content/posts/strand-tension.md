+++
title = "Strand Tension"
date = "2024-05-19"
tags = ["mechanics", "calibration"]
+++

# Strand Tension

Tension governs the optical behavior of every strand in a luminescent fabric. A loose strand sags in its guide channel and produces interference patterns where it touches the cladding. A strand under excessive tension fractures the phase lock and breaks coherence with neighboring strands. The working range lies between these two failure modes and is narrower than most operators expect.

Measurement is performed at the end terminations using a piezo gauge mounted in the splice block. The gauge reports a continuous tension value that is sampled at a fixed interval and recorded in the calibration log. Operators consult the log when adjusting the strand and again when verifying that the adjustment held.

Adjustment uses a worm drive coupled to the anchor point at the far end of the strand. A single rotation of the drive corresponds to a known displacement, and displacement maps to tension through a coefficient that depends on the strand length and the cladding material. The mapping is linear within the working range and becomes nonlinear near the failure boundaries.

Calibration drift accumulates over time. The dominant cause is creep in the cladding, which relaxes under sustained load. A secondary cause is thermal expansion of the splice block. Both effects produce a slow downward trend in tension that is corrected by periodic readjustment.

Strands that fall outside the working range are tagged in the maintenance log and scheduled for service during the next quiet window. Service may involve readjustment, splice repair, or full strand replacement.
