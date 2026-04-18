+++
title = "Appendix"
description = "Supplementary model code availability, random seeds, reproducibility notes, and conflict-of-interest statements."
tags = ["paper", "economics", "cost-effectiveness"]
+++

<p class="paper-section-eyebrow">Supplementary materials</p>

# Appendix

## A. Reproducibility

All analyses were conducted in R 4.3.1 using the `heemod` and `BCEA` packages. The full model code, parameter input files, and analysis scripts are available in the supplementary repository. The random seed used for PSA (`set.seed(20260214)`) is the ISO date of manuscript submission. Using this seed will reproduce the scatter in Figure 1 exactly.

## B. Deviations from pre-specified protocol

The pre-specified analysis plan (registered on OSF, 2025-08-12) specified a 20-year time horizon. During peer review we were asked to extend to a lifetime horizon. Both sets of results are provided; the lifetime horizon is reported in the main text and the 20-year horizon in the supplementary appendix. Lifetime-horizon ICER is $23,944 per QALY; 20-year horizon ICER is $28,710 per QALY.

## C. Data availability

- Individual-level claims data cannot be shared due to data-use agreement restrictions. Aggregated cost inputs used in the model are tabulated in Table 2.
- Cohort data used to estimate progression probabilities (p_prog, p_detect) are available on request to the original study authors.
- The model is fully specified by the parameters in Table 2 and the state-transition diagram in Figure 2, and can be re-implemented from this paper alone.

## D. Declaration of interests

All authors declare no competing financial interests. No industry funding was received for this analysis. The study was funded by a grant from the Torrance Research Foundation (grant 22-HEE-0411).

## E. Ethics approval

This study is a secondary analysis of de-identified aggregated data and a simulation study. It did not involve human participants directly and was exempt from institutional review board review under the Common Rule.

## F. Author contributions (CRediT)

- **A. Markham:** Conceptualization, Methodology, Formal analysis, Writing - original draft
- **C. O'Brien:** Methodology, Software, Validation
- **R. Tanaka:** Data curation, Formal analysis
- **L. Hendricks:** Writing - review &amp; editing
- **O. Delacroix:** Supervision, Funding acquisition

## G. Correspondence

Correspondence to Alina Markham, School of Public Health, Torrance University. Email addresses for all authors are provided in the title page.
