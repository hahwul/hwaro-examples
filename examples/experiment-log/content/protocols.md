+++
title = "Experimental Protocols"
description = "Standardised procedures, equipment specifications, and reaction conditions used across all three sequential catalyst optimisation experiments."
tags = ["paper", "dark", "experimental", "protocols"]
categories = ["pages"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">Protocols</p>
  <h1 class="paper-section-title">Experimental Protocols</h1>
  <p class="paper-lede">Standardised procedures, equipment specifications, and reaction conditions applied uniformly across EXP-01, EXP-02, and EXP-03.</p>
</header>

## 1. Catalyst Preparation

All Pd-Cu/Al2O3 catalysts were prepared by incipient wetness co-impregnation on gamma-alumina support (Sasol Puralox TH 100/150, surface area 150 m2/g, pore volume 0.50 mL/g). Metal precursors were palladium(II) nitrate dihydrate (Pd(NO3)2 * 2H2O, Sigma-Aldrich, 99.9 pct) and copper(II) nitrate trihydrate (Cu(NO3)2 * 3H2O, Sigma-Aldrich, 99.5 pct).

### 1.1 Impregnation procedure

- Dissolve calculated masses of Pd and Cu precursors in deionised water to fill the support pore volume
- Add solution dropwise to alumina powder under continuous stirring at room temperature
- Age the impregnated material for 12 h at ambient conditions
- Dry at 110 C in a forced-air oven for 8 h
- Calcine in static air at 450 C for 4 h (ramp rate: 2 C/min)

### 1.2 Catalyst compositions

<table class="paper-table">
  <caption><span class="tab-num">Table P1.</span> Target metal loadings for each experiment.</caption>
  <thead>
    <tr>
      <th>Catalyst</th>
      <th>Pd:Cu molar ratio</th>
      <th>Pd loading (wt pct)</th>
      <th>Cu loading (wt pct)</th>
      <th>Total metal (wt pct)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="exp-id">EXP-01</span></td>
      <td class="num">3:1</td>
      <td class="num">1.50</td>
      <td class="num">0.30</td>
      <td class="num">1.80</td>
    </tr>
    <tr>
      <td><span class="exp-id">EXP-02</span></td>
      <td class="num">2:1</td>
      <td class="num">1.50</td>
      <td class="num">0.47</td>
      <td class="num">1.97</td>
    </tr>
    <tr>
      <td><span class="exp-id exp-success">EXP-03</span></td>
      <td class="num">2:1</td>
      <td class="num">1.50</td>
      <td class="num">0.47</td>
      <td class="num">1.97</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">EXP-03 uses the same catalyst as EXP-02; only reaction temperature was changed.</td></tr>
  </tfoot>
</table>

## 2. Reactor System

### 2.1 Fixed-bed reactor

- Reactor tube: quartz, 10 mm ID, 400 mm length
- Catalyst bed: 200 mg catalyst diluted with 800 mg SiC (60-80 mesh) for isothermality
- Temperature control: three-zone tube furnace (Carbolite Gero TVS 12/600) with K-type thermocouple in catalyst bed centre
- Pressure: atmospheric (101.3 kPa)

### 2.2 Gas supply and flow control

- Feed: 1.0 vol pct 1,3-butadiene, 20 vol pct H2, balance N2
- Total flow: 60 mL/min (STP), controlled by Bronkhorst EL-FLOW mass flow controllers (accuracy: +/- 0.5 pct of reading)
- Weight hourly space velocity (WHSV): 3.6 h-1 (constant across all experiments)

### 2.3 Pre-treatment

Prior to each catalytic test, the catalyst was reduced in situ under 50 mL/min of 10 vol pct H2/N2 at 300 C for 2 h (ramp: 5 C/min), then cooled to the target reaction temperature under N2 flow.

## 3. Analytical Methods

### 3.1 On-line GC-FID analysis

- Instrument: Agilent 7890B GC with FID
- Column: HP-PLOT/Al2O3 (50 m x 0.53 mm x 15 um)
- Carrier gas: He at 3 mL/min
- Oven programme: 40 C (5 min hold), 10 C/min to 200 C (2 min hold)
- Sampling interval: every 30 min for 8 h; selectivity and yield reported at 4 h TOS (steady state)

### 3.2 Definitions

- **Conversion (X):** X = (C_in - C_out) / C_in x 100 pct, where C is butadiene concentration
- **Selectivity (S):** S = C_1butene / (C_in - C_out) x 100 pct, toward 1-butene specifically
- **Yield (Y):** Y = X x S / 100

## 4. Variable Control Protocol

The sequential optimisation follows a strict single-variable-change protocol. At each decision node between experiments, only one parameter is modified. The rationale for each change is documented in the [Change Log](/log/) and in the individual section pages.

<div class="decision-node">
  <p><strong>Protocol rule:</strong> Only one variable may change between consecutive experiments. The changed variable and its rationale must be documented before beginning the next trial. All other conditions (catalyst mass, feed composition, WHSV, pre-treatment) remain identical.</p>
</div>

## 5. Safety and Waste

All experiments were conducted in a ventilated fume hood rated for flammable gas mixtures. H2 leak detection was performed before each run using a portable combustible gas detector (MSA ALTAIR 5X). Spent catalysts were collected for noble metal recovery via the university hazardous waste programme.
