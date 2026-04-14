+++
title = "I. The Crisis in Context"
description = "A historical and empirical account of the reproducibility crisis in computational sciences, from early warnings to systematic evidence."
weight = 1
template = "post"
tags = ["editorial", "reproducibility", "methodology"]
categories = ["sections"]
[extra]
section_number = "I"
+++

## Early Warnings

The first systematic warnings about computational irreproducibility appeared not in the literature of any single discipline but in the proceedings of software engineering conferences. As early as 2011, researchers noted that the culture of "code as supplementary material" -- unreviewed, undocumented, and often unavailable -- was creating a growing gap between what papers claimed and what could be independently verified.

These warnings were largely ignored by the broader scientific community. The prevailing view was that reproducibility was a concern for experimental sciences, where physical measurements could vary, but that computational results -- being deterministic -- were inherently reproducible provided the methods were correctly described. This assumption proved catastrophically wrong.

## The Consortium Findings

The International Reproducibility Consortium (IRC) was established in 2022 as a cross-disciplinary initiative funded by the Wellcome Trust, the National Science Foundation, and the European Research Council. Its mandate was simple: attempt to reproduce the computational results of a stratified random sample of highly cited papers.

The IRC's final report, published in September 2025, documented:

- **127 studies** attempted across four disciplines
- **48 studies (38%)** fully reproduced within tolerance
- **41 studies (32%)** partially reproduced with discrepancies
- **38 studies (30%)** could not be reproduced at all

Among the 79 studies that could not be fully reproduced, the IRC identified the following primary barriers:

<!-- Barrier breakdown SVG -->
<figure>
<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" aria-label="Bar chart showing barriers to reproducibility" style="width:100%;max-width:700px;display:block;margin:1rem auto;">
  <!-- Axes -->
  <line x1="180" y1="20" x2="180" y2="180" stroke="#1a1612" stroke-width="1"/>
  <line x1="180" y1="180" x2="680" y2="180" stroke="#1a1612" stroke-width="1"/>
  <!-- Bars -->
  <rect x="182" y="28" width="305" height="22" fill="#8b1a1a" opacity="0.85"/>
  <rect x="182" y="62" width="270" height="22" fill="#8b1a1a" opacity="0.7"/>
  <rect x="182" y="96" width="240" height="22" fill="#8b1a1a" opacity="0.6"/>
  <rect x="182" y="130" width="195" height="22" fill="#8b1a1a" opacity="0.5"/>
  <rect x="182" y="164" width="110" height="22" fill="#8b1a1a" opacity="0.4"/>
  <!-- Labels -->
  <text x="175" y="44" text-anchor="end" font-family="'Cormorant','EB Garamond',serif" font-size="11" fill="#1a1612">Incomplete methods</text>
  <text x="175" y="78" text-anchor="end" font-family="'Cormorant','EB Garamond',serif" font-size="11" fill="#1a1612">Unavailable code</text>
  <text x="175" y="112" text-anchor="end" font-family="'Cormorant','EB Garamond',serif" font-size="11" fill="#1a1612">Missing raw data</text>
  <text x="175" y="146" text-anchor="end" font-family="'Cormorant','EB Garamond',serif" font-size="11" fill="#1a1612">Undocumented deps</text>
  <text x="175" y="180" text-anchor="end" font-family="'Cormorant','EB Garamond',serif" font-size="11" fill="#1a1612">Hardware-specific</text>
  <!-- Values -->
  <text x="492" y="44" font-family="'Bodoni Moda',serif" font-size="11" font-weight="700" fill="#faf8f2">61%</text>
  <text x="457" y="78" font-family="'Bodoni Moda',serif" font-size="11" font-weight="700" fill="#faf8f2">54%</text>
  <text x="427" y="112" font-family="'Bodoni Moda',serif" font-size="11" font-weight="700" fill="#faf8f2">48%</text>
  <text x="382" y="146" font-family="'Bodoni Moda',serif" font-size="11" font-weight="700" fill="#faf8f2">39%</text>
  <text x="297" y="180" font-family="'Bodoni Moda',serif" font-size="11" font-weight="700" fill="#faf8f2">22%</text>
</svg>
<figcaption style="text-align:center;font-size:0.82rem;color:#6a6258;font-style:italic;">Fig. 1. Primary barriers to reproduction identified across 79 irreproducible studies (IRC, 2025). Categories are not mutually exclusive.</figcaption>
</figure>

## Disciplinary Variation

The crisis does not affect all fields equally. Climate modelling and computational fluid dynamics, where long-standing community standards require model intercomparison, showed the highest reproducibility rates (52% and 49% respectively). Computational biology and machine learning, where rapid publication cycles and complex software stacks are the norm, fared worst (28% and 31% respectively).

This variation suggests that reproducibility is not simply a matter of individual diligence but of community infrastructure. Fields that have invested in shared benchmarks, standard datasets, and interoperability frameworks produce more reproducible work -- not because their researchers are more careful, but because the systems in which they operate make reproducibility the path of least resistance.
