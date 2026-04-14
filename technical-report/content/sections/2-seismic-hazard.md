+++
title = "Seismic Hazard Characterization"
description = "Scenario earthquake selection, ground motion generation, and site-specific amplification for the bridge inventory."
weight = 2
template = "post"
[extra]
section_number = "2"
+++

## 2.1 Scenario Earthquakes

Seven scenario earthquakes were selected to represent the range of plausible seismic hazards. Scenarios are identified by alphanumeric codes per NIRL convention.

<table class="paper-table">
  <caption><span class="tab-num">Table 2.</span> Scenario earthquake parameters.</caption>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Source</th>
      <th>Mw</th>
      <th>Depth (km)</th>
      <th>Duration (s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>S1-PHF</td>
      <td>Portland Hills Fault</td>
      <td class="num">6.5</td>
      <td class="num">8</td>
      <td class="num">15-25</td>
    </tr>
    <tr>
      <td>S2-SEA</td>
      <td>Seattle Fault</td>
      <td class="num">7.0</td>
      <td class="num">10</td>
      <td class="num">20-35</td>
    </tr>
    <tr>
      <td>S3-SWI</td>
      <td>South Whidbey Island Fault</td>
      <td class="num">6.8</td>
      <td class="num">12</td>
      <td class="num">18-30</td>
    </tr>
    <tr>
      <td>S4-INT</td>
      <td>Intraslab (Nisqually-type)</td>
      <td class="num">6.8</td>
      <td class="num">52</td>
      <td class="num">25-40</td>
    </tr>
    <tr>
      <td>S5-CSZ-P</td>
      <td>CSZ Partial Rupture (Southern)</td>
      <td class="num">8.2</td>
      <td class="num">15-25</td>
      <td class="num">60-90</td>
    </tr>
    <tr>
      <td>S6-CSZ-F</td>
      <td>CSZ Full Rupture</td>
      <td class="num">9.0</td>
      <td class="num">10-30</td>
      <td class="num">120-180</td>
    </tr>
    <tr>
      <td>S7-CSZ-M</td>
      <td>CSZ Maximum Considered</td>
      <td class="num">9.1</td>
      <td class="num">10-30</td>
      <td class="num">140-200</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Mw = moment magnitude. Duration = significant duration (5-95 pct Arias intensity). CSZ scenarios based on Goldfinger et al. (2017) rupture models.</td></tr>
  </tfoot>
</table>

## 2.2 Ground Motion Generation

Site-specific ground motion time histories were generated using the USGS ShakeMap framework (v4.1) with the following ground motion prediction equations (GMPEs): Abrahamson, Silva, and Kamai (2014) for crustal sources; Zhao et al. (2006) for intraslab sources; and Atkinson and Macias (2009) for the Cascadia subduction interface. For each scenario, 30 ground motion realizations were generated per bridge site to capture epistemic uncertainty in the GMPEs.

## 2.3 Site Amplification

Site-specific amplification factors were derived from measured and inferred Vs30 values using the NEHRP site classification system. Of the 142 bridge sites: 18 are classified as Site Class B (rock), 64 as Site Class C (very dense soil/soft rock), 48 as Site Class D (stiff soil), and 12 as Site Class E (soft soil). Site Class E locations are concentrated in river valley alluvial deposits and are associated with the highest amplification factors and liquefaction susceptibility.
