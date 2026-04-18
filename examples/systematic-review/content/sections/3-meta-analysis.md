+++
title = "3. Meta-Analysis"
description = "Pooled effect sizes, forest plot, heterogeneity assessment, and sensitivity analyses for exercise interventions on adolescent depression."
weight = 3
template = "post"
tags = ["paper", "light", "systematic", "evidence", "methodology"]
categories = ["sections"]

[extra]
section_number = "3"
+++

## Overview

We conducted random-effects meta-analysis using restricted maximum likelihood (REML) estimation to pool standardized mean differences (SMDs) across studies. The primary outcome was change in depressive symptom severity measured by validated instruments. All analyses were performed in R (version 4.3.2) using the `metafor` package.

## Forest Plot: Overall Effect

<figure class="figure figure-wide">
  <svg viewBox="0 0 800 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Forest plot showing individual study effects and pooled estimate for exercise interventions on adolescent depression">
    <rect x="0" y="0" width="800" height="620" fill="#fafaf7"/>
    <text x="400" y="22" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="12" fill="#1a2030" letter-spacing="0.5">Forest Plot: Exercise vs. Control on Depressive Symptoms (SMD)</text>
    <!-- Column headers -->
    <text x="140" y="46" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a5a8a">Study</text>
    <text x="310" y="46" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a5a8a">N</text>
    <text x="530" y="46" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a5a8a">Effect (SMD, 95% CI)</text>
    <text x="720" y="46" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a5a8a">Weight</text>
    <line x1="20" y1="52" x2="780" y2="52" stroke="#1a2030" stroke-width="1"/>
    <!-- Null line at x=530 (SMD=0), scale: 530 + SMD*120 -->
    <line x1="530" y1="56" x2="530" y2="530" stroke="#1a2030" stroke-width="0.8" stroke-dasharray="4 3"/>
    <!-- Study rows: y_base = 52 + row*30 -->
    <!-- Study 1: Andersson 2022 -->
    <text x="140" y="76" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Andersson 2022</text>
    <text x="310" y="76" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">86</text>
    <line x1="458" y1="72" x2="506" y2="72" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="472" y="68" width="8" height="8" fill="#2a5a8a"/>
    <text x="720" y="76" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">4.2%</text>
    <!-- Study 2: Chen 2021 -->
    <text x="140" y="106" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Chen 2021</text>
    <text x="310" y="106" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">124</text>
    <line x1="446" y1="102" x2="500" y2="102" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="464" y="97" width="10" height="10" fill="#2a5a8a"/>
    <text x="720" y="106" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">5.1%</text>
    <!-- Study 3: Da Silva 2023 -->
    <text x="140" y="136" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Da Silva 2023</text>
    <text x="310" y="136" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">62</text>
    <line x1="476" y1="132" x2="536" y2="132" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="498" y="129" width="7" height="7" fill="#2a5a8a"/>
    <text x="720" y="136" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">3.0%</text>
    <!-- Study 4: Ekblom 2020 -->
    <text x="140" y="166" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Ekblom 2020</text>
    <text x="310" y="166" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">148</text>
    <line x1="460" y1="162" x2="502" y2="162" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="474" y="157" width="11" height="11" fill="#2a5a8a"/>
    <text x="720" y="166" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">5.6%</text>
    <!-- Study 5: Gupta 2023 -->
    <text x="140" y="196" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Gupta 2023</text>
    <text x="310" y="196" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">98</text>
    <line x1="430" y1="192" x2="490" y2="192" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="452" y="188" width="9" height="9" fill="#2a5a8a"/>
    <text x="720" y="196" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">4.4%</text>
    <!-- Study 6: Hayashi 2022 -->
    <text x="140" y="226" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Hayashi 2022</text>
    <text x="310" y="226" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">72</text>
    <line x1="454" y1="222" x2="514" y2="222" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="478" y="219" width="7" height="7" fill="#2a5a8a"/>
    <text x="720" y="226" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">3.4%</text>
    <!-- Study 7: Johansson 2024 -->
    <text x="140" y="256" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Johansson 2024</text>
    <text x="310" y="256" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">186</text>
    <line x1="452" y1="252" x2="496" y2="252" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="466" y="246" width="13" height="13" fill="#2a5a8a"/>
    <text x="720" y="256" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">6.2%</text>
    <!-- Study 8: Kim 2021 -->
    <text x="140" y="286" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Kim 2021</text>
    <text x="310" y="286" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">54</text>
    <line x1="440" y1="282" x2="530" y2="282" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="478" y="279" width="6" height="6" fill="#2a5a8a"/>
    <text x="720" y="286" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">2.6%</text>
    <!-- Study 9: Larsson 2023 -->
    <text x="140" y="316" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Larsson 2023</text>
    <text x="310" y="316" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">110</text>
    <line x1="444" y1="312" x2="498" y2="312" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="462" y="307" width="10" height="10" fill="#2a5a8a"/>
    <text x="720" y="316" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">4.8%</text>
    <!-- Study 10: Mendez 2022 -->
    <text x="140" y="346" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Mendez 2022</text>
    <text x="310" y="346" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">76</text>
    <line x1="422" y1="342" x2="494" y2="342" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="450" y="339" width="8" height="8" fill="#2a5a8a"/>
    <text x="720" y="346" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">3.5%</text>
    <!-- Study 11: Nakamura 2024 -->
    <text x="140" y="376" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Nakamura 2024</text>
    <text x="310" y="376" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">132</text>
    <line x1="456" y1="372" x2="504" y2="372" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="472" y="367" width="11" height="11" fill="#2a5a8a"/>
    <text x="720" y="376" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">5.3%</text>
    <!-- Study 12: Ramirez 2024 -->
    <text x="140" y="406" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Ramirez 2024</text>
    <text x="310" y="406" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">164</text>
    <line x1="442" y1="402" x2="490" y2="402" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="458" y="396" width="12" height="12" fill="#2a5a8a"/>
    <text x="720" y="406" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">5.8%</text>
    <!-- Study 13: Santos 2020 -->
    <text x="140" y="436" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Santos 2020</text>
    <text x="310" y="436" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">48</text>
    <line x1="470" y1="432" x2="540" y2="432" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="498" y="429" width="6" height="6" fill="#2a5a8a"/>
    <text x="720" y="436" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">2.2%</text>
    <!-- Study 14: Tanaka 2022 -->
    <text x="140" y="466" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Tanaka 2022</text>
    <text x="310" y="466" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">92</text>
    <line x1="440" y1="462" x2="500" y2="462" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="462" y="458" width="9" height="9" fill="#2a5a8a"/>
    <text x="720" y="466" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">4.2%</text>
    <!-- Study 15: Weber 2023 -->
    <text x="140" y="496" text-anchor="middle" font-family="Crimson Pro, serif" font-size="9" fill="#1a2030">Weber 2023</text>
    <text x="310" y="496" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">82</text>
    <line x1="436" y1="492" x2="504" y2="492" stroke="#2a5a8a" stroke-width="1.2"/>
    <rect x="462" y="489" width="8" height="8" fill="#2a5a8a"/>
    <text x="720" y="496" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">3.8%</text>
    <!-- Separator before pooled -->
    <line x1="20" y1="514" x2="780" y2="514" stroke="#1a2030" stroke-width="1.5"/>
    <!-- Pooled diamond -->
    <text x="140" y="540" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="10" fill="#2a6a4a">Pooled (k=31)</text>
    <text x="310" y="540" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="9" fill="#2a6a4a">2,847</text>
    <polygon points="444,536 463,528 482,536 463,544" fill="#2a6a4a" stroke="#2a6a4a" stroke-width="1"/>
    <text x="720" y="540" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="9" fill="#2a6a4a">100%</text>
    <!-- Scale labels -->
    <text x="410" y="574" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#5b6272">Favors exercise</text>
    <text x="640" y="574" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-size="8" fill="#5b6272">Favors control</text>
    <line x1="400" y1="560" x2="660" y2="560" stroke="#1a2030" stroke-width="1"/>
    <text x="400" y="556" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">-1.0</text>
    <text x="530" y="556" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">0</text>
    <text x="660" y="556" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#5b6272">+1.0</text>
    <!-- Summary stats -->
    <text x="400" y="600" text-anchor="middle" font-family="Crimson Pro, serif" font-style="italic" font-size="10" fill="#1a2030">SMD = -0.56 (95% CI: -0.72 to -0.40), p &lt; 0.001, I-squared = 68.4%, tau-squared = 0.08</text>
    <text x="400" y="614" text-anchor="middle" font-family="Crimson Pro, serif" font-style="italic" font-size="9" fill="#5b6272">Showing 15 of 31 studies included in quantitative synthesis. Square size proportional to study weight.</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 3.</span> Forest plot of individual study effects and pooled estimate for the effect of exercise interventions on adolescent depressive symptoms. Squares represent individual study SMDs (size proportional to weight); horizontal lines represent 95% CIs. The diamond represents the pooled random-effects estimate. Negative values indicate a reduction in depressive symptoms favoring the exercise group.</div>
</figure>

## Heterogeneity Assessment

Substantial heterogeneity was observed across studies (I-squared = 68.4%, tau-squared = 0.08, Cochran's Q = 94.8, df = 30, p < 0.001). The 95% prediction interval ranged from -1.12 to 0.00, indicating that while the average effect favors exercise, individual study settings may yield null effects.

### Sources of Heterogeneity

We explored potential sources of heterogeneity through pre-specified subgroup analyses:

<table class="paper-table">
  <caption><span class="tab-num">Table 4.</span> Subgroup analyses exploring sources of heterogeneity.</caption>
  <thead>
    <tr>
      <th>Moderator</th>
      <th>Subgroup</th>
      <th>k</th>
      <th>SMD (95% CI)</th>
      <th>I<sup>2</sup></th>
      <th>p interaction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Exercise type</td>
      <td>Aerobic</td>
      <td class="num">22</td>
      <td class="num">-0.64 (-0.82, -0.46)</td>
      <td class="num">62.1%</td>
      <td class="num" rowspan="3">0.08</td>
    </tr>
    <tr>
      <td>Resistance</td>
      <td class="num">6</td>
      <td class="num">-0.38 (-0.62, -0.14)</td>
      <td class="num">44.7%</td>
    </tr>
    <tr>
      <td>Mind-body</td>
      <td class="num">5</td>
      <td class="num">-0.51 (-0.78, -0.24)</td>
      <td class="num">51.2%</td>
    </tr>
    <tr>
      <td rowspan="2">Supervision</td>
      <td>Supervised</td>
      <td class="num">24</td>
      <td class="num">-0.62 (-0.79, -0.45)</td>
      <td class="num">61.8%</td>
      <td class="num" rowspan="2">0.12</td>
    </tr>
    <tr>
      <td>Unsupervised</td>
      <td class="num">7</td>
      <td class="num">-0.41 (-0.68, -0.14)</td>
      <td class="num">58.3%</td>
    </tr>
    <tr>
      <td rowspan="2">Duration</td>
      <td>8+ weeks</td>
      <td class="num">26</td>
      <td class="num">-0.61 (-0.78, -0.44)</td>
      <td class="num">65.2%</td>
      <td class="num" rowspan="2">0.04</td>
    </tr>
    <tr>
      <td>&lt;8 weeks</td>
      <td class="num">5</td>
      <td class="num">-0.32 (-0.58, -0.06)</td>
      <td class="num">42.1%</td>
    </tr>
    <tr>
      <td rowspan="2">Frequency</td>
      <td>3+ sessions/week</td>
      <td class="num">21</td>
      <td class="num">-0.60 (-0.78, -0.42)</td>
      <td class="num">66.4%</td>
      <td class="num" rowspan="2">0.22</td>
    </tr>
    <tr>
      <td>2 sessions/week</td>
      <td class="num">10</td>
      <td class="num">-0.48 (-0.72, -0.24)</td>
      <td class="num">54.8%</td>
    </tr>
    <tr>
      <td rowspan="2">Baseline severity</td>
      <td>Clinical diagnosis</td>
      <td class="num">14</td>
      <td class="num">-0.68 (-0.90, -0.46)</td>
      <td class="num">58.3%</td>
      <td class="num" rowspan="2">0.03</td>
    </tr>
    <tr>
      <td>Subclinical symptoms</td>
      <td class="num">17</td>
      <td class="num">-0.44 (-0.62, -0.26)</td>
      <td class="num">62.7%</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">k = number of studies. p interaction from meta-regression with moderator as categorical covariate. Only intervention duration and baseline severity reached statistical significance as moderators.</td></tr>
  </tfoot>
</table>

## Publication Bias

We assessed publication bias using Egger's regression test and visual inspection of a funnel plot. Egger's test indicated no significant asymmetry (intercept = -0.42, 95% CI: -1.18 to 0.34, p = 0.27). The trim-and-fill method estimated zero missing studies, and the adjusted pooled estimate was unchanged (SMD = -0.56). The fail-safe N was 847, indicating that 847 null studies would be required to reduce the pooled effect to non-significance.

## Meta-Regression

Univariate meta-regression identified two significant predictors of effect size magnitude:

- **Intervention duration** (weeks): beta = -0.014 per week (95% CI: -0.026 to -0.002, p = 0.02), indicating greater effect with longer interventions
- **Baseline depression severity** (standardized score): beta = -0.18 per SD (95% CI: -0.32 to -0.04, p = 0.01), indicating larger effects in more severely depressed samples

Session frequency, session duration, and participant age were not significant predictors in univariate models (all p > 0.10).
