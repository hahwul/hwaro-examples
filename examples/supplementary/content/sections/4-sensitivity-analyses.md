+++
title = "S4. Sensitivity Analyses"
description = "Alternative statistical models, robustness checks, and subgroup analyses by site type to evaluate the stability of primary findings."
weight = 4
template = "post"
tags = ["statistics", "sensitivity", "robustness", "subgroup"]
categories = ["sections"]
[extra]
section_number = "S4"
+++

## Alternative Statistical Models

The primary analysis used logistic regression with site as a random effect. Sensitivity analyses tested alternative model specifications to assess robustness.

### Table S7. Model Comparison for blaCTX-M Prevalence

<table class="paper-table">
  <caption><span class="tab-num">Table S7.</span> Comparison of estimated odds ratios (OR) for ICU vs. outpatient sites using alternative statistical models for blaCTX-M prevalence.</caption>
  <thead>
    <tr>
      <th>Model</th>
      <th>OR (ICU vs. Outpatient)</th>
      <th>95% CI</th>
      <th>p-value</th>
      <th>AIC</th>
      <th>BIC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Primary: Mixed-effects logistic</strong></td>
      <td class="num">20.4</td>
      <td class="num">12.1-34.5</td>
      <td class="num">&lt;0.001</td>
      <td class="num">842.3</td>
      <td class="num">868.1</td>
    </tr>
    <tr>
      <td>Fixed-effects logistic</td>
      <td class="num">22.1</td>
      <td class="num">13.4-36.4</td>
      <td class="num">&lt;0.001</td>
      <td class="num">856.7</td>
      <td class="num">874.2</td>
    </tr>
    <tr>
      <td>GEE (exchangeable)</td>
      <td class="num">19.8</td>
      <td class="num">11.2-35.0</td>
      <td class="num">&lt;0.001</td>
      <td class="num">--</td>
      <td class="num">--</td>
    </tr>
    <tr>
      <td>GEE (autoregressive)</td>
      <td class="num">18.6</td>
      <td class="num">10.4-33.2</td>
      <td class="num">&lt;0.001</td>
      <td class="num">--</td>
      <td class="num">--</td>
    </tr>
    <tr>
      <td>Bayesian logistic (weakly informative prior)</td>
      <td class="num">19.2</td>
      <td class="num">10.8-33.8</td>
      <td class="num">--</td>
      <td class="num">--</td>
      <td class="num">--</td>
    </tr>
    <tr>
      <td>Negative binomial (count model)</td>
      <td class="num">IRR: 3.01</td>
      <td class="num">2.42-3.74</td>
      <td class="num">&lt;0.001</td>
      <td class="num">1024.6</td>
      <td class="num">1048.8</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">OR = odds ratio. IRR = incidence rate ratio (negative binomial model). GEE = generalized estimating equations. AIC/BIC not applicable for GEE and Bayesian models. Bayesian CI = 95 pct credible interval (4 chains, 10,000 iterations, 2,000 warmup). All models adjusted for month of sampling and species composition.</td></tr>
  </tfoot>
</table>

## Table S8. Robustness Checks

<table class="paper-table">
  <caption><span class="tab-num">Table S8.</span> Sensitivity of primary findings to analytic decisions. Each row modifies one aspect of the primary analysis.</caption>
  <thead>
    <tr>
      <th>Analysis Variant</th>
      <th>Modification</th>
      <th>N Isolates</th>
      <th>OR (ICU vs. Outpt)</th>
      <th>95% CI</th>
      <th>Conclusion Changed?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Primary analysis</td>
      <td>None</td>
      <td class="num">847</td>
      <td class="num">20.4</td>
      <td class="num">12.1-34.5</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Exclude month 1</td>
      <td>Remove first sampling month</td>
      <td class="num">812</td>
      <td class="num">19.8</td>
      <td class="num">11.6-33.8</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Exclude low-quality DNA</td>
      <td>Remove A260/A280 &lt; 1.8</td>
      <td class="num">831</td>
      <td class="num">21.0</td>
      <td class="num">12.3-35.8</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Species-stratified</td>
      <td><em>E. coli</em> only</td>
      <td class="num">412</td>
      <td class="num">18.2</td>
      <td class="num">9.4-35.2</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Species-stratified</td>
      <td><em>K. pneumoniae</em> only</td>
      <td class="num">198</td>
      <td class="num">24.6</td>
      <td class="num">10.2-59.2</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Exclude WWTP sites</td>
      <td>Hospital sites only</td>
      <td class="num">693</td>
      <td class="num">21.2</td>
      <td class="num">12.4-36.2</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Quarterly aggregation</td>
      <td>3-month pooled samples</td>
      <td class="num">847</td>
      <td class="num">19.6</td>
      <td class="num">10.8-35.5</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Bootstrap (1000 resamples)</td>
      <td>Non-parametric CI</td>
      <td class="num">847</td>
      <td class="num">20.1</td>
      <td class="num">11.4-36.8</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Multiple imputation</td>
      <td>5 pct missing species data imputed</td>
      <td class="num">847</td>
      <td class="num">20.8</td>
      <td class="num">12.0-36.0</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Stricter PCR threshold</td>
      <td>Only strong-band positives</td>
      <td class="num">847</td>
      <td class="num">16.8</td>
      <td class="num">9.8-28.8</td>
      <td>No</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">All analyses use blaCTX-M as the outcome. OR = odds ratio for ICU vs. outpatient comparison. Conclusion changed = whether the ICU vs. outpatient comparison remains statistically significant at alpha = 0.05. All variants yield consistent results, supporting robustness of the primary finding.</td></tr>
  </tfoot>
</table>

## Table S9. Subgroup Analyses by Site Type

<table class="paper-table">
  <caption><span class="tab-num">Table S9.</span> Within-site-type analysis of temporal trend in overall ARG burden (mean number of genes detected per isolate).</caption>
  <thead>
    <tr>
      <th>Site Type</th>
      <th>N Isolates</th>
      <th>Mean ARG/Isolate (Month 1-6)</th>
      <th>Mean ARG/Isolate (Month 19-24)</th>
      <th>Change</th>
      <th>p (trend)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ICU</td>
      <td class="num">218</td>
      <td class="num">5.4</td>
      <td class="num">6.2</td>
      <td class="num">+0.8</td>
      <td class="num">0.003</td>
    </tr>
    <tr>
      <td>Surgical</td>
      <td class="num">165</td>
      <td class="num">3.8</td>
      <td class="num">4.6</td>
      <td class="num">+0.8</td>
      <td class="num">0.008</td>
    </tr>
    <tr>
      <td>General</td>
      <td class="num">198</td>
      <td class="num">2.6</td>
      <td class="num">3.4</td>
      <td class="num">+0.8</td>
      <td class="num">0.012</td>
    </tr>
    <tr>
      <td>Outpatient</td>
      <td class="num">112</td>
      <td class="num">1.4</td>
      <td class="num">2.0</td>
      <td class="num">+0.6</td>
      <td class="num">0.041</td>
    </tr>
    <tr>
      <td>WWTP Influent</td>
      <td class="num">82</td>
      <td class="num">4.2</td>
      <td class="num">5.0</td>
      <td class="num">+0.8</td>
      <td class="num">0.018</td>
    </tr>
    <tr>
      <td>WWTP Effluent</td>
      <td class="num">44</td>
      <td class="num">2.2</td>
      <td class="num">2.8</td>
      <td class="num">+0.6</td>
      <td class="num">0.062</td>
    </tr>
    <tr>
      <td>River Downstream</td>
      <td class="num">28</td>
      <td class="num">1.0</td>
      <td class="num">1.6</td>
      <td class="num">+0.6</td>
      <td class="num">0.088</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">ARG/Isolate = mean number of the 8 target resistance genes detected per isolate. p (trend) from linear regression of ARG count on month. Positive trends observed across all site types, though smaller magnitude and borderline significance in WWTP effluent and river sites, consistent with dilution and treatment effects.</td></tr>
  </tfoot>
</table>

## Interaction Analysis

To test whether temporal trends differed by site type, a mixed-effects model with a site-type x month interaction term was fitted. The interaction was statistically significant (Likelihood ratio test: chi-squared = 14.8, df = 6, p = 0.022), indicating that the rate of increase in ARG burden was steeper in ICU and surgical ward effluent compared to outpatient and environmental sites. However, the direction of the trend (increasing) was consistent across all site types.
