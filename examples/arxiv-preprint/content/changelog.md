+++
title = "Changelog"
description = "Version history for arXiv:2604.08123 -- Sparse Gated Attention"
template = "page"
tags = ["paper", "light", "preprint", "self-published", "raw"]
+++

<div class="changelog-page">

# Version History

<p class="changelog-intro">This page tracks all revisions submitted to arXiv for paper ID <strong>arXiv:2604.08123</strong>. Each version includes a summary of changes, date of submission, and status.</p>

<div class="changelog-entry">

<div class="changelog-header">
<svg viewBox="0 0 88 24" xmlns="http://www.w3.org/2000/svg" class="version-badge" aria-label="Version 3">
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

### Version 3 -- 10 April 2026

**Major changes from v2:**

- Added ablation study on gate network rank (Section 4.3), showing that rank-16 projections suffice for models up to 1.3B parameters
- Included new results on the SCROLLS benchmark (Table 4), demonstrating SGA's effectiveness on real-world long-document tasks
- Fixed error in FLOPs computation for the BigBird baseline (Table 1): corrected from 0.45x to 0.48x relative FLOPs
- Added visualization of learned gate patterns across layers (Appendix C), revealing the emergence of local, strided, and global attention heads
- Expanded related work section with discussion of Mamba and state-space model alternatives
- Minor typographic corrections throughout

</div>

<div class="changelog-entry">

<div class="changelog-header">
<svg viewBox="0 0 92 24" xmlns="http://www.w3.org/2000/svg" class="version-badge" aria-label="Version 2">
  <rect x="0" y="0" width="24" height="24" rx="4" fill="#2a5a8a"/>
  <text x="12" y="16" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#ffffff">v2</text>
  <rect x="28" y="2" width="62" height="20" rx="3" fill="none" stroke="#2a5a8a" stroke-width="1"/>
  <text x="59" y="15" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#2a5a8a">Mar 2026</text>
</svg>
<svg viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg" class="status-badge" aria-label="Revised">
  <rect x="0" y="0" width="100" height="24" rx="4" fill="none" stroke="#2a5a8a" stroke-width="1.5"/>
  <circle cx="12" cy="12" r="4" fill="#2a5a8a"/>
  <text x="22" y="16" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#2a5a8a">REVISED</text>
</svg>
</div>

### Version 2 -- 12 March 2026

**Major changes from v1:**

- Replaced the original hard-threshold gating with Gumbel-sigmoid straight-through estimator for improved gradient flow during training
- Added PG-19 language modeling experiments (Section 4.2), extending evaluation beyond classification to generation
- Included wall-clock timing benchmarks on A100 GPUs (Table 1, new column)
- Added comparison with Flash Attention v2, clarifying that SGA is orthogonal to memory-efficient attention implementations
- Revised Section 3.2 with formal analysis of the expected sparsity ratio as a function of the temperature parameter
- Added Appendix B with convergence proofs for the Gumbel-sigmoid estimator under the SGA objective

</div>

<div class="changelog-entry">

<div class="changelog-header">
<svg viewBox="0 0 88 24" xmlns="http://www.w3.org/2000/svg" class="version-badge" aria-label="Version 1">
  <rect x="0" y="0" width="24" height="24" rx="4" fill="#c45a1a"/>
  <text x="12" y="16" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#ffffff">v1</text>
  <rect x="28" y="2" width="58" height="20" rx="3" fill="none" stroke="#c45a1a" stroke-width="1"/>
  <text x="57" y="15" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#c45a1a">Jan 2026</text>
</svg>
<svg viewBox="0 0 110 24" xmlns="http://www.w3.org/2000/svg" class="status-badge" aria-label="Submitted">
  <rect x="0" y="0" width="110" height="24" rx="4" fill="none" stroke="#c45a1a" stroke-width="1.5"/>
  <circle cx="12" cy="12" r="4" fill="#c45a1a"/>
  <text x="22" y="16" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#c45a1a">SUBMITTED</text>
</svg>
</div>

### Version 1 -- 15 January 2026

**Initial submission.**

- Proposed the Sparse Gated Attention (SGA) mechanism with learned per-head gate masks
- Evaluated on Long Range Arena (LRA) benchmark across five tasks (ListOps, Text, Retrieval, Image, Pathfinder)
- Demonstrated 62% FLOPs reduction with improved accuracy over vanilla attention
- Included preliminary analysis of gate pattern interpretability
- Used hard-threshold gating (replaced in v2 with Gumbel-sigmoid)

</div>

</div>
