+++
title = "3. Validation"
description = "Out-of-sample validation of the calibrated SIR-ABM model against held-out epidemic data, including goodness-of-fit metrics and epidemic curve comparisons."
weight = 3
template = "post"
tags = ["paper", "computational", "simulation"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## 3.1 Validation strategy

The calibrated model was validated against three empirical outbreak datasets:

- **Dataset A** -- a well-documented urban outbreak (N = 82,000; 2019)
- **Dataset B** -- a regional outbreak with partial intervention data (N = 145,000; 2021)
- **Dataset C** -- a rural outbreak with detailed contact-tracing data (N = 34,000; 2023)

For each dataset, 1,000 simulations were run from the posterior parameter distribution. The simulated epidemic curves were compared to empirical daily incidence using four metrics.

## 3.2 Goodness-of-fit results

<table class="paper-table">
  <caption><span class="tab-num">Table 3.</span> Validation metrics. Values are posterior median (95 pct credible interval).</caption>
  <thead>
    <tr>
      <th>Metric</th>
      <th>Dataset A</th>
      <th>Dataset B</th>
      <th>Dataset C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MAPE (pct)</td>
      <td class="num">3.8 (2.1--5.9)</td>
      <td class="num">4.1 (2.6--6.4)</td>
      <td class="num">4.7 (3.0--7.2)</td>
    </tr>
    <tr>
      <td>Peak timing error (days)</td>
      <td class="num">1.4 (0.2--3.1)</td>
      <td class="num">2.6 (0.8--4.8)</td>
      <td class="num">2.3 (0.6--4.4)</td>
    </tr>
    <tr>
      <td>Attack rate error (pct)</td>
      <td class="num">1.2 (0.3--2.8)</td>
      <td class="num">2.1 (0.6--4.1)</td>
      <td class="num">2.0 (0.5--3.9)</td>
    </tr>
    <tr>
      <td>R_eff at peak (simulated)</td>
      <td class="num">2.14 (1.82--2.48)</td>
      <td class="num">1.87 (1.54--2.22)</td>
      <td class="num">2.41 (2.04--2.80)</td>
    </tr>
    <tr>
      <td>R_eff at peak (empirical)</td>
      <td class="num">2.08</td>
      <td class="num">1.92</td>
      <td class="num">2.35</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">MAPE = mean absolute percentage error. CIs computed from the 2.5th and 97.5th percentiles of 1,000 posterior simulation runs.</td></tr>
  </tfoot>
</table>

## 3.3 Epidemic curve comparison

The simulated epidemic curves (posterior median and 95 pct credible band) closely tracked the empirical daily incidence across all three datasets. The model captured the exponential growth phase, peak, and post-peak decline with acceptable fidelity.

Dataset C showed the largest peak timing error (2.3 days), likely attributable to an early localised cluster in the empirical data that is not well captured by the random seeding assumption.

## 3.4 Network structure validation

In addition to epidemic outcome metrics, we validated the simulated contact network structure against the empirical contact matrix from Dataset C (which included contact-tracing data). The simulated degree distribution matched the empirical distribution with a Kolmogorov-Smirnov statistic of 0.048 (p = 0.31), failing to reject the null hypothesis of distributional equivalence.
