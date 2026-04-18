+++
title = "Conclusions"
weight = 4
template = "post"
description = "Key findings, study limitations, future research directions, and acknowledgements for the air quality prediction study."
tags = ["conclusions", "future-work", "acknowledgements"]

[extra]
section_number = "4"
panel_color = "gold"
+++

## Key Findings

This study demonstrates that modern machine learning architectures, particularly Transformer-based models, can deliver accurate and operationally feasible real-time air quality predictions in urban environments. The principal findings are:

1. **Transformer superiority.** The Transformer architecture achieved the best performance across all three pollutants (PM2.5, NO2, O3) and all four forecast horizons (1h, 6h, 12h, 24h), with an R-squared of 0.94 and MAE of 2.41 ug/m3 for 24-hour PM2.5 forecasts.

2. **Substantial improvement over baselines.** All four ML models significantly outperformed the existing physics-based WRF-Chem baseline currently deployed in the Greenfield City municipal monitoring system. The Transformer achieved a 64% reduction in MAE compared to the physics baseline.

3. **Operational feasibility confirmed.** Real-time inference latency remained below 200ms for all models when processing the full 200-sensor network in parallel, confirming that ML-based prediction can be deployed operationally without compromising the timeliness of public health advisories.

4. **Diminishing returns from ensembles.** Ensemble approaches combining Transformer and XGBoost predictions yielded only marginal improvement (+0.01 R-squared) at the cost of doubled computational overhead, suggesting that the standalone Transformer is the most efficient deployment option.

## Limitations

Several limitations should be considered when interpreting these results:

- **Geographic specificity** -- The models were trained and evaluated on data from a single metropolitan area. Transfer learning performance to other cities with different emission profiles, topography, and climate patterns has not been assessed.
- **Sensor quality** -- Low-cost sensors exhibit higher measurement uncertainty compared to regulatory-grade instruments. While we applied established calibration protocols, residual bias may affect model training.
- **Temporal coverage** -- The 18-month study period may not fully capture interannual variability in pollution patterns, particularly rare meteorological events (e.g., temperature inversions, wildfire smoke intrusion).
- **Feature availability** -- Some input features (satellite AOD, industrial emissions) have limited temporal resolution or reporting delays that could constrain real-time operational use.

## Future Work

Ongoing and planned extensions of this research include:

- **Multi-city transfer learning** -- Evaluating pre-trained models on sensor networks in three additional metropolitan areas with fine-tuning on limited local data
- **Explainability analysis** -- Applying SHAP and attention-weight visualization to understand which input features drive predictions under different atmospheric conditions
- **Extreme event detection** -- Developing specialized model heads for predicting pollution spikes associated with wildfires, industrial accidents, and severe weather events
- **Edge deployment** -- Optimizing Transformer inference for deployment on low-power edge computing devices co-located with sensor nodes

## Acknowledgements

This research was supported by the National Science Foundation (Grant No. NSF-2024-ENV-4821), the Environmental Protection Agency STAR Fellowship Program, and the Greenfield City Department of Environmental Services. The authors thank the Metropolitan Institute of Technology High-Performance Computing Center for providing GPU resources, and the Greenfield City Transportation Authority for access to traffic sensor data.
