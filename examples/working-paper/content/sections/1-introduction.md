+++
title = "1. Introduction"
description = "Background on algorithmic fairness in automated hiring systems and the need for systematic audit frameworks."
weight = 1
template = "post"
tags = ["paper", "introduction", "complete"]
categories = ["sections"]

[extra]
section_number = 1
+++

<div class="draft-banner">
  <strong>DRAFT v0.3</strong> &mdash; Last updated 2026-04-10 &mdash; Not for citation
</div>

<article class="paper-article">
  <div class="paper-wrap">

<header class="paper-section-header">
  <div class="paper-section-eyebrow">Section 1</div>
  <h1 class="paper-section-title">Introduction</h1>
</header>

The deployment of automated decision-making systems in employment has accelerated dramatically over the past decade. Industry estimates suggest that more than 80 percent of large employers now use some form of algorithmic screening in their hiring pipelines, ranging from resume parsing and keyword matching to sophisticated machine learning models that predict candidate "fit" or "potential" based on historical hiring data. These systems promise significant advantages: reduced time-to-hire, consistency in evaluation criteria, and the elimination of certain forms of human bias such as interviewer fatigue or halo effects.

However, a growing body of research demonstrates that algorithmic hiring systems can introduce their own forms of bias, often in ways that are less visible and harder to contest than traditional human decision-making. When trained on historical data that reflects existing patterns of discrimination, machine learning models can learn to replicate and even amplify those patterns. A resume screening model trained on a company's past hiring decisions may learn that candidates from certain demographic groups are less likely to be hired -- not because those candidates are less qualified, but because the historical data encodes the preferences and prejudices of previous human decision-makers.

### 1.1 The Disparate Impact Framework

In employment law, disparate impact refers to practices that are facially neutral but disproportionately affect members of a protected class. The concept originated in the United States Supreme Court's decision in Griggs v. Duke Power Co. (1971) and has since been adopted, in various forms, across multiple jurisdictions. The European Union's approach through the AI Act and the Algorithmic Accountability Act proposals in the United States share the core principle that outcomes, not just intentions, matter when evaluating fairness.

The standard quantitative measure for disparate impact is the four-fifths rule, which states that a selection rate for any protected group that is less than 80 percent of the rate for the group with the highest selection rate constitutes prima facie evidence of adverse impact. This is captured by the disparate impact ratio (DIR):

> DIR = (selection rate for disadvantaged group) / (selection rate for advantaged group)

A DIR below 0.80 triggers concern; a DIR below 0.60 is generally considered strong evidence of disparate impact. While the four-fifths rule has well-known limitations -- it is sensitive to sample size, does not account for multiple comparisons, and may not capture intersectional discrimination -- it remains the most widely used quantitative standard in both legal and technical contexts.

### 1.2 Limitations of Existing Audit Approaches

Previous efforts to audit algorithmic hiring systems have taken several approaches. Correspondence studies (Raghavan et al., 2020; Chen et al., 2023) submit paired applications that differ only in demographic signals and measure differential callback rates. Algorithm inspection studies (Raji et al., 2020) examine the internal mechanics of specific systems through code review or model interrogation. Outcome studies (Wilson et al., 2021) analyse aggregate hiring data to identify statistical disparities.

Each approach has limitations. Correspondence studies are labour-intensive and platform-specific. Algorithm inspection requires access to proprietary code that companies rarely grant. Outcome studies rely on data that may not include the demographic information needed for disparity analysis, and they cannot distinguish between algorithmic bias and pre-existing differences in the applicant pool.

What has been missing is a unified framework that combines elements of all three approaches into a reproducible, platform-agnostic audit methodology. Such a framework would allow researchers and regulators to systematically evaluate any automated hiring system, regardless of its specific technical implementation, and to compare results across platforms in a standardised way.

### 1.3 Our Contribution

This paper addresses that gap. We propose a three-stage audit framework that integrates input analysis, process auditing, and outcome measurement into a single coherent methodology. The framework is designed to be:

- **Reproducible**: All steps are fully specified and can be replicated by independent researchers.
- **Platform-agnostic**: The framework applies to any automated hiring system, regardless of the underlying technology.
- **Legally grounded**: Our measures map directly onto the legal standards for disparate impact in the EU and US.
- **Scalable**: The use of synthetic applicant profiles allows large-sample audits without requiring access to real candidate data.

We apply this framework to three commercial hiring platforms (anonymised as Platform A, Platform B, and Platform C), using a synthetic applicant pool of 12,000 profiles with controlled demographic variation across race, gender, age, and disability status. Our results reveal significant variation in fairness outcomes across platforms and demographic categories, suggesting that algorithmic bias in hiring is neither universal nor uniform -- and that platform-specific auditing is essential.

### 1.4 Paper Organisation

The remainder of this paper is organised as follows. Section 2 describes the three-stage audit framework in detail. Section 3 presents the results for Platform A and Platform B, which have been fully audited. Section 4 presents preliminary results for Platform C (audit in progress). Section 5 discusses the implications of our findings for researchers, practitioners, and policymakers.

<div class="paper-section-footer">
  <a href="/">&larr; Back to abstract</a> &nbsp;&middot;&nbsp; <a href="/sections/2-framework/">Next: Audit Framework &rarr;</a>
</div>

  </div>
</article>
