+++
title = "2. Methods"
description = "Graph construction, transformer architecture, training procedure, and conformal calibration."
weight = 2
template = "post"
tags = ["methods", "architecture", "transformer", "graph"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## 2.1 Data Sources and Preprocessing

We integrate three surveillance data streams, harmonized to weekly resolution and standardized per 100,000 population:

- **Wastewater viral load:** SARS-CoV-2 N1/N2 gene copies, influenza A/B matrix gene, and RSV L gene concentrations from 892 treatment plants across 47 countries (Global Wastewater Monitoring Alliance).
- **Syndromic ED visits:** Influenza-like illness (ILI) and acute respiratory infection (ARI) rates from emergency department surveillance networks (FluNet, ESSENCE, RLSG).
- **Laboratory-confirmed cases:** Weekly positive test counts by pathogen from national reference laboratories, with test-positivity rate adjustment for testing volume variation.

## 2.2 Spatiotemporal Graph Construction

Let G_t = (V, E_t, X_t) denote the surveillance graph at week t, where V is a fixed set of n geographic regions, E_t contains mobility-weighted directed edges, and X_t is the node feature matrix.

**Node features** (dimension d = 24): For each region, we concatenate the three surveillance signals (3 pathogens x 3 streams = 9 features), plus 7 epidemiological covariates (vaccination coverage, population density, median age, healthcare access index, climate zone, hemisphere, GDP per capita) and 8 lagged values (t-1 through t-8 of the primary pathogen target).

**Edge weights** are computed from weekly anonymized mobility flow matrices (Meta Data for Good, Google Aggregated Mobility Research Dataset), normalized by origin-region population.

## 2.3 Temporal Graph Transformer

The core architecture consists of L = 6 transformer layers, each performing:

1. **Spatial message passing:** Multi-head graph attention over the current snapshot G_t
2. **Temporal self-attention:** Over the T = 12 most recent weekly snapshots
3. **Cross-modal fusion:** A gated fusion mechanism that learns pathogen-specific mixing weights for the three surveillance channels

Output dimension per node per pathogen: a location parameter (point forecast) and a scale parameter (for prediction interval construction).

## 2.4 Conformal Prediction Calibration

We apply split conformal prediction to obtain distribution-free prediction intervals. Using a held-out calibration set (weeks 53--78), we compute nonconformity scores and determine the (1-alpha) quantile to construct prediction intervals with guaranteed marginal coverage >= 1-alpha for the test period.
