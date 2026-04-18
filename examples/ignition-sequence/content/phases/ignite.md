+++
title = "Phase 02: IGNITE"
date = "2026-03-02"
weight = 2
template = "post"
description = "Engine ignition sequence and turbopump spin-up verification"
tags = ["phase-02", "ignition"]
[extra]
phase_status = "COMPLETE"
+++

## Overview

IGNITE is the moment of commitment. Turbopumps spin to operational speed and main engine chambers reach stable combustion. This phase demands millisecond-precision timing across all engine controllers.

## Ignition Sequence

- Turbopump pre-spin initiated at T-60:00
- Oxidizer lead valve opens at T-45:00
- Fuel valve sequence begins at T-44:50
- Torch igniter activation at T-44:45
- Main chamber pressure monitored for nominal ramp-up
- All engines must reach 60% thrust within 3.2 seconds

## Engine Parameters at IGNITE

| Parameter | Target | Tolerance |
|-----------|--------|-----------|
| Chamber Pressure | 3.2 MPa | +/- 0.15 MPa |
| Turbopump RPM | 28,000 | +/- 500 |
| Fuel Flow Rate | 245 kg/s | +/- 12 kg/s |
| Nozzle Temperature | 1,200 K | +/- 50 K |

## Abort Criteria

If any engine fails to reach 60% thrust within the startup window, the automated abort sequencer activates. The IGNITE phase has a zero-tolerance policy for off-nominal starts.

## Duration

T-60:00 to T-10:00 -- Approximately 50 minutes of controlled ramp-up.
