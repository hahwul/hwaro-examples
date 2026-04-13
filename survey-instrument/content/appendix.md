+++
title = "Appendix"
description = "Scoring syntax, translations under development, item-level descriptive statistics, pre-registered protocol deviations, author declarations, and reproducibility notes."
tags = ["paper", "survey", "instrument"]
+++

<p class="paper-section-eyebrow">Supplementary materials</p>

# Appendix

## A. Scoring syntax

Subscale and composite scoring in R is provided as:

```r
library(dplyr)
basis25_score <- function(df, item_cols) {
  subscales <- list(
    access     = item_cols[1:5],
    comm       = item_cols[6:10],
    compr      = item_cols[11:15],
    autonomy   = item_cols[16:20],
    environ    = item_cols[21:25]
  )
  for (name in names(subscales)) {
    cols <- subscales[[name]]
    df[[name]] <- rowMeans(
      df[, cols, drop = FALSE],
      na.rm = TRUE
    )
  }
  df$basis25_composite <- rowMeans(
    df[, c("access","comm","compr","autonomy","environ")],
    na.rm = TRUE
  )
  df
}
```

## B. Protocol deviations

The pre-registered analysis plan (OSF, 2025-06-12) specified a four-factor solution. During EFA the five-factor solution fit markedly better (parallel analysis, Kaiser criterion, and scree plot all converged on five factors). The decision to report the five-factor solution was made transparently and the four-factor solution is reported in supplementary Table S1 for completeness.

## C. Translations under development

- **Korean:** translation complete, cognitive pretest scheduled for Q3 2026
- **Spanish:** translation in progress, back-translation in review
- **Portuguese (Brazilian):** pending authorization from collaborating group

Translations will be published as companion papers in the journal's cross-cultural methodology series.

## D. Data and code availability

- **Model code:** available at the supplementary repository (see title page)
- **Analysis scripts:** R 4.3.1 with `psych`, `lavaan`, and `semTools` packages
- **Random seed:** `set.seed(20260212)` reproduces the figures exactly
- **Individual-level data:** available under a data-use agreement (see Appendix F)

## E. Author contributions (CRediT)

- **H. Park:** Conceptualization, Methodology, Formal analysis, Writing - original draft
- **S. Okafor:** Methodology, Validation, Writing - review and editing
- **J. Brennan:** Investigation, Data curation
- **R. Moreno-Diaz:** Software, Formal analysis
- **N. Tessema:** Supervision, Funding acquisition

## F. Declaration of interests

All authors declare no competing financial interests. The study was supported by a grant from the Brandt University Center for Psychometric Research (grant 24-CPR-0098). The BASIS-25 instrument is released under CC BY 4.0 and may be used, adapted, and translated without restriction provided the original citation is retained.

## G. Correspondence

Correspondence to Hyewon Park, Department of Psychometrics, Brandt University. Email addresses for all authors are provided in the title page.
