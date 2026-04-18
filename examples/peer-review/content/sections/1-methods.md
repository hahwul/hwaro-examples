+++
title = "1. Methods"
description = "Sample selection, difference-in-differences design, coding procedures for reviewer reports, and matched control journal pairing."
weight = 1
template = "post"
tags = ["methods", "design", "sampling"]
categories = ["sections"]
[extra]
section_number = "1"
+++

## Study Design

We employ a quasi-experimental difference-in-differences (DiD) design to estimate the causal effect of transparent peer review on manuscript quality outcomes. The treatment group comprises eight journals that transitioned from closed to transparent peer review between 2020 and 2024. The control group comprises eight matched journals that maintained closed peer review throughout the study period.

## Treatment Journals

Eight journals transitioned to transparent peer review during our study window:

| Journal | Discipline | Transition Year |
|---|---|---|
| *Journal of Quantitative Ecology* | Ecology | 2020 |
| *Open Sociology Review* | Sociology | 2020 |
| *Annals of Applied Statistics* | Statistics | 2021 |
| *Journal of Computational Linguistics* | Linguistics/CS | 2021 |
| *Cognitive Development Quarterly* | Psychology | 2022 |
| *European Journal of Political Theory* | Political Science | 2022 |
| *Integrative Biology Letters* | Biology | 2023 |
| *Open Mathematics Research* | Mathematics | 2024 |

## Matched Control Journals

Control journals were matched to treatment journals on:

- Discipline and subfield
- Impact factor (within 20% in year before treatment)
- Annual submission volume (within 15%)
- Review model characteristics (double-blind vs. single-blind)
- Publisher and indexing status

The matching yielded eight treatment-control pairs with mean impact factor difference of 0.08 (SE 0.12) and mean submission volume difference of 7.2% (SE 3.4%).

## Sample

The full analytic sample comprises:

- **Treatment manuscripts:** 1,847 submitted in the 2 years before transition + 1,553 submitted in 2 years after transition
- **Control manuscripts:** 1,732 submitted in parallel pre-period + 1,496 submitted in parallel post-period

## Coding Procedures

Three independent coders (blind to condition and time period) rated each reviewer report on:

- **Report length:** Word count (automated)
- **Thoroughness:** 1-5 Likert scale assessing coverage of methods, analysis, and interpretation
- **Tone:** 1-5 Likert scale (1 = dismissive, 5 = constructive)
- **Specificity:** Count of specific, actionable suggestions

Inter-rater reliability was high (ICC = 0.86 for thoroughness, 0.79 for tone, 0.91 for specificity).

## Statistical Analysis

The primary DiD model is:

```
Y_ijt = alpha + beta_1 * Treatment_j + beta_2 * Post_t
        + beta_3 * (Treatment_j * Post_t) + X_ijt * gamma + e_ijt
```

where Y_ijt is the outcome for manuscript i in journal j at time t, Treatment_j indicates treatment journals, Post_t indicates post-transition periods, and X_ijt is a vector of manuscript-level controls (length, field, author count, first-author seniority).

Standard errors are clustered at the journal level to account for within-journal correlation.
