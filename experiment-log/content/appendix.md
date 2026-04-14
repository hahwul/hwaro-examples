+++
title = "Appendix"
description = "Supplementary material including reproducibility notes, protocol deviations, data availability, and author contributions."
tags = ["paper", "dark", "experimental", "appendix"]
categories = ["pages"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">Appendix</p>
  <h1 class="paper-section-title">Appendix</h1>
  <p class="paper-lede">Supplementary material: reproducibility notes, protocol deviations, data availability statement, and author contributions.</p>
</header>

## A. Reproducibility Notes

### A.1 Catalyst batch consistency

All three catalyst batches (EXP-01, EXP-02, EXP-03) were prepared within a single two-week period to minimise variations in precursor lot, ambient humidity, and furnace calibration. ICP-OES measurements confirmed that actual metal loadings were within +/- 3 pct of target values for all batches.

### A.2 Reactor reproducibility

Duplicate runs were performed for EXP-01 and EXP-03 to verify reproducibility. Results are summarised below.

<table class="paper-table">
  <caption><span class="tab-num">Table A1.</span> Reproducibility data for duplicate runs.</caption>
  <thead>
    <tr>
      <th>Experiment</th>
      <th>Run</th>
      <th>Selectivity (pct)</th>
      <th>Yield (pct)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="exp-id">EXP-01</span></td>
      <td>Run A</td>
      <td class="num">72.4</td>
      <td class="num">58.1</td>
    </tr>
    <tr>
      <td><span class="exp-id">EXP-01</span></td>
      <td>Run B</td>
      <td class="num">71.8</td>
      <td class="num">57.6</td>
    </tr>
    <tr>
      <td><span class="exp-id exp-success">EXP-03</span></td>
      <td>Run A</td>
      <td class="num">91.2</td>
      <td class="num">71.4</td>
    </tr>
    <tr>
      <td><span class="exp-id exp-success">EXP-03</span></td>
      <td>Run B</td>
      <td class="num">90.8</td>
      <td class="num">70.9</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">Maximum deviation between duplicate runs: 0.6 percentage points in selectivity, 0.5 percentage points in yield.</td></tr>
  </tfoot>
</table>

### A.3 Analytical calibration

GC-FID calibration was performed daily with certified gas mixtures (Air Liquide ALPHAGAZ) containing 1,3-butadiene, 1-butene, trans-2-butene, cis-2-butene, and n-butane at 0.5, 1.0, and 2.0 vol pct. Response factors were stable within +/- 1.5 pct across the study period.

---

## B. Protocol Deviations

### B.1 EXP-01 temperature overshoot

During the initial ramp to 120 C for EXP-01, a brief temperature overshoot to 127 C was recorded (duration: approximately 3 min) due to a PID tuning lag in the furnace controller. The thermocouple log confirms that the catalyst bed returned to 120 +/- 1 C within 8 min and remained stable throughout the subsequent 8 h test. The overshoot occurred before introduction of the hydrocarbon feed and is not expected to have affected catalytic performance.

### B.2 EXP-02 flow controller calibration

The N2 mass flow controller was recalibrated between EXP-01 and EXP-02 after a routine quarterly check revealed a 1.2 pct offset from the set point. The correction was applied before EXP-02, and the recalibrated flow rate was used for both EXP-02 and EXP-03. The magnitude of this offset (0.7 mL/min on a 60 mL/min total flow) falls within the expected measurement uncertainty and is unlikely to affect reported selectivity or yield values.

### B.3 No deviations in EXP-03

No protocol deviations were recorded during EXP-03.

---

## C. Data Availability

Raw chromatographic data (peak areas, retention times, response factors), thermocouple logs, and mass flow controller records for all three experiments are deposited in the Lund University Research Data Repository under accession number LU-RDR-2026-04118. XRD diffractograms, TEM images, and XPS spectra are available in the same repository as supplementary dataset S1.

All analysis scripts (Python 3.11, using NumPy 1.26, SciPy 1.12, and Matplotlib 3.8) are provided in a companion code repository at github.com/bergstrom-lab/pdcu-sequential-opt (MIT licence).

---

## D. CRediT Author Contributions

<table class="paper-table">
  <caption><span class="tab-num">Table A2.</span> Author contributions following the CRediT taxonomy.</caption>
  <thead>
    <tr>
      <th>Author</th>
      <th>Contributions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Lena Bergstrom</strong></td>
      <td>Conceptualisation, Methodology, Supervision, Writing -- original draft, Writing -- review and editing</td>
    </tr>
    <tr>
      <td><strong>Hassan Farouk</strong></td>
      <td>Investigation, Data curation, Formal analysis, Writing -- original draft</td>
    </tr>
    <tr>
      <td><strong>Takeshi Yamamoto</strong></td>
      <td>Investigation, Characterisation (XRD, TEM), Writing -- review and editing</td>
    </tr>
    <tr>
      <td><strong>Priya Chandrasekaran</strong></td>
      <td>Formal analysis, Visualisation, Software, Writing -- review and editing</td>
    </tr>
    <tr>
      <td><strong>Olga Novak</strong></td>
      <td>Characterisation (XPS), Validation, Writing -- review and editing</td>
    </tr>
  </tbody>
</table>

---

## E. Funding

This work was supported by the Swedish Research Council (Vetenskapsradet, grant 2024-04567), the Egyptian Ministry of Higher Education (doctoral fellowship to H.F.), and JSPS KAKENHI grant 24K01234 (T.Y.). O.N. acknowledges support from the Czech Science Foundation (GACR 26-12345S).

## F. Conflicts of Interest

The authors declare no competing financial or non-financial interests.
