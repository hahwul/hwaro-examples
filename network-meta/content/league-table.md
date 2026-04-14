+++
title = "League Table"
description = "Full pairwise league table of odds ratios and 95% credible intervals for ACR50 response at 24 weeks across all six treatments."
tags = ["paper", "dark", "network", "meta-analysis", "comparative"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Full Results</p>
  <h1 class="paper-title">League Table: Pairwise Comparisons</h1>
  <p class="paper-lede">All pairwise odds ratios (95% credible intervals) from the Bayesian random-effects network meta-analysis. The primary outcome is ACR50 response at 24 weeks.</p>
</header>

## Reading the League Table

Each cell contains the odds ratio (OR) and 95% credible interval (CrI) for the comparison between the row treatment and the column treatment. An OR greater than 1 indicates that the row treatment is favored over the column treatment. Cells where the 95% CrI excludes 1 represent statistically significant differences.

<div class="table-wrap">
<table class="league-table">
  <caption><span class="tab-num">Table 2.</span> Complete league table for ACR50 response at 24 weeks. Read across: OR &gt; 1 favors row over column.</caption>
  <thead>
    <tr>
      <th></th>
      <th>Placebo</th>
      <th>Adalimumab</th>
      <th>Etanercept</th>
      <th>Infliximab</th>
      <th>Tocilizumab</th>
      <th>Tofacitinib</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="diagonal">Placebo</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">0.31 (0.24, 0.40)</td>
      <td class="num">0.29 (0.22, 0.38)</td>
      <td class="num">0.34 (0.25, 0.46)</td>
      <td class="num">0.24 (0.18, 0.33)</td>
      <td class="num">0.27 (0.19, 0.38)</td>
    </tr>
    <tr>
      <td class="diagonal">Adalimumab</td>
      <td class="num favor-treatment">3.22 (2.51, 4.13)</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">0.93 (0.68, 1.28)</td>
      <td class="num">1.10 (0.78, 1.56)</td>
      <td class="num">0.78 (0.55, 1.10)</td>
      <td class="num">0.87 (0.58, 1.29)</td>
    </tr>
    <tr>
      <td class="diagonal">Etanercept</td>
      <td class="num favor-treatment">3.46 (2.65, 4.52)</td>
      <td class="num">1.07 (0.78, 1.47)</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">1.18 (0.83, 1.69)</td>
      <td class="num">0.84 (0.59, 1.19)</td>
      <td class="num">0.93 (0.62, 1.40)</td>
    </tr>
    <tr>
      <td class="diagonal">Infliximab</td>
      <td class="num favor-treatment">2.94 (2.19, 3.94)</td>
      <td class="num">0.91 (0.64, 1.29)</td>
      <td class="num">0.85 (0.59, 1.21)</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">0.71 (0.49, 1.02)</td>
      <td class="num">0.79 (0.52, 1.21)</td>
    </tr>
    <tr>
      <td class="diagonal">Tocilizumab</td>
      <td class="num favor-treatment">4.14 (3.07, 5.59)</td>
      <td class="num">1.29 (0.91, 1.82)</td>
      <td class="num">1.20 (0.84, 1.71)</td>
      <td class="num favor-treatment">1.42 (1.04, 1.94)</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">1.12 (0.74, 1.69)</td>
    </tr>
    <tr>
      <td class="diagonal">Tofacitinib</td>
      <td class="num favor-treatment">3.68 (2.62, 5.18)</td>
      <td class="num">1.14 (0.77, 1.71)</td>
      <td class="num">1.07 (0.71, 1.60)</td>
      <td class="num">1.26 (0.83, 1.92)</td>
      <td class="num">0.89 (0.59, 1.35)</td>
      <td class="diagonal">&mdash;</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="7">Values are odds ratios (95% credible intervals) from the Bayesian random-effects model. Statistically significant comparisons (CrI excludes 1) are highlighted. OR &gt; 1 favors the row treatment over the column treatment.</td></tr>
  </tfoot>
</table>
</div>

## Key Findings from the League Table

### All Actives vs Placebo

All five active treatments demonstrated statistically significant superiority over placebo for ACR50 response at 24 weeks:

- **Tocilizumab vs placebo:** OR 4.14 (95% CrI 3.07 to 5.59)
- **Tofacitinib vs placebo:** OR 3.68 (95% CrI 2.62 to 5.18)
- **Etanercept vs placebo:** OR 3.46 (95% CrI 2.65 to 4.52)
- **Adalimumab vs placebo:** OR 3.22 (95% CrI 2.51 to 4.13)
- **Infliximab vs placebo:** OR 2.94 (95% CrI 2.19 to 3.94)

### Active vs Active Comparisons

Among the 10 pairwise comparisons of active treatments, only one reached statistical significance:

- **Tocilizumab vs infliximab:** OR 1.42 (95% CrI 1.04 to 1.94), favoring tocilizumab

The remaining nine active-vs-active comparisons yielded credible intervals that crossed 1, indicating no statistically significant difference at the 95% credibility level. Point estimates generally favored tocilizumab and tofacitinib over the other agents, consistent with the SUCRA ranking order.

### Heterogeneity Assessment

The between-study heterogeneity standard deviation was estimated as tau = 0.18 (95% CrI 0.08 to 0.34), indicating low-to-moderate heterogeneity. The predictive intervals for treatment effects were modestly wider than the credible intervals but did not alter the direction of any comparison.

<table class="paper-table">
  <caption><span class="tab-num">Table 3.</span> Heterogeneity and model fit statistics.</caption>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Estimate</th>
      <th>95% CrI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Between-study SD (tau)</td>
      <td class="num">0.18</td>
      <td class="num">0.08, 0.34</td>
    </tr>
    <tr>
      <td>Residual deviance</td>
      <td class="num">86.4</td>
      <td class="num">&mdash;</td>
    </tr>
    <tr>
      <td>Total data points</td>
      <td class="num">88</td>
      <td class="num">&mdash;</td>
    </tr>
    <tr>
      <td>DIC</td>
      <td class="num">412.7</td>
      <td class="num">&mdash;</td>
    </tr>
    <tr>
      <td>Global inconsistency (Wald p)</td>
      <td class="num">0.38</td>
      <td class="num">&mdash;</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3">Residual deviance close to the number of data points indicates adequate model fit. DIC = deviance information criterion.</td></tr>
  </tfoot>
</table>

<footer class="paper-section-footer">
  <a href="{{ base_url }}/rankings/" class="button-link">Ranking analysis &rarr;</a>
</footer>
