+++
title = "3. Community Detection and Cluster Analysis"
description = "Louvain community detection results, cluster characterisation, and inter-cluster coupling analysis."
weight = 3
template = "post"
tags = ["community-detection", "clustering", "louvain"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## Community Detection Method

We applied the Louvain algorithm for modularity optimisation on the undirected projection of the citation graph (treating each directed edge as undirected). The algorithm was run 100 times with different random seeds; we report the partition with the highest modularity score.

## Modularity and Partition Quality

- **Modularity (Q):** 0.42
- **Number of communities detected:** 12 (4 major, 8 minor)
- **Coverage of top 4 clusters:** 94.3% of all nodes

The four major clusters account for nearly all papers, with eight smaller satellite communities (containing 5.7% of papers) representing niche subfields such as auditory neuroscience, olfactory coding, and neuromorphic hardware.

## Cluster Characterisation

### Cluster A: Neural Coding and Information Theory

This cluster (11,842 papers, 25.1%) centres on the mathematical formalisation of neural information processing. Core topics include rate coding vs. temporal coding debates, Fisher information in neural populations, and efficient coding hypotheses. The cluster's intellectual core was established by seminal works from the early 2000s on population coding.

**Top journals:** *Neural Computation*, *Journal of Neuroscience*, *PLoS Computational Biology*

### Cluster B: Connectomics and Graph-Theoretic Brain Analysis

The connectomics cluster (9,614 papers, 20.4%) emerged strongly after 2005 with the advent of diffusion tensor imaging (DTI) and resting-state fMRI. Papers in this cluster apply graph-theoretic measures -- degree distribution, modularity, rich-club organisation -- to structural and functional brain networks derived from neuroimaging data.

**Top journals:** *NeuroImage*, *Brain Structure and Function*, *Cerebral Cortex*

### Cluster C: Spiking Network Models

The largest cluster (13,206 papers, 28.0%) encompasses biophysically detailed and simplified spiking neuron models, balanced excitation-inhibition networks, and large-scale cortical simulations. This cluster has deep historical roots in the Hodgkin-Huxley tradition and maintains strong connections to experimental electrophysiology.

**Top journals:** *PLoS Computational Biology*, *Frontiers in Computational Neuroscience*, *Journal of Computational Neuroscience*

### Cluster D: Machine Learning-Driven Neural Decoding

The ML decoding cluster (12,556 papers, 26.6%) is the fastest growing, with 68% of its papers published after 2018. It bridges neuroscience and artificial intelligence, applying deep learning architectures to decode neural population activity, build brain-computer interfaces, and model latent neural dynamics.

**Top journals:** *NeurIPS*, *Nature Methods*, *Nature Neuroscience*, *eLife*

## Inter-Cluster Coupling

Bibliographic coupling strength (Jaccard similarity of reference lists) reveals the following inter-cluster relationships:

| Pair | Coupling | Interpretation |
|---|---|---|
| C -- D | 0.31 | Strongest: spiking models increasingly use ML methods |
| A -- C | 0.24 | Strong: information theory informs spiking model analysis |
| A -- B | 0.18 | Moderate: network information measures applied to connectomes |
| B -- D | 0.14 | Moderate: ML applied to neuroimaging data |
| A -- D | 0.09 | Weak but growing: information-theoretic ML |
| B -- C | 0.05 | Weakest: different spatial scales (macro vs. micro) |
