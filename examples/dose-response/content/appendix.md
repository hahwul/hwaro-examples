+++
title = "Appendix"
description = "Supplementary methods, statistical analysis details, and author information."
tags = ["paper", "dose-response", "appendix"]
+++

## Appendix A: Cell Line and Assay Conditions

All dose-response experiments were conducted in HEL 92.1.7 erythroleukemia cells (ATCC TIB-180) maintained in RPMI-1640 supplemented with 10 pct FBS. Cells were seeded at 5,000 cells per well in 384-well plates and treated for 4 hours. JAK2 phosphorylation was quantified by AlphaLISA SureFire assay (PerkinElmer). Each concentration was tested in triplicate across three independent experiments.

## Appendix B: Curve Fitting Methods

Dose-response curves were fitted using a four-parameter logistic model (Hill equation): E = Bottom + (Top - Bottom) / (1 + (EC50/C)^n), where E is effect, C is concentration, and n is the Hill coefficient. Fitting was performed in R (v4.3.2) using the drc package (v3.0-1). Confidence intervals were derived from 1,000 bootstrap resamples with bias-corrected and accelerated (BCa) percentile method.

## Appendix C: Combination Index Calculation

The Chou-Talalay combination index was calculated using CompuSyn software (v1.0.1). The median-effect equation (fa/fu = (D/Dm)^m) was used to derive parameters for each drug individually and in combination. CI values were calculated at fa = 0.1, 0.3, 0.5, 0.7, and 0.9 using the formula for mutually exclusive mechanisms of action.

## CRediT Author Contributions

- **Kenji Nakamura**: Conceptualization, methodology, formal analysis, writing (original draft)
- **Luciana Ferreira**: Investigation, data curation, writing (review and editing)
- **Anders Strand**: ADME profiling, pharmacokinetic modeling, writing (review and editing)
- **Nkechi Okafor**: Combination index analysis, visualization, writing (review and editing)

## Correspondence

Kenji Nakamura, Department of Clinical Pharmacology, Kinase Therapeutics Institute, 200 Discovery Drive, San Diego, CA 92121. Email: nakamura@kti-pharma.org
