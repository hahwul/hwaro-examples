+++
title = "Parallax Drift Anomaly"
description = "Unexpected angular displacement in long-baseline observations."
tags = ["logs", "astrometry"]
categories = ["transmissions"]
date = "2024-06-04"
+++

# Drift Detected on Baseline Seven

Astrometric reductions for the past forty-eight hours show a residual parallax drift on baseline seven of roughly 0.42 milliarcseconds. The drift is monotonic, increasing slowly across each observing window, and does not correlate with thermal flexure of the support pier or with measured atmospheric refraction.

## Initial Triage

The reference catalogue was rebuilt from the latest astrometric release. After cross-matching, the residual remained. Stations one through six show no equivalent drift, which rules out a global clock offset or a fault in the common timing distribution.

The most likely source is a mechanical issue local to baseline seven, possibly in the alt-azimuth bearing assembly. A small amount of grease migration after the last service interval would produce a gradual offset of this character.

## Calibration Plan

We will run a star-pair differential measurement against a stable reference field tonight. If the drift is mechanical it should reverse when the mount is exercised through its full range. If the offset persists after exercise, the bearing housing will be opened during the next maintenance day.

## Operational Impact

For now, observations on baseline seven are flagged but not removed from the nightly reduction. Downstream products will carry an additional uncertainty column until the issue is resolved.

**End of Line.**
