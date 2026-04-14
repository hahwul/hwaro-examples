+++
title = "Appendix"
description = "Supplementary methodology, model convergence diagnostics, sensitivity analyses, and author contributions for the network meta-analysis."
tags = ["paper", "dark", "network", "meta-analysis", "comparative"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Supplementary Material</p>
  <h1 class="paper-title">Appendix</h1>
</header>

## Appendix A: Search Strategy

The systematic search was conducted across the following databases through September 30, 2025:

- **MEDLINE** (via PubMed): 1966 to September 2025
- **Embase** (via Ovid): 1974 to September 2025
- **Cochrane Central Register of Controlled Trials (CENTRAL)**: Issue 9, 2025
- **ClinicalTrials.gov** and **WHO ICTRP**: searched October 1, 2025

Search terms combined MeSH headings and free-text terms for the population (rheumatoid arthritis), interventions (adalimumab, etanercept, infliximab, tocilizumab, tofacitinib, and their brand names), and study design (randomized controlled trial). No language restrictions were applied. Reference lists of included studies and relevant systematic reviews were hand-searched.

## Appendix B: Model Specification

The network meta-analysis was implemented in a Bayesian framework using Markov chain Monte Carlo (MCMC) sampling via JAGS 4.3.1 called from R 4.3.2. The model specification followed the NICE Decision Support Unit Technical Support Document 2.

### Likelihood and Link Function

A binomial likelihood with logit link was used:

- r<sub>ik</sub> ~ Bin(p<sub>ik</sub>, n<sub>ik</sub>)
- logit(p<sub>ik</sub>) = mu<sub>i</sub> + delta<sub>ik</sub>

where r<sub>ik</sub> is the number of ACR50 responders in arm k of trial i, n<sub>ik</sub> is the total number randomized, mu<sub>i</sub> is the trial-specific baseline effect, and delta<sub>ik</sub> is the trial-specific treatment effect relative to the baseline treatment.

### Prior Distributions

- Treatment effects d<sub>1k</sub>: N(0, 10000)
- Between-study SD (tau): Uniform(0, 2)
- Baseline effects mu<sub>i</sub>: N(0, 10000)

## Appendix C: Convergence Diagnostics

<div class="diagnostic-box">
  <p class="diag-label">MCMC Convergence Summary</p>
  Chains: 4<br>
  Burn-in: 50,000 iterations<br>
  Sampling: 100,000 iterations (thinned by 10)<br>
  Effective samples per parameter: 10,000<br>
  <br>
  Gelman-Rubin R-hat (all parameters): max 1.003<br>
  Geweke z-scores: all |z| &lt; 1.96<br>
  Heidelberger-Welch stationarity: all passed<br>
  Brooks-Gelman-Rubin multivariate PSRF: 1.001
</div>

Trace plots and density plots for all treatment effect parameters showed satisfactory mixing and convergence. Autocorrelation was negligible after thinning by a factor of 10. The effective sample size exceeded 10,000 for all monitored parameters.

### Model Fit

<table class="paper-table">
  <caption><span class="tab-num">Table A1.</span> Model comparison: fixed-effects vs random-effects.</caption>
  <thead>
    <tr>
      <th>Model</th>
      <th>Residual deviance</th>
      <th>pD</th>
      <th>DIC</th>
      <th>tau (95% CrI)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fixed-effects</td>
      <td class="num">102.8</td>
      <td class="num">46</td>
      <td class="num">420.3</td>
      <td class="num">&mdash;</td>
    </tr>
    <tr>
      <td>Random-effects</td>
      <td class="num">86.4</td>
      <td class="num">52.3</td>
      <td class="num">412.7</td>
      <td class="num">0.18 (0.08, 0.34)</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">pD = effective number of parameters. DIC = deviance information criterion. Lower DIC indicates better model fit. The random-effects model was selected based on lower DIC and improved residual deviance.</td></tr>
  </tfoot>
</table>

## Appendix D: Sensitivity Analyses

Three pre-specified sensitivity analyses were performed:

1. **Excluding studies with high risk of bias**: Removal of 7 studies rated as high risk of bias on the Cochrane Risk of Bias 2.0 tool did not materially alter the treatment rankings (SUCRA values changed by less than 4 percentage points for all treatments).

2. **Informative prior for heterogeneity**: Using a log-normal prior for the between-study variance (informed by the Turner et al. predictive distributions for pharmacological interventions on semi-objective outcomes) yielded a posterior median tau of 0.16 (95% CrI 0.06 to 0.31), with no change in the direction or significance of any pairwise comparison.

3. **Fixed-effects model**: The fixed-effects analysis produced similar point estimates but narrower credible intervals. The ranking order was unchanged (tocilizumab first, tofacitinib second).

## Appendix E: Inconsistency Assessment

Consistency between direct and indirect evidence was evaluated using three approaches:

- **Node-splitting**: None of the 10 comparisons with both direct and indirect evidence showed statistically significant inconsistency (all p > 0.10).
- **Global Wald test**: chi-squared = 6.42 on 6 df, p = 0.38.
- **Design-by-treatment interaction model**: No significant inconsistency detected (p = 0.44).

## CRediT Author Contributions

- **Jisoo Park**: Conceptualization, methodology, formal analysis, software, writing (original draft), project administration
- **Folake Adeyemi**: Data curation, investigation, writing (review and editing), validation
- **Marek Kowalski**: Methodology, formal analysis, writing (review and editing), visualization
- **Wei Chen**: Conceptualization, supervision, funding acquisition, writing (review and editing)

## Funding

This work was supported by the National Research Foundation (Grant NRF-2025-EBM-04182). The funder had no role in study design, data collection, analysis, or manuscript preparation.

## Conflicts of Interest

JP has received consulting fees from Roche unrelated to this work. FA, MK, and WC declare no competing interests.

## Data Availability

The extracted dataset and JAGS model code are available at https://doi.org/10.5281/zenodo.XXXXXXX. Individual patient data are not available due to the aggregate nature of the included studies.

## Correspondence

Jisoo Park, Department of Biostatistics, Langford School of Public Health, 200 University Drive, Langford, MA 02140. Email: j.park@langford.edu
