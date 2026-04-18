+++
title = "Methods at a glance"
description = "Summary view of the Markov state-transition model, parameter ranges, and analytic framework. The full methods section is Section 2 of the manuscript."
tags = ["paper", "economics", "cost-effectiveness"]
+++

<p class="paper-section-eyebrow">Methods summary</p>

# Methods at a glance

The full methods description is in [Section 2 of the manuscript](/sections/2-methods/). This page presents a condensed visual summary intended for readers who want an overview before reading the full text.

## Model architecture

- **Type:** Six-state Markov microsimulation
- **Cycle length:** 1 year
- **Horizon:** Lifetime (until death, censored at age 100)
- **Cohort:** 1,000,000 simulated individuals, age 45 at entry
- **Perspective:** Healthcare sector (base); societal (scenario)
- **Discounting:** 3.0 pct annually, costs and effects

## Six states

1. **S1. Healthy**
2. **S2. Early-stage (asymptomatic)**
3. **S3. Early-stage (diagnosed)**
4. **S4. Late-stage**
5. **S5. Post-treatment**
6. **S6. Death** (absorbing)

See **Figure 2** in the full methods section for the state-transition diagram.

## Decision rule

- Primary: ICER &lt; $50,000 per QALY
- Report: Acceptability curve from $0 to $150,000 per QALY

## Sensitivity analyses

- One-way deterministic (tornado) across 95 pct ranges from Table 2
- Probabilistic (PSA), 10,000 Monte Carlo iterations
- Scenario: societal perspective, triennial alternative, age-at-first-screen subgroups

## Software and reproducibility

All analyses were conducted in R 4.3.1. Model code and input parameter files are available on the repository linked in the supplementary appendix. The random seed used for PSA is documented in the appendix; identical random seeds will reproduce the scatter plot in Figure 1 exactly.
