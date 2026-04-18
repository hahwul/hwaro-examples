+++
title = "Paper Overview"
description = "Mapping the Invisible College: Citation Network Topology in Computational Neuroscience -- a large-scale bibliometric study of 47,000 publications."
tags = ["paper", "dark", "network", "citations", "visualization"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Research Article &middot; Open Access</p>
  <h1 class="paper-title">Mapping the Invisible College: Citation Network Topology in Computational Neuroscience</h1>
  <p class="paper-authors">
    Elena Vasquez<sup>1</sup>, Joon-Ho Kim<sup>2</sup>, Chukwuemeka Okonkwo<sup>3</sup>,
    Margit Lindqvist<sup>4</sup>, Priya Ramaswamy<sup>5</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup>Centre for Network Science, Central European University &middot;
    <sup>2</sup>Department of Brain and Cognitive Sciences, KAIST &middot;
    <sup>3</sup>African Institute for Mathematical Sciences, Cape Town &middot;
    <sup>4</sup>Division of Computational Science, KTH Royal Institute of Technology &middot;
    <sup>5</sup>Centre for Neuroscience, Indian Institute of Science, Bangalore
  </p>
  <p class="paper-doi"><strong>DOI:</strong> <a href="#">10.1017/nws.2026.0042</a> &middot; <strong>Data:</strong> <a href="#">Zenodo 10.5281/zenodo.98765432</a> &middot; <strong>Received:</strong> 18 Oct 2025 &middot; <strong>Accepted:</strong> 07 Mar 2026</p>
</header>

## Abstract

We present a large-scale citation network analysis of 47,218 publications in computational neuroscience spanning 2000--2025. Using bibliographic data from PubMed, Scopus, and Semantic Scholar, we construct a directed citation graph with 312,847 edges and apply community detection, centrality analysis, and temporal decomposition to reveal the disciplinary structure of the field. We identify four dominant co-citation clusters corresponding to (A) neural coding and information theory, (B) connectomics and graph-theoretic brain analysis, (C) spiking network models, and (D) machine-learning-driven neural decoding. The network exhibits small-world topology (mean path length 4.2, clustering coefficient 0.31) and a heavy-tailed degree distribution consistent with preferential attachment. We trace knowledge diffusion pathways between clusters and identify 38 bridge papers that mediate cross-cluster citation flow. Our findings reveal an increasingly interconnected field with growing convergence between biological and artificial neural network communities since 2018.

## Citation Network Overview

<!-- SVG citation network graph with nodes and directional edges -->
<figure>
<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" aria-label="Citation network graph showing major nodes and directional edges" style="width:100%;max-width:800px;display:block;margin:1rem auto;">
  <text x="400" y="20" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="11" font-weight="700" fill="#e6edf3" letter-spacing="0.08em">CITATION NETWORK -- TOP 60 NODES BY PAGERANK</text>

  <!-- Background grid -->
  <line x1="0" y1="480" x2="800" y2="480" stroke="#1e2533" stroke-width="0.5"/>
  <line x1="0" y1="40" x2="800" y2="40" stroke="#1e2533" stroke-width="0.5"/>

  <!-- Cluster A: Neural Coding (top-left, cyan) -->
  <circle cx="180" cy="140" r="45" fill="none" stroke="#5ec4e8" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.3"/>
  <text x="180" y="200" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5ec4e8" opacity="0.6">CLUSTER A</text>
  <!-- Nodes -->
  <circle cx="160" cy="120" r="12" fill="#0d1117" stroke="#5ec4e8" stroke-width="1.5"/>
  <text x="160" y="124" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="7" font-weight="700" fill="#5ec4e8">S01</text>
  <circle cx="200" cy="110" r="9" fill="#0d1117" stroke="#5ec4e8" stroke-width="1.2"/>
  <text x="200" y="113" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="6" font-weight="600" fill="#5ec4e8">S02</text>
  <circle cx="175" cy="160" r="8" fill="#0d1117" stroke="#5ec4e8" stroke-width="1"/>
  <text x="175" y="163" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="6" font-weight="600" fill="#5ec4e8">S03</text>
  <circle cx="145" cy="148" r="7" fill="#0d1117" stroke="#5ec4e8" stroke-width="1"/>
  <text x="145" y="151" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="5" fill="#5ec4e8">S04</text>
  <circle cx="210" cy="145" r="6" fill="#0d1117" stroke="#5ec4e8" stroke-width="0.8"/>

  <!-- Cluster B: Connectomics (top-right, orange) -->
  <circle cx="580" cy="130" r="50" fill="none" stroke="#e8a85e" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.3"/>
  <text x="580" y="195" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#e8a85e" opacity="0.6">CLUSTER B</text>
  <circle cx="560" cy="110" r="14" fill="#0d1117" stroke="#e8a85e" stroke-width="1.5"/>
  <text x="560" y="114" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="7" font-weight="700" fill="#e8a85e">C01</text>
  <circle cx="600" cy="125" r="10" fill="#0d1117" stroke="#e8a85e" stroke-width="1.2"/>
  <text x="600" y="129" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="6" font-weight="600" fill="#e8a85e">C02</text>
  <circle cx="575" cy="155" r="8" fill="#0d1117" stroke="#e8a85e" stroke-width="1"/>
  <text x="575" y="158" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="6" font-weight="600" fill="#e8a85e">C03</text>
  <circle cx="615" cy="100" r="6" fill="#0d1117" stroke="#e8a85e" stroke-width="0.8"/>
  <circle cx="545" cy="140" r="6" fill="#0d1117" stroke="#e8a85e" stroke-width="0.8"/>

  <!-- Cluster C: Spiking Networks (bottom-left, purple) -->
  <circle cx="220" cy="350" r="48" fill="none" stroke="#a85ee8" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.3"/>
  <text x="220" y="410" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#a85ee8" opacity="0.6">CLUSTER C</text>
  <circle cx="210" cy="330" r="11" fill="#0d1117" stroke="#a85ee8" stroke-width="1.5"/>
  <text x="210" y="334" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="7" font-weight="700" fill="#a85ee8">N01</text>
  <circle cx="240" cy="355" r="9" fill="#0d1117" stroke="#a85ee8" stroke-width="1.2"/>
  <text x="240" y="358" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="6" font-weight="600" fill="#a85ee8">N02</text>
  <circle cx="195" cy="370" r="7" fill="#0d1117" stroke="#a85ee8" stroke-width="1"/>
  <text x="195" y="373" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="5" fill="#a85ee8">N03</text>
  <circle cx="255" cy="330" r="6" fill="#0d1117" stroke="#a85ee8" stroke-width="0.8"/>

  <!-- Cluster D: ML Decoding (bottom-right, green) -->
  <circle cx="600" cy="360" r="50" fill="none" stroke="#5ee88a" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.3"/>
  <text x="600" y="425" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5ee88a" opacity="0.6">CLUSTER D</text>
  <circle cx="590" cy="340" r="13" fill="#0d1117" stroke="#5ee88a" stroke-width="1.5"/>
  <text x="590" y="344" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="7" font-weight="700" fill="#5ee88a">M01</text>
  <circle cx="620" cy="365" r="10" fill="#0d1117" stroke="#5ee88a" stroke-width="1.2"/>
  <text x="620" y="369" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="6" font-weight="600" fill="#5ee88a">M02</text>
  <circle cx="575" cy="380" r="7" fill="#0d1117" stroke="#5ee88a" stroke-width="1"/>
  <text x="575" y="383" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="5" fill="#5ee88a">M03</text>
  <circle cx="630" cy="340" r="5" fill="#0d1117" stroke="#5ee88a" stroke-width="0.8"/>

  <!-- Directional edges (inter-cluster) with arrowheads -->
  <defs>
    <marker id="arrow-cyan" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4" fill="none" stroke="#5ec4e8" stroke-width="0.8"/>
    </marker>
    <marker id="arrow-orange" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4" fill="none" stroke="#e8a85e" stroke-width="0.8"/>
    </marker>
    <marker id="arrow-purple" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4" fill="none" stroke="#a85ee8" stroke-width="0.8"/>
    </marker>
    <marker id="arrow-green" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4" fill="none" stroke="#5ee88a" stroke-width="0.8"/>
    </marker>
    <marker id="arrow-bridge" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4" fill="none" stroke="#c9d1d9" stroke-width="0.8"/>
    </marker>
  </defs>

  <!-- Intra-cluster edges -->
  <line x1="170" y1="125" x2="195" y2="113" stroke="#5ec4e8" stroke-width="0.6" opacity="0.4" marker-end="url(#arrow-cyan)"/>
  <line x1="162" y1="132" x2="170" y2="155" stroke="#5ec4e8" stroke-width="0.6" opacity="0.4"/>
  <line x1="565" y1="120" x2="595" y2="122" stroke="#e8a85e" stroke-width="0.6" opacity="0.4" marker-end="url(#arrow-orange)"/>
  <line x1="558" y1="124" x2="572" y2="150" stroke="#e8a85e" stroke-width="0.6" opacity="0.4"/>
  <line x1="218" y1="335" x2="236" y2="350" stroke="#a85ee8" stroke-width="0.6" opacity="0.4" marker-end="url(#arrow-purple)"/>
  <line x1="598" y1="350" x2="616" y2="360" stroke="#5ee88a" stroke-width="0.6" opacity="0.4" marker-end="url(#arrow-green)"/>

  <!-- Inter-cluster bridge edges -->
  <!-- A -> B -->
  <path d="M212,120 Q400,60 548,112" fill="none" stroke="#c9d1d9" stroke-width="0.8" opacity="0.25" marker-end="url(#arrow-bridge)"/>
  <!-- A -> C -->
  <line x1="165" y1="170" x2="205" y2="322" stroke="#c9d1d9" stroke-width="0.8" opacity="0.25" marker-end="url(#arrow-bridge)"/>
  <!-- B -> D -->
  <line x1="585" y1="175" x2="592" y2="328" stroke="#c9d1d9" stroke-width="0.8" opacity="0.25" marker-end="url(#arrow-bridge)"/>
  <!-- C -> D -->
  <path d="M248,348 Q400,430 578,355" fill="none" stroke="#c9d1d9" stroke-width="0.8" opacity="0.25" marker-end="url(#arrow-bridge)"/>
  <!-- A -> D (long bridge) -->
  <path d="M205,155 Q400,280 580,345" fill="none" stroke="#c9d1d9" stroke-width="0.6" opacity="0.15" stroke-dasharray="4,3" marker-end="url(#arrow-bridge)"/>
  <!-- B -> C (long bridge) -->
  <path d="M548,148 Q380,260 245,335" fill="none" stroke="#c9d1d9" stroke-width="0.6" opacity="0.15" stroke-dasharray="4,3" marker-end="url(#arrow-bridge)"/>

  <!-- Bridge node in center -->
  <circle cx="400" cy="240" r="10" fill="#0d1117" stroke="#c9d1d9" stroke-width="1.5"/>
  <text x="400" y="244" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="7" font-weight="700" fill="#c9d1d9">BR</text>
  <text x="400" y="262" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="7" fill="#6e7a8a">Bridge</text>
  <line x1="180" y1="160" x2="392" y2="235" stroke="#c9d1d9" stroke-width="0.6" opacity="0.2"/>
  <line x1="560" y1="122" x2="408" y2="235" stroke="#c9d1d9" stroke-width="0.6" opacity="0.2"/>
  <line x1="220" y1="330" x2="394" y2="248" stroke="#c9d1d9" stroke-width="0.6" opacity="0.2"/>
  <line x1="590" y1="340" x2="408" y2="248" stroke="#c9d1d9" stroke-width="0.6" opacity="0.2"/>

  <!-- Legend -->
  <rect x="20" y="440" width="760" height="40" fill="#161b26" rx="3"/>
  <circle cx="50" cy="460" r="5" fill="none" stroke="#5ec4e8" stroke-width="1.2"/>
  <text x="62" y="464" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5ec4e8">Neural Coding</text>
  <circle cx="180" cy="460" r="5" fill="none" stroke="#e8a85e" stroke-width="1.2"/>
  <text x="192" y="464" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#e8a85e">Connectomics</text>
  <circle cx="310" cy="460" r="5" fill="none" stroke="#a85ee8" stroke-width="1.2"/>
  <text x="322" y="464" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#a85ee8">Spiking Models</text>
  <circle cx="445" cy="460" r="5" fill="none" stroke="#5ee88a" stroke-width="1.2"/>
  <text x="457" y="464" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5ee88a">ML Decoding</text>
  <line x1="560" y1="460" x2="580" y2="460" stroke="#c9d1d9" stroke-width="0.8" opacity="0.4" marker-end="url(#arrow-bridge)"/>
  <text x="588" y="464" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#6e7a8a">Citation edge</text>
  <circle cx="700" cy="460" r="5" fill="none" stroke="#c9d1d9" stroke-width="1.2"/>
  <text x="712" y="464" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#6e7a8a">Bridge node</text>
</svg>
<figcaption>Fig. 1. Citation network of the top 60 papers by PageRank centrality. Node size reflects citation count; colour denotes cluster membership detected via Louvain community detection. Directed edges indicate citation relationships; dashed lines mark cross-cluster bridges.</figcaption>
</figure>

## Network Summary Statistics

<div class="metric-grid">
  <div class="metric-card">
    <span class="metric-value">47,218</span>
    <span class="metric-label">Publications (nodes)</span>
  </div>
  <div class="metric-card">
    <span class="metric-value">312,847</span>
    <span class="metric-label">Citations (edges)</span>
  </div>
  <div class="metric-card">
    <span class="metric-value">4.2</span>
    <span class="metric-label">Mean path length</span>
  </div>
  <div class="metric-card">
    <span class="metric-value">0.31</span>
    <span class="metric-label">Clustering coefficient</span>
  </div>
  <div class="metric-card">
    <span class="metric-value">4</span>
    <span class="metric-label">Major clusters</span>
  </div>
  <div class="metric-card">
    <span class="metric-value">38</span>
    <span class="metric-label">Bridge papers</span>
  </div>
</div>

## Co-Citation Cluster Summary

<div class="cluster-legend">
  <span class="cluster-legend-item"><span class="cluster-dot" style="background:#5ec4e8;"></span> A: Neural Coding &amp; Information Theory (11,842 papers)</span>
  <span class="cluster-legend-item"><span class="cluster-dot" style="background:#e8a85e;"></span> B: Connectomics &amp; Graph-Theoretic Brain Analysis (9,614 papers)</span>
  <span class="cluster-legend-item"><span class="cluster-dot" style="background:#a85ee8;"></span> C: Spiking Network Models (13,206 papers)</span>
  <span class="cluster-legend-item"><span class="cluster-dot" style="background:#5ee88a;"></span> D: ML-Driven Neural Decoding (12,556 papers)</span>
</div>

| Cluster | Size | Density | Key Journals | Top Author (h-index) |
|---|---|---|---|---|
| A -- Neural Coding | 11,842 | 0.038 | *Neural Comput.*, *J. Neurosci.* | Pouget A. (62) |
| B -- Connectomics | 9,614 | 0.041 | *NeuroImage*, *Brain Struct. Funct.* | Sporns O. (78) |
| C -- Spiking Models | 13,206 | 0.029 | *PLOS Comput. Biol.*, *Front. Comput. Neurosci.* | Gerstner W. (71) |
| D -- ML Decoding | 12,556 | 0.033 | *NeurIPS*, *Nature Methods* | Paninski L. (55) |

## Co-Citation Cluster Diagram

<!-- SVG co-citation cluster diagrams for related work visualization -->
<figure>
<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" aria-label="Co-citation cluster diagram showing inter-cluster relationships" style="width:100%;max-width:800px;display:block;margin:1rem auto;">
  <text x="400" y="20" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="11" font-weight="700" fill="#e6edf3" letter-spacing="0.08em">CO-CITATION CLUSTER TOPOLOGY</text>

  <!-- Cluster A: large circle top-left -->
  <circle cx="200" cy="130" r="70" fill="rgba(94,196,232,0.06)" stroke="#5ec4e8" stroke-width="1"/>
  <text x="200" y="120" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="12" font-weight="700" fill="#5ec4e8">A</text>
  <text x="200" y="138" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5ec4e8" opacity="0.7">Neural Coding</text>
  <text x="200" y="150" text-anchor="middle" font-family="'Crimson Pro',serif" font-size="8" fill="#6e7a8a">11,842 papers</text>

  <!-- Cluster B: large circle top-right -->
  <circle cx="580" cy="120" r="65" fill="rgba(232,168,94,0.06)" stroke="#e8a85e" stroke-width="1"/>
  <text x="580" y="112" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="12" font-weight="700" fill="#e8a85e">B</text>
  <text x="580" y="128" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#e8a85e" opacity="0.7">Connectomics</text>
  <text x="580" y="140" text-anchor="middle" font-family="'Crimson Pro',serif" font-size="8" fill="#6e7a8a">9,614 papers</text>

  <!-- Cluster C: large circle bottom-left -->
  <circle cx="220" cy="300" r="60" fill="rgba(168,94,232,0.06)" stroke="#a85ee8" stroke-width="1"/>
  <text x="220" y="292" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="12" font-weight="700" fill="#a85ee8">C</text>
  <text x="220" y="308" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#a85ee8" opacity="0.7">Spiking Models</text>
  <text x="220" y="320" text-anchor="middle" font-family="'Crimson Pro',serif" font-size="8" fill="#6e7a8a">13,206 papers</text>

  <!-- Cluster D: large circle bottom-right -->
  <circle cx="560" cy="290" r="68" fill="rgba(94,232,138,0.06)" stroke="#5ee88a" stroke-width="1"/>
  <text x="560" y="282" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="12" font-weight="700" fill="#5ee88a">D</text>
  <text x="560" y="298" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5ee88a" opacity="0.7">ML Decoding</text>
  <text x="560" y="310" text-anchor="middle" font-family="'Crimson Pro',serif" font-size="8" fill="#6e7a8a">12,556 papers</text>

  <!-- Inter-cluster coupling edges with weights -->
  <!-- A-B -->
  <line x1="268" y1="118" x2="516" y2="112" stroke="#c9d1d9" stroke-width="2.5" opacity="0.3"/>
  <text x="392" y="108" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#c9d1d9" opacity="0.6">0.18</text>
  <!-- A-C -->
  <line x1="208" y1="200" x2="216" y2="240" stroke="#c9d1d9" stroke-width="3.5" opacity="0.3"/>
  <text x="226" y="222" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#c9d1d9" opacity="0.6">0.24</text>
  <!-- A-D -->
  <line x1="260" y1="165" x2="505" y2="258" stroke="#c9d1d9" stroke-width="1.5" opacity="0.2"/>
  <text x="380" y="200" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#c9d1d9" opacity="0.5">0.09</text>
  <!-- B-C -->
  <line x1="530" y1="168" x2="268" y2="268" stroke="#c9d1d9" stroke-width="1" opacity="0.15"/>
  <text x="400" y="230" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#c9d1d9" opacity="0.4">0.05</text>
  <!-- B-D -->
  <line x1="572" y1="185" x2="564" y2="222" stroke="#c9d1d9" stroke-width="2" opacity="0.3"/>
  <text x="582" y="206" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#c9d1d9" opacity="0.6">0.14</text>
  <!-- C-D -->
  <line x1="278" y1="308" x2="494" y2="296" stroke="#c9d1d9" stroke-width="4" opacity="0.3"/>
  <text x="386" y="294" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#c9d1d9" opacity="0.6">0.31</text>

  <!-- Label -->
  <text x="400" y="370" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#484f5a">Edge width proportional to bibliographic coupling strength (Jaccard index)</text>
</svg>
<figcaption>Fig. 2. Co-citation cluster topology. Circle area is proportional to cluster size. Edge width represents bibliographic coupling strength (Jaccard similarity of reference lists). The strongest coupling (0.31) connects spiking models (C) and ML decoding (D), reflecting growing convergence between biologically inspired and data-driven approaches.</figcaption>
</figure>

## Degree Distribution

| Metric | Value |
|---|---|
| Mean in-degree | 6.63 |
| Median in-degree | 3 |
| Max in-degree (most cited) | 1,847 |
| Power-law exponent (alpha) | 2.74 |
| KS-test p-value | 0.12 |
| Small-world sigma | 4.8 |
| Assortativity (degree) | -0.08 |
