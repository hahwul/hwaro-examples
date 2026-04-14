+++
title = "Editorial"
description = "A journal editorial letter addressing the reproducibility crisis in computational sciences, calling for mandatory open-data policies and transparent peer review."
tags = ["paper", "light", "editorial", "authority", "statement"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Editorial &middot; Vol. 59, No. 4 &middot; April 2026</p>
  <h1 class="paper-title">The Reproducibility Imperative: A Call for Structural Reform in Computational Sciences</h1>
  <p class="paper-subtitle">Why we can no longer afford to treat reproducibility as optional -- and what this journal intends to do about it.</p>
  <p class="paper-author-line">Eleanor Whitfield, Editor-in-Chief</p>
</header>

<!-- Column rule decoration -->
<svg viewBox="0 0 740 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:100%;height:24px;display:block;margin:0 auto 1.5rem;">
  <line x1="0" y1="8" x2="320" y2="8" stroke="#c8c0b0" stroke-width="0.5"/>
  <circle cx="340" cy="8" r="2" fill="#8b1a1a"/>
  <circle cx="360" cy="8" r="1.2" fill="#c8c0b0"/>
  <circle cx="380" cy="8" r="2" fill="#8b1a1a"/>
  <line x1="400" y1="8" x2="740" y2="8" stroke="#c8c0b0" stroke-width="0.5"/>
</svg>

<div class="editorial-columns">
<p class="drop-cap">In the spring of 2024, a consortium of researchers from four continents attempted to reproduce the results of 127 highly cited computational studies published between 2018 and 2023. The outcome was sobering: fewer than 38 percent of the studies could be reproduced using the methods described in the original manuscripts. Of the remaining 62 percent, roughly half failed due to incomplete methodological descriptions, while the other half could not be verified because the underlying code or data had never been made available.</p>

<p>These findings, published last autumn by the International Reproducibility Consortium, did not surprise those of us who have watched this crisis unfold over the past decade. But they did provide the kind of systematic evidence that makes inaction unconscionable. The credibility of computational science rests on the assumption that our methods are transparent, our data are accessible, and our results can withstand independent scrutiny. When that assumption fails, the entire enterprise is diminished.</p>

<p>This editorial sets out our position, which is not merely an opinion but a declaration of editorial policy. Beginning with the next volume, this journal will require all submissions to include complete, executable code repositories, raw data deposits in certified archives, and structured reproducibility checklists verified by independent reviewers. These requirements are not optional and will not be waived.</p>

<p>We recognise that these demands impose real costs on authors. Preparing code for public release, anonymising sensitive data, and documenting computational environments all require time and resources that the current incentive structure does not adequately reward. But the alternative -- a literature that cannot be trusted -- is far more costly to science and to society.</p>

<p>The sections that follow elaborate on the scope of the crisis, our responsibilities as gatekeepers, the new standards we intend to enforce, and the support structures we are building to help authors meet these expectations. We also include a call to action directed at funding agencies, institutional leaders, and fellow editors.</p>

<p>This is not a conversation we can continue to defer. The integrity of the record demands that we act now.</p>
</div>

<div class="pull-quote">
"A literature that cannot be reproduced is not a literature at all -- it is a collection of claims."
</div>

## The Scale of the Problem

The reproducibility crisis is not confined to a single discipline or methodology. A 2025 meta-analysis spanning computational biology, climate modelling, materials science, and computational fluid dynamics found that irreproducibility rates varied from 42 percent in well-funded collaborative fields to 71 percent in smaller sub-disciplines where data-sharing norms had not yet taken hold.

The causes are structural, not merely individual. Among the most common barriers to reproduction identified by the International Reproducibility Consortium:

- **Incomplete method descriptions** in 61% of irreproducible studies
- **Unavailable source code** in 54% of cases
- **Missing or restricted raw data** in 48% of cases
- **Undocumented software dependencies** in 39% of cases
- **Hardware-specific optimisations** not disclosed in 22% of cases

These are not occasional oversights; they are systemic failures of scientific communication. And they are failures that journals -- as the primary gatekeepers of the published record -- have a particular responsibility to address.

<!-- Editorial column rule SVG divider -->
<svg viewBox="0 0 740 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:100%;height:30px;display:block;margin:2rem auto;">
  <line x1="0" y1="12" x2="250" y2="12" stroke="#c8c0b0" stroke-width="0.5"/>
  <line x1="260" y1="6" x2="260" y2="18" stroke="#1a1612" stroke-width="0.5"/>
  <line x1="270" y1="4" x2="270" y2="20" stroke="#1a1612" stroke-width="1"/>
  <line x1="280" y1="6" x2="280" y2="18" stroke="#1a1612" stroke-width="0.5"/>
  <line x1="290" y1="12" x2="740" y2="12" stroke="#c8c0b0" stroke-width="0.5"/>
</svg>

## Our New Requirements

Effective with Volume 60 (January 2027), the following will be mandatory for all research articles:

| Requirement | Standard | Verification |
|---|---|---|
| Code deposit | Zenodo or institutional repo with DOI | Automated build check |
| Data archive | Domain-certified repository | Reviewer spot-check |
| Environment spec | Container image or lockfile | Independent rebuild |
| Reproducibility checklist | Structured 22-item form | Editorial verification |
| Methods appendix | Step-by-step computational protocol | Peer review |

We are committed to supporting authors through this transition with dedicated reproducibility editors, template repositories, and a grace period during which feedback will be formative rather than exclusionary.

<!-- Editor signature with SVG facsimile -->
<div class="editor-signature">
  <svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg" aria-label="Editor signature" style="width:280px;height:80px;display:block;margin-left:auto;">
    <!-- Signature facsimile: stylised cursive strokes -->
    <path d="M20,55 C25,20 35,18 40,35 C45,52 50,58 55,40 C60,22 65,20 70,38" fill="none" stroke="#1a1612" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M75,42 C80,30 90,25 100,32 C105,35 108,42 105,48" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M108,28 L108,52" fill="none" stroke="#1a1612" stroke-width="1" stroke-linecap="round"/>
    <path d="M115,35 C120,25 135,22 145,30 C150,33 148,42 140,45 C132,48 120,44 118,38" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M150,30 C155,25 160,28 162,35 L165,50" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M170,32 C172,28 178,26 185,30 C190,33 192,40 188,45 C184,50 175,48 172,42" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M195,28 C198,22 205,20 210,25 C215,30 218,40 220,50" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M225,38 C228,32 235,30 240,34 C245,38 248,45 250,50" fill="none" stroke="#1a1612" stroke-width="1" stroke-linecap="round"/>
    <!-- Underline flourish -->
    <path d="M20,62 C80,60 180,58 260,62" fill="none" stroke="#1a1612" stroke-width="0.5" stroke-linecap="round"/>
  </svg>
  <p class="sig-name">Prof. Eleanor Whitfield, FRS</p>
  <p class="sig-title">Editor-in-Chief, Journal of Computational Sciences</p>
  <p class="sig-title">April 2026</p>
</div>
