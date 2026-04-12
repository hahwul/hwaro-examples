+++
title = "Propulsion System"
date = "2026-02-15"
weight = 1
template = "post"
description = "Main engine cluster specifications and performance parameters"
tags = ["propulsion", "engines"]
[extra]
system_status = "NOMINAL"
+++

## System Overview

The propulsion system consists of a four-engine cluster arranged in a square pattern. Each Merlin-class engine provides 845 kN of sea-level thrust with a specific impulse of 311 seconds.

## Engine Specifications

| Specification | Value |
|---------------|-------|
| Engine Count | 4 |
| Thrust (SL) | 845 kN per engine |
| Thrust (Vac) | 981 kN per engine |
| Specific Impulse (SL) | 311 s |
| Chamber Pressure | 9.7 MPa |
| Propellant | LOX / RP-1 |
| Gimbal Range | +/- 5 degrees |

## Redundancy

The vehicle can complete its mission profile with any three of four engines operational. Engine-out capability is maintained through T+120 seconds with automatic thrust rebalancing across the remaining engines.

## Health Monitoring

Each engine reports 247 telemetry channels at 100 Hz, including chamber pressure, turbopump speed, bearing temperatures, valve positions, and vibration levels. The engine health management system can detect anomalies and command engine shutdown within 50 milliseconds.
