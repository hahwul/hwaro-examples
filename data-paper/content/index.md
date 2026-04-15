+++
title = "Dataset Overview"
description = "OpenUrbanClimate: A multi-city microclimate sensor dataset with 2.8 billion readings from 12,400 sensors across 18 cities, featuring database schema ER diagrams and distribution visualizations."
tags = ["paper", "light", "dataset", "schema", "minimal-text"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Data Descriptor &middot; Open Access</p>
  <h1 class="paper-title">OpenUrbanClimate: A Multi-City Microclimate Sensor Dataset for Urban Heat Island Research</h1>
  <p class="paper-authors">
    Riku Nakamura<sup>1</sup>, Anika Patel<sup>2</sup>, Amara Osei-Bonsu<sup>3</sup>,
    Carlos Mendes da Silva<sup>4</sup>, Yuki Tanaka<sup>5</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup>Institute for Urban Systems, University of Tokyo &middot;
    <sup>2</sup>Department of Civil Engineering, MIT &middot;
    <sup>3</sup>Centre for Climate Computing, University of Cape Town &middot;
    <sup>4</sup>NOVA School of Science, Universidade NOVA de Lisboa &middot;
    <sup>5</sup>Graduate School of Environmental Studies, U. Michigan
  </p>
  <p class="paper-doi"><strong>DOI:</strong> <a href="#">10.1038/s41597-026-04284-2</a> &middot; <strong>Repository:</strong> <a href="#">Zenodo 10.5281/zenodo.12345678</a> &middot; <strong>Received:</strong> 05 Nov 2025 &middot; <strong>Accepted:</strong> 12 Mar 2026</p>
</header>

## Dataset Summary

| Property | Value |
|---|---|
| Total readings | 2,847,392,104 |
| Sensors deployed | 12,418 |
| Cities covered | 18 |
| Temporal range | 2019-01-01 to 2025-12-31 (7 years) |
| Temporal resolution | 5-minute intervals |
| Variables measured | Temperature, humidity, wind speed, solar radiation, PM2.5 |
| Total size (compressed) | 842 GB (Parquet) |
| Total size (raw CSV) | 4.2 TB |
| Licence | CC BY 4.0 |
| Format | Apache Parquet, partitioned by city and year |

## Database Schema

<!-- Entity-Relationship Diagram SVG -->
<figure>
<svg viewBox="0 0 780 340" xmlns="http://www.w3.org/2000/svg" aria-label="Entity-relationship diagram of the OpenUrbanClimate database schema" style="width:100%;max-width:780px;display:block;margin:1rem auto;">
  <text x="390" y="18" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="12" font-weight="700" fill="#1a1c22">DATABASE SCHEMA (ENTITY-RELATIONSHIP DIAGRAM)</text>
  <!-- CITIES table -->
  <rect x="20" y="40" width="180" height="130" rx="3" fill="none" stroke="#1a1c22" stroke-width="1.5"/>
  <rect x="20" y="40" width="180" height="24" rx="3" fill="#0a5e8a"/>
  <text x="110" y="56" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="11" font-weight="700" fill="#fafbfc">cities</text>
  <text x="30" y="80" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#0a5e8a" font-weight="600">PK city_id</text>
  <text x="155" y="80" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">INT</text>
  <line x1="25" y1="86" x2="195" y2="86" stroke="#e2e5ea" stroke-width="0.5"/>
  <text x="30" y="98" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">city_name</text>
  <text x="155" y="98" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">VARCHAR</text>
  <text x="30" y="112" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">country_code</text>
  <text x="155" y="112" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">CHAR(2)</text>
  <text x="30" y="126" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">latitude</text>
  <text x="155" y="126" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">DECIMAL</text>
  <text x="30" y="140" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">longitude</text>
  <text x="155" y="140" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">DECIMAL</text>
  <text x="30" y="154" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">climate_zone</text>
  <text x="155" y="154" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">VARCHAR</text>
  <!-- SENSORS table -->
  <rect x="280" y="40" width="200" height="160" rx="3" fill="none" stroke="#1a1c22" stroke-width="1.5"/>
  <rect x="280" y="40" width="200" height="24" rx="3" fill="#0a5e8a"/>
  <text x="380" y="56" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="11" font-weight="700" fill="#fafbfc">sensors</text>
  <text x="290" y="80" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#0a5e8a" font-weight="600">PK sensor_id</text>
  <text x="435" y="80" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">INT</text>
  <line x1="285" y1="86" x2="475" y2="86" stroke="#e2e5ea" stroke-width="0.5"/>
  <text x="290" y="98" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#8a3a6a" font-weight="600">FK city_id</text>
  <text x="435" y="98" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">INT</text>
  <text x="290" y="112" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">site_type</text>
  <text x="435" y="112" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">ENUM</text>
  <text x="290" y="126" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">latitude</text>
  <text x="435" y="126" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">DECIMAL</text>
  <text x="290" y="140" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">longitude</text>
  <text x="435" y="140" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">DECIMAL</text>
  <text x="290" y="154" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">elevation_m</text>
  <text x="435" y="154" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">FLOAT</text>
  <text x="290" y="168" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">install_date</text>
  <text x="435" y="168" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">DATE</text>
  <text x="290" y="182" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">model</text>
  <text x="435" y="182" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">VARCHAR</text>
  <!-- READINGS table -->
  <rect x="560" y="40" width="200" height="145" rx="3" fill="none" stroke="#1a1c22" stroke-width="1.5"/>
  <rect x="560" y="40" width="200" height="24" rx="3" fill="#0a5e8a"/>
  <text x="660" y="56" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="11" font-weight="700" fill="#fafbfc">readings</text>
  <text x="570" y="80" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#0a5e8a" font-weight="600">PK reading_id</text>
  <text x="715" y="80" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">BIGINT</text>
  <line x1="565" y1="86" x2="755" y2="86" stroke="#e2e5ea" stroke-width="0.5"/>
  <text x="570" y="98" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#8a3a6a" font-weight="600">FK sensor_id</text>
  <text x="715" y="98" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">INT</text>
  <text x="570" y="112" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">timestamp</text>
  <text x="715" y="112" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">TIMESTAMP</text>
  <text x="570" y="126" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">temp_c</text>
  <text x="715" y="126" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">FLOAT</text>
  <text x="570" y="140" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">humidity_pct</text>
  <text x="715" y="140" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">FLOAT</text>
  <text x="570" y="154" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">wind_speed_ms</text>
  <text x="715" y="154" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">FLOAT</text>
  <text x="570" y="168" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">solar_wm2</text>
  <text x="715" y="168" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">FLOAT</text>
  <!-- QC_FLAGS table -->
  <rect x="340" y="240" width="200" height="90" rx="3" fill="none" stroke="#1a1c22" stroke-width="1.5"/>
  <rect x="340" y="240" width="200" height="24" rx="3" fill="#0a5e8a"/>
  <text x="440" y="256" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="11" font-weight="700" fill="#fafbfc">qc_flags</text>
  <text x="350" y="280" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#8a3a6a" font-weight="600">FK reading_id</text>
  <text x="495" y="280" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">BIGINT</text>
  <text x="350" y="294" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">flag_code</text>
  <text x="495" y="294" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">CHAR(2)</text>
  <text x="350" y="308" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#2e3240">auto_flagged</text>
  <text x="495" y="308" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">BOOLEAN</text>
  <!-- Relationship lines -->
  <!-- cities 1--* sensors -->
  <line x1="200" y1="80" x2="280" y2="98" stroke="#8a3a6a" stroke-width="1.5"/>
  <text x="240" y="82" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#8a3a6a">1:N</text>
  <!-- sensors 1--* readings -->
  <line x1="480" y1="80" x2="560" y2="98" stroke="#8a3a6a" stroke-width="1.5"/>
  <text x="520" y="82" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#8a3a6a">1:N</text>
  <!-- readings 1--* qc_flags -->
  <line x1="660" y1="185" x2="540" y2="280" stroke="#8a3a6a" stroke-width="1.5"/>
  <text x="610" y="228" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#8a3a6a">1:N</text>
</svg>
<figcaption style="text-align:center;font-size:0.82rem;color:#5a6070;font-style:italic;">Fig. 1. Entity-relationship diagram of the OpenUrbanClimate database schema. PK = primary key (blue), FK = foreign key (purple).</figcaption>
</figure>

## Coverage by City

| City | Country | Sensors | Readings (M) | Period | Climate Zone |
|---|---|---|---|---|---|
| Tokyo | JP | 1,842 | 482 | 2019-2025 | Cfa |
| Boston | US | 1,204 | 315 | 2019-2025 | Dfa |
| Houston | US | 986 | 258 | 2020-2025 | Cfa |
| Phoenix | US | 724 | 190 | 2020-2025 | BWh |
| London | GB | 1,156 | 302 | 2019-2025 | Cfb |
| Cape Town | ZA | 612 | 160 | 2021-2025 | Csb |
| Lisbon | PT | 498 | 130 | 2021-2025 | Csa |
| Seoul | KR | 1,380 | 362 | 2019-2025 | Dwa |
| Singapore | SG | 428 | 112 | 2022-2025 | Af |
| Sydney | AU | 682 | 178 | 2020-2025 | Cfa |
| Mumbai | IN | 542 | 64 | 2023-2025 | Am |
| Sao Paulo | BR | 498 | 58 | 2023-2025 | Cwa |
| Lagos | NG | 312 | 36 | 2024-2025 | Aw |
| Stockholm | SE | 386 | 52 | 2023-2025 | Dfb |
| Dubai | AE | 268 | 31 | 2024-2025 | BWh |
| Mexico City | MX | 356 | 42 | 2023-2025 | Cwb |
| Helsinki | FI | 286 | 38 | 2023-2025 | Dfb |
| Nairobi | KE | 258 | 37 | 2024-2025 | Cfb |
| **Total** | | **12,418** | **2,847** | | |
