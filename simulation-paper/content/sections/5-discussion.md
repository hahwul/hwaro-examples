+++
title = "5. Discussion"
description = "Interpretation of SIR-ABM results, comparison to prior models, methodological limitations, and directions for future work."
weight = 5
template = "post"
tags = ["paper", "computational", "simulation"]
categories = ["sections"]
[extra]
section_number = "5"
+++

## 5.1 Principal findings

The SIR-ABM model reproduces empirical epidemic dynamics with a mean absolute percentage error of 4.2 pct across three diverse outbreak datasets. The modular architecture enables independent validation of each component, and the ABC-SMC calibration produces well-characterised posterior distributions for all 14 free parameters.

The sensitivity analysis identifies transmission probability (beta) and workplace contact degree (k_w) as the dominant drivers of uncertainty in the final attack rate, collectively accounting for 48 pct of first-order variance. Intervention timing (theta) is the third most influential parameter, underscoring the importance of early detection and rapid policy response.

## 5.2 Comparison to prior models

Our MAPE of 4.2 pct compares favourably to published agent-based epidemic models. Ferguson et al. (2020) reported a MAPE of 6.8 pct for a comparable model with homogeneous mixing within workplaces. Kucharski et al. (2021) achieved 3.1 pct MAPE but on a single dataset with extensive calibration data.

The modular architecture is a methodological contribution. Existing frameworks (e.g., EMOD, OpenABM-Covid19) tend toward monolithic designs that make independent module validation difficult. SIR-ABM's separated interfaces reduce the risk of compensatory errors between modules.

## 5.3 Limitations

Four limitations warrant discussion:

1. **Static demographics** -- the model does not account for births, deaths from non-epidemic causes, or migration during the simulation period. For outbreaks shorter than one year, this is a minor concern; for endemic modelling, demographic turnover would need to be incorporated.
2. **Binary intervention** -- the intervention module implements a single step-change in contact rates. Real-world interventions are graduated, partial, and heterogeneous across subpopulations. Future versions should support multi-level policy schedules.
3. **Structural identifiability** -- the mild bimodality in the posterior of the community contact weight (w_c) suggests a structural identifiability issue between w_c and k_c. Additional data sources (e.g., mobility data) would help resolve this.
4. **Computational cost** -- at approximately 52 hours for a full calibration run on 16 cores, the ABC-SMC procedure is expensive. Surrogate-based approaches (e.g., neural network emulators) could reduce this by an order of magnitude.

## 5.4 Future work

Three directions are planned:

1. **Vaccination module** -- adding a fourth state (V) and vaccination scheduling to the transmission engine
2. **Spatial structure** -- extending the community layer to a geographically-weighted network
3. **Real-time calibration** -- developing an online ABC-SMC variant that assimilates new surveillance data as it arrives

## References

<ol class="references-list">
  <li>Nakamura K. Heterogeneous contact networks in epidemic simulation. <em>J Comput Biol.</em> 2024;31(4):201-218.</li>
  <li>World Health Organization. Technical report on respiratory pathogen parameters. WHO/2023/TR-042. 2023.</li>
  <li>Mossong J, Hens N, Breban R, et al. Social contacts and mixing patterns relevant to the spread of infectious diseases. <em>PLoS Med.</em> 2008;5(3):e74.</li>
  <li>Barabasi A-L, Albert R. Emergence of scaling in random networks. <em>Science.</em> 1999;286(5439):509-512.</li>
  <li>Policy Review Panel. Intervention timing recommendations for epidemic preparedness. National Health Board Technical Note 2025-08. 2025.</li>
  <li>Osei-Mensah F, Diallo A. Age-dependent susceptibility in respiratory epidemics: a meta-analysis. <em>Epidemiol Infect.</em> 2025;153:e28.</li>
  <li>Ferguson NM, Laydon D, Nedjati-Gilani G, et al. Impact of non-pharmaceutical interventions to reduce COVID-19 mortality. Imperial College London Report 9. 2020.</li>
  <li>Kucharski AJ, Russell TW, Diamond C, et al. Early dynamics of transmission and control of COVID-19: a mathematical modelling study. <em>Lancet Infect Dis.</em> 2020;20(5):553-558.</li>
  <li>Toni T, Welch D, Strelkowa N, et al. Approximate Bayesian computation scheme for parameter inference and model selection. <em>J R Soc Interface.</em> 2009;6(31):187-202.</li>
  <li>Saltelli A, Annoni P, Azzini I, et al. Variance based sensitivity analysis of model output. <em>Comput Phys Commun.</em> 2010;181(2):259-270.</li>
</ol>
