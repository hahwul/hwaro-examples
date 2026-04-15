+++
title = "Appendix"
description = "Supplementary tables, sensitivity analyses, and extended cluster statistics."
tags = ["appendix", "supplementary"]
+++

## A. Full Cluster Statistics

| Cluster | Papers | Edges (internal) | Density | Mean Degree | Max Degree | Diameter |
|---|---|---|---|---|---|---|
| A -- Neural Coding | 11,842 | 52,814 | 0.038 | 8.92 | 1,402 | 10 |
| B -- Connectomics | 9,614 | 37,892 | 0.041 | 7.88 | 1,198 | 9 |
| C -- Spiking Models | 13,206 | 50,416 | 0.029 | 7.64 | 1,312 | 11 |
| D -- ML Decoding | 12,556 | 52,082 | 0.033 | 8.30 | 982 | 8 |

## B. Sensitivity to Self-Citation Removal

Removing all self-citations (4.2% of edges) produces minor changes:

| Metric | With Self-Citations | Without |
|---|---|---|
| Mean path length | 4.2 | 4.3 |
| Clustering coefficient | 0.31 | 0.29 |
| Modularity | 0.42 | 0.43 |
| Bridge papers identified | 38 | 36 |
| Top PageRank paper | Unchanged | Unchanged |

The two bridge papers lost after self-citation removal were both single-author works with high self-citation rates (> 25%). All substantive findings are robust to self-citation exclusion.

## C. Alternative Community Detection

We compared Louvain results with two alternative methods:

| Method | Communities | Modularity | NMI with Louvain |
|---|---|---|---|
| Louvain | 12 | 0.42 | 1.00 |
| Leiden | 13 | 0.43 | 0.94 |
| Infomap | 18 | -- | 0.87 |

The four major clusters are consistently recovered by all three methods (NMI > 0.87). Differences arise primarily in the subdivision of minor satellite communities.

## D. Temporal Robustness

Running community detection on each five-year window independently and computing normalised mutual information (NMI) with the full-period partition:

| Window | NMI with Full Partition |
|---|---|
| 2000-2005 | 0.72 |
| 2006-2010 | 0.81 |
| 2011-2015 | 0.89 |
| 2016-2020 | 0.93 |
| 2021-2025 | 0.91 |

Cluster structure stabilises after 2010 and remains consistent with the full-period partition.
