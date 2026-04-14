+++
title = "Dose-Response Modeling"
description = "Sigmoid Emax model fitting, parameter estimation, and model diagnostics for MRX-7721 concentration-response data."
weight = 1
template = "post"
[extra]
section_number = "1"
+++

## Model Selection

The concentration-response relationship for MRX-7721 was characterized using the four-parameter logistic (4PL) model, also known as the sigmoid Emax model. This model was selected over the three-parameter logistic model (fixed Hill coefficient = 1) based on Akaike Information Criterion comparison (AIC_4PL = -42.3 vs. AIC_3PL = -36.8).

### Parameter Estimates

The fitted model parameters are:

- **Bottom (E<sub>0</sub>)**: 2.1 pct (95 pct CI: 0.4-3.8 pct) -- residual JAK2 phosphorylation at saturating drug concentrations
- **Top (E<sub>max</sub>)**: 98.4 pct (95 pct CI: 96.2-100.0 pct) -- baseline phosphorylation in vehicle-treated cells
- **EC50**: 42.3 nM (95 pct CI: 36.1-49.5 nM) -- concentration producing 50 pct inhibition
- **Hill coefficient (n<sub>H</sub>)**: 1.38 (95 pct CI: 1.12-1.64) -- steepness of the concentration-response curve

The Hill coefficient of 1.38, slightly above unity, suggests modest positive cooperativity in JAK2 binding. This is consistent with the reported binding mode of MRX-7721, which occupies both the ATP-binding pocket and an adjacent allosteric site.

### Model Diagnostics

Goodness of fit was assessed by three criteria: (1) coefficient of determination R-squared = 0.997; (2) residual standard error = 3.2 pct of response range; (3) runs test for systematic deviation from the fitted curve (p = 0.68, no evidence of systematic misfit). Visual inspection of residual plots confirmed homoscedastic, normally distributed residuals with no evidence of concentration-dependent bias.

## Potency Comparison

To contextualize MRX-7721 potency, we compared its EC50 against published values for approved JAK2 inhibitors:

<table class="paper-table">
  <caption><span class="tab-num">Table 2.</span> Potency comparison of JAK2 inhibitors in cell-based phosphorylation assays.</caption>
  <thead>
    <tr>
      <th>Compound</th>
      <th>EC50 (nM)</th>
      <th>Hill coefficient</th>
      <th>JAK2/JAK1 selectivity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>MRX-7721</strong></td>
      <td class="num">42.3</td>
      <td class="num">1.38</td>
      <td class="num">29.3x</td>
    </tr>
    <tr>
      <td>Ruxolitinib</td>
      <td class="num">210</td>
      <td class="num">1.05</td>
      <td class="num">3.3x</td>
    </tr>
    <tr>
      <td>Fedratinib</td>
      <td class="num">320</td>
      <td class="num">1.12</td>
      <td class="num">35x</td>
    </tr>
    <tr>
      <td>Pacritinib</td>
      <td class="num">180</td>
      <td class="num">0.98</td>
      <td class="num">5.2x</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">EC50 values from cell-based assays in HEL 92.1.7 cells (this study) or published literature. Selectivity ratios based on cell-based IC50 comparisons.</td></tr>
  </tfoot>
</table>

MRX-7721 is approximately 5-fold more potent than ruxolitinib and demonstrates the highest JAK2/JAK1 selectivity among the JAK2 inhibitors tested, with the exception of fedratinib.
