+++
title = "Impact Assessment"
description = "Comprehensive assessment of how the corrections affect the original paper's conclusions, citing works, and downstream research."
tags = ["paper", "light", "errata", "correction", "transparent"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">IMPACT ASSESSMENT</p>
  <h1 class="paper-section-title">Correction Impact Analysis</h1>
  <p class="paper-lede">Assessment of how the corrections affect the original conclusions, derivative works, and the broader literature.</p>
</header>

## Overall Impact Statement

The corrections change the quantitative magnitude of the reported thermoelectric enhancement but do not invalidate the principal scientific finding. Nanostructured Bi2Te3 thin films remain effective thermoelectric materials with ZT > 1 at room temperature. The corrected values are more consistent with independently reported measurements in the literature.

## Impact by Category

<table class="paper-table">
  <caption><span class="tab-num">Table 4.</span> Impact assessment matrix.</caption>
  <thead>
    <tr>
      <th>Category</th>
      <th>Original claim</th>
      <th>Corrected claim</th>
      <th>Validity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Primary finding</td>
      <td>Nanostructuring reduces kappa</td>
      <td>Unchanged</td>
      <td><span class="severity-badge" style="color:#2a7a4a; border-color:#2a7a4a;">VALID</span></td>
    </tr>
    <tr>
      <td>Reduction magnitude</td>
      <td>78 pct reduction</td>
      <td>63 pct reduction</td>
      <td><span class="severity-badge major">REVISED</span></td>
    </tr>
    <tr>
      <td>ZT > 1 achievement</td>
      <td>All films above ZT = 1</td>
      <td>Unchanged</td>
      <td><span class="severity-badge" style="color:#2a7a4a; border-color:#2a7a4a;">VALID</span></td>
    </tr>
    <tr>
      <td>ZT peak value</td>
      <td>ZT = 1.82</td>
      <td>ZT = 1.48</td>
      <td><span class="severity-badge major">REVISED</span></td>
    </tr>
    <tr>
      <td>Callaway model fit</td>
      <td>Good fit (R-sq = 0.98)</td>
      <td>Good fit (R-sq = 0.97)</td>
      <td><span class="severity-badge" style="color:#2a7a4a; border-color:#2a7a4a;">VALID</span></td>
    </tr>
    <tr>
      <td>Proximity to amorphous limit</td>
      <td>Within 39 pct</td>
      <td>Within 71 pct</td>
      <td><span class="severity-badge major">REVISED</span></td>
    </tr>
  </tbody>
</table>

## Citing Works Advisory

As of the correction date, the original paper has been cited 14 times. Authors of citing works are advised to verify whether their analyses depend on the specific numerical values corrected herein. Works citing the qualitative finding (nanostructuring reduces thermal conductivity) are unaffected. Works that used the original ZT values or thermal conductivity data for comparison or meta-analysis should update their references.

The journal has issued a CrossRef correction notice linking this erratum to the original article DOI. The original article now carries a prominent correction banner linking to this erratum.

## Root Cause and Prevention

The error originated from a manual lookup of the fused silica reference thermal conductivity value. The value at 298 K (1.38 W/m-K) was used instead of the value at the actual measurement temperature of 295 K (1.12 W/m-K). Contributing factors:

1. The reference value lookup table was indexed by 5 K intervals; 295 K fell between entries
2. No automated temperature-matching validation was in place
3. The calibration protocol did not require a second independent check

**Preventive measures adopted:**
- Calibration procedure now includes automated temperature logging with software-matched reference value lookup
- All calibration calculations reviewed by a second team member before data processing
- Laboratory temperature recorded automatically in the measurement metadata
