+++
title = "Pairwise Results"
description = "Network meta-analysis results including odds ratios, credible intervals, and the full league table for ACR50 response."
weight = 3
template = "post"
tags = ["paper", "dark", "network", "meta-analysis", "comparative"]
[extra]
section_number = "3"
+++

## Primary Outcome: ACR50 at 24 Weeks

The primary analysis included all 42 trials reporting ACR50 response at 24 weeks. The random-effects model was selected over the fixed-effects model based on lower DIC (412.7 vs 420.3) and adequate residual deviance (86.4 versus 88 data points).

### Active Treatments vs Placebo

All five active treatments were significantly superior to placebo for ACR50 response:

<table class="paper-table">
  <caption><span class="tab-num">Table 7.</span> Active treatments versus placebo for ACR50 at 24 weeks.</caption>
  <thead>
    <tr>
      <th>Treatment</th>
      <th>OR vs placebo</th>
      <th>95% CrI</th>
      <th>Direct evidence</th>
      <th>NNT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tocilizumab</td>
      <td class="num">4.14</td>
      <td class="num">3.07, 5.59</td>
      <td class="num">7 trials</td>
      <td class="num">3.8</td>
    </tr>
    <tr>
      <td>Tofacitinib</td>
      <td class="num">3.68</td>
      <td class="num">2.62, 5.18</td>
      <td class="num">5 trials</td>
      <td class="num">4.1</td>
    </tr>
    <tr>
      <td>Etanercept</td>
      <td class="num">3.46</td>
      <td class="num">2.65, 4.52</td>
      <td class="num">7 trials</td>
      <td class="num">4.3</td>
    </tr>
    <tr>
      <td>Adalimumab</td>
      <td class="num">3.22</td>
      <td class="num">2.51, 4.13</td>
      <td class="num">8 trials</td>
      <td class="num">4.6</td>
    </tr>
    <tr>
      <td>Infliximab</td>
      <td class="num">2.94</td>
      <td class="num">2.19, 3.94</td>
      <td class="num">6 trials</td>
      <td class="num">5.0</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">NNT = number needed to treat, calculated assuming a baseline placebo response rate of 20%. OR = odds ratio; CrI = credible interval.</td></tr>
  </tfoot>
</table>

### Active vs Active Comparisons

Among the 10 pairwise comparisons between active treatments, only one reached statistical significance at the 95% credibility level:

<div class="result-box">
  <p class="result-label">Significant Pairwise Comparison</p>
  <p class="result-text">Tocilizumab vs infliximab: OR 1.42 (95% CrI 1.04 to 1.94), favoring tocilizumab.</p>
  <p class="result-detail">This comparison is informed by both indirect evidence (via the placebo node) and direct evidence (via the etanercept-tocilizumab and adalimumab-infliximab edges contributing to the network structure). The node-splitting analysis confirmed consistency between direct and indirect evidence for this comparison (p = 0.62).</p>
</div>

The remaining nine active-vs-active comparisons did not reach statistical significance. Point estimates for all comparisons are reported in the full league table.

## Comparison-Adjusted Funnel Plot

The comparison-adjusted funnel plot assesses small-study effects across the network. Each data point represents a study-specific treatment effect, centered on the comparison-specific network estimate.

<figure class="figure">
  <svg viewBox="0 0 720 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison-adjusted funnel plot showing study-level treatment effects against standard error for small-study bias assessment">
    <rect x="0" y="0" width="720" height="440" fill="#0c0f16"/>
    <!-- axes -->
    <line x1="80" y1="50" x2="80" y2="380" stroke="#2a2f3e" stroke-width="1"/>
    <line x1="80" y1="380" x2="680" y2="380" stroke="#2a2f3e" stroke-width="1"/>
    <!-- axis labels -->
    <text x="380" y="420" text-anchor="middle" font-family="IBM Plex Sans" font-weight="600" font-size="11" fill="#7e7a6e">Centered log-OR (study minus network estimate)</text>
    <text x="24" y="215" text-anchor="middle" font-family="IBM Plex Sans" font-weight="600" font-size="11" fill="#7e7a6e" transform="rotate(-90 24 215)">Standard error</text>
    <!-- x-axis ticks: -1.5, -1.0, -0.5, 0, 0.5, 1.0, 1.5 -->
    <!-- x range: 80 to 680 = 600px for -1.5 to 1.5 -->
    <text x="80" y="398" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">-1.5</text>
    <text x="180" y="398" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">-1.0</text>
    <text x="280" y="398" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">-0.5</text>
    <text x="380" y="398" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.0</text>
    <text x="480" y="398" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.5</text>
    <text x="580" y="398" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">1.0</text>
    <text x="680" y="398" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">1.5</text>
    <!-- y-axis ticks: 0.0, 0.1, 0.2, 0.3, 0.4 (SE, top=0, bottom=0.4) -->
    <!-- y range: 50 to 380 = 330px for 0 to 0.4 -->
    <text x="70" y="54" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.0</text>
    <text x="70" y="136.5" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.1</text>
    <text x="70" y="219" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.2</text>
    <text x="70" y="301.5" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.3</text>
    <text x="70" y="384" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.4</text>
    <!-- y gridlines -->
    <line x1="80" y1="132.5" x2="680" y2="132.5" stroke="#1a1f2c" stroke-width="0.5" stroke-dasharray="3 4"/>
    <line x1="80" y1="215" x2="680" y2="215" stroke="#1a1f2c" stroke-width="0.5" stroke-dasharray="3 4"/>
    <line x1="80" y1="297.5" x2="680" y2="297.5" stroke="#1a1f2c" stroke-width="0.5" stroke-dasharray="3 4"/>
    <!-- center line at x=0 -->
    <line x1="380" y1="50" x2="380" y2="380" stroke="#5a8fba" stroke-width="1" stroke-dasharray="6 4"/>
    <!-- funnel boundaries (95% CI) -->
    <!-- At SE=0 (y=50): bounds at 0. At SE=0.4 (y=380): bounds at +/- 1.96*0.4 = +/- 0.784 -->
    <!-- 0.784 in x = 0.784/1.5 * 300 = 156.8 px from center -->
    <line x1="380" y1="50" x2="536.8" y2="380" stroke="#2a2f3e" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="380" y1="50" x2="223.2" y2="380" stroke="#2a2f3e" stroke-width="1" stroke-dasharray="4 3"/>
    <!-- study points (scattered within and slightly outside funnel) -->
    <!-- x = 380 + (centered_logOR / 1.5) * 300 -->
    <!-- y = 50 + (SE / 0.4) * 330 -->
    <!-- ADA vs PBO studies (blue) -->
    <circle cx="395" cy="190" r="4" fill="#5a8fba" opacity="0.8"/>
    <circle cx="370" cy="165" r="4" fill="#5a8fba" opacity="0.8"/>
    <circle cx="410" cy="230" r="4" fill="#5a8fba" opacity="0.8"/>
    <circle cx="355" cy="250" r="4" fill="#5a8fba" opacity="0.8"/>
    <circle cx="385" cy="210" r="4" fill="#5a8fba" opacity="0.8"/>
    <circle cx="405" cy="280" r="4" fill="#5a8fba" opacity="0.8"/>
    <circle cx="362" cy="195" r="4" fill="#5a8fba" opacity="0.8"/>
    <circle cx="390" cy="270" r="4" fill="#5a8fba" opacity="0.8"/>
    <!-- ETN vs PBO studies (green) -->
    <circle cx="375" cy="180" r="4" fill="#6bbf6b" opacity="0.8"/>
    <circle cx="400" cy="200" r="4" fill="#6bbf6b" opacity="0.8"/>
    <circle cx="360" cy="240" r="4" fill="#6bbf6b" opacity="0.8"/>
    <circle cx="388" cy="175" r="4" fill="#6bbf6b" opacity="0.8"/>
    <circle cx="345" cy="260" r="4" fill="#6bbf6b" opacity="0.8"/>
    <circle cx="415" cy="290" r="4" fill="#6bbf6b" opacity="0.8"/>
    <circle cx="372" cy="215" r="4" fill="#6bbf6b" opacity="0.8"/>
    <!-- IFX vs PBO studies (gold) -->
    <circle cx="365" cy="195" r="4" fill="#d4a03c" opacity="0.8"/>
    <circle cx="385" cy="170" r="4" fill="#d4a03c" opacity="0.8"/>
    <circle cx="400" cy="245" r="4" fill="#d4a03c" opacity="0.8"/>
    <circle cx="340" cy="285" r="4" fill="#d4a03c" opacity="0.8"/>
    <circle cx="395" cy="220" r="4" fill="#d4a03c" opacity="0.8"/>
    <circle cx="420" cy="300" r="4" fill="#d4a03c" opacity="0.8"/>
    <!-- TCZ vs PBO studies (pink) -->
    <circle cx="378" cy="155" r="4" fill="#c45a7c" opacity="0.8"/>
    <circle cx="390" cy="185" r="4" fill="#c45a7c" opacity="0.8"/>
    <circle cx="365" cy="210" r="4" fill="#c45a7c" opacity="0.8"/>
    <circle cx="405" cy="190" r="4" fill="#c45a7c" opacity="0.8"/>
    <circle cx="350" cy="250" r="4" fill="#c45a7c" opacity="0.8"/>
    <circle cx="392" cy="235" r="4" fill="#c45a7c" opacity="0.8"/>
    <circle cx="375" cy="270" r="4" fill="#c45a7c" opacity="0.8"/>
    <!-- TOF vs PBO studies (purple) -->
    <circle cx="380" cy="200" r="4" fill="#9b6fd4" opacity="0.8"/>
    <circle cx="405" cy="255" r="4" fill="#9b6fd4" opacity="0.8"/>
    <circle cx="362" cy="225" r="4" fill="#9b6fd4" opacity="0.8"/>
    <circle cx="395" cy="310" r="4" fill="#9b6fd4" opacity="0.8"/>
    <circle cx="348" cy="295" r="4" fill="#9b6fd4" opacity="0.8"/>
    <!-- Head-to-head studies (white outline) -->
    <circle cx="388" cy="275" r="4" fill="none" stroke="#d0ccc0" stroke-width="1.5"/>
    <circle cx="370" cy="310" r="4" fill="none" stroke="#d0ccc0" stroke-width="1.5"/>
    <circle cx="405" cy="290" r="4" fill="none" stroke="#d0ccc0" stroke-width="1.5"/>
    <circle cx="352" cy="325" r="4" fill="none" stroke="#d0ccc0" stroke-width="1.5"/>
    <circle cx="395" cy="305" r="4" fill="none" stroke="#d0ccc0" stroke-width="1.5"/>
    <circle cx="418" cy="340" r="4" fill="none" stroke="#d0ccc0" stroke-width="1.5"/>
    <circle cx="375" cy="335" r="4" fill="none" stroke="#d0ccc0" stroke-width="1.5"/>
    <!-- Legend -->
    <circle cx="100" cy="430" r="4" fill="#5a8fba"/>
    <text x="110" y="434" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">ADA</text>
    <circle cx="160" cy="430" r="4" fill="#6bbf6b"/>
    <text x="170" y="434" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">ETN</text>
    <circle cx="220" cy="430" r="4" fill="#d4a03c"/>
    <text x="230" y="434" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">IFX</text>
    <circle cx="280" cy="430" r="4" fill="#c45a7c"/>
    <text x="290" y="434" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">TCZ</text>
    <circle cx="340" cy="430" r="4" fill="#9b6fd4"/>
    <text x="350" y="434" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">TOF</text>
    <circle cx="410" cy="430" r="4" fill="none" stroke="#d0ccc0" stroke-width="1.5"/>
    <text x="420" y="434" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">Head-to-head</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 3.</span> Comparison-adjusted funnel plot for the network meta-analysis. Each point represents a study-specific treatment effect centered on the corresponding network estimate, plotted against its standard error. The dashed lines indicate the 95% pseudo-confidence region. The approximate symmetry around the zero line suggests no substantial small-study bias.</div>
</figure>

## Inconsistency Assessment

Consistency between direct and indirect evidence is a fundamental assumption of network meta-analysis. We assessed consistency using the node-splitting approach, which separates each comparison into its direct and indirect components and tests for disagreement.

<table class="paper-table">
  <caption><span class="tab-num">Table 8.</span> Node-splitting results for comparisons with both direct and indirect evidence.</caption>
  <thead>
    <tr>
      <th>Comparison</th>
      <th>Direct OR (95% CrI)</th>
      <th>Indirect OR (95% CrI)</th>
      <th>p (inconsistency)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ADA vs ETN</td>
      <td class="num">0.96 (0.61, 1.52)</td>
      <td class="num">0.91 (0.62, 1.34)</td>
      <td class="num">0.84</td>
    </tr>
    <tr>
      <td>ADA vs IFX</td>
      <td class="num">1.14 (0.64, 2.04)</td>
      <td class="num">1.08 (0.72, 1.63)</td>
      <td class="num">0.88</td>
    </tr>
    <tr>
      <td>ETN vs TCZ</td>
      <td class="num">0.80 (0.48, 1.32)</td>
      <td class="num">0.86 (0.57, 1.30)</td>
      <td class="num">0.78</td>
    </tr>
    <tr>
      <td>ADA vs TOF</td>
      <td class="num">0.92 (0.48, 1.76)</td>
      <td class="num">0.84 (0.53, 1.34)</td>
      <td class="num">0.80</td>
    </tr>
    <tr>
      <td>TCZ vs TOF</td>
      <td class="num">1.18 (0.58, 2.40)</td>
      <td class="num">1.10 (0.69, 1.75)</td>
      <td class="num">0.86</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">All inconsistency p-values exceed 0.10, indicating no statistically significant disagreement between direct and indirect evidence for any comparison.</td></tr>
  </tfoot>
</table>

The global Wald test for inconsistency yielded chi-squared = 6.42 on 6 degrees of freedom (p = 0.38), providing no evidence of inconsistency at the network level. The design-by-treatment interaction model similarly detected no inconsistency (p = 0.44).
