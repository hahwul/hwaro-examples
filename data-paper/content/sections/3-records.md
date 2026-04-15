+++
title = "3. Data Records"
description = "File structure, partitioning scheme, and access instructions for the dataset."
weight = 3
template = "post"
tags = ["dataset", "records", "access"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## File Organisation

The dataset is distributed as Apache Parquet files, partitioned by city and year:

```
openurbanclimate/
  cities.parquet              (18 rows, 1 KB)
  sensors.parquet             (12,418 rows, 2 MB)
  readings/
    city=tokyo/
      year=2019.parquet       (68M rows, 12 GB)
      year=2020.parquet       (72M rows, 13 GB)
      ...
    city=boston/
      year=2019.parquet       (44M rows, 8 GB)
      ...
  qc_flags/
    city=tokyo/
      year=2019.parquet       (3.2M rows, 180 MB)
      ...
  metadata/
    calibration_log.csv       (calibration events)
    deployment_log.csv        (sensor install/decommission)
    checksums.sha256          (file integrity verification)
```

## Access Methods

### Direct Download

All files are available from Zenodo: `https://doi.org/10.5281/zenodo.12345678`

Total download size: 842 GB (compressed Parquet).

### Programmatic Access (Python)

```python
import pyarrow.parquet as pq

# Read all Tokyo 2024 readings
df = pq.read_table(
    "readings/city=tokyo/year=2024.parquet"
).to_pandas()

# Filter to summer months only
summer = df[df["timestamp"].dt.month.isin([6, 7, 8])]
```

### SQL Access (DuckDB)

```sql
SELECT city_name, AVG(temp_c) AS mean_temp,
       COUNT(*) AS n_readings
FROM read_parquet('readings/*/*.parquet')
JOIN read_parquet('sensors.parquet') USING (sensor_id)
JOIN read_parquet('cities.parquet') USING (city_id)
WHERE timestamp >= '2024-06-01'
  AND timestamp <  '2024-09-01'
GROUP BY city_name
ORDER BY mean_temp DESC;
```

## File Sizes by City

| City | Readings Size | QC Flags Size | Total |
|---|---|---|---|
| Tokyo | 84 GB | 4.8 GB | 89 GB |
| Seoul | 63 GB | 3.6 GB | 67 GB |
| Boston | 55 GB | 3.1 GB | 58 GB |
| London | 53 GB | 3.0 GB | 56 GB |
| Houston | 45 GB | 2.5 GB | 48 GB |
| Sydney | 31 GB | 1.8 GB | 33 GB |
| Others (12 cities) | 511 GB | 29 GB | 540 GB |
