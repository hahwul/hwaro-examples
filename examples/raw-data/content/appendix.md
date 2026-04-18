+++
title = "Appendix"
description = "Data access, file formats, author contributions, funding, and references."
tags = ["paper", "light", "raw", "data", "tables"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">SUPPLEMENTARY MATERIALS</p>
  <h1 class="paper-section-title">Appendix</h1>
</header>

## Data Access

The complete raw dataset is available in CSV format at the DOI repository (10.41093/pdr.2026.9.ds0041). Files include:

- `transect_A_raw.csv` (61 records, 12 columns)
- `transect_B_raw.csv` (44 records, 12 columns)
- `transect_C_raw.csv` (76 records, 12 columns)
- `quality_flags.csv` (181 records, flag assignments with criteria codes)
- `environment_log.csv` (weather station data at 1-min intervals)
- `instrument_calibration.pdf` (factory calibration certificate)

All files use UTF-8 encoding with comma delimiters. Missing values are encoded as `NaN`. Column headers are described in `README_columns.txt`.

## CRediT Author Contributions

- **Kristin Halvorsen:** Investigation (field data collection), Data Curation, Writing -- Original Draft
- **Mwamba Ilunga:** Methodology (EM processing), Software, Formal Analysis
- **Yuki Okamoto:** Investigation (field data collection), Resources, Writing -- Review

## Funding

Norwegian Polar Institute internal grant NPI-2024-ICE-08. Japan Society for the Promotion of Science Postdoctoral Fellowship (to Y.O.).

## References

<ol style="list-style: decimal; padding-left: 2rem; font-size: 0.92rem; color: #2a3448;">
  <li>Haas C, Lobach J, Hendricks S, et al. Multiyear sea ice thickness retrieval using ground-based electromagnetic induction sounding. <em>Cold Reg Sci Technol.</em> 2009;55(1):94-103.</li>
  <li>Kovacs A, Morey RM. Electromagnetic measurements of multi-year sea ice using impulse radar. <em>Cold Reg Sci Technol.</em> 1986;12(1):67-93.</li>
</ol>
