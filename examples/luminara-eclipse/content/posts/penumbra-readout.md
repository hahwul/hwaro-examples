+++
title = "Penumbra Readout"
description = "Interpreting the soft edge."
date = "2024-04-02"
template = "page"
[taxonomies]
tags = ["readout", "signal"]
+++

The penumbra readout occupies the soft band between the umbral core and the open field. Signals in this band carry partial occlusion data and must be processed with a different filter than signals from the core. The filter coefficients are recalculated each epoch from the calibration set, and the coefficients are stored in the header block of every frame.

A typical readout begins with the gain stage. The gain stage applies a logarithmic compression curve that tames the sharp transitions found at the edge of the penumbra. Without compression, the rendering pipeline produces visible banding along the eclipse rim, particularly during the late phases when the umbra is contracting.

After compression, the signal passes through the deblur kernel. The kernel is small, only seven taps wide, but it is sensitive to phase alignment. Misaligned frames produce ghost images that persist for several seconds before the kernel resynchronizes. Phase alignment is verified by comparing the leading edge of the readout against the meridian token from the same frame.

The final stage is the threshold pass. Values below the threshold are clipped to zero, and values above the threshold are passed through unchanged. The threshold is set by the operator and should be reviewed whenever the calibration set changes. A low threshold preserves more detail at the cost of additional noise; a high threshold produces a cleaner image at the cost of detail near the rim.

Output frames are written to the archive with a flag indicating which filter was applied. Downstream tools rely on this flag to select the correct decoder.
