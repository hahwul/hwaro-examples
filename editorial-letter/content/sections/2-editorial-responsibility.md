+++
title = "II. Our Responsibility as Gatekeepers"
description = "The role of journals and editors in enabling -- and now confronting -- the reproducibility crisis."
weight = 2
template = "post"
tags = ["editorial", "peer-review", "governance"]
categories = ["sections"]
[extra]
section_number = "II"
+++

## The Journal's Complicity

It would be dishonest to frame the reproducibility crisis as a problem created solely by authors. Journals have been complicit. For decades, we have accepted manuscripts with vague methodological descriptions, treated code as an optional afterthought, and placed no meaningful requirements on data availability. We have prioritised novelty over rigour and speed over completeness.

This journal is no exception. A review of our own publication records from the past five years reveals that only 23 percent of research articles deposited code in a public repository, and fewer than 15 percent provided raw data. We published the remaining 77 percent without objection.

## Why Peer Review Alone Is Insufficient

Traditional peer review was designed to evaluate the intellectual merit of a contribution, not to verify its computational correctness. Reviewers are asked to assess whether the methodology is sound, whether the conclusions follow from the evidence, and whether the work advances the field. They are not asked -- and are rarely equipped -- to download code, install dependencies, and re-run analyses.

<!-- Peer review gap diagram -->
<figure>
<svg viewBox="0 0 700 140" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram showing the peer review verification gap" style="width:100%;max-width:700px;display:block;margin:1.5rem auto;">
  <!-- What reviewers assess -->
  <rect x="20" y="10" width="200" height="120" rx="4" fill="none" stroke="#1a1612" stroke-width="1.5"/>
  <text x="120" y="32" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="11" font-weight="700" fill="#1a1612">WHAT REVIEWERS ASSESS</text>
  <line x1="40" y1="40" x2="200" y2="40" stroke="#c8c0b0" stroke-width="0.5"/>
  <text x="40" y="58" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Scientific novelty</text>
  <text x="40" y="74" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Methodological logic</text>
  <text x="40" y="90" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Statistical analysis</text>
  <text x="40" y="106" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Writing quality</text>
  <text x="40" y="122" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Literature engagement</text>
  <!-- Gap arrow -->
  <line x1="240" y1="70" x2="330" y2="70" stroke="#8b1a1a" stroke-width="1.5" stroke-dasharray="6,3"/>
  <polygon points="330,65 340,70 330,75" fill="#8b1a1a"/>
  <text x="290" y="60" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="9" fill="#8b1a1a" letter-spacing="1">GAP</text>
  <!-- What reproducibility requires -->
  <rect x="350" y="10" width="230" height="120" rx="4" fill="none" stroke="#8b1a1a" stroke-width="1.5"/>
  <text x="465" y="32" text-anchor="middle" font-family="'Bodoni Moda',serif" font-size="11" font-weight="700" fill="#8b1a1a">WHAT REPRODUCTION NEEDS</text>
  <line x1="370" y1="40" x2="560" y2="40" stroke="#c8c0b0" stroke-width="0.5"/>
  <text x="370" y="58" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Executable source code</text>
  <text x="370" y="74" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Raw and processed data</text>
  <text x="370" y="90" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Environment specification</text>
  <text x="370" y="106" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Dependency documentation</text>
  <text x="370" y="122" font-family="'Cormorant',serif" font-size="11" fill="#3a3428">Automated test suites</text>
</svg>
<figcaption style="text-align:center;font-size:0.82rem;color:#6a6258;font-style:italic;">Fig. 2. The verification gap between traditional peer review and computational reproducibility requirements.</figcaption>
</figure>

## The Cost of Inaction

The cost of a non-reproducible literature is not merely academic. Computational models inform drug design, climate policy, infrastructure engineering, and financial regulation. When these models cannot be independently verified, the decisions they inform rest on unexamined foundations.

A 2025 report by the U.S. National Academies estimated that irreproducible computational research costs the global research enterprise between $12 billion and $28 billion annually in wasted effort -- studies that build on unreliable foundations, failed replication attempts, and redundant work undertaken because existing results could not be verified.

For a journal that aspires to influence the practice of computational science, continuing to publish unverifiable claims is not neutrality; it is negligence.
