+++
title = "1. Introduction"
description = "Motivation for real-time epidemic forecasting and the limitations of current ensemble approaches."
weight = 1
template = "post"
tags = ["introduction", "motivation", "surveillance"]
categories = ["sections"]
[extra]
section_number = "1"
+++

The COVID-19 pandemic exposed critical gaps in our ability to forecast epidemic trajectories in real time. While post-hoc analyses demonstrated that computational models could match or exceed expert judgment for short-horizon predictions, the operational deployment of these systems revealed three persistent challenges: (i) data heterogeneity across surveillance streams, (ii) spatial non-stationarity in transmission dynamics, and (iii) systematic miscalibration of uncertainty estimates.

Current state-of-the-art approaches, exemplified by the WHO Collaborative Epidemic Forecasting Hub, aggregate predictions from 20--40 independent models into ensemble forecasts. While this strategy provides robustness, it treats each surveillance signal independently and cannot capture cross-modal dependencies -- for example, the 5--10 day lead that wastewater viral load signals provide over clinical case reports.

## Contributions

This paper makes three contributions:

1. **Architecture.** We introduce TG-EpiForecast, a temporal graph transformer that natively fuses heterogeneous surveillance streams (wastewater, syndromic, laboratory-confirmed) into a unified spatiotemporal representation. Unlike prior graph neural network approaches that use static adjacency matrices, our architecture learns dynamic edge weights from real-time mobility data.

2. **Evaluation at scale.** We provide the most comprehensive multi-pathogen evaluation to date, spanning influenza, RSV, and COVID-19 across 47 countries and 156 weeks (2022--2025). All training, validation, and test splits use strictly prospective (real-time) data vintages to avoid look-ahead bias.

3. **Calibrated uncertainty.** We introduce a conformal prediction wrapper that provides distribution-free prediction intervals with finite-sample coverage guarantees, addressing the chronic miscalibration problem identified in prior forecasting evaluations.
