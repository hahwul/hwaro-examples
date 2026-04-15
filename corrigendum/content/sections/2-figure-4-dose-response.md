+++
title = "2. Figure 4: Dose-Response Curve"
description = "Correction to the BZ-07 dose-response curve fit due to an incorrect Hill coefficient constraint."
weight = 2
template = "post"
tags = ["correction", "dose-response", "figure"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## Source of error

The dose-response curve for compound BZ-07 in Figure 4 was fitted using a four-parameter logistic model with the Hill coefficient constrained to 1.0 (standard Hill equation). However, the experimental data for BZ-07 exhibited cooperative binding behaviour, and the unconstrained fit yields a Hill coefficient of 1.34 +/- 0.08. The constrained fit shifted the apparent IC50 position.

## Correction

<div class="correction-block">
<p class="correction-label">Figure 4 -- BZ-07 Curve Parameters</p>
<p>The BZ-07 dose-response curve in Figure 4 should be replaced with the unconstrained four-parameter logistic fit. The corrected parameters are:</p>
<div class="correction-arrow">
<div class="correction-original">
<span class="strike-text">IC50 = 124 nM (nH = 1.0, fixed)</span>
</div>
<svg class="correction-arrow-icon" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
<line x1="2" y1="10" x2="34" y2="10" stroke="#6a665e" stroke-width="1.5"/>
<polygon points="31,6 38,10 31,14" fill="#6a665e"/>
</svg>
<div class="correction-corrected">
<span class="insert-text">IC50 = 108 nM (nH = 1.34 +/- 0.08)</span>
</div>
</div>
</div>

<div class="figure" role="img" aria-label="Correction diagram showing the original constrained curve fit versus the corrected unconstrained fit for BZ-07 dose-response data">
<svg viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg">
<rect width="780" height="220" fill="#fdfcf8"/>
<text x="390" y="20" text-anchor="middle" font-family="Crimson Pro, serif" font-size="10" fill="#6a665e" font-weight="600" letter-spacing="0.1em">FIGURE 4 (CORRECTED): BZ-07 DOSE-RESPONSE CURVE</text>
<!-- Axes -->
<line x1="80" y1="35" x2="80" y2="185" stroke="#1a1814" stroke-width="1"/>
<line x1="80" y1="185" x2="720" y2="185" stroke="#1a1814" stroke-width="1"/>
<!-- Y-axis -->
<text x="70" y="42" text-anchor="end" font-family="Crimson Pro, serif" font-size="8" fill="#6a665e">100%</text>
<text x="70" y="112" text-anchor="end" font-family="Crimson Pro, serif" font-size="8" fill="#6a665e">50%</text>
<text x="70" y="189" text-anchor="end" font-family="Crimson Pro, serif" font-size="8" fill="#6a665e">0%</text>
<text x="30" y="115" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#6a665e" transform="rotate(-90,30,115)">% Specific Binding</text>
<!-- X-axis -->
<text x="160" y="200" text-anchor="middle" font-family="Crimson Pro, serif" font-size="8" fill="#6a665e">0.1</text>
<text x="320" y="200" text-anchor="middle" font-family="Crimson Pro, serif" font-size="8" fill="#6a665e">1</text>
<text x="480" y="200" text-anchor="middle" font-family="Crimson Pro, serif" font-size="8" fill="#6a665e">10</text>
<text x="640" y="200" text-anchor="middle" font-family="Crimson Pro, serif" font-size="8" fill="#6a665e">100</text>
<text x="400" y="215" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#6a665e">[BZ-07] (nM)</text>
<!-- Grid -->
<line x1="80" y1="110" x2="720" y2="110" stroke="#ebe8e0" stroke-width="0.5"/>
<line x1="160" y1="35" x2="160" y2="185" stroke="#ebe8e0" stroke-width="0.5"/>
<line x1="320" y1="35" x2="320" y2="185" stroke="#ebe8e0" stroke-width="0.5"/>
<line x1="480" y1="35" x2="480" y2="185" stroke="#ebe8e0" stroke-width="0.5"/>
<line x1="640" y1="35" x2="640" y2="185" stroke="#ebe8e0" stroke-width="0.5"/>
<!-- Original fit (struck through, dashed red) -->
<path d="M100,42 Q280,44 400,60 Q480,90 540,130 Q600,160 700,178" fill="none" stroke="#8a2222" stroke-width="1.5" stroke-dasharray="6,4"/>
<!-- Corrected fit (solid green) -->
<path d="M100,40 Q260,42 380,52 Q460,85 520,135 Q580,165 700,180" fill="none" stroke="#1a6a2a" stroke-width="2"/>
<!-- Data points -->
<circle cx="160" cy="41" r="3" fill="none" stroke="#1a1814" stroke-width="1.5"/>
<circle cx="240" cy="43" r="3" fill="none" stroke="#1a1814" stroke-width="1.5"/>
<circle cx="320" cy="48" r="3" fill="none" stroke="#1a1814" stroke-width="1.5"/>
<circle cx="400" cy="62" r="3" fill="none" stroke="#1a1814" stroke-width="1.5"/>
<circle cx="440" cy="78" r="3" fill="none" stroke="#1a1814" stroke-width="1.5"/>
<circle cx="480" cy="98" r="3" fill="none" stroke="#1a1814" stroke-width="1.5"/>
<circle cx="520" cy="132" r="3" fill="none" stroke="#1a1814" stroke-width="1.5"/>
<circle cx="560" cy="152" r="3" fill="none" stroke="#1a1814" stroke-width="1.5"/>
<circle cx="640" cy="172" r="3" fill="none" stroke="#1a1814" stroke-width="1.5"/>
<!-- IC50 annotations -->
<line x1="510" y1="110" x2="510" y2="185" stroke="#8a2222" stroke-width="0.75" stroke-dasharray="3,3"/>
<text x="510" y="195" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7" fill="#8a2222">124 nM (original)</text>
<line x1="490" y1="110" x2="490" y2="185" stroke="#1a6a2a" stroke-width="0.75" stroke-dasharray="3,3"/>
<text x="454" y="195" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="7" fill="#1a6a2a">108 nM (corrected)</text>
<!-- Legend -->
<line x1="100" y1="212" x2="130" y2="212" stroke="#8a2222" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="135" y="215" font-family="Crimson Pro, serif" font-size="8" fill="#3a3630">Original fit (nH=1.0, constrained)</text>
<line x1="380" y1="212" x2="410" y2="212" stroke="#1a6a2a" stroke-width="2"/>
<text x="415" y="215" font-family="Crimson Pro, serif" font-size="8" fill="#3a3630">Corrected fit (nH=1.34, unconstrained)</text>
</svg>
<p class="figure-caption"><strong>Figure 4 (corrected).</strong> BZ-07 dose-response curve showing both the original constrained fit (dashed red, nH=1.0) and the corrected unconstrained fit (solid green, nH=1.34). The corrected IC50 shifts from 124 nM to 108 nM.</p>
</div>

## Impact assessment

The corrected IC50 for BZ-07 (108 nM vs. 124 nM) does not alter the compound's ranking within the series, nor does it affect the structure-activity relationship conclusions drawn in Section 4 of the original paper. The steeper Hill slope (nH=1.34) may indicate positive cooperativity at D2 receptors, which is noted but not further discussed in this corrigendum.
