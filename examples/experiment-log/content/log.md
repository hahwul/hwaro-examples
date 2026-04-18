+++
title = "Change Log"
description = "Documented parameter changes and decision rationale between sequential experiments EXP-01, EXP-02, and EXP-03."
tags = ["paper", "dark", "experimental", "changelog"]
categories = ["pages"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">Change Log</p>
  <h1 class="paper-section-title">Parameter Change Log</h1>
  <p class="paper-lede">A complete record of every parameter modification between sequential experiments, with documented rationale for each decision.</p>
</header>

## Overview

This change log tracks the two decision nodes in the experiment chain. Each entry documents what was observed, what was changed, and why. The log is intended as an auditable record that enables other researchers to understand the logic of the sequential approach and to reproduce the decision process.

<figure class="figure">
  <svg viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline showing experiment sequence with decision nodes">
    <defs>
      <marker id="logArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#6a8a9c"/>
      </marker>
    </defs>
    <!-- Timeline line -->
    <line x1="60" y1="50" x2="660" y2="50" stroke="#2a3342" stroke-width="1"/>
    <!-- EXP-01 -->
    <circle cx="100" cy="50" r="20" fill="none" stroke="#c9a84b" stroke-width="2"/>
    <text x="100" y="54" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#c9a84b">01</text>
    <text x="100" y="90" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#8b95a5">Baseline</text>
    <!-- Arrow to D1 -->
    <line x1="120" y1="50" x2="230" y2="50" stroke="#6a8a9c" stroke-width="1.5" marker-end="url(#logArrow)"/>
    <!-- D1 -->
    <polygon points="260,50 280,30 300,50 280,70" fill="none" stroke="#6a8a9c" stroke-width="1.5"/>
    <text x="280" y="54" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="8" fill="#6a8a9c">D1</text>
    <text x="280" y="98" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#6a8a9c">+Cu loading</text>
    <!-- Arrow to EXP-02 -->
    <line x1="300" y1="50" x2="350" y2="50" stroke="#6a8a9c" stroke-width="1.5" marker-end="url(#logArrow)"/>
    <!-- EXP-02 -->
    <circle cx="380" cy="50" r="20" fill="none" stroke="#c9a84b" stroke-width="2"/>
    <text x="380" y="54" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#c9a84b">02</text>
    <text x="380" y="90" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#8b95a5">Adjusted</text>
    <!-- Arrow to D2 -->
    <line x1="400" y1="50" x2="510" y2="50" stroke="#6a8a9c" stroke-width="1.5" marker-end="url(#logArrow)"/>
    <!-- D2 -->
    <polygon points="540,50 560,30 580,50 560,70" fill="none" stroke="#6a8a9c" stroke-width="1.5"/>
    <text x="560" y="54" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="8" fill="#6a8a9c">D2</text>
    <text x="560" y="98" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#6a8a9c">-Temperature</text>
    <!-- Arrow to EXP-03 -->
    <line x1="580" y1="50" x2="620" y2="50" stroke="#5cba7d" stroke-width="1.5" marker-end="url(#logArrow)"/>
    <!-- EXP-03 -->
    <circle cx="650" cy="50" r="20" fill="none" stroke="#5cba7d" stroke-width="2"/>
    <text x="650" y="54" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#5cba7d">03</text>
    <text x="650" y="90" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#5cba7d">Optimum</text>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure L1.</span> Timeline of the sequential experiment chain with two decision nodes (D1, D2). Each diamond represents a parameter change informed by the preceding result.</figcaption>
</figure>

---

## Decision Node 1: EXP-01 to EXP-02

<div class="decision-node">
  <p><strong>Observation:</strong> <span class="exp-id">EXP-01</span> (Pd:Cu 3:1, 120 C) achieved 72.4 pct selectivity toward 1-butene. While total butadiene conversion was acceptable (80.3 pct), over-hydrogenation to n-butane accounted for 22.1 pct of products. The Pd-rich surface favoured non-selective hydrogenation pathways.</p>
  <p><strong>Hypothesis:</strong> Increasing Cu content will modify the Pd electronic environment via charge transfer, weakening the adsorption of 1-butene on the surface and thus suppressing secondary hydrogenation to n-butane.</p>
  <p><strong>Literature basis:</strong> Studt et al. (2008) demonstrated that Cu-Pd alloy surfaces exhibit reduced d-band centre energy relative to pure Pd, weakening alkene binding. Ramos et al. (2020) reported selectivity improvements of 10-15 pct when moving from Pd:Cu 3:1 to 2:1 in propylene hydrogenation.</p>
</div>

<div class="param-change">
  <strong>Pd:Cu molar ratio:</strong> <span class="old-val">3:1</span> <span class="arrow">--&gt;</span> <span class="new-val">2:1</span><br>
  <strong>Temperature:</strong> 120 C (unchanged)<br>
  <strong>All other conditions:</strong> unchanged (WHSV 3.6 h-1, 1.0 vol pct C4H6, 20 vol pct H2)
</div>

### Outcome

<span class="exp-id">EXP-02</span> selectivity: 84.6 pct (+12.2 percentage points). The hypothesis was confirmed: increased Cu loading significantly improved selectivity. However, selectivity remained below the 90 pct threshold target, prompting a second optimisation step.

---

## Decision Node 2: EXP-02 to EXP-03

<div class="decision-node">
  <p><strong>Observation:</strong> <span class="exp-id">EXP-02</span> (Pd:Cu 2:1, 120 C) achieved 84.6 pct selectivity, a substantial improvement over EXP-01. However, temperature-programmed desorption (TPD) of 1-butene from the EXP-02 catalyst showed that the desorption peak shifted to 85 C, suggesting that lowering the reaction temperature below 100 C might further reduce secondary hydrogenation.</p>
  <p><strong>Hypothesis:</strong> Reducing the reaction temperature to 95 C will slow the kinetics of secondary hydrogenation (higher activation energy) more than primary hydrogenation, improving selectivity while maintaining acceptable conversion.</p>
  <p><strong>Literature basis:</strong> Molnar et al. (2001) showed that selective hydrogenation of dienes over Pd alloy catalysts exhibits a selectivity-temperature inversion below 100 C, where lower temperature preferentially suppresses the over-hydrogenation pathway.</p>
</div>

<div class="param-change">
  <strong>Temperature:</strong> <span class="old-val">120 C</span> <span class="arrow">--&gt;</span> <span class="new-val">95 C</span><br>
  <strong>Pd:Cu molar ratio:</strong> 2:1 (unchanged)<br>
  <strong>All other conditions:</strong> unchanged (WHSV 3.6 h-1, 1.0 vol pct C4H6, 20 vol pct H2)
</div>

### Outcome

<span class="exp-id exp-success">EXP-03</span> selectivity: 91.2 pct (+6.6 percentage points over EXP-02). The selectivity target of 90 pct was exceeded. Total conversion was 78.3 pct (slightly lower than EXP-02 at 75.5 pct raw conversion, but yield improved to 71.4 pct due to higher selectivity). No further parameter changes were warranted.

---

## Cumulative Change Summary

<table class="paper-table">
  <caption><span class="tab-num">Table L1.</span> Complete parameter evolution across the experiment chain.</caption>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>EXP-01</th>
      <th>D1 Change</th>
      <th>EXP-02</th>
      <th>D2 Change</th>
      <th>EXP-03</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pd:Cu ratio</td>
      <td class="num">3:1</td>
      <td>Increased Cu</td>
      <td class="num">2:1</td>
      <td>--</td>
      <td class="num">2:1</td>
    </tr>
    <tr>
      <td>Temperature (C)</td>
      <td class="num">120</td>
      <td>--</td>
      <td class="num">120</td>
      <td>Reduced</td>
      <td class="num">95</td>
    </tr>
    <tr>
      <td>WHSV (h-1)</td>
      <td class="num">3.6</td>
      <td>--</td>
      <td class="num">3.6</td>
      <td>--</td>
      <td class="num">3.6</td>
    </tr>
    <tr>
      <td>Feed composition</td>
      <td class="num">1.0/20/bal</td>
      <td>--</td>
      <td class="num">1.0/20/bal</td>
      <td>--</td>
      <td class="num">1.0/20/bal</td>
    </tr>
    <tr>
      <td>Selectivity (pct)</td>
      <td class="num">72.4</td>
      <td></td>
      <td class="num">84.6</td>
      <td></td>
      <td class="num">91.2</td>
    </tr>
    <tr>
      <td>Yield (pct)</td>
      <td class="num">58.1</td>
      <td></td>
      <td class="num">63.8</td>
      <td></td>
      <td class="num">71.4</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">Feed composition given as vol pct C4H6 / vol pct H2 / balance N2. Dashes indicate no change at that decision node.</td></tr>
  </tfoot>
</table>
