+++
title = "C-5. Unit Label Correction"
description = "Typographical correction of thermal conductivity unit from W/cm-K to W/m-K in Section 2.3."
weight = 5
template = "post"
tags = ["paper", "light", "errata", "correction", "transparent"]
categories = ["sections"]

[extra]
section_number = "C-5"
+++

<span class="severity-badge typo">TYPO</span>

## Error Description

A single instance in Section 2.3, paragraph 4, incorrectly displays the thermal conductivity unit as "W/cm-K" instead of "W/m-K". All numerical values in the paper use W/m-K consistently; this is a typographical error in the unit label only.

## Diff Display

<div class="diff-block">
  <div class="diff-header">Section 2.3, Paragraph 4</div>
  <div class="diff-line context"><span class="diff-marker"> </span>The expected lattice thermal conductivity for nanostructured Bi2Te3</div>
  <div class="diff-line removed"><span class="diff-marker">-</span>falls in the range 0.3-1.5 W/cm-K depending on grain size and</div>
  <div class="diff-line added"><span class="diff-marker">+</span>falls in the range 0.3-1.5 W/m-K depending on grain size and</div>
  <div class="diff-line context"><span class="diff-marker"> </span>crystallographic texture (Poudel et al., 2008).</div>
</div>

## Impact Assessment

No scientific impact. The numerical values are consistent with W/m-K throughout the paper. This was a transcription error in one unit label.
