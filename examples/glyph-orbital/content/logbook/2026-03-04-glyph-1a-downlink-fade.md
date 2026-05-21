+++
title = "GLYPH-1A downlink fade during the 02:18 UTC pass"
date = "2026-03-04"
description = "A nine-decibel margin drop on the X-band downlink for the duration of one pass, traced to a partially de-pointed feedhorn on the primary aperture."
tags = ["anomaly", "ground", "rf"]
spacecraft = ["GLYPH-1A"]
+++

The 02:18 UTC pass over the primary aperture closed with a measured downlink signal-to-noise of fourteen decibels, against a predicted twenty-three. The bird itself was on its nominal attitude and the on-board transmitter telemetry was within one percent of its calibration. We lost roughly forty percent of the data products from the pass and recovered the rest on the next pass via the secondary aperture.

The fault was on the ground. The primary aperture's feedhorn had drifted approximately one and a half degrees off the boresight, a known failure mode for the feed-mount assembly when the dish has been parked through a sustained high-wind event. The site had logged seventy-five-kilometre-per-hour gusts in the eight hours preceding the pass.

## Resolution

The on-call ground-systems engineer drove out to the site at 04:30 UTC, confirmed the alignment with the boresight laser, and re-clamped the feed-mount. Re-acquisition tests on a known beacon satellite at 06:00 UTC showed twenty-two-decibel margin, which is within tolerance. The feed-mount assembly is on the maintenance list for replacement during the planned April outage; the replacement is a stiffer second-generation mount that we have on the shelf.

## What the console did not show

The console's bandwidth-budget tile is calculated from the predicted link budget, not the measured one, which is why nothing on the homepage went amber until the operator noticed the data-product gap. We have added a measured-vs-predicted divergence alert to the per-pass summary view; it does not yet appear on the public console.
