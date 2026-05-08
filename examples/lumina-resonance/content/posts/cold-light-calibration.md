+++
title = "Cold Light Calibration"
date = "2023-12-04"
description = "Routines for matching emitters across batches."
tags = ["lighting", "process"]
+++

Cold-light emitters drift. Even within a single manufacturing batch, the chromaticity coordinates of nominally identical diodes can vary by a few percent across the visible band, and that variation compounds when the parts age in the field. Any installation that depends on color consistency, which is most of the work that passes through the studio, requires a calibration routine that absorbs this drift without disturbing the visible result.

Our routine begins with a reference panel kept under controlled storage. The panel is illuminated with each candidate emitter in turn, and the spectral response is read with a hand-held colorimeter at three points: center, midline, and corner. The three readings are averaged, then compared against the reference vector recorded at the panel's original certification. Emitters whose deviation exceeds five percent in any channel are rejected outright. Those within tolerance are sorted into bins by deviation magnitude and direction.

When an installation is assembled, emitters are drawn from the bins to balance the overall panel response. A panel showing a cyan bias is paired with emitters from the magenta-leaning bin, and the deviations cancel within the tolerance threshold of human vision. The pairing is recorded in the installation log, so any future replacement can preserve the original balance.

The routine takes about ninety seconds per emitter and adds maybe twenty minutes to the assembly of a typical panel run. The cost is small. The benefit is that installations age uniformly, and replacements made years later still match the surrounding field. We have run this routine on every emitter shipped from the studio since 2021, and the failure rate from chromatic mismatch has fallen to effectively zero.
