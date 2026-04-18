+++
title = "III. The New Standards"
description = "Detailed description of the reproducibility requirements that will take effect with Volume 60."
weight = 3
template = "post"
tags = ["editorial", "policy", "standards"]
categories = ["sections"]
[extra]
section_number = "III"
+++

## Five Pillars of Reproducibility

The new requirements are organised around five pillars, each addressing a distinct component of the computational research workflow. Together, they establish a minimum standard for what we believe a trustworthy computational paper should provide.

<!-- Five pillars diagram -->
<figure>
<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg" aria-label="Five pillars of reproducibility" style="width:100%;max-width:700px;display:block;margin:1.5rem auto;">
  <!-- Base line -->
  <line x1="30" y1="160" x2="670" y2="160" stroke="#1a1612" stroke-width="2"/>
  <text x="350" y="178" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="10" fill="#6a6258" letter-spacing="2">REPRODUCIBILITY FOUNDATION</text>
  <!-- Pillar 1 -->
  <rect x="42" y="40" width="108" height="120" fill="none" stroke="#1a1612" stroke-width="1"/>
  <line x1="42" y1="65" x2="150" y2="65" stroke="#1a1612" stroke-width="0.5"/>
  <text x="96" y="56" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="10" font-weight="700" fill="#8b1a1a">CODE</text>
  <text x="96" y="82" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Public repo</text>
  <text x="96" y="96" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">DOI assigned</text>
  <text x="96" y="110" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Test suite</text>
  <text x="96" y="124" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">README</text>
  <text x="96" y="138" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Licence</text>
  <!-- Pillar 2 -->
  <rect x="168" y="40" width="108" height="120" fill="none" stroke="#1a1612" stroke-width="1"/>
  <line x1="168" y1="65" x2="276" y2="65" stroke="#1a1612" stroke-width="0.5"/>
  <text x="222" y="56" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="10" font-weight="700" fill="#8b1a1a">DATA</text>
  <text x="222" y="82" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Certified archive</text>
  <text x="222" y="96" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Provenance log</text>
  <text x="222" y="110" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Format docs</text>
  <text x="222" y="124" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Access policy</text>
  <text x="222" y="138" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Checksums</text>
  <!-- Pillar 3 -->
  <rect x="294" y="40" width="108" height="120" fill="none" stroke="#1a1612" stroke-width="1"/>
  <line x1="294" y1="65" x2="402" y2="65" stroke="#1a1612" stroke-width="0.5"/>
  <text x="348" y="56" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="10" font-weight="700" fill="#8b1a1a">ENVIRONMENT</text>
  <text x="348" y="82" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Container image</text>
  <text x="348" y="96" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Lockfile</text>
  <text x="348" y="110" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">OS + compiler</text>
  <text x="348" y="124" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Hardware spec</text>
  <text x="348" y="138" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Build script</text>
  <!-- Pillar 4 -->
  <rect x="420" y="40" width="108" height="120" fill="none" stroke="#1a1612" stroke-width="1"/>
  <line x1="420" y1="65" x2="528" y2="65" stroke="#1a1612" stroke-width="0.5"/>
  <text x="474" y="56" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="10" font-weight="700" fill="#8b1a1a">CHECKLIST</text>
  <text x="474" y="82" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">22 items</text>
  <text x="474" y="96" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">5 categories</text>
  <text x="474" y="110" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Self-assessed</text>
  <text x="474" y="124" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Editor-verified</text>
  <text x="474" y="138" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Published</text>
  <!-- Pillar 5 -->
  <rect x="546" y="40" width="108" height="120" fill="none" stroke="#1a1612" stroke-width="1"/>
  <line x1="546" y1="65" x2="654" y2="65" stroke="#1a1612" stroke-width="0.5"/>
  <text x="600" y="56" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="10" font-weight="700" fill="#8b1a1a">METHODS</text>
  <text x="600" y="82" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Step-by-step</text>
  <text x="600" y="96" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Parameters</text>
  <text x="600" y="110" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Tolerances</text>
  <text x="600" y="124" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Expected output</text>
  <text x="600" y="138" text-anchor="middle" font-family="'Cormorant',serif" font-size="9" fill="#3a3428">Runtime est.</text>
  <!-- Top cap -->
  <line x1="30" y1="35" x2="670" y2="35" stroke="#1a1612" stroke-width="1"/>
  <text x="350" y="28" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="10" fill="#1a1612" letter-spacing="2">THE FIVE PILLARS</text>
  <line x1="30" y1="18" x2="670" y2="18" stroke="#1a1612" stroke-width="0.5"/>
</svg>
<figcaption style="text-align:center;font-size:0.82rem;color:#6a6258;font-style:italic;">Fig. 3. The five pillars of the journal's new reproducibility framework.</figcaption>
</figure>

## Pillar 1: Code Deposit

All source code must be deposited prior to acceptance. We do not accept GitHub links alone, as repositories can be modified or deleted after publication. A DOI-bearing snapshot in Zenodo, Figshare, or an equivalent service is required.

Code quality is not assessed -- we are not asking for production-grade software. We are asking for code that runs, is documented, and can be examined by others.

## Pillar 2: Data Archive

Raw data must be deposited in a domain-certified repository. For fields with established archives (GenBank, CMIP, Materials Cloud), we expect authors to use those resources. For others, Zenodo or institutional repositories with long-term preservation commitments are acceptable.

## Pillar 3: Environment Specification

The most common silent failure mode in computational reproduction is environmental: the same code produces different results on different systems due to library version changes, compiler differences, or floating-point behaviour. Container images eliminate this problem entirely and are our preferred approach.

## Pillar 4: Reproducibility Checklist

The 22-item checklist serves two purposes. First, it forces authors to explicitly confirm that each component of their computational workflow has been documented. Second, it provides reviewers and readers with a structured summary of what is available and how to access it.

## Pillar 5: Methods Appendix

The methods section of a paper describes the scientific approach. The methods appendix describes the computational execution in sufficient detail that a competent practitioner could reproduce the work without reference to the code. This includes parameter values, convergence criteria, random seeds, and expected wall-clock times.
