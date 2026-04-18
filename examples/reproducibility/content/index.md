+++
title = "Replication Report"
description = "Replication study of attention-based models for low-resource NLP, with side-by-side comparisons of original and replicated results."
tags = ["paper", "light", "replication", "comparison", "verdict"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Replication Report &middot; Open Access</p>
  <h1 class="paper-title">Replication of "Attention Is Sometimes Enough: Cross-Lingual Transfer in Low-Resource Named Entity Recognition"</h1>
  <p class="paper-authors">
    Riku Nakamura<sup>1</sup>,
    Adaeze Okonkwo<sup>2</sup>,
    Sofia Lindqvist<sup>3</sup>,
    Marco Reyes-Torres<sup>1</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup>Computational Linguistics Lab, University of Tokyo &middot;
    <sup>2</sup>NLP Group, University of Edinburgh &middot;
    <sup>3</sup>Language Technology Division, Uppsala University
  </p>
  <p class="paper-doi"><strong>DOI:</strong> <a href="#">10.48550/jrr.2026.12.04.201</a> &middot; <strong>Original:</strong> Park et al. (2024), ACL 2024 &middot; <strong>Submitted:</strong> 08 Jan 2026 &middot; <strong>Accepted:</strong> 22 Mar 2026</p>
</header>

## Overall Verdict

<!-- Verdict stamps SVG -->
<figure>
<svg viewBox="0 0 750 100" xmlns="http://www.w3.org/2000/svg" aria-label="Overall replication verdicts" style="width:100%;max-width:750px;display:block;margin:1rem auto;">
  <!-- CONFIRMED stamp -->
  <rect x="10" y="10" width="220" height="80" rx="4" fill="#e8f4ec" stroke="#1e6e3a" stroke-width="2"/>
  <text x="120" y="42" text-anchor="middle" font-family="'Inter',sans-serif" font-size="10" font-weight="700" fill="#1e6e3a" letter-spacing="2">MAIN CLAIM</text>
  <line x1="40" y1="50" x2="200" y2="50" stroke="#1e6e3a" stroke-width="0.5"/>
  <text x="120" y="72" text-anchor="middle" font-family="'Inter',sans-serif" font-size="18" font-weight="700" fill="#1e6e3a" letter-spacing="3">CONFIRMED</text>
  <!-- Diagonal stamp lines for authenticity -->
  <line x1="15" y1="85" x2="35" y2="15" stroke="#1e6e3a" stroke-width="0.3" opacity="0.3"/>
  <line x1="205" y1="85" x2="225" y2="15" stroke="#1e6e3a" stroke-width="0.3" opacity="0.3"/>
  <!-- PARTIALLY stamp -->
  <rect x="260" y="10" width="220" height="80" rx="4" fill="#fef4e6" stroke="#a85c00" stroke-width="2"/>
  <text x="370" y="42" text-anchor="middle" font-family="'Inter',sans-serif" font-size="10" font-weight="700" fill="#a85c00" letter-spacing="2">ABLATION CLAIMS</text>
  <line x1="290" y1="50" x2="450" y2="50" stroke="#a85c00" stroke-width="0.5"/>
  <text x="370" y="72" text-anchor="middle" font-family="'Inter',sans-serif" font-size="18" font-weight="700" fill="#a85c00" letter-spacing="3">PARTIALLY</text>
  <line x1="265" y1="85" x2="285" y2="15" stroke="#a85c00" stroke-width="0.3" opacity="0.3"/>
  <line x1="455" y1="85" x2="475" y2="15" stroke="#a85c00" stroke-width="0.3" opacity="0.3"/>
  <!-- FAILED stamp -->
  <rect x="510" y="10" width="220" height="80" rx="4" fill="#fce8e8" stroke="#a82020" stroke-width="2"/>
  <text x="620" y="42" text-anchor="middle" font-family="'Inter',sans-serif" font-size="10" font-weight="700" fill="#a82020" letter-spacing="2">EFFICIENCY CLAIM</text>
  <line x1="540" y1="50" x2="700" y2="50" stroke="#a82020" stroke-width="0.5"/>
  <text x="620" y="72" text-anchor="middle" font-family="'Inter',sans-serif" font-size="18" font-weight="700" fill="#a82020" letter-spacing="3">FAILED</text>
  <line x1="515" y1="85" x2="535" y2="15" stroke="#a82020" stroke-width="0.3" opacity="0.3"/>
  <line x1="705" y1="85" x2="725" y2="15" stroke="#a82020" stroke-width="0.3" opacity="0.3"/>
</svg>
<figcaption style="text-align:center;font-size:0.82rem;color:#6a6a72;font-style:italic;">Fig. 1. Overall replication verdicts for the three principal claims of Park et al. (2024).</figcaption>
</figure>

## Abstract

This report presents a systematic replication of Park et al. (2024), "Attention Is Sometimes Enough: Cross-Lingual Transfer in Low-Resource Named Entity Recognition," published at ACL 2024. The original study claimed that (1) a simplified attention-only architecture achieves comparable performance to full transformer models for cross-lingual NER in low-resource settings, (2) specific attention head configurations are critical for transfer, and (3) the approach is more computationally efficient than baseline methods.

We replicate all experiments using the original codebase (with corrections), identical datasets, and matched hardware. Our findings **confirm** the main performance claim (Claim 1), **partially confirm** the ablation analysis (Claim 2) with important caveats about attention head sensitivity, and **fail to confirm** the computational efficiency claim (Claim 3) due to undocumented preprocessing overhead in the original evaluation.

## Key Result Comparison

<!-- Side-by-side comparison chart SVG -->
<figure>
<svg viewBox="0 0 750 280" xmlns="http://www.w3.org/2000/svg" aria-label="Side-by-side F1 score comparison" style="width:100%;max-width:750px;display:block;margin:1rem auto;">
  <text x="375" y="18" text-anchor="middle" font-family="'Crimson Pro',serif" font-size="13" font-weight="700" fill="#1c1c1e">F1 SCORES: ORIGINAL vs. REPLICATED</text>
  <!-- Axes -->
  <line x1="120" y1="35" x2="120" y2="240" stroke="#1c1c1e" stroke-width="1"/>
  <line x1="120" y1="240" x2="720" y2="240" stroke="#1c1c1e" stroke-width="1"/>
  <!-- Y-axis labels -->
  <text x="115" y="240" text-anchor="end" font-family="'Inter',sans-serif" font-size="9" fill="#6a6a72">0</text>
  <text x="115" y="199" text-anchor="end" font-family="'Inter',sans-serif" font-size="9" fill="#6a6a72">20</text>
  <text x="115" y="158" text-anchor="end" font-family="'Inter',sans-serif" font-size="9" fill="#6a6a72">40</text>
  <text x="115" y="117" text-anchor="end" font-family="'Inter',sans-serif" font-size="9" fill="#6a6a72">60</text>
  <text x="115" y="76" text-anchor="end" font-family="'Inter',sans-serif" font-size="9" fill="#6a6a72">80</text>
  <text x="115" y="42" text-anchor="end" font-family="'Inter',sans-serif" font-size="9" fill="#6a6a72">100</text>
  <!-- Grid lines -->
  <line x1="120" y1="195" x2="720" y2="195" stroke="#e4e2dc" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="120" y1="154" x2="720" y2="154" stroke="#e4e2dc" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="120" y1="113" x2="720" y2="113" stroke="#e4e2dc" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="120" y1="72" x2="720" y2="72" stroke="#e4e2dc" stroke-width="0.5" stroke-dasharray="3,3"/>
  <!-- Language pairs - grouped bars -->
  <!-- Yoruba (yo) -->
  <rect x="145" y="78" width="28" height="162" fill="#2c5f8a" opacity="0.85"/>
  <rect x="175" y="82" width="28" height="158" fill="#5c3a8a" opacity="0.85"/>
  <text x="174" y="258" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" fill="#1c1c1e">Yoruba</text>
  <text x="159" y="73" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#2c5f8a">79.1</text>
  <text x="189" y="77" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#5c3a8a">77.2</text>
  <!-- Swahili (sw) -->
  <rect x="245" y="72" width="28" height="168" fill="#2c5f8a" opacity="0.85"/>
  <rect x="275" y="70" width="28" height="170" fill="#5c3a8a" opacity="0.85"/>
  <text x="274" y="258" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" fill="#1c1c1e">Swahili</text>
  <text x="259" y="67" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#2c5f8a">81.9</text>
  <text x="289" y="65" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#5c3a8a">82.9</text>
  <!-- Quechua (qu) -->
  <rect x="345" y="98" width="28" height="142" fill="#2c5f8a" opacity="0.85"/>
  <rect x="375" y="104" width="28" height="136" fill="#5c3a8a" opacity="0.85"/>
  <text x="374" y="258" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" fill="#1c1c1e">Quechua</text>
  <text x="359" y="93" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#2c5f8a">69.3</text>
  <text x="389" y="99" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#5c3a8a">66.4</text>
  <!-- Welsh (cy) -->
  <rect x="445" y="62" width="28" height="178" fill="#2c5f8a" opacity="0.85"/>
  <rect x="475" y="60" width="28" height="180" fill="#5c3a8a" opacity="0.85"/>
  <text x="474" y="258" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" fill="#1c1c1e">Welsh</text>
  <text x="459" y="57" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#2c5f8a">86.8</text>
  <text x="489" y="55" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#5c3a8a">87.8</text>
  <!-- Tagalog (tl) -->
  <rect x="545" y="68" width="28" height="172" fill="#2c5f8a" opacity="0.85"/>
  <rect x="575" y="74" width="28" height="166" fill="#5c3a8a" opacity="0.85"/>
  <text x="574" y="258" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" fill="#1c1c1e">Tagalog</text>
  <text x="559" y="63" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#2c5f8a">83.9</text>
  <text x="589" y="69" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#5c3a8a">80.9</text>
  <!-- Legend -->
  <rect x="640" y="40" width="12" height="12" fill="#2c5f8a" opacity="0.85"/>
  <text x="656" y="50" font-family="'Crimson Pro',serif" font-size="10" fill="#2c5f8a">Original</text>
  <rect x="640" y="58" width="12" height="12" fill="#5c3a8a" opacity="0.85"/>
  <text x="656" y="68" font-family="'Inter',sans-serif" font-size="10" fill="#5c3a8a">Replicated</text>
</svg>
<figcaption style="text-align:center;font-size:0.82rem;color:#6a6a72;font-style:italic;">Fig. 2. F1 scores for cross-lingual NER across five low-resource target languages. Left bar (blue): original results. Right bar (purple): our replication.</figcaption>
</figure>

## Claim-by-Claim Summary

| Claim | Original Result | Our Result | Delta | Verdict |
|---|---|---|---|---|
| Cross-lingual F1 (5-lang avg) | 80.2 | 79.0 | -1.2 | <span class="verdict-confirmed">CONFIRMED</span> |
| Attention head 3 critical | Ablation drop: 8.4 F1 | Ablation drop: 4.1 F1 | -4.3 | <span class="verdict-partial">PARTIALLY</span> |
| Head 7 redundant | Ablation drop: 0.3 F1 | Ablation drop: 3.8 F1 | +3.5 | <span class="verdict-failed">FAILED</span> |
| Training efficiency (2x faster) | 2.1x speedup | 1.1x speedup | -1.0x | <span class="verdict-failed">FAILED</span> |
| Low-resource threshold (<500 sent) | Effective below 500 | Effective below 500 | 0 | <span class="verdict-confirmed">CONFIRMED</span> |

## Methodology

We followed the replication protocol established by the ACL 2023 Reproducibility Track. All experiments were conducted using the original authors' codebase (commit `a7f3e2d`, released January 2024) with three corrections for discovered bugs (detailed in Section 2). Hardware was matched to the original specification: NVIDIA A100 40GB GPUs, identical batch sizes, and fixed random seeds.

The original datasets (WikiANN for all five target languages) were obtained from the same sources cited in the paper. We verified data integrity via SHA-256 checksums against the original data release.
