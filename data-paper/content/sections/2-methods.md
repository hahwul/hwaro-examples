+++
title = "2. Methods"
description = "Sensor hardware, deployment protocol, calibration procedures, and data collection pipeline."
weight = 2
template = "post"
tags = ["dataset", "methods", "sensors"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## Sensor Hardware

All deployments use one of two sensor models:

| Property | Model A (OUC-200) | Model B (OUC-300) |
|---|---|---|
| Manufacturer | ClimateSense Inc. | ClimateSense Inc. |
| Temperature range | -30 to 60C | -40 to 70C |
| Temperature accuracy | +/- 0.2C | +/- 0.1C |
| Humidity range | 0-100% RH | 0-100% RH |
| Humidity accuracy | +/- 2% RH | +/- 1.5% RH |
| Wind speed range | 0-40 m/s | 0-60 m/s |
| Solar radiation | Pyranometer (0-1500 W/m2) | Pyranometer (0-1500 W/m2) |
| PM2.5 | Laser scattering (0-1000 ug/m3) | Laser scattering (0-1000 ug/m3) |
| Sampling interval | 5 minutes | 5 minutes |
| Power | Solar + battery | Solar + battery |
| Communication | 4G LTE | 4G LTE + LoRaWAN fallback |
| Deployment period | 2019-2022 | 2022-present |

Model B (OUC-300) was introduced in 2022 with improved accuracy and LoRaWAN fallback for areas with poor cellular coverage. Both models transmit data to a central collection server every 5 minutes.

## Deployment Protocol

Sensor placement follows the Local Climate Zone (LCZ) framework. Within each city, sensors are distributed across LCZ classes proportional to their areal coverage, with a minimum of 3 sensors per LCZ class per city. Specific placement requirements:

- Mounted at 2.0 +/- 0.2 metres above ground level (pedestrian breathing height)
- Minimum 2 metres from any building wall
- Radiation shield required for temperature sensor
- Unobstructed sky view for solar radiation sensor
- GPS coordinates recorded at installation with sub-metre accuracy

## Calibration

Factory calibration is performed by ClimateSense Inc. prior to deployment. Field calibration is performed annually against reference instruments (Vaisala WXT536) at co-located sites in each city. Calibration corrections are applied retroactively to the entire time series when drift is detected.

## Data Pipeline

Raw sensor data flows through the following pipeline:

1. **Ingestion**: 4G/LoRaWAN to central collection server (AWS eu-west-1)
2. **Validation**: Automated range checks, duplicate detection, timestamp verification
3. **QC Level 1**: Automated spike detection, flat-line detection, spatial consistency checks
4. **QC Level 2**: Manual review of flagged readings (performed quarterly)
5. **Archival**: Partitioned Parquet files (by city and year) deposited to Zenodo
