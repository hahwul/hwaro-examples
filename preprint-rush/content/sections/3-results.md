+++
title = "3. Results"
description = "Forecasting performance, uncertainty calibration, and early warning evaluation across 47 countries."
weight = 3
template = "post"
tags = ["results", "evaluation", "performance"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## 3.1 Point Forecast Accuracy

TG-EpiForecast outperforms all baselines across forecast horizons and pathogens:

| Model | Influenza MAE | RSV MAE | COVID-19 MAE | Mean MAE |
|-------|-------------|---------|-------------|----------|
| TG-EpiForecast (ours) | 0.128 | 0.151 | 0.148 | 0.142 |
| WHO Ensemble | 0.168 | 0.192 | 0.193 | 0.184 |
| EpiGNN (baseline) | 0.155 | 0.178 | 0.172 | 0.168 |
| LSTM-Attn | 0.172 | 0.198 | 0.189 | 0.186 |
| ARIMA-X | 0.201 | 0.224 | 0.218 | 0.214 |

Results shown for 1-week horizon, averaged across 47 countries. All values are MAE on the standardized incidence scale.

## 3.2 Uncertainty Calibration

The conformal prediction wrapper dramatically improves interval calibration:

| Model | Nominal 95% | Empirical Coverage | Mean PI Width |
|-------|------------|-------------------|--------------|
| TG-EpiForecast + Conformal | 95% | 91.2% | 0.342 |
| TG-EpiForecast (raw) | 95% | 82.6% | 0.298 |
| WHO Ensemble | 95% | 78.4% | 0.412 |

## 3.3 Early Warning Performance

We evaluate the ability to detect the onset of epidemic waves, defined as a sustained increase in incidence exceeding 2x the seasonal baseline for >= 3 consecutive weeks.

| Metric | TG-EpiForecast | Threshold-based | Improvement |
|--------|---------------|----------------|-------------|
| Median lead time (days) | 11 | 0 | +11 |
| Sensitivity (at 14-day lead) | 68% | 12% | +56pp |
| False positive rate | 8.2% | 4.1% | +4.1pp |

The model trades a modest increase in false positive rate for substantially improved early detection. In the WHO Afro region, median lead time reaches 16 days due to the availability of high-quality wastewater data.

## 3.4 Ablation Study (New in v3)

| Variant | Mean MAE | Delta |
|---------|----------|-------|
| Full model | 0.142 | -- |
| Without wastewater | 0.168 | +18.3% |
| Without mobility edges | 0.161 | +13.4% |
| Without conformal calibration | 0.142 | 0% (coverage drops) |
| Static graph (no temporal attention) | 0.178 | +25.4% |
| Single pathogen (no joint training) | 0.159 | +12.0% |

Wastewater data and temporal attention are the two most impactful components. Joint multi-pathogen training provides a 12% benefit through shared spatial representations.
