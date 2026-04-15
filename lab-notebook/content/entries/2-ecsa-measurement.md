+++
title = "Electrochemical Surface Area Measurement"
description = "Double-layer capacitance method for ECSA determination of all five Cu-Sn electrodes. Cyclic voltammetry in non-faradaic region."
weight = 2
template = "post"
tags = ["ECSA", "capacitance", "cyclic-voltammetry"]
categories = ["entries"]
[extra]
entry_number = "2"
+++

<span class="timestamp">2026-04-08 / 09:00-12:30 JST</span>

## Objective

Determine electrochemical surface area (ECSA) of each Cu-Sn electrode using double-layer capacitance measurements in N2-saturated 0.1 M KHCO3.

## Method

Cyclic voltammetry in the non-faradaic region (0.05--0.15 V vs. RHE) at scan rates 10, 20, 40, 60, 80, 100 mV/s. Slope of (j_a - j_c)/2 vs. scan rate gives C_dl. ECSA = C_dl / C_s, where C_s = 40 uF/cm2 (standard for metallic surfaces).

## Results

| Electrode | C_dl (uF) | ECSA (cm2) | Roughness Factor | Notes |
|-----------|----------|-----------|-----------------|-------|
| Pure Cu   | 82       | 2.05      | 1.0x (ref)      | Smooth surface |
| Cu9Sn1    | 124      | 3.10      | 1.5x            | Slight texturing |
| Cu7Sn3    | 310      | 7.75      | 3.8x            | Dendritic -- highest |
| Cu1Sn1    | 198      | 4.95      | 2.4x            | Cauliflower structure |
| Cu3Sn7    | 145      | 3.63      | 1.8x            | Compact layered |

<div class="observation">
<strong>Key finding:</strong> Cu7Sn3 has 3.8x the ECSA of pure Cu, consistent with dendritic morphology seen in SEM. However, the FE_CO improvement (71.3% vs. 28.2%) exceeds what ECSA enhancement alone can explain -- electronic effects of Sn alloying must play a role. ECSA-normalized activity to be calculated in Entry 3.
</div>

## Quality Checks

- All C_dl fits show R2 > 0.998 (good linearity)
- No redox peaks visible in the CV window (confirmed non-faradaic)
- Electrode resistance by iR compensation: 12--18 ohm (acceptable)
