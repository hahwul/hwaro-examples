+++
title = "Data Specifications"
tags = ["data", "sensors", "methodology"]
+++

## Sensor Network Specifications

The Greenfield City Air Quality Network (GCAQN) is a purpose-built urban monitoring infrastructure designed for high-density spatiotemporal pollutant measurement.

| Specification | Value |
|---|---|
| Total Sensor Nodes | 200 |
| Coverage Area | 85 km2 |
| Measurement Interval | 5 minutes |
| Pollutants Measured | PM2.5, PM10, NO2, O3, CO |
| Environmental Variables | Temperature, Humidity, Pressure |
| Deployment Period | January 2024 -- June 2025 |
| Total Data Points | ~105 million |
| Uptime (network average) | 97.3% |

## Sensor Hardware

Each node in the GCAQN uses the following sensor modules:

| Component | Model | Range | Accuracy |
|---|---|---|---|
| PM Sensor | Plantower PMS7003 | 0--500 ug/m3 | +/- 10 ug/m3 |
| NO2 Sensor | Alphasense NO2-B43F | 0--200 ppb | +/- 5 ppb |
| O3 Sensor | Alphasense OX-B431 | 0--500 ppb | +/- 8 ppb |
| CO Sensor | Alphasense CO-B4 | 0--50 ppm | +/- 0.5 ppm |
| Temp/Humidity | Sensirion SHT31 | -40 to 125 C | +/- 0.3 C |
| Pressure | Bosch BMP388 | 300--1100 hPa | +/- 0.5 hPa |

## Supplementary Data Sources

| Source | Provider | Resolution | Coverage |
|---|---|---|---|
| Weather Stations | National Weather Service | Hourly | 12 stations |
| Traffic Density | City Transportation Dept. | 15-minute | 340 detectors |
| Satellite AOD | NASA MODIS/VIIRS | Daily, 1 km | Metropolitan area |
| Industrial Emissions | EPA TRI Database | Hourly | 23 facilities |
| Land Use Classification | USGS NLCD | Static, 30 m | Metropolitan area |

## Data Quality Control

All sensor data underwent a multi-stage quality control pipeline:

1. **Automated range checks** -- Values outside physically plausible ranges were flagged and removed
2. **Cross-sensor validation** -- Measurements from co-located reference instruments were used to detect sensor drift
3. **Temporal consistency checks** -- Sudden changes exceeding 3 standard deviations within a 15-minute window were reviewed
4. **Calibration correction** -- Monthly field calibration against EPA Federal Reference Method instruments was applied retroactively

After quality control, 94.8% of the raw data was retained for model training and evaluation.

## Data Availability

The complete GCAQN dataset, including raw sensor measurements, calibrated values, and supplementary data sources, is available through the Greenfield City Open Data Portal. Processed feature matrices used for model training will be deposited in the Zenodo research data repository following publication of the full paper.

Access requests should be directed to the corresponding author at wei.chen@mit-envcomp.edu.
