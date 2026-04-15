+++
title = "4. Temporal Evolution of the Network"
description = "How the citation network has grown and restructured over the 2000-2025 period, including cluster birth, merging, and convergence trends."
weight = 4
template = "post"
tags = ["temporal", "evolution", "growth"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## Growth Dynamics

The corpus grew from 487 papers in 2000 to 4,218 papers in 2025, representing a compound annual growth rate (CAGR) of 9.1%. Growth has not been uniform across clusters:

| Period | A (Coding) | B (Connectomics) | C (Spiking) | D (ML Decoding) |
|---|---|---|---|---|
| 2000-2005 | 38% | 8% | 42% | 12% |
| 2006-2010 | 30% | 18% | 35% | 17% |
| 2011-2015 | 26% | 24% | 28% | 22% |
| 2016-2020 | 22% | 22% | 24% | 32% |
| 2021-2025 | 18% | 19% | 20% | 43% |

The ML decoding cluster (D) has grown from 12% of annual output in the early period to 43% in 2021-2025, reflecting the deep learning revolution's impact on neuroscience methodology.

## Convergence Index

We define a convergence index as the fraction of new papers that cite at least two different clusters. This metric has increased steadily:

- **2000-2005:** 8.2% of papers cite multiple clusters
- **2006-2010:** 14.7%
- **2011-2015:** 22.3%
- **2016-2020:** 31.8%
- **2021-2025:** 41.2%

This trend indicates that computational neuroscience is becoming increasingly integrated, with researchers drawing on multiple methodological traditions rather than working within isolated communities.

## Temporal Snapshots

We constructed five-year temporal snapshots of the citation network and computed modularity for each:

| Period | Nodes | Edges | Modularity (Q) | Clusters | Mean Path |
|---|---|---|---|---|---|
| 2000-2005 | 3,842 | 12,104 | 0.58 | 6 | 5.8 |
| 2006-2010 | 8,216 | 38,492 | 0.52 | 5 | 5.2 |
| 2011-2015 | 12,408 | 72,618 | 0.48 | 4 | 4.7 |
| 2016-2020 | 14,892 | 108,204 | 0.44 | 4 | 4.4 |
| 2021-2025 | 7,860 | 81,429 | 0.38 | 4 | 4.0 |

The declining modularity over time confirms that cluster boundaries are becoming less distinct, consistent with the rising convergence index. The field is evolving from a loosely connected archipelago of specialities into a more cohesive network.

## Key Transition Points

Three periods mark significant structural transitions:

1. **2005-2007:** The connectomics cluster (B) crystallises as DTI-based brain network studies reach critical mass, splitting from a previously undifferentiated neuroimaging community.

2. **2014-2016:** The ML decoding cluster (D) separates from the spiking models cluster (C), driven by the adoption of deep learning methods that diverge from classical biophysical modelling.

3. **2018-2020:** The C-D coupling strength doubles (from 0.15 to 0.31), marking the beginning of convergence between biological and artificial neural network research. This coincides with the emergence of bio-inspired deep learning architectures (spiking neural networks for AI) and ML-based analysis of spiking data.
