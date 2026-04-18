+++
title = "Ranking Analysis"
description = "Treatment ranking probabilities, SUCRA values, rankograms, and cumulative ranking curves for ACR50 response."
weight = 4
template = "post"
tags = ["paper", "dark", "network", "meta-analysis", "comparative"]
[extra]
section_number = "4"
+++

## SUCRA Values

The surface under the cumulative ranking curve (SUCRA) provides a single numeric summary of each treatment's ranking distribution. SUCRA ranges from 0% (certainly the worst) to 100% (certainly the best). Values close to 50% indicate that a treatment is equally likely to be among the better or worse options.

<div class="result-box">
  <p class="result-label">Ranking Order (SUCRA)</p>
  <p class="result-text">Tocilizumab (87.2%) > Tofacitinib (78.4%) > Etanercept (65.1%) > Adalimumab (58.3%) > Infliximab (49.8%) > Placebo (1.2%)</p>
  <p class="result-detail">SUCRA values are derived from 40,000 posterior samples (4 chains, 10,000 per chain after burn-in and thinning). The ranking order is consistent across all sensitivity analyses.</p>
</div>

### Probability of Being Best

The probability of each treatment being the best (rank 1) among all six treatments:

- Tocilizumab: 42%
- Tofacitinib: 28%
- Etanercept: 14%
- Adalimumab: 10%
- Infliximab: 6%
- Placebo: 0%

The concentration of rank-1 probability between tocilizumab and tofacitinib (70% combined) suggests that one of these two agents is most likely the most efficacious for ACR50 response, though the remaining 30% probability distributed among etanercept, adalimumab, and infliximab reflects meaningful uncertainty.

## Cumulative Ranking Probabilities

The cumulative ranking curve for each treatment shows the probability of being ranked among the top k treatments, for k = 1, 2, ..., 6. The SUCRA value equals the area under this curve, normalized to the number of competing treatments.

<table class="paper-table">
  <caption><span class="tab-num">Table 9.</span> Cumulative ranking probabilities: P(rank &le; k) for each treatment.</caption>
  <thead>
    <tr>
      <th>Treatment</th>
      <th>P(rank 1)</th>
      <th>P(rank 1-2)</th>
      <th>P(rank 1-3)</th>
      <th>P(rank 1-4)</th>
      <th>P(rank 1-5)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tocilizumab</td>
      <td class="num">0.42</td>
      <td class="num">0.68</td>
      <td class="num">0.84</td>
      <td class="num">0.94</td>
      <td class="num">0.98</td>
    </tr>
    <tr>
      <td>Tofacitinib</td>
      <td class="num">0.28</td>
      <td class="num">0.58</td>
      <td class="num">0.78</td>
      <td class="num">0.92</td>
      <td class="num">0.98</td>
    </tr>
    <tr>
      <td>Etanercept</td>
      <td class="num">0.14</td>
      <td class="num">0.32</td>
      <td class="num">0.60</td>
      <td class="num">0.82</td>
      <td class="num">0.96</td>
    </tr>
    <tr>
      <td>Adalimumab</td>
      <td class="num">0.10</td>
      <td class="num">0.26</td>
      <td class="num">0.48</td>
      <td class="num">0.74</td>
      <td class="num">0.96</td>
    </tr>
    <tr>
      <td>Infliximab</td>
      <td class="num">0.06</td>
      <td class="num">0.16</td>
      <td class="num">0.30</td>
      <td class="num">0.54</td>
      <td class="num">0.92</td>
    </tr>
    <tr>
      <td>Placebo</td>
      <td class="num">0.00</td>
      <td class="num">0.00</td>
      <td class="num">0.00</td>
      <td class="num">0.04</td>
      <td class="num">0.20</td>
    </tr>
  </tbody>
</table>

## Interpretation of Rankings

### Clustering of Active Treatments

The ranking analysis reveals two approximate clusters among the active treatments:

1. **Higher-ranked cluster**: Tocilizumab and tofacitinib, with SUCRA values above 75% and a combined 70% probability of ranking first.
2. **Middle-ranked cluster**: Etanercept, adalimumab, and infliximab, with SUCRA values between 49% and 65% and overlapping ranking distributions.

The separation between these clusters is modest in absolute terms: the odds ratio between the first-ranked (tocilizumab) and fifth-ranked (infliximab) active treatment is 1.42, and among the middle three treatments, pairwise odds ratios range from 0.85 to 1.18 with all credible intervals crossing 1.

### Caveats on Treatment Rankings

Rankings from network meta-analysis should be interpreted with several caveats:

- **SUCRA values are probabilities, not effect sizes.** A SUCRA of 87% does not mean that a treatment achieves ACR50 in 87% of patients; it means that the treatment has an 87% probability of being among the better options in this network.

- **Small differences in SUCRA can reflect large uncertainty.** The difference between etanercept (SUCRA 65.1%) and adalimumab (SUCRA 58.3%) corresponds to heavily overlapping posterior distributions and a non-significant pairwise OR of 1.07 (95% CrI 0.78 to 1.47).

- **Rankings do not account for safety, tolerability, route of administration, or cost.** Treatment selection should integrate efficacy rankings with patient preferences, comorbidities, and practical considerations.

- **Rankings can be sensitive to the choice of outcome.** The ranking order for ACR50 may differ from rankings based on ACR20, ACR70, or radiographic progression outcomes.
