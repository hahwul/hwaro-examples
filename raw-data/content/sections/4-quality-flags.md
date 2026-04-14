+++
title = "D-4. Data Quality Flags"
description = "Flag definitions, assignment criteria, and per-transect quality summaries."
weight = 4
template = "post"
tags = ["paper", "light", "raw", "data", "tables"]
categories = ["sections"]

[extra]
section_number = "D-4"
+++

## Flag Definitions

<table class="paper-table">
  <caption><span class="tab-num">Table 5.</span> Data quality flag definitions and assignment criteria.</caption>
  <thead>
    <tr><th>Flag</th><th>Label</th><th>Criteria</th><th>Action</th></tr>
  </thead>
  <tbody>
    <tr><td class="flag-v">V</td><td>Valid</td><td>All instrument parameters within normal operating range</td><td>Use without restriction</td></tr>
    <tr><td class="flag-s">S</td><td>Suspect</td><td>Instrument temperature > -15 C (outside calibrated range) OR single-channel signal anomaly</td><td>Use with caution; verify against independent data if available</td></tr>
    <tr><td class="flag-x">X</td><td>Invalid</td><td>Negative apparent conductivity OR h_ice < 0 OR instrument power failure during measurement</td><td>Exclude from analysis</td></tr>
  </tbody>
</table>

## Quality Summary by Transect

<table class="paper-table">
  <caption><span class="tab-num">Table 6.</span> Data quality flag counts by transect.</caption>
  <thead>
    <tr><th>Transect</th><th>Total obs</th><th><span class="flag-badge valid">V</span></th><th><span class="flag-badge suspect">S</span></th><th><span class="flag-badge invalid">X</span></th><th>Valid pct</th></tr>
  </thead>
  <tbody>
    <tr><td>A</td><td>61</td><td>58</td><td>2</td><td>1</td><td>95.1</td></tr>
    <tr><td>B</td><td>44</td><td>42</td><td>1</td><td>1</td><td>95.5</td></tr>
    <tr><td>C</td><td>76</td><td>74</td><td>2</td><td>0</td><td>97.4</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>181</strong></td><td><strong>174</strong></td><td><strong>5</strong></td><td><strong>2</strong></td><td><strong>96.1</strong></td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">Overall data quality: 96.1 pct valid, 2.8 pct suspect, 1.1 pct invalid. All suspect flags due to instrument temperature anomalies. Both invalid flags due to negative apparent conductivity readings.</td></tr>
  </tfoot>
</table>
