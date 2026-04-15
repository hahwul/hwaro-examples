+++
title = "Results"
weight = 3
template = "post"
description = "Detailed performance results including model comparison tables, prediction accuracy across time horizons, and operational feasibility metrics."
tags = ["results", "performance", "model-comparison"]

[extra]
section_number = "3"
panel_color = "green"
+++

## Overall Model Performance

The Transformer architecture achieved the strongest results across all three target pollutants, though the margin over LSTM was relatively narrow. Both deep learning approaches substantially outperformed the tree-based methods for longer prediction horizons.

### PM2.5 Prediction (24-hour forecast)

| Model | MAE (ug/m3) | RMSE (ug/m3) | R-squared | MAPE (%) |
|---|---|---|---|---|
| Random Forest | 3.82 | 5.14 | 0.89 | 14.2 |
| XGBoost | 3.15 | 4.38 | 0.91 | 12.1 |
| LSTM | 2.87 | 3.92 | 0.92 | 10.8 |
| **Transformer** | **2.41** | **3.31** | **0.94** | **8.9** |
| Physics Baseline | 6.73 | 8.91 | 0.71 | 24.6 |

### NO2 Prediction (24-hour forecast)

| Model | MAE (ppb) | RMSE (ppb) | R-squared | MAPE (%) |
|---|---|---|---|---|
| Random Forest | 4.21 | 5.67 | 0.86 | 15.8 |
| XGBoost | 3.54 | 4.89 | 0.89 | 13.4 |
| LSTM | 3.18 | 4.42 | 0.91 | 11.9 |
| **Transformer** | **2.73** | **3.78** | **0.93** | **10.1** |
| Physics Baseline | 7.42 | 9.56 | 0.68 | 27.3 |

### O3 Prediction (24-hour forecast)

| Model | MAE (ppb) | RMSE (ppb) | R-squared | MAPE (%) |
|---|---|---|---|---|
| Random Forest | 5.11 | 6.83 | 0.85 | 12.9 |
| XGBoost | 4.28 | 5.74 | 0.88 | 10.7 |
| LSTM | 3.94 | 5.21 | 0.90 | 9.8 |
| **Transformer** | **3.36** | **4.52** | **0.92** | **8.4** |
| Physics Baseline | 8.15 | 10.42 | 0.66 | 20.8 |

## Performance Across Time Horizons

Model performance degrades with increasing forecast horizon, but the Transformer maintains the smallest degradation rate.

<div class="poster-figure">
<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line chart showing prediction accuracy over 24-hour forecast horizon">
  <rect width="700" height="340" fill="#12121e" rx="6"/>
  <text x="350" y="24" fill="#8888a0" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="3">PM2.5 R-SQUARED BY FORECAST HORIZON</text>
  <!-- Axes -->
  <line x1="80" y1="50" x2="80" y2="290" stroke="#585870" stroke-width="2"/>
  <line x1="80" y1="290" x2="660" y2="290" stroke="#585870" stroke-width="2"/>
  <!-- Y-axis labels -->
  <text x="70" y="60" fill="#8888a0" font-family="Inter, sans-serif" font-size="11" font-weight="700" text-anchor="end">0.98</text>
  <text x="70" y="120" fill="#8888a0" font-family="Inter, sans-serif" font-size="11" font-weight="700" text-anchor="end">0.94</text>
  <text x="70" y="180" fill="#8888a0" font-family="Inter, sans-serif" font-size="11" font-weight="700" text-anchor="end">0.90</text>
  <text x="70" y="240" fill="#8888a0" font-family="Inter, sans-serif" font-size="11" font-weight="700" text-anchor="end">0.86</text>
  <text x="70" y="290" fill="#8888a0" font-family="Inter, sans-serif" font-size="11" font-weight="700" text-anchor="end">0.82</text>
  <!-- Y-axis grid lines -->
  <line x1="80" y1="56" x2="660" y2="56" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="80" y1="116" x2="660" y2="116" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="80" y1="176" x2="660" y2="176" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="80" y1="236" x2="660" y2="236" stroke="#2a2a3a" stroke-width="1"/>
  <!-- X-axis labels -->
  <text x="128" y="310" fill="#8888a0" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="middle">1h</text>
  <text x="321" y="310" fill="#8888a0" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="middle">6h</text>
  <text x="514" y="310" fill="#8888a0" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="middle">12h</text>
  <text x="660" y="310" fill="#8888a0" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="middle">24h</text>
  <!-- Transformer line (best) -->
  <polyline points="128,56 321,86 514,116 660,146" fill="none" stroke="#4a90e2" stroke-width="4"/>
  <circle cx="128" cy="56" r="6" fill="#4a90e2"/>
  <circle cx="321" cy="86" r="6" fill="#4a90e2"/>
  <circle cx="514" cy="116" r="6" fill="#4a90e2"/>
  <circle cx="660" cy="146" r="6" fill="#4a90e2"/>
  <!-- LSTM line -->
  <polyline points="128,68 321,106 514,146 660,176" fill="none" stroke="#4ae24a" stroke-width="4"/>
  <circle cx="128" cy="68" r="6" fill="#4ae24a"/>
  <circle cx="321" cy="106" r="6" fill="#4ae24a"/>
  <circle cx="514" cy="146" r="6" fill="#4ae24a"/>
  <circle cx="660" cy="176" r="6" fill="#4ae24a"/>
  <!-- XGBoost line -->
  <polyline points="128,86 321,136 514,196 660,218" fill="none" stroke="#e2c44a" stroke-width="4"/>
  <circle cx="128" cy="86" r="6" fill="#e2c44a"/>
  <circle cx="321" cy="136" r="6" fill="#e2c44a"/>
  <circle cx="514" cy="196" r="6" fill="#e2c44a"/>
  <circle cx="660" cy="218" r="6" fill="#e2c44a"/>
  <!-- Random Forest line -->
  <polyline points="128,98 321,160 514,226 660,260" fill="none" stroke="#e24a4a" stroke-width="4"/>
  <circle cx="128" cy="98" r="6" fill="#e24a4a"/>
  <circle cx="321" cy="160" r="6" fill="#e24a4a"/>
  <circle cx="514" cy="226" r="6" fill="#e24a4a"/>
  <circle cx="660" cy="260" r="6" fill="#e24a4a"/>
  <!-- Legend -->
  <line x1="120" y1="330" x2="145" y2="330" stroke="#4a90e2" stroke-width="3"/>
  <text x="150" y="334" fill="#d0d0d8" font-family="Inter, sans-serif" font-size="11" font-weight="700">TRANSFORMER</text>
  <line x1="260" y1="330" x2="285" y2="330" stroke="#4ae24a" stroke-width="3"/>
  <text x="290" y="334" fill="#d0d0d8" font-family="Inter, sans-serif" font-size="11" font-weight="700">LSTM</text>
  <line x1="370" y1="330" x2="395" y2="330" stroke="#e2c44a" stroke-width="3"/>
  <text x="400" y="334" fill="#d0d0d8" font-family="Inter, sans-serif" font-size="11" font-weight="700">XGBOOST</text>
  <line x1="500" y1="330" x2="525" y2="330" stroke="#e24a4a" stroke-width="3"/>
  <text x="530" y="334" fill="#d0d0d8" font-family="Inter, sans-serif" font-size="11" font-weight="700">RANDOM FOREST</text>
</svg>
<div class="poster-figure-caption">Figure 4. PM2.5 R-squared degradation across forecast horizons (1h to 24h) for all four models</div>
</div>

## Air Quality Alert Accuracy

A critical operational metric is the ability to correctly predict exceedance of air quality thresholds. We evaluated each model on its ability to predict PM2.5 exceedances above 35 ug/m3 (the WHO 24-hour guideline) within a 24-hour window.

| Model | Precision | Recall | F1 Score | Alert Accuracy |
|---|---|---|---|---|
| Random Forest | 0.79 | 0.84 | 0.81 | 82% |
| XGBoost | 0.83 | 0.87 | 0.85 | 85% |
| LSTM | 0.85 | 0.88 | 0.86 | 86% |
| **Transformer** | **0.87** | **0.89** | **0.88** | **87%** |

## Computational Performance

| Model | Training Time | Inference Latency (per sensor) | GPU Memory |
|---|---|---|---|
| Random Forest | 12 min | 0.8 ms | N/A (CPU) |
| XGBoost | 28 min | 1.2 ms | N/A (CPU) |
| LSTM | 4.2 hours | 3.4 ms | 2.1 GB |
| Transformer | 6.8 hours | 5.1 ms | 3.8 GB |

All models achieve sub-200ms total inference time when processing all 200 sensors in parallel, confirming operational feasibility for real-time deployment.
