+++
title = "Methods"
weight = 2
template = "post"
description = "Detailed methodology including sensor network design, model architectures, feature engineering, and the training and validation framework."
tags = ["methods", "machine-learning", "sensor-network"]

[extra]
section_number = "2"
panel_color = "red"
+++

## Sensor Network

The Greenfield City Air Quality Network (GCAQN) comprises 200 low-cost sensor nodes deployed across the 85 square kilometer metropolitan area. Each node measures PM2.5, PM10, NO2, O3, CO, temperature, relative humidity, and barometric pressure at 5-minute intervals. Nodes were strategically placed to maximize spatial coverage while ensuring representation of diverse land-use types including residential, commercial, industrial, and transportation corridors.

Data from the sensor network was supplemented with:

- **Meteorological data** from 12 regional weather stations (hourly)
- **Traffic density indices** from 340 loop detectors operated by the city transportation department (15-minute intervals)
- **Satellite AOD** measurements from MODIS and VIIRS instruments (daily, 1km resolution)
- **Industrial emissions** data from 23 permitted facilities (hourly, self-reported)

## Model Architectures

### Random Forest

An ensemble of 500 decision trees with maximum depth of 20, minimum samples per leaf of 5, and maximum features set to the square root of total feature count. Features were computed as rolling statistics (mean, max, min, standard deviation) over 1-hour, 6-hour, and 24-hour windows.

### XGBoost

Gradient-boosted trees with 1000 estimators, maximum depth of 8, learning rate of 0.05, and column subsampling ratio of 0.8. L1 and L2 regularization parameters were tuned via Bayesian optimization. The same rolling-window features were used as for Random Forest.

### LSTM

A two-layer LSTM network with 128 hidden units per layer, followed by a fully connected layer with 64 units. Input sequences of 72 time steps (representing 72 hours of hourly data) were used. Dropout of 0.3 was applied between layers. Training used Adam optimizer with learning rate 0.001 and batch size 256.

### Transformer

A 4-layer Transformer encoder with 8 attention heads and model dimension of 256. Positional encoding was applied to 72-step input sequences. Feed-forward dimension was 512 with GELU activation. Training used AdamW optimizer with cosine learning rate schedule (peak 0.0003, warmup 1000 steps).

## Model Hyperparameters

| Parameter | Random Forest | XGBoost | LSTM | Transformer |
|---|---|---|---|---|
| Estimators/Layers | 500 trees | 1000 trees | 2 layers | 4 layers |
| Depth/Hidden Units | 20 | 8 | 128 | 256 (dim) |
| Learning Rate | N/A | 0.05 | 0.001 | 0.0003 |
| Regularization | min_leaf=5 | L1=0.1, L2=0.3 | Dropout 0.3 | Dropout 0.1 |
| Sequence Length | N/A (windows) | N/A (windows) | 72 steps | 72 steps |
| Batch Size | N/A | N/A | 256 | 128 |
| Training Epochs | N/A | Early stop | 100 | 80 |

## Training and Validation

The 18-month dataset (January 2024 -- June 2025) was split as follows:

- **Training set:** January 2024 -- December 2024 (12 months, approximately 1.75 million samples)
- **Validation set:** January 2025 -- March 2025 (3 months, used for hyperparameter tuning)
- **Test set:** April 2025 -- June 2025 (3 months, held out for final evaluation)

All models were evaluated using 5-fold temporal cross-validation on the training set, with fold boundaries selected to avoid data leakage from sequential dependencies. Final reported metrics are computed on the held-out test set.
