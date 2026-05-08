+++
title = "Lattice Coordinates"
description = "Mapping the eclipse field."
date = "2024-02-14"
template = "page"
[taxonomies]
tags = ["mapping", "structure"]
+++

The eclipse field operates on a coordinate system that resists conventional Cartesian projection. Each lattice node carries an angular offset measured against a fixed crimson meridian, and adjacent nodes are linked by a torsion factor that varies with depth. This document records the procedure used to translate raw transmission data into the standard form referenced elsewhere in the archive.

Begin by isolating the meridian token from the header block. The token is a four-byte integer aligned to the leading edge of the frame. Subtract the local offset and divide by the published torsion constant for the current epoch. The result yields a normalized angle in radians.

The next step is depth assignment. Depth is encoded as a sequence of three nested fields: outer ring, inner ring, and shaft index. Multiply the outer ring value by the shaft pitch, add the inner ring contribution scaled by the meridian token, and clamp the sum to the working range. Coordinates that fall outside the range are reserved for boundary checks and should be discarded during routine processing.

Verification requires cross-checking against the reference set published in the previous transmission. Any discrepancy greater than the tolerance threshold should be logged and reported. The lattice is stable across epochs but minor drift accumulates near the outer boundary, so periodic recalibration is recommended.

Coordinates produced by this procedure feed directly into the rendering pipeline. The pipeline expects normalized angles, integer depth values, and a checksum derived from the meridian token. Frames missing any of these fields are rejected at the ingestion stage.
