+++
title = "Orbit determination converged in 12 ticks"
date = "2026-05-01"
description = "We re-tuned the OD filter to handle the new GPS receiver firmware. Convergence dropped from 41 to 12 ticks."
tags = ["orbit-determination", "filter", "gnss"]
systems = ["bus", "gnss"]
+++

Earlier this season we flashed a new GNSS receiver firmware on KEP-04 → KEP-08. The new firmware emits position fixes at 20 Hz instead of 10 Hz, with a slightly different covariance structure. The old orbit determination filter was happy to consume the extra rate but it was *also* happy to converge slowly while it learned the new noise model.

We retuned the process-noise matrix on the ground side and re-baselined the initial covariance.

- **Before:** 41 ticks to converge after a maneuver.
- **After:** 12 ticks to converge after a maneuver.

The same filter is now running on all 17 birds. Nothing changed on the flight side; this is a ground-only improvement.

> The flight team's nicest property is that good ground work makes the spacecraft look smarter without any of them having to wake up.
