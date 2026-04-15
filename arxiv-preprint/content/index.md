+++
title = "Sparse Gated Attention: Efficient Long-Context Processing via Learned Gate Masks"
description = "We propose Sparse Gated Attention (SGA), a novel attention mechanism that learns per-head binary gate masks to dynamically prune uninformative attention connections, achieving sub-quadratic complexity for long-context transformer models."
template = "page"
tags = ["paper", "light", "preprint", "self-published", "raw"]
+++

<div class="paper-header">

<p class="paper-eyebrow">PREPRINT</p>

# Sparse Gated Attention: Efficient Long-Context Processing via Learned Gate Masks

<div class="paper-authors">
  <div class="author">
    <span class="author-name">Amir Khalili</span>
    <span class="author-affiliation">ETH Zurich</span>
  </div>
  <div class="author">
    <span class="author-name">Yuna Park</span>
    <span class="author-affiliation">KAIST</span>
  </div>
  <div class="author">
    <span class="author-name">Stefan Novak</span>
    <span class="author-affiliation">Charles University, Prague</span>
  </div>
  <div class="author">
    <span class="author-name">Fatima Al-Rashidi</span>
    <span class="author-affiliation">KAUST</span>
  </div>
</div>

<p class="paper-arxiv-id">arXiv:2604.08123v3 [cs.LG] &middot; 15 Jan 2026 (v1), 12 Mar 2026 (v2), 10 Apr 2026 (v3)</p>

<div class="badge-row">
  <svg viewBox="0 0 88 24" xmlns="http://www.w3.org/2000/svg" class="version-badge" aria-label="Version 1, January 2026">
    <rect x="0" y="0" width="24" height="24" rx="4" fill="#c45a1a"/>
    <text x="12" y="16" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#ffffff">v1</text>
    <rect x="28" y="2" width="58" height="20" rx="3" fill="none" stroke="#c45a1a" stroke-width="1"/>
    <text x="57" y="15" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#c45a1a">Jan 2026</text>
  </svg>
  <svg viewBox="0 0 92 24" xmlns="http://www.w3.org/2000/svg" class="version-badge" aria-label="Version 2, March 2026">
    <rect x="0" y="0" width="24" height="24" rx="4" fill="#2a5a8a"/>
    <text x="12" y="16" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#ffffff">v2</text>
    <rect x="28" y="2" width="62" height="20" rx="3" fill="none" stroke="#2a5a8a" stroke-width="1"/>
    <text x="59" y="15" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#2a5a8a">Mar 2026</text>
  </svg>
  <svg viewBox="0 0 88 24" xmlns="http://www.w3.org/2000/svg" class="version-badge" aria-label="Version 3, April 2026">
    <rect x="0" y="0" width="24" height="24" rx="4" fill="#1a7a3a"/>
    <text x="12" y="16" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#ffffff">v3</text>
    <rect x="28" y="2" width="58" height="20" rx="3" fill="none" stroke="#1a7a3a" stroke-width="1"/>
    <text x="57" y="15" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#1a7a3a">Apr 2026</text>
  </svg>
  <svg viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg" class="status-badge" aria-label="Under review">
    <rect x="0" y="0" width="120" height="24" rx="4" fill="none" stroke="#2a5a8a" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4" fill="#2a5a8a"/>
    <text x="22" y="16" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#2a5a8a">UNDER REVIEW</text>
  </svg>
</div>

</div>

<div class="abstract-box">

## Abstract

We propose **Sparse Gated Attention (SGA)**, a novel attention mechanism that learns per-head binary gate masks to dynamically prune uninformative attention connections during inference. Unlike fixed sparse patterns (e.g., local windows, strided access), SGA learns a lightweight gating network that produces differentiable masks over the attention matrix, enabling each head to specialize in attending to contextually relevant positions. The gate network is parameterized as a low-rank projection followed by a straight-through Gumbel-sigmoid estimator, adding fewer than 0.3% additional parameters to a standard transformer. During inference, the learned gates produce hard binary masks, reducing effective attention computation to O(n * k) where k is the average number of retained connections per query.

On the Long Range Arena (LRA) benchmark, SGA achieves **87.2% average accuracy** (vs. 86.1% for vanilla attention) while reducing FLOPs by **62%**. On document-level language modeling (PG-19), SGA matches full-attention perplexity (17.8 vs. 17.6) at sequence lengths of 8192 with **3.1x wall-clock speedup**. We further demonstrate that the learned gate patterns are interpretable, revealing distinct head specializations: some heads attend locally for syntax, while others form long-range "bridge" connections for discourse coherence. Code and pretrained checkpoints are available at `https://github.com/sparse-gated-attention/sga`.

</div>

<div class="key-results">

## Key Results

<table class="results-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>LRA Avg (%)</th>
      <th>PG-19 PPL</th>
      <th>FLOPs (rel.)</th>
      <th>Wall-clock (rel.)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vanilla Transformer</td>
      <td>86.1</td>
      <td>17.6</td>
      <td>1.00x</td>
      <td>1.00x</td>
    </tr>
    <tr>
      <td>Longformer</td>
      <td>84.7</td>
      <td>18.3</td>
      <td>0.52x</td>
      <td>0.58x</td>
    </tr>
    <tr>
      <td>BigBird</td>
      <td>85.3</td>
      <td>18.1</td>
      <td>0.48x</td>
      <td>0.55x</td>
    </tr>
    <tr>
      <td>Linear Attention</td>
      <td>81.2</td>
      <td>19.4</td>
      <td>0.31x</td>
      <td>0.34x</td>
    </tr>
    <tr>
      <td>Flash Attention v2</td>
      <td>86.1</td>
      <td>17.6</td>
      <td>1.00x</td>
      <td>0.42x</td>
    </tr>
    <tr class="highlight-row">
      <td><strong>SGA (Ours)</strong></td>
      <td><strong>87.2</strong></td>
      <td><strong>17.8</strong></td>
      <td><strong>0.38x</strong></td>
      <td><strong>0.32x</strong></td>
    </tr>
  </tbody>
</table>

</div>

<div class="architecture-overview">

## Architecture Overview

<div class="svg-figure">
<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" class="architecture-diagram" aria-label="Sparse Gated Attention architecture diagram">
  <!-- Background -->
  <rect x="0" y="0" width="700" height="340" fill="#fafaf8" rx="4"/>

  <!-- Input -->
  <rect x="280" y="10" width="140" height="32" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="350" y="31" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#333">Input X (n x d)</text>

  <!-- Arrow down -->
  <line x1="350" y1="42" x2="350" y2="62" stroke="#666" stroke-width="1" marker-end="url(#arrowhead)"/>

  <!-- QKV Projections -->
  <rect x="120" y="64" width="100" height="28" rx="3" fill="none" stroke="#2a5a8a" stroke-width="1.5"/>
  <text x="170" y="83" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#2a5a8a">W_Q</text>

  <rect x="300" y="64" width="100" height="28" rx="3" fill="none" stroke="#2a5a8a" stroke-width="1.5"/>
  <text x="350" y="83" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#2a5a8a">W_K</text>

  <rect x="480" y="64" width="100" height="28" rx="3" fill="none" stroke="#2a5a8a" stroke-width="1.5"/>
  <text x="530" y="83" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#2a5a8a">W_V</text>

  <!-- Branching arrows from input -->
  <line x1="350" y1="52" x2="170" y2="64" stroke="#666" stroke-width="1"/>
  <line x1="350" y1="52" x2="350" y2="64" stroke="#666" stroke-width="1"/>
  <line x1="350" y1="52" x2="530" y2="64" stroke="#666" stroke-width="1"/>

  <!-- Q, K labels -->
  <text x="170" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#666">Q</text>
  <text x="350" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#666">K</text>
  <text x="530" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#666">V</text>

  <!-- Arrows down from QKV -->
  <line x1="170" y1="92" x2="170" y2="122" stroke="#666" stroke-width="1"/>
  <line x1="350" y1="92" x2="350" y2="122" stroke="#666" stroke-width="1"/>
  <line x1="530" y1="92" x2="530" y2="198" stroke="#666" stroke-width="1"/>

  <!-- Attention score computation -->
  <rect x="180" y="122" width="250" height="32" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="305" y="143" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#333">A = softmax(QK^T / sqrt(d))</text>

  <!-- Arrows from Q,K into attention -->
  <line x1="170" y1="112" x2="250" y2="122" stroke="#666" stroke-width="1"/>
  <line x1="350" y1="112" x2="350" y2="122" stroke="#666" stroke-width="1"/>

  <!-- Gate Network (the novel part) - highlighted -->
  <rect x="16" y="110" width="130" height="64" rx="4" fill="#fff7f0" stroke="#c45a1a" stroke-width="2"/>
  <text x="81" y="130" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#c45a1a">Gate Network</text>
  <text x="81" y="144" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#c45a1a">Low-rank proj.</text>
  <text x="81" y="158" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#c45a1a">+ Gumbel-sigmoid</text>
  <text x="81" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="8" fill="#999">(+0.3% params)</text>

  <!-- Arrow from Q to Gate -->
  <line x1="170" y1="108" x2="146" y2="118" stroke="#c45a1a" stroke-width="1.5" stroke-dasharray="4,2"/>

  <!-- Gate mask output -->
  <rect x="36" y="194" width="90" height="28" rx="3" fill="none" stroke="#c45a1a" stroke-width="1.5"/>
  <text x="81" y="213" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#c45a1a">G (mask)</text>
  <line x1="81" y1="174" x2="81" y2="194" stroke="#c45a1a" stroke-width="1.5" marker-end="url(#arrowhead-orange)"/>

  <!-- Hadamard product -->
  <rect x="180" y="178" width="250" height="32" rx="3" fill="#fff7f0" stroke="#c45a1a" stroke-width="2"/>
  <text x="305" y="199" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#c45a1a">A_sparse = A * G (element-wise)</text>

  <!-- Arrows into Hadamard -->
  <line x1="305" y1="154" x2="305" y2="178" stroke="#666" stroke-width="1" marker-end="url(#arrowhead)"/>
  <line x1="126" y1="208" x2="180" y2="198" stroke="#c45a1a" stroke-width="1.5"/>

  <!-- Output computation -->
  <rect x="220" y="234" width="220" height="32" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="330" y="255" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#333">Output = A_sparse * V</text>

  <!-- Arrows from sparse attention and V -->
  <line x1="305" y1="210" x2="305" y2="234" stroke="#666" stroke-width="1" marker-end="url(#arrowhead)"/>
  <line x1="530" y1="208" x2="440" y2="240" stroke="#666" stroke-width="1"/>

  <!-- Final output -->
  <rect x="270" y="286" width="120" height="32" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="330" y="307" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#333">Output (n x d)</text>
  <line x1="330" y1="266" x2="330" y2="286" stroke="#666" stroke-width="1" marker-end="url(#arrowhead)"/>

  <!-- Legend -->
  <rect x="530" y="250" width="155" height="76" rx="3" fill="#fafaf8" stroke="#ccc" stroke-width="0.75"/>
  <text x="540" y="266" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#333">Legend</text>
  <line x1="540" y1="280" x2="560" y2="280" stroke="#2a5a8a" stroke-width="1.5"/>
  <text x="566" y="284" font-family="Inter, sans-serif" font-size="8" fill="#666">Standard ops</text>
  <line x1="540" y1="296" x2="560" y2="296" stroke="#c45a1a" stroke-width="2"/>
  <text x="566" y="300" font-family="Inter, sans-serif" font-size="8" fill="#666">SGA components</text>
  <line x1="540" y1="312" x2="560" y2="312" stroke="#c45a1a" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="566" y="316" font-family="Inter, sans-serif" font-size="8" fill="#666">Gate input</text>

  <!-- Arrowhead markers -->
  <defs>
    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="none" stroke="#666" stroke-width="1"/>
    </marker>
    <marker id="arrowhead-orange" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="none" stroke="#c45a1a" stroke-width="1"/>
    </marker>
  </defs>
</svg>
<p class="figure-caption">Figure 1. Sparse Gated Attention (SGA) architecture. The gate network (orange) learns per-head binary masks that prune uninformative attention connections, reducing effective computation from O(n^2) to O(n*k).</p>
</div>

</div>

<div class="paper-structure">

## Structure of the Paper

The remainder of this paper is organized as follows:

- **[Section 1: Introduction](/sections/1-introduction/)** -- Motivation and problem statement for efficient long-context attention.
- **[Section 2: Related Work](/sections/2-related-work/)** -- Survey of efficient attention mechanisms and sparse transformers.
- **[Section 3: Method](/sections/3-method/)** -- Detailed description of the Sparse Gated Attention mechanism.
- **[Section 4: Experiments](/sections/4-experiments/)** -- Evaluation on LRA, PG-19, and ablation studies.
- **[Section 5: Conclusion](/sections/5-conclusion/)** -- Summary of contributions and future directions.
- **[Changelog](/changelog/)** -- Version history and revision notes.
- **[Appendix](/appendix/)** -- Supplementary materials, proofs, and additional experiments.

</div>
