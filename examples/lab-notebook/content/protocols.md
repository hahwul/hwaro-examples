+++
title = "Standard Protocols"
description = "Standard operating procedures for electrode preparation, electrolysis, and product analysis."
tags = ["protocol", "SOP", "methods"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Standard Operating Procedures</p>
  <h1 class="paper-title">Experimental Protocols</h1>
</header>

## SOP-1: Electrode Preparation by Co-Electrodeposition

1. Polish glassy carbon disc to mirror finish (0.3 um, then 0.05 um alumina)
2. Sonicate in DI water (5 min), then ethanol (5 min), dry under N2
3. Prepare deposition bath: CuSO4 + SnCl2 at target ratio, pH 1.8 (H2SO4)
4. Three-electrode setup: GC working, Pt mesh counter, Ag/AgCl reference
5. Apply constant potential for 300 s (see Entry 1 for specific potentials per ratio)
6. Rinse with DI water, dry gently under N2
7. Characterize by XRD (Bruker D8, Cu K-alpha) and SEM (Hitachi SU8000, 5 kV)

## SOP-2: Controlled-Potential Electrolysis

1. Assemble H-cell with Nafion 117 membrane (pre-treated in 0.5 M H2SO4, 80 C, 1 h)
2. Fill catholyte: 0.1 M KHCO3 (30 mL), saturate with CO2 for 30 min (pH should reach 6.8)
3. Fill anolyte: 0.1 M KHCO3 (30 mL), N2 purge
4. Three-electrode: Cu-Sn working, Pt mesh counter, Ag/AgCl reference
5. Measure iR drop by EIS at OCP (typically 12--18 ohm)
6. Apply -0.9 V vs. RHE (iR-corrected) for 60 min
7. **Stirring: 600 rpm** (see Entry 4 for consequences of insufficient stirring)

## SOP-3: Product Analysis

**Gas-phase (GC):**
- Instrument: Shimadzu GC-2014, TCD + FID
- Column: Shincarbon-ST (TCD for H2/CO), HP-PLOT Q (FID for CH4/C2H4)
- Carrier: Ar (TCD), N2 (FID)
- Sampling: automated 6-port valve, every 15 min

**Liquid-phase (HPLC):**
- Instrument: Shimadzu LC-20A, RI detector
- Column: Aminex HPX-87H (Bio-Rad)
- Eluent: 5 mM H2SO4, 0.6 mL/min, 60 C
- Sample: 1 mL catholyte, filtered (0.22 um), 20 uL injection
