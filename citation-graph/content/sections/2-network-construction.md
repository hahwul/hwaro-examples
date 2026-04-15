+++
title = "2. Network Construction and Metrics"
description = "Graph construction methodology, centrality measures, and global network properties of the citation graph."
weight = 2
template = "post"
tags = ["network", "graph-theory", "centrality"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## Graph Representation

The citation network is modelled as a directed graph G = (V, E) where V is the set of 47,218 publications and E is the set of 312,847 citation edges. An edge (u, v) indicates that paper u cites paper v. The graph is stored as a compressed sparse row (CSR) adjacency matrix for efficient traversal.

## Centrality Measures

We computed four centrality measures for each node:

### PageRank

PageRank was computed with a damping factor of 0.85 and convergence tolerance of 1e-8. The top 10 papers by PageRank are dominated by foundational methodological works:

| Rank | Paper | Year | PageRank | In-degree |
|---|---|---|---|---|
| 1 | Hodgkin-Huxley revisited (review) | 2006 | 0.00284 | 1,847 |
| 2 | Small-world brain networks | 2011 | 0.00261 | 1,623 |
| 3 | Deep learning for neural data | 2019 | 0.00198 | 982 |
| 4 | Information-theoretic neural code | 2003 | 0.00187 | 1,402 |
| 5 | Connectome mapping pipeline | 2012 | 0.00175 | 1,198 |
| 6 | Balanced spiking networks | 2008 | 0.00168 | 1,312 |
| 7 | Neural population dynamics | 2017 | 0.00154 | 845 |
| 8 | Graph-theoretic brain analysis | 2010 | 0.00149 | 1,088 |
| 9 | Bayesian neural decoding | 2014 | 0.00142 | 764 |
| 10 | Spike sorting benchmark | 2016 | 0.00138 | 691 |

### Betweenness Centrality

Betweenness centrality identifies papers that lie on the shortest paths between many pairs of nodes. High-betweenness papers serve as knowledge bridges between research communities:

- Papers with betweenness > 0.001 constitute only 0.8% of the corpus but carry 34% of all shortest paths
- The correlation between PageRank and betweenness is moderate (Spearman rho = 0.52), indicating that highly cited papers are not always structurally central

## Global Network Properties

The network exhibits small-world characteristics:

- **Mean path length:** 4.2 (vs. 8.1 for an equivalent random graph)
- **Clustering coefficient:** 0.31 (vs. 0.007 for random)
- **Small-world sigma:** 4.8
- **Network diameter:** 14
- **Density:** 0.00014
- **Reciprocity:** 0.12

The heavy-tailed in-degree distribution is well approximated by a power law with exponent alpha = 2.74 (KS-test p = 0.12), consistent with preferential attachment models of citation accumulation.
