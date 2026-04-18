+++
title = "Schema and Data Dictionary"
description = "Complete data dictionary with field definitions, data types, constraints, and enumerated values."
tags = ["paper", "light", "dataset", "schema", "minimal-text"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Technical Specification &middot; Schema</p>
  <h1 class="paper-title">Data Dictionary</h1>
</header>

## Table: `cities`

| Field | Type | Constraints | Description |
|---|---|---|---|
| `city_id` | `INT` | PK, AUTO_INCREMENT | Unique city identifier |
| `city_name` | `VARCHAR(100)` | NOT NULL, UNIQUE | City name in English |
| `country_code` | `CHAR(2)` | NOT NULL | ISO 3166-1 alpha-2 country code |
| `latitude` | `DECIMAL(9,6)` | NOT NULL | City centre latitude (WGS84) |
| `longitude` | `DECIMAL(9,6)` | NOT NULL | City centre longitude (WGS84) |
| `climate_zone` | `VARCHAR(10)` | NOT NULL | Koppen-Geiger climate classification |
| `population` | `INT` | | City population (most recent census) |
| `area_km2` | `DECIMAL(10,2)` | | City administrative area in km2 |
| `timezone` | `VARCHAR(40)` | NOT NULL | IANA timezone identifier |

## Table: `sensors`

| Field | Type | Constraints | Description |
|---|---|---|---|
| `sensor_id` | `INT` | PK, AUTO_INCREMENT | Unique sensor identifier |
| `city_id` | `INT` | FK -> cities.city_id, NOT NULL | City where sensor is deployed |
| `site_type` | `ENUM` | NOT NULL | Deployment site classification |
| `latitude` | `DECIMAL(9,6)` | NOT NULL | Sensor latitude (WGS84) |
| `longitude` | `DECIMAL(9,6)` | NOT NULL | Sensor longitude (WGS84) |
| `elevation_m` | `FLOAT` | | Sensor elevation above sea level (metres) |
| `height_agl_m` | `FLOAT` | NOT NULL | Height above ground level (metres) |
| `install_date` | `DATE` | NOT NULL | Sensor installation date |
| `decommission_date` | `DATE` | | Sensor decommission date (NULL if active) |
| `model` | `VARCHAR(50)` | NOT NULL | Sensor hardware model identifier |
| `lcz_class` | `VARCHAR(10)` | | Local Climate Zone classification |

### `site_type` Enumeration

| Value | Description | Count |
|---|---|---|
| `park` | Urban park or green space | 2,418 |
| `street` | Street-level, near road | 3,842 |
| `rooftop` | Building rooftop installation | 1,986 |
| `courtyard` | Enclosed courtyard or plaza | 1,124 |
| `waterfront` | Near body of water | 892 |
| `industrial` | Industrial or commercial zone | 1,248 |
| `residential` | Residential neighbourhood | 908 |

## Table: `readings`

| Field | Type | Constraints | Description |
|---|---|---|---|
| `reading_id` | `BIGINT` | PK, AUTO_INCREMENT | Unique reading identifier |
| `sensor_id` | `INT` | FK -> sensors.sensor_id, NOT NULL | Source sensor |
| `timestamp` | `TIMESTAMP` | NOT NULL | UTC timestamp of reading |
| `temp_c` | `FLOAT` | | Air temperature (Celsius) |
| `humidity_pct` | `FLOAT` | CHECK 0-100 | Relative humidity (%) |
| `wind_speed_ms` | `FLOAT` | CHECK >= 0 | Wind speed (m/s) |
| `solar_wm2` | `FLOAT` | CHECK >= 0 | Incoming solar radiation (W/m2) |
| `pm25_ugm3` | `FLOAT` | CHECK >= 0 | PM2.5 concentration (ug/m3) |

## Table: `qc_flags`

| Field | Type | Constraints | Description |
|---|---|---|---|
| `reading_id` | `BIGINT` | FK -> readings.reading_id | Flagged reading |
| `flag_code` | `CHAR(2)` | NOT NULL | Quality control flag code |
| `auto_flagged` | `BOOLEAN` | NOT NULL, DEFAULT TRUE | TRUE if flagged by automated QC |
| `reviewer` | `VARCHAR(50)` | | Manual reviewer identifier |

### QC Flag Codes

| Code | Meaning | Frequency |
|---|---|---|
| `OK` | Passed all checks | 94.2% |
| `SR` | Sensor range exceeded | 2.1% |
| `SP` | Spike detected (> 3 sd from rolling mean) | 1.8% |
| `FL` | Flat-line (> 6 hours identical value) | 0.9% |
| `MS` | Missing (gap in time series) | 0.7% |
| `MR` | Manual review required | 0.3% |
