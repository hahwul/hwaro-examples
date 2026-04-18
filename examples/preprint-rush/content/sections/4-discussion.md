+++
title = "4. Discussion and Limitations"
description = "Interpretation of results, operational implications, and known limitations of the current approach."
weight = 4
template = "post"
tags = ["discussion", "limitations", "future-work"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## Key Findings

Our results demonstrate that heterogeneous surveillance data fusion through temporal graph transformers can substantially improve epidemic forecasting accuracy and timeliness. The 23--31% MAE improvement over the WHO Ensemble is clinically meaningful: at the country level, this translates to median forecast errors of 8 cases per 100,000 rather than 11, enabling more precise resource allocation.

The ablation analysis reveals that wastewater surveillance contributes the largest individual signal improvement (+18.3% MAE when removed), confirming the leading-indicator hypothesis that has been proposed but insufficiently validated at global scale.

## Limitations

We acknowledge several important limitations of this work:

1. **Data availability bias.** Wastewater surveillance coverage is concentrated in high-income countries (35 of 47 countries with >80% population coverage vs. 6 of 47 in low-income settings). Our model's advantage may not generalize to settings without wastewater infrastructure.

2. **Reporting delays.** We use data vintages as available in real time, but reporting delays vary from 2 days (wastewater) to 14 days (laboratory-confirmed) across countries. The model cannot fully compensate for systematic underreporting in the most recent 1--2 weeks.

3. **Novel pathogen generalization.** The model is trained on influenza/RSV/COVID-19. Performance on a genuinely novel pathogen (with no historical training data) is untested. Transfer learning experiments are underway but not included in this preprint.

4. **Computational cost.** Training requires 4x A100 GPUs for 18 hours. Inference is efficient (< 30 seconds for all 47 countries), but retraining frequency (weekly) imposes operational costs.

## Operational Deployment

A dashboard prototype integrating TG-EpiForecast predictions is being piloted with the WHO Regional Office for Europe. Real-time forecasts are updated every Monday and made available through the ECDC FluNews Europe platform. Code and model weights are available at the repository linked in the Data Availability section.
