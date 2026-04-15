+++
title = "4. Technical Validation"
description = "Quality control procedures, validation against reference stations, and known limitations."
weight = 4
template = "post"
tags = ["dataset", "validation", "quality"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## Automated Quality Control

The automated QC pipeline applies five checks to each reading:

| Check | Threshold | Flag Code | Flagged (%) |
|---|---|---|---|
| Range check | Temp: -40 to 60C; RH: 0-100%; Wind: 0-60 m/s | `SR` | 2.1 |
| Spike detection | > 3 sd from 1-hour rolling mean | `SP` | 1.8 |
| Flat-line | Identical value for > 6 consecutive hours | `FL` | 0.9 |
| Gap detection | Missing reading at expected timestamp | `MS` | 0.7 |
| Spatial consistency | > 5 sd from 10-nearest-neighbour mean | `MR` | 0.3 |

Overall, 94.2% of readings pass all automated checks. The remaining 5.8% are flagged but retained in the dataset with their QC codes, allowing users to apply their own filtering criteria.

## Reference Station Comparison

At 36 co-located sites (2 per city), OpenUrbanClimate sensors are deployed within 5 metres of reference-grade instruments (Vaisala WXT536). Comparison statistics for 2024:

| Variable | RMSE | Bias | R2 | N pairs |
|---|---|---|---|---|
| Temperature | 0.31C | +0.08C | 0.998 | 3,784,320 |
| Humidity | 2.4% | -0.6% | 0.992 | 3,784,320 |
| Wind speed | 0.42 m/s | +0.12 m/s | 0.964 | 3,784,320 |
| Solar radiation | 18.2 W/m2 | -4.1 W/m2 | 0.996 | 3,784,320 |
| PM2.5 | 4.8 ug/m3 | +1.2 ug/m3 | 0.942 | 3,784,320 |

## Known Limitations

1. **PM2.5 accuracy at high concentrations**: The laser scattering sensors show increased positive bias above 200 ug/m3 compared to gravimetric reference methods. Users analysing high-pollution events should apply the correction equation provided in the calibration log.

2. **Wind speed in street canyons**: Sensors deployed in narrow street canyons (aspect ratio > 2) underestimate free-atmosphere wind speeds due to channelling effects. The `site_type` and `lcz_class` fields can be used to filter these deployments.

3. **Data gaps in 2020**: COVID-19 restrictions delayed maintenance visits in several cities during March-June 2020, resulting in elevated gap rates (up to 8% in some cities) during this period.
