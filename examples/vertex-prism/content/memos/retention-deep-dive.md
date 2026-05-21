+++
title = "Retention deep-dive — the Q1 cohorts are bending"
date = "2026-05-18"
description = "The Q1-26 cohorts are showing a different retention shape than every prior quarter. Here is what we think it is, and what we are doing about it."
tags = ["retention", "cohorts"]
domains = ["growth"]
+++

The Q1-26 cohorts — the customers who first paid us between January and March of this year — have a visibly different retention shape than every prior quarter we have shipped a memo about. We want to walk through what the shape is, what we think is causing it, and what we are doing in the product to push back.

## The shape

For Q4-25 and earlier, the customer's first-month retention sits at around 92 percent and the curve flattens out near 81 percent by month six. The shape is concave from above — the bulk of the churn happens in the first 30 days, and the curve is well-approximated by an exponential decay with a half-life around 18 months.

For Q1-26, the first-month retention is **higher** than the previous baseline — about 94 percent — but the curve does *not* flatten in the same place. Instead, the second and third month retentions are softer, sitting at 88 and 84 percent respectively, against a baseline of 89 and 86. By the time we look at month six, the curves cross and the new cohort is **two points below** the trailing baseline.

## What we think it is

We launched a 14-day free trial in late December that materially lowered the activation friction. The first-month numbers look stronger because we are letting more lukewarm customers convert; the third-month numbers look softer because those same lukewarm customers churn as soon as they hit a real billing cycle. The net cohort half-life has dropped from 18 months to 15.4 months, which is a meaningful enough move that we want to be careful before we extrapolate it.

## What we are doing

The growth team has shipped two interventions:

- A **payment-method-on-file** prompt during the trial. Early A/B reads suggest a 6.4 point lift in trial-to-paid conversion among the lukewarm population.
- A **30-day check-in** email sequence that surfaces three specific activation events. We are reading conversion and ignoring open rates.

We will reread the cohort surface in the June memo. We are not changing the trial back; the gross-add lift is too large to give up on a three-month read.
