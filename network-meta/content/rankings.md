+++
title = "Rankings"
description = "Treatment ranking probabilities, SUCRA values, and rankograms for ACR50 response at 24 weeks."
tags = ["paper", "dark", "network", "meta-analysis", "comparative"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Ranking Analysis</p>
  <h1 class="paper-title">Treatment Rankings and Rankograms</h1>
  <p class="paper-lede">Surface under the cumulative ranking curve (SUCRA) values and probability distributions for each treatment's rank across the posterior sample.</p>
</header>

## SUCRA Summary

The SUCRA statistic represents the probability that a treatment is among the best options, expressed as a percentage. A SUCRA of 100% would indicate a treatment is certainly the best; 0% indicates it is certainly the worst.

<table class="paper-table">
  <caption><span class="tab-num">Table 4.</span> SUCRA values and median ranks for ACR50 response at 24 weeks.</caption>
  <thead>
    <tr>
      <th>Treatment</th>
      <th>SUCRA (%)</th>
      <th>Median rank</th>
      <th>P(Best)</th>
      <th>P(Worst active)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tocilizumab</td>
      <td class="num">87.2</td>
      <td class="num">1</td>
      <td class="num">0.42</td>
      <td class="num">0.02</td>
    </tr>
    <tr>
      <td>Tofacitinib</td>
      <td class="num">78.4</td>
      <td class="num">2</td>
      <td class="num">0.28</td>
      <td class="num">0.05</td>
    </tr>
    <tr>
      <td>Etanercept</td>
      <td class="num">65.1</td>
      <td class="num">3</td>
      <td class="num">0.14</td>
      <td class="num">0.10</td>
    </tr>
    <tr>
      <td>Adalimumab</td>
      <td class="num">58.3</td>
      <td class="num">3</td>
      <td class="num">0.10</td>
      <td class="num">0.18</td>
    </tr>
    <tr>
      <td>Infliximab</td>
      <td class="num">49.8</td>
      <td class="num">4</td>
      <td class="num">0.06</td>
      <td class="num">0.31</td>
    </tr>
    <tr>
      <td>Placebo</td>
      <td class="num">1.2</td>
      <td class="num">6</td>
      <td class="num">0.00</td>
      <td class="num">&mdash;</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">P(Best) = probability of ranking first among all six treatments. P(Worst active) = probability of ranking last among the five active treatments. Placebo excluded from worst-active calculation.</td></tr>
  </tfoot>
</table>

## Rankogram

The rankogram shows the probability of each treatment achieving each rank (1st through 6th) based on the posterior distribution from the Bayesian model.

<figure class="figure">
  <svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rankogram showing probability of each treatment being ranked 1st through 6th for ACR50 response">
    <rect x="0" y="0" width="720" height="420" fill="#0c0f16"/>
    <!-- axis labels -->
    <text x="360" y="405" text-anchor="middle" font-family="IBM Plex Sans" font-weight="600" font-size="11" fill="#7e7a6e">Rank</text>
    <text x="18" y="200" text-anchor="middle" font-family="IBM Plex Sans" font-weight="600" font-size="11" fill="#7e7a6e" transform="rotate(-90 18 200)">Probability</text>
    <!-- y-axis ticks and grid -->
    <line x1="60" y1="40" x2="60" y2="370" stroke="#2a2f3e" stroke-width="1"/>
    <line x1="60" y1="370" x2="700" y2="370" stroke="#2a2f3e" stroke-width="1"/>
    <!-- y gridlines: 0.0, 0.1, 0.2, 0.3, 0.4, 0.5 -->
    <line x1="60" y1="370" x2="700" y2="370" stroke="#2a2f3e" stroke-width="0.5"/>
    <text x="52" y="374" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.0</text>
    <line x1="60" y1="304" x2="700" y2="304" stroke="#1a1f2c" stroke-width="0.5" stroke-dasharray="3 4"/>
    <text x="52" y="308" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.1</text>
    <line x1="60" y1="238" x2="700" y2="238" stroke="#1a1f2c" stroke-width="0.5" stroke-dasharray="3 4"/>
    <text x="52" y="242" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.2</text>
    <line x1="60" y1="172" x2="700" y2="172" stroke="#1a1f2c" stroke-width="0.5" stroke-dasharray="3 4"/>
    <text x="52" y="176" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.3</text>
    <line x1="60" y1="106" x2="700" y2="106" stroke="#1a1f2c" stroke-width="0.5" stroke-dasharray="3 4"/>
    <text x="52" y="110" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.4</text>
    <line x1="60" y1="40" x2="700" y2="40" stroke="#1a1f2c" stroke-width="0.5" stroke-dasharray="3 4"/>
    <text x="52" y="44" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#4e4b42">0.5</text>
    <!-- x-axis rank labels -->
    <!-- Rank groups at x: 115, 222, 329, 436, 543, 650 -->
    <text x="115" y="388" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#7e7a6e">1st</text>
    <text x="222" y="388" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#7e7a6e">2nd</text>
    <text x="329" y="388" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#7e7a6e">3rd</text>
    <text x="436" y="388" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#7e7a6e">4th</text>
    <text x="543" y="388" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#7e7a6e">5th</text>
    <text x="650" y="388" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#7e7a6e">6th</text>
    <!-- Bar width=14, gap=3 between bars within group, 5 bars per group (excl placebo for ranks 1-5, incl for rank 6) -->
    <!-- Color key: ADA=#5a8fba ETN=#6bbf6b IFX=#d4a03c TCZ=#c45a7c TOF=#9b6fd4 PBO=#8e8a7e -->
    <!-- RANK 1 probabilities: TCZ=0.42 TOF=0.28 ETN=0.14 ADA=0.10 IFX=0.06 PBO=0.00 -->
    <!-- scale: 0.5 = 330px height, so 0.1 = 66px -->
    <!-- group center=115, bars from x=73 -->
    <rect x="73" y="304" width="14" height="66" fill="#5a8fba"/>
    <rect x="90" y="277.6" width="14" height="92.4" fill="#6bbf6b"/>
    <rect x="107" y="330.4" width="14" height="39.6" fill="#d4a03c"/>
    <rect x="124" y="92.8" width="14" height="277.2" fill="#c45a7c"/>
    <rect x="141" y="185.2" width="14" height="184.8" fill="#9b6fd4"/>
    <!-- RANK 2: TCZ=0.26 TOF=0.30 ETN=0.18 ADA=0.16 IFX=0.10 PBO=0.00 -->
    <rect x="180" y="264.4" width="14" height="105.6" fill="#5a8fba"/>
    <rect x="197" y="251.2" width="14" height="118.8" fill="#6bbf6b"/>
    <rect x="214" y="304" width="14" height="66" fill="#d4a03c"/>
    <rect x="231" y="198.4" width="14" height="171.6" fill="#c45a7c"/>
    <rect x="248" y="172" width="14" height="198" fill="#9b6fd4"/>
    <!-- RANK 3: TCZ=0.16 TOF=0.20 ETN=0.28 ADA=0.22 IFX=0.14 PBO=0.00 -->
    <rect x="287" y="224.8" width="14" height="145.2" fill="#5a8fba"/>
    <rect x="304" y="185.2" width="14" height="184.8" fill="#6bbf6b"/>
    <rect x="321" y="277.6" width="14" height="92.4" fill="#d4a03c"/>
    <rect x="338" y="264.4" width="14" height="105.6" fill="#c45a7c"/>
    <rect x="355" y="238" width="14" height="132" fill="#9b6fd4"/>
    <!-- RANK 4: TCZ=0.10 TOF=0.14 ETN=0.22 ADA=0.26 IFX=0.24 PBO=0.04 -->
    <rect x="394" y="198.4" width="14" height="171.6" fill="#5a8fba"/>
    <rect x="411" y="224.8" width="14" height="145.2" fill="#6bbf6b"/>
    <rect x="428" y="211.6" width="14" height="158.4" fill="#d4a03c"/>
    <rect x="445" y="304" width="14" height="66" fill="#c45a7c"/>
    <rect x="462" y="277.6" width="14" height="92.4" fill="#9b6fd4"/>
    <!-- RANK 5: TCZ=0.04 TOF=0.06 ETN=0.14 ADA=0.22 IFX=0.38 PBO=0.16 -->
    <rect x="501" y="224.8" width="14" height="145.2" fill="#5a8fba"/>
    <rect x="518" y="277.6" width="14" height="92.4" fill="#6bbf6b"/>
    <rect x="535" y="118.8" width="14" height="251.2" fill="#d4a03c"/>
    <rect x="552" y="343.6" width="14" height="26.4" fill="#c45a7c"/>
    <rect x="569" y="330.4" width="14" height="39.6" fill="#9b6fd4"/>
    <!-- RANK 6: TCZ=0.02 TOF=0.02 ETN=0.04 ADA=0.04 IFX=0.08 PBO=0.80 -->
    <rect x="608" y="343.6" width="14" height="26.4" fill="#5a8fba"/>
    <rect x="625" y="343.6" width="14" height="26.4" fill="#6bbf6b"/>
    <rect x="642" y="317.2" width="14" height="52.8" fill="#d4a03c"/>
    <rect x="659" y="356.8" width="14" height="13.2" fill="#c45a7c"/>
    <rect x="676" y="356.8" width="14" height="13.2" fill="#9b6fd4"/>
    <!-- Legend -->
    <rect x="80" y="18" width="10" height="10" fill="#5a8fba"/>
    <text x="95" y="27" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">ADA</text>
    <rect x="140" y="18" width="10" height="10" fill="#6bbf6b"/>
    <text x="155" y="27" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">ETN</text>
    <rect x="200" y="18" width="10" height="10" fill="#d4a03c"/>
    <text x="215" y="27" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">IFX</text>
    <rect x="260" y="18" width="10" height="10" fill="#c45a7c"/>
    <text x="275" y="27" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">TCZ</text>
    <rect x="320" y="18" width="10" height="10" fill="#9b6fd4"/>
    <text x="335" y="27" font-family="IBM Plex Sans" font-size="9" fill="#b0ac9e">TOF</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 2.</span> Rankogram showing the posterior probability of each active treatment being ranked 1st through 6th for ACR50 response at 24 weeks. Tocilizumab (TCZ) has the highest probability of being ranked first (42%), followed by tofacitinib (TOF, 28%). Placebo bars omitted from ranks 1-5 for clarity (probability near zero); placebo dominates rank 6 with P = 0.80.</div>
</figure>

## Interpretation of Rankings

Treatment rankings should be interpreted alongside the league table and credible intervals. While SUCRA provides a useful summary for ordering treatments, small differences in SUCRA do not necessarily reflect clinically meaningful differences in efficacy. The overlap in ranking distributions -- particularly among the middle-ranked treatments (etanercept, adalimumab, and tofacitinib) -- indicates substantial uncertainty in the precise ordering.

<div class="result-box">
  <p class="result-label">Key Finding</p>
  <p class="result-text">Tocilizumab had the highest probability of ranking first (42%) and a SUCRA of 87.2%, but was not statistically superior to adalimumab, etanercept, or tofacitinib in pairwise comparisons.</p>
  <p class="result-detail">Rankings are based on the full posterior distribution of treatment effects and account for both direct and indirect evidence. They should inform but not replace clinical judgment regarding individual patient factors.</p>
</div>

<footer class="paper-section-footer">
  <a href="{{ base_url }}/league-table/" class="button-link">&larr; League table</a> &nbsp;&nbsp;
  <a href="{{ base_url }}/appendix/" class="button-link">Appendix &rarr;</a>
</footer>
