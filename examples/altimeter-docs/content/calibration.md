+++
title = "Calibration"
date = "2025-09-14"
tags = ["reference", "calibration"]
categories = ["pages"]
+++

# Calibration Notes

Altitude readings drift slowly under sustained barometric load. The Altimeter reference suite documents the small adjustments that keep recorded values within a tolerable margin across long sessions.

## Reference Pressure

The expected sea-level pressure is set once per deployment, then recorded alongside every measurement. Operators compare the running mean against a known external source on a regular cadence and apply a static correction when the difference exceeds the documented threshold. The correction is never silent. Each adjustment is logged with a timestamp, the raw reading, and the corrected value.

## Temperature Compensation

Sensor output bends with temperature. The lookup table in this reference covers the working range used during the 2025 site reviews. Values outside that range fall back to a linear extrapolation, but the result is flagged and excluded from any aggregate.

## Drift Audits

A weekly audit compares the current trend against the previous week. Sudden steps usually indicate a hardware change rather than a real altitude shift. The audit record links to the maintenance log so the cause is easy to trace later.
