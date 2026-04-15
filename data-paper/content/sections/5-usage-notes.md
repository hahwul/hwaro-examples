+++
title = "5. Usage Notes"
description = "Recommended usage patterns, citation requirements, and known caveats for dataset users."
weight = 5
template = "post"
tags = ["dataset", "usage", "citation"]
categories = ["sections"]
[extra]
section_number = "5"
+++

## Recommended Workflows

### Urban Heat Island Analysis

For UHI studies, we recommend:
1. Filter readings using `qc_flags` to exclude flagged data (`flag_code != 'OK'`)
2. Join with `sensors` table to obtain `site_type` and `lcz_class`
3. Compute spatial aggregates by LCZ class rather than by raw sensor
4. Use the `cities` table `climate_zone` field for inter-city comparisons

### Time Series Analysis

For temporal analyses:
1. Be aware of sensor model transition (OUC-200 to OUC-300) in 2022
2. Apply the calibration corrections from `calibration_log.csv` for multi-year studies
3. Account for the 2020 data gaps when computing annual statistics
4. Use UTC timestamps consistently; local time conversions are the user's responsibility

## Citation

If you use this dataset, please cite:

> Nakamura R, Patel A, Osei-Bonsu A, Mendes da Silva C, Tanaka Y. OpenUrbanClimate: A Multi-City Microclimate Sensor Dataset for Urban Heat Island Research. *Scientific Data* 13, 284 (2026). https://doi.org/10.1038/s41597-026-04284-2

Additionally, cite the Zenodo data deposit:

> Nakamura R, et al. (2026). OpenUrbanClimate Dataset v2.0 [Data set]. Zenodo. https://doi.org/10.5281/zenodo.12345678

## Licence and Reuse

The dataset is released under **Creative Commons Attribution 4.0 International (CC BY 4.0)**. You are free to share and adapt the data for any purpose, provided you give appropriate credit.

## Updates

The dataset is updated annually. Each annual release receives a new Zenodo DOI while the concept DOI (10.5281/zenodo.12345678) always resolves to the latest version.

| Version | Release Date | Cities | Sensors | Period |
|---|---|---|---|---|
| v1.0 | 2023-03-15 | 8 | 6,842 | 2019-2022 |
| v1.5 | 2024-03-20 | 14 | 10,218 | 2019-2023 |
| v2.0 | 2026-03-10 | 18 | 12,418 | 2019-2025 |
