+++
title = "Effect of LED Spectrum Ratios on Basil Growth Rate"
date = "2025-04-22"
tags = ["botany", "lighting", "agriculture"]
categories = ["biology"]
description = "Measuring biomass accumulation in basil under different red-to-blue LED ratios over a 28-day cycle."
experiment_id = "EXP-004"
status = "completed"
+++

## Hypothesis

A red-to-blue ratio of 4:1 will produce the highest dry biomass in sweet basil (Ocimum basilicum) compared to 2:1, 6:1, and broad-spectrum white LED controls, based on chlorophyll absorption peaks.

## Method

### Setup

- 4 identical growth chambers, 0.5 m^2 each
- 16 basil seedlings per chamber (64 total), transplanted at 14 days old
- 16/8 hour photoperiod (light/dark)
- Temperature: 24C day / 20C night
- Humidity: 60-70% RH
- Watering: 200mL per plant every 48 hours

### Light Treatments

| Group | Red (660nm) | Blue (450nm) | Total PPFD |
|-------|:---:|:---:|:---:|
| A (Control) | White LED | White LED | 200 umol/m2/s |
| B (2:1) | 133 | 67 | 200 umol/m2/s |
| C (4:1) | 160 | 40 | 200 umol/m2/s |
| D (6:1) | 171 | 29 | 200 umol/m2/s |

### Measurements (every 7 days)

- Plant height (cm)
- Leaf count
- Leaf area (cm^2, via image analysis)
- Final dry biomass at day 28 (oven-dried at 70C for 48h)

## Results

### Growth at Day 28

| Group | Height (cm) | Leaf Count | Leaf Area (cm^2) | Dry Biomass (g) |
|-------|:---:|:---:|:---:|:---:|
| A (White) | 18.2 | 14.1 | 82.4 | 3.21 |
| B (2:1) | 16.8 | 15.8 | 91.3 | 3.54 |
| C (4:1) | 19.4 | 16.2 | 98.7 | 4.12 |
| D (6:1) | 21.7 | 12.4 | 74.6 | 3.38 |

### Key Observations

- Group C (4:1) produced the highest dry biomass, supporting the hypothesis.
- Group D (6:1) showed the tallest plants but with fewer, smaller leaves -- classic shade avoidance response from insufficient blue light.
- Group B (2:1) had compact, bushy growth with the second-highest leaf area.
- Internode elongation in Group D was 34% greater than Group C, confirming blue light's role in suppressing stem extension.

## Conclusion

The 4:1 red-to-blue ratio produced optimal biomass accumulation in basil, balancing photosynthetic efficiency with morphological quality. Ratios above 4:1 trigger shade avoidance, producing taller but less productive plants.

For production purposes, the 4:1 ratio is recommended. Where compact plant architecture is prioritized (e.g., vertical farming with limited headroom), 2:1 may be preferable despite lower total biomass.
