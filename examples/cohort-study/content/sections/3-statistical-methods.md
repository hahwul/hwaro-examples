+++
title = "3. Statistical Methods"
description = "Kaplan-Meier survival estimation, Cox proportional hazards regression, DAG-guided confounder selection, and sensitivity analyses for the cohort analysis."
weight = 3
template = "post"
tags = ["cohort", "survival-analysis", "Cox-regression"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## 3.1 Time-to-event definition

The primary outcome was incident haematological malignancy (ICD-10 codes C81-C96), ascertained through linkage with the National Cancer Registry. Person-time accrued from the date of enrollment to the earliest of: diagnosis of haematological malignancy, death from any cause, emigration, or administrative censoring at 31 December 2023.

## 3.2 Kaplan-Meier estimation

Non-parametric survival curves were estimated using the Kaplan-Meier method. Curves were plotted for two exposure strata (below vs above median cumulative exposure) and for all four quartiles. Differences between curves were assessed with the log-rank test. Number-at-risk tables were displayed at 5-year intervals.

## 3.3 Cox proportional hazards models

The primary analysis used Cox proportional hazards regression with cumulative benzene exposure modelled as a categorical variable (quartiles). The proportional hazards assumption was tested using Schoenfeld residuals and visual inspection of log(-log(survival)) plots. No violation was detected (global test p = 0.42).

## 3.4 Confounder selection via DAG

A directed acyclic graph (DAG) was constructed a priori to identify the minimal sufficient adjustment set for estimating the total effect of benzene exposure on haematological malignancy. The DAG identified age at entry, sex, smoking status (pack-years), and co-exposure to toluene and xylene as confounders. Body mass index and alcohol consumption were identified as non-confounders and were not included in the primary model.

## 3.5 Sensitivity analyses

Four sensitivity analyses were conducted: (a) excluding the first 5 years of follow-up to address reverse causation, (b) using continuous cumulative exposure with restricted cubic splines (4 knots), (c) treating exposure as a time-varying covariate updated annually, and (d) applying inverse probability of censoring weights to address informative censoring.
