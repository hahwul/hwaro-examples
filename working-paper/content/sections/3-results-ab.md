+++
title = "3. Results: Platform A and B"
description = "Audit results for Platform A and Platform B, including disparate impact ratios across protected classes."
weight = 3
template = "post"
tags = ["paper", "results", "platform-a", "platform-b", "complete"]
categories = ["sections"]

[extra]
section_number = 3
+++

<div class="draft-banner">
  <strong>DRAFT v0.3</strong> &mdash; Last updated 2026-04-10 &mdash; Not for citation
</div>

<article class="paper-article">
  <div class="paper-wrap">

<header class="paper-section-header">
  <div class="paper-section-eyebrow">Section 3</div>
  <h1 class="paper-section-title">Results: Platform A and B</h1>
  <p class="paper-lede">Disparate impact findings from the completed audits of two commercial hiring platforms.</p>
</header>

This section presents the results of our three-stage audit for Platform A and Platform B. Both audits are complete, and the data have been validated through internal replication. Platform C results are presented separately in Section 4 (audit in progress).

### 3.1 Platform A: Overview

Platform A is a large-scale resume screening service used primarily in the technology and finance sectors. It processes candidate profiles through a machine learning model that produces a "fit score" on a 0-100 scale. Candidates scoring above a platform-configured threshold are flagged for human review.

**Stage 1 (Input).** Analysis of Platform A's publicly documented training methodology indicates that the model was trained on historical hiring decisions from a pool of approximately 500 client companies. No information was available about the demographic composition of the training data. Feature inspection through the API revealed that Platform A uses 47 extracted features, including 3 with high proxy potential for age (graduation year, years of experience, technology stack vintage) and 2 with moderate proxy potential for gender (name-derived features, which the platform claims are "anonymised" but which retain phonemic information).

**Stage 2 (Process).** Counterfactual testing revealed significant sensitivity to age-related signals. Matched profile pairs differing only in graduation year (holding all other qualifications constant) showed a mean score difference of 8.3 points (95% CI: 6.1-10.5) favouring younger candidates. Gender-based counterfactuals showed smaller but statistically significant differences in technical role categories (mean difference: 4.7 points, 95% CI: 2.9-6.5).

**Stage 3 (Outcome).** The following table presents disparate impact ratios for Platform A across protected classes at the screening stage (threshold = top 30% of scores).

<table class="paper-table">
  <thead>
    <tr>
      <th>Protected Class</th>
      <th>Comparison</th>
      <th>DIR</th>
      <th>95% CI</th>
      <th>p-value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Age</td>
      <td>45+ vs. 25-34</td>
      <td>0.71</td>
      <td>[0.65, 0.77]</td>
      <td>&lt; 0.001</td>
    </tr>
    <tr>
      <td>Age</td>
      <td>55+ vs. 25-34</td>
      <td>0.58</td>
      <td>[0.49, 0.67]</td>
      <td>&lt; 0.001</td>
    </tr>
    <tr>
      <td>Gender</td>
      <td>Female vs. Male (tech roles)</td>
      <td>0.78</td>
      <td>[0.71, 0.85]</td>
      <td>&lt; 0.01</td>
    </tr>
    <tr>
      <td>Gender</td>
      <td>Female vs. Male (all roles)</td>
      <td>0.89</td>
      <td>[0.83, 0.95]</td>
      <td>0.04</td>
    </tr>
    <tr>
      <td>Race</td>
      <td>Black vs. White</td>
      <td>0.91</td>
      <td>[0.84, 0.98]</td>
      <td>0.12</td>
    </tr>
    <tr>
      <td>Race</td>
      <td>Hispanic vs. White</td>
      <td>0.93</td>
      <td>[0.86, 1.00]</td>
      <td>0.21</td>
    </tr>
    <tr>
      <td>Disability</td>
      <td>Physical vs. None</td>
      <td>0.96</td>
      <td>[0.89, 1.03]</td>
      <td>0.38</td>
    </tr>
  </tbody>
</table>

<div class="caption"><span class="fig-num">Table 1.</span> Disparate impact ratios for Platform A at the screening stage. Values below 0.80 (bolded threshold per the four-fifths rule) indicate potential disparate impact. p-values are Benjamini-Hochberg adjusted.</div>

Platform A shows clear age discrimination, with candidates over 45 falling well below the four-fifths threshold. The age effect is most pronounced for candidates over 55, where the DIR drops to 0.58 -- strong evidence of disparate impact. Gender disparities are significant in technical roles but fall just below the four-fifths threshold. Racial and disability disparities do not reach statistical significance at the screening stage.

### 3.2 Platform B: Overview

Platform B is a hiring recommendation system that combines resume screening with a structured assessment component. Unlike Platform A's single score, Platform B produces a three-category recommendation: "strong recommend," "recommend," and "not recommended."

**Stage 1 (Input).** Platform B was the only platform to provide partial documentation of its model architecture. The system uses a gradient-boosted decision tree with 200 estimators and a maximum depth of 8. The platform applies a post-hoc calibration step intended to equalise recommendation rates across demographic groups. The training data comprises decisions from approximately 200 client companies, with a stated demographic balance requirement in the training pipeline. Feature inspection revealed 62 extracted features, with fewer high-proxy variables than Platform A (1 for age, 0 for gender after name anonymisation).

**Stage 2 (Process).** Counterfactual testing showed minimal sensitivity to gender and age signals, consistent with Platform B's fairness-aware design. However, racial counterfactuals revealed moderate sensitivity at the interview-recommendation stage (not the initial screening stage). Matched pairs with racially signalling names showed a mean recommendation-category difference of 0.31 categories (95% CI: 0.12-0.50) disfavouring Black candidates.

**Stage 3 (Outcome).** The following table presents disparate impact ratios for Platform B at two stages: initial screening ("recommend" or above) and interview recommendation ("strong recommend" only).

<table class="paper-table">
  <thead>
    <tr>
      <th>Protected Class</th>
      <th>Comparison</th>
      <th>Stage</th>
      <th>DIR</th>
      <th>95% CI</th>
      <th>p-value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Age</td>
      <td>45+ vs. 25-34</td>
      <td>Screen</td>
      <td>0.94</td>
      <td>[0.88, 1.00]</td>
      <td>0.27</td>
    </tr>
    <tr>
      <td>Age</td>
      <td>45+ vs. 25-34</td>
      <td>Interview</td>
      <td>0.91</td>
      <td>[0.83, 0.99]</td>
      <td>0.09</td>
    </tr>
    <tr>
      <td>Gender</td>
      <td>Female vs. Male</td>
      <td>Screen</td>
      <td>0.97</td>
      <td>[0.92, 1.02]</td>
      <td>0.51</td>
    </tr>
    <tr>
      <td>Gender</td>
      <td>Female vs. Male</td>
      <td>Interview</td>
      <td>0.95</td>
      <td>[0.88, 1.02]</td>
      <td>0.34</td>
    </tr>
    <tr>
      <td>Race</td>
      <td>Black vs. White</td>
      <td>Screen</td>
      <td>0.93</td>
      <td>[0.87, 0.99]</td>
      <td>0.14</td>
    </tr>
    <tr>
      <td>Race</td>
      <td>Black vs. White</td>
      <td>Interview</td>
      <td>0.82</td>
      <td>[0.73, 0.91]</td>
      <td>&lt; 0.05</td>
    </tr>
    <tr>
      <td>Race</td>
      <td>Hispanic vs. White</td>
      <td>Screen</td>
      <td>0.96</td>
      <td>[0.90, 1.02]</td>
      <td>0.41</td>
    </tr>
    <tr>
      <td>Race</td>
      <td>Hispanic vs. White</td>
      <td>Interview</td>
      <td>0.90</td>
      <td>[0.81, 0.99]</td>
      <td>0.08</td>
    </tr>
    <tr>
      <td>Disability</td>
      <td>Physical vs. None</td>
      <td>Screen</td>
      <td>0.98</td>
      <td>[0.92, 1.04]</td>
      <td>0.62</td>
    </tr>
  </tbody>
</table>

<div class="caption"><span class="fig-num">Table 2.</span> Disparate impact ratios for Platform B at two pipeline stages. Platform B shows more uniform outcomes at the screening stage but racial disparities emerge at the interview-recommendation stage.</div>

Platform B presents a notably different pattern from Platform A. Its fairness-aware calibration appears effective at the initial screening stage, where no protected class falls below the four-fifths threshold. However, the calibration does not fully extend to the interview-recommendation stage, where Black candidates show a DIR of 0.82 -- just above the threshold but statistically significant. This suggests that Platform B's fairness interventions may be targeting the wrong pipeline stage, or that bias enters through mechanisms not captured by the calibration step.

### 3.3 Cross-Platform Comparison (A vs. B)

Comparing the two platforms reveals important differences in both the magnitude and the pattern of disparate impact:

- **Age bias** is the dominant concern for Platform A (DIR = 0.71 for 45+) but is largely absent in Platform B (DIR = 0.94 at screening). This likely reflects differences in training data and feature sets: Platform A uses several age-proxy features that Platform B has removed.
- **Gender bias** is present in Platform A for technical roles (DIR = 0.78) but effectively eliminated in Platform B through name anonymisation and calibration.
- **Racial bias** shows the opposite pattern: Platform A shows no significant racial disparities, while Platform B shows moderate racial bias at the interview stage (DIR = 0.82 for Black candidates). This finding suggests that Platform B's calibration may inadvertently shift bias from one dimension to another.
- **Disability** shows no significant disparate impact on either platform at any stage.

These findings underscore a central theme of our framework: algorithmic bias is not a monolithic property of a system but varies across platforms, protected classes, pipeline stages, and job categories. Single-metric evaluations (e.g., "this platform is fair" or "this platform is biased") are insufficient. Comprehensive auditing requires the multi-dimensional approach our framework provides.

### 3.4 Intersectional Analysis

Intersectional analysis for Platforms A and B reveals compound effects that are masked by single-axis analysis:

- On Platform A, **older women in technical roles** face the strongest combined disadvantage (DIR = 0.54, p < 0.001), significantly worse than either the age-only or gender-only DIR would predict.
- On Platform B, **Black women** at the interview stage show a DIR of 0.76 (p < 0.05), below the four-fifths threshold, even though neither Black candidates nor women individually fall below the threshold at that stage.

These intersectional findings highlight the importance of Stage 3's intersectional analysis component and suggest that regulatory frameworks based solely on single-axis demographic comparisons may miss significant patterns of compound discrimination.

<div class="paper-section-footer">
  <a href="/sections/2-framework/">&larr; Previous: Audit Framework</a> &nbsp;&middot;&nbsp; <a href="/sections/4-results-c/">Next: Results Platform C &rarr;</a>
</div>

  </div>
</article>
