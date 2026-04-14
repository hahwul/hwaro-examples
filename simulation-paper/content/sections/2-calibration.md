+++
title = "2. Calibration"
description = "Approximate Bayesian computation (ABC-SMC) calibration procedure, prior specifications, and convergence diagnostics for the SIR-ABM model."
weight = 2
template = "post"
tags = ["paper", "computational", "simulation"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## 2.1 Calibration approach

We calibrate 12 free parameters (Table P1) using approximate Bayesian computation with sequential Monte Carlo sampling (ABC-SMC). ABC-SMC is chosen because the likelihood function of the agent-based model is intractable; instead, we compare simulated summary statistics against empirical values using a distance metric.

## 2.2 Summary statistics

Five summary statistics form the distance vector:

1. Final attack rate (proportion of agents reaching state R)
2. Peak prevalence (maximum proportion in state I)
3. Peak timing (day of peak prevalence)
4. Epidemic duration (days from first case to last recovery)
5. Effective reproduction number at day 14 (R_eff_14)

The distance metric is the Euclidean norm of the normalised differences between simulated and empirical summary statistics.

## 2.3 ABC-SMC procedure

<div class="pseudocode-block">
  <span class="algo-name">Algorithm 2: ABC-SMC Calibration</span>
  <span class="keyword">function</span> CalibrateABCSMC(data, priors, rounds=8, particles=50000):<br>
  <span class="indent-1">epsilon &larr; [0.20, 0.15, 0.12, 0.09, 0.07, 0.06, 0.05, 0.045]</span><br>
  <span class="indent-1"><span class="keyword">for</span> r &larr; 1 <span class="keyword">to</span> rounds:</span><br>
  <span class="indent-2">accepted &larr; empty list</span><br>
  <span class="indent-2"><span class="keyword">while</span> |accepted| &lt; particles:</span><br>
  <span class="indent-3"><span class="keyword">if</span> r == 1:</span><br>
  <span class="indent-3">&nbsp;&nbsp;theta_star &larr; SampleFromPriors(priors)</span><br>
  <span class="indent-3"><span class="keyword">else</span>:</span><br>
  <span class="indent-3">&nbsp;&nbsp;theta_star &larr; PerturbFromPrevious(accepted[r-1], kernel)</span><br>
  <span class="indent-3">sim_stats &larr; RunSimulation(theta_star).summary()</span><br>
  <span class="indent-3"><span class="keyword">if</span> Distance(sim_stats, data.summary()) &lt; epsilon[r]:</span><br>
  <span class="indent-3">&nbsp;&nbsp;accepted.append(theta_star)</span><br>
  <span class="indent-2">weights &larr; ComputeImportanceWeights(accepted, priors, kernel)</span><br>
  <span class="indent-1"><span class="keyword">return</span> WeightedPosterior(accepted, weights)</span>
</div>

## 2.4 Convergence diagnostics

Convergence was assessed using three criteria:

- **Effective sample size (ESS):** stabilised above 2,000 from round 5 onwards (minimum ESS = 2,142 at round 8)
- **Acceptance rate:** decreased from 18.4 pct (round 1) to 2.8 pct (round 8), consistent with tightening tolerance
- **Posterior stability:** Kolmogorov-Smirnov distance between rounds 7 and 8 posteriors was below 0.03 for all parameters

<table class="paper-table">
  <caption><span class="tab-num">Table 2.</span> ABC-SMC convergence metrics by round.</caption>
  <thead>
    <tr>
      <th>Round</th>
      <th>Epsilon</th>
      <th>Acceptance rate</th>
      <th>ESS</th>
      <th>Wall time</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="num">1</td><td class="num">0.200</td><td class="num">18.4 pct</td><td class="num">50,000</td><td class="num">2.1 h</td></tr>
    <tr><td class="num">2</td><td class="num">0.150</td><td class="num">12.6 pct</td><td class="num">14,820</td><td class="num">3.4 h</td></tr>
    <tr><td class="num">3</td><td class="num">0.120</td><td class="num">8.9 pct</td><td class="num">8,240</td><td class="num">4.8 h</td></tr>
    <tr><td class="num">4</td><td class="num">0.090</td><td class="num">6.2 pct</td><td class="num">4,610</td><td class="num">6.1 h</td></tr>
    <tr><td class="num">5</td><td class="num">0.070</td><td class="num">4.8 pct</td><td class="num">3,180</td><td class="num">7.2 h</td></tr>
    <tr><td class="num">6</td><td class="num">0.060</td><td class="num">3.9 pct</td><td class="num">2,840</td><td class="num">8.4 h</td></tr>
    <tr><td class="num">7</td><td class="num">0.050</td><td class="num">3.2 pct</td><td class="num">2,410</td><td class="num">9.6 h</td></tr>
    <tr><td class="num">8</td><td class="num">0.045</td><td class="num">2.8 pct</td><td class="num">2,142</td><td class="num">10.2 h</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Total calibration wall time: approximately 52 hours across 8 rounds. Parallelised across 16 cores.</td></tr>
  </tfoot>
</table>
