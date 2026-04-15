+++
title = "Detailed Verdicts"
description = "Detailed verdict analysis for each claim in the original paper, with side-by-side evidence."
tags = ["paper", "light", "replication", "comparison", "verdict"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Verdicts &middot; Claim-by-Claim Analysis</p>
  <h1 class="paper-title">Detailed Verdict Analysis</h1>
</header>

## Claim 1: Cross-Lingual Transfer Performance

<!-- Verdict stamp SVG -->
<svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" aria-label="Verdict: CONFIRMED" style="display:block;margin:1rem 0;">
  <rect x="2" y="2" width="196" height="46" rx="4" fill="#e8f4ec" stroke="#1e6e3a" stroke-width="2"/>
  <text x="100" y="20" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="700" fill="#1e6e3a" letter-spacing="2">CLAIM 1</text>
  <text x="100" y="38" text-anchor="middle" font-family="'Inter',sans-serif" font-size="16" font-weight="700" fill="#1e6e3a" letter-spacing="3">CONFIRMED</text>
</svg>

**Original claim:** "The attention-only architecture achieves F1 scores within 2 points of the full transformer baseline across all five target languages."

<div class="comparison-grid">
  <div class="comparison-original">
    <p class="comparison-label">Original (Park et al.)</p>
    <p class="comparison-value">80.2 F1</p>
    <p class="comparison-detail">5-language average, single seed</p>
  </div>
  <div class="comparison-replicated">
    <p class="comparison-label">Replicated (This Study)</p>
    <p class="comparison-value">79.0 F1</p>
    <p class="comparison-detail">5-language average, mean of 5 seeds (sd = 0.8)</p>
  </div>
</div>

The 1.2-point difference is within both our pre-registered confirmation threshold (2.0 points) and the variance observed across random seeds. On a per-language basis, the largest discrepancy was for Quechua (-2.9 F1), which we attribute to the bug fix B-3 having a disproportionate impact on languages with skewed entity distributions. Welsh and Swahili actually produced *higher* F1 scores in our replication.

---

## Claim 2: Attention Head Ablations

<svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" aria-label="Verdict: PARTIALLY CONFIRMED" style="display:block;margin:1rem 0;">
  <rect x="2" y="2" width="196" height="46" rx="4" fill="#fef4e6" stroke="#a85c00" stroke-width="2"/>
  <text x="100" y="20" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="700" fill="#a85c00" letter-spacing="2">CLAIM 2</text>
  <text x="100" y="38" text-anchor="middle" font-family="'Inter',sans-serif" font-size="16" font-weight="700" fill="#a85c00" letter-spacing="3">PARTIALLY</text>
</svg>

**Original claim:** "Attention head 3 is critical for cross-lingual transfer (ablation reduces F1 by 8.4 points), while head 7 is redundant (ablation reduces F1 by only 0.3 points)."

<div class="comparison-grid">
  <div class="comparison-original">
    <p class="comparison-label">Original: Head 3 Ablation</p>
    <p class="comparison-value">-8.4 F1</p>
    <p class="comparison-detail">Drop when head 3 removed</p>
  </div>
  <div class="comparison-replicated">
    <p class="comparison-label">Replicated: Head 3 Ablation</p>
    <p class="comparison-value">-4.1 F1</p>
    <p class="comparison-detail">Drop when head 3 removed (sd = 1.2)</p>
  </div>
</div>

<div class="comparison-grid">
  <div class="comparison-original">
    <p class="comparison-label">Original: Head 7 Ablation</p>
    <p class="comparison-value">-0.3 F1</p>
    <p class="comparison-detail">Drop when head 7 removed</p>
  </div>
  <div class="comparison-replicated">
    <p class="comparison-label">Replicated: Head 7 Ablation</p>
    <p class="comparison-value">-3.8 F1</p>
    <p class="comparison-detail">Drop when head 7 removed (sd = 1.8)</p>
  </div>
</div>

Head 3 is indeed more important than average, but the effect size is roughly half what was originally reported. More critically, head 7 is *not* redundant in our replication -- its removal causes a meaningful F1 drop (3.8 points). The high variance across seeds (sd = 1.8) suggests that attention head importance is more sensitive to initialisation than the original analysis implied.

---

## Claim 3: Computational Efficiency

<svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" aria-label="Verdict: FAILED" style="display:block;margin:1rem 0;">
  <rect x="2" y="2" width="196" height="46" rx="4" fill="#fce8e8" stroke="#a82020" stroke-width="2"/>
  <text x="100" y="20" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="700" fill="#a82020" letter-spacing="2">CLAIM 3</text>
  <text x="100" y="38" text-anchor="middle" font-family="'Inter',sans-serif" font-size="16" font-weight="700" fill="#a82020" letter-spacing="3">FAILED</text>
</svg>

**Original claim:** "The attention-only model trains 2.1x faster than the full transformer baseline."

<div class="comparison-grid">
  <div class="comparison-original">
    <p class="comparison-label">Original: Speedup</p>
    <p class="comparison-value">2.1x</p>
    <p class="comparison-detail">Reported training speedup</p>
  </div>
  <div class="comparison-replicated">
    <p class="comparison-label">Replicated: Speedup</p>
    <p class="comparison-value">1.1x</p>
    <p class="comparison-detail">Measured end-to-end speedup</p>
  </div>
</div>

The original speedup measurement excluded a preprocessing step (`align_subwords.py`) that is required before training the attention-only model but not the transformer baseline. This step takes approximately 45 minutes per language on our hardware. When preprocessing time is included in the total training time, the speedup drops from 2.1x to 1.1x -- effectively no meaningful efficiency gain.

We confirmed this discrepancy through correspondence with the original authors, who acknowledged that the timing comparison in the paper measured only the forward/backward pass time during training, not the full end-to-end pipeline.
