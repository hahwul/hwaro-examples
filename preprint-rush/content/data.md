+++
title = "Data Availability"
description = "Data sources, code repositories, and reproducibility information."
tags = ["data", "reproducibility", "code"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Data Availability Statement</p>
  <h1 class="paper-title">Data and Code</h1>
</header>

## Data Sources

| Dataset | Source | Access | Temporal Range |
|---------|--------|--------|---------------|
| Wastewater viral load | Global Wastewater Monitoring Alliance | Open (CC BY 4.0) | 2022-W01 to 2025-W52 |
| Syndromic ED visits | WHO FluNet + ECDC TESSy | Registered access | 2022-W01 to 2025-W52 |
| Lab-confirmed cases | National reference laboratories | Open (aggregated) | 2022-W01 to 2025-W52 |
| Mobility matrices | Meta Data for Good | Research agreement | 2022-W01 to 2025-W52 |
| Covariates | World Bank, GISAID, Our World in Data | Open | Static + annual |

## Code Repository

All code for data preprocessing, model training, evaluation, and figure generation is available at:

**Repository:** github.com/osei-mensah-lab/tg-epiforecast (will be made public upon peer review acceptance)

- `src/model/` -- TG-EpiForecast architecture (PyTorch + PyG)
- `src/data/` -- Data loaders and preprocessing pipelines
- `src/eval/` -- Evaluation metrics and conformal calibration
- `configs/` -- Training hyperparameters for all experiments
- `notebooks/` -- Jupyter notebooks reproducing all figures and tables

## Computational Requirements

- Training: 4x NVIDIA A100 (80 GB), 18 hours per full training run
- Inference: Single A100, < 30 seconds for all 47 countries at all horizons
- Memory: Peak 48 GB GPU memory during training
- Software: Python 3.11, PyTorch 2.3, PyTorch Geometric 2.5

## Ethics Statement

This study uses aggregated, anonymized surveillance data. No individual-level data was accessed. Wastewater data is collected at the treatment plant level and cannot be linked to individuals. The study was reviewed by the LSHTM Research Ethics Committee (ref: 28941) and determined to not require ethical approval.
