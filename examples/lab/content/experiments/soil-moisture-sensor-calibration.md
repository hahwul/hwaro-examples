+++
title = "Calibrating Capacitive Soil Moisture Sensors for Field Deployment"
date = "2025-05-28"
tags = ["sensors", "calibration", "agriculture"]
categories = ["instrumentation"]
description = "Establishing a voltage-to-moisture mapping for three capacitive sensor models using gravimetric analysis."
experiment_id = "EXP-002"
status = "completed"
+++

## Hypothesis

Factory-provided calibration curves for capacitive soil moisture sensors will deviate from actual readings by more than 8% volumetric water content (VWC) when deployed in clay-heavy field soil, necessitating site-specific calibration.

## Method

Three sensor models were tested:

- **Model A**: Generic v1.2 capacitive module (3.3V)
- **Model B**: Branded agricultural probe (RS-485)
- **Model C**: Low-cost resistive-capacitive hybrid

### Calibration Protocol

1. Collect 12 soil samples from the target field at varying depths (5cm, 15cm, 30cm)
2. Oven-dry each sample at 105C for 24 hours to establish dry mass
3. Progressively rehydrate samples in 5% VWC increments
4. Record sensor voltage at each hydration level
5. Calculate gravimetric water content as reference

### Soil Composition

| Component | Percentage |
|-----------|:---:|
| Clay | 42% |
| Silt | 31% |
| Sand | 22% |
| Organic matter | 5% |

## Results

| VWC (%) | Model A (V) | Model B (V) | Model C (V) |
|:---:|:---:|:---:|:---:|
| 5 | 2.81 | 2.94 | 2.72 |
| 10 | 2.54 | 2.71 | 2.41 |
| 15 | 2.28 | 2.49 | 2.13 |
| 20 | 2.01 | 2.25 | 1.88 |
| 25 | 1.76 | 2.03 | 1.62 |
| 30 | 1.52 | 1.82 | 1.39 |
| 35 | 1.31 | 1.63 | 1.18 |
| 40 | 1.14 | 1.48 | 1.01 |

### Deviation from Factory Curves

- **Model A**: Average deviation of 11.3% VWC (max 16.2% at saturation)
- **Model B**: Average deviation of 6.8% VWC (within spec below 25% VWC)
- **Model C**: Average deviation of 14.7% VWC (nonlinear response above 30%)

### Fitted Equations

All models fit well to a second-degree polynomial after site-specific calibration (R-squared > 0.98).

## Conclusion

The hypothesis is confirmed for Models A and C. Model B performed within its advertised tolerance below 25% VWC but exceeded it in saturated conditions. Site-specific calibration is essential for all models when deployed in clay-heavy soils.

Field deployment should use the fitted polynomial coefficients rather than factory defaults. Recalibration is recommended seasonally as organic matter content shifts.
