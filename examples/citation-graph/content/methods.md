+++
title = "Methods"
description = "Computational methods, software tools, and reproducibility details for the citation network analysis."
tags = ["methods", "software", "reproducibility"]
+++

## Software and Tools

All analyses were conducted using the following open-source tools:

| Tool | Version | Purpose |
|---|---|---|
| NetworkX | 3.2 | Graph construction, centrality measures |
| python-louvain | 0.16 | Community detection (Louvain algorithm) |
| powerlaw | 1.5 | Degree distribution fitting |
| Semantic Scholar API | v2 | Bibliographic data retrieval |
| pandas | 2.1 | Data wrangling and deduplication |
| matplotlib / seaborn | 3.8 / 0.13 | Static visualisations |
| Gephi | 0.10 | Network layout (ForceAtlas2) |

## Reproducibility

The complete analysis pipeline is available as a Python package at [GitHub](#). The repository includes:

- Raw query logs and API response caches
- Deduplication scripts with configurable thresholds
- Jupyter notebooks reproducing all figures and tables
- Pre-built graph files in GraphML format

## Graph Layout

The network visualisations in this paper use the ForceAtlas2 layout algorithm implemented in Gephi, with the following parameters:

- Scaling: 10.0
- Gravity: 1.0
- Edge weight influence: 1.0
- Prevent overlap: enabled
- Approximation: Barnes-Hut (theta = 1.2)
- Iterations: 10,000

Node sizes are proportional to log(in-degree + 1). Node colours reflect Louvain community membership.

## Statistical Tests

- Power-law fitting uses maximum likelihood estimation with the Clauset-Shalizi-Newman method
- Community detection robustness is assessed via 100 random restarts; we report the partition with the highest modularity
- Bridge paper significance is tested by bootstrap resampling: we remove each candidate bridge paper 1,000 times and measure the distribution of mean path length changes
