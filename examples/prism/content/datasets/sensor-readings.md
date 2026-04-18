+++
title = "Sensor Readings"
date = "2026-03-17"
description = "IoT sensor telemetry from edge devices and industrial equipment"
weight = 4
tags = ["iot", "telemetry"]

[extra]
records = "198,740"
throughput = "156/s"
quality_score = "79"
category = "iot"
+++

## Overview

The `sensor_readings` dataset collects telemetry from IoT devices deployed across manufacturing facilities and office environments. Data arrives via MQTT brokers and is batched into ClickHouse every 5 seconds.

## Schema

| Field | Type | Description |
|---|---|---|
| reading_id | UUID | Reading identifier |
| device_id | STRING | Sensor device ID |
| sensor_type | ENUM | temperature, humidity, pressure, vibration, power |
| value | FLOAT | Measured value |
| unit | STRING | Unit of measurement |
| location_id | STRING | Physical location identifier |
| battery_pct | INT | Device battery percentage |
| timestamp | TIMESTAMP | Reading timestamp (UTC) |

## Device Fleet Status

| Sensor Type | Active Devices | Avg. Reading/min | Battery < 20% |
|---|---|---|---|
| Temperature | 342 | 2.1 | 14 |
| Humidity | 287 | 2.1 | 9 |
| Pressure | 156 | 1.0 | 3 |
| Vibration | 89 | 4.2 | 7 |
| Power | 64 | 0.5 | 0 |

## Data Quality Issues

The 79% quality score is driven by two known factors:

1. **Clock drift** -- 12% of edge devices have clock skew > 500ms, causing timeliness score degradation
2. **Missing readings** -- Battery-constrained devices occasionally skip transmission cycles, reducing completeness to 83%

Both issues are tracked in the Q2 2026 infrastructure roadmap.
