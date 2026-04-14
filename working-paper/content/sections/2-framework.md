+++
title = "2. Audit Framework"
description = "The three-stage audit framework for evaluating disparate impact in automated hiring systems."
weight = 2
template = "post"
tags = ["paper", "methods", "framework", "complete"]
categories = ["sections"]

[extra]
section_number = 2
+++

<div class="draft-banner">
  <strong>DRAFT v0.3</strong> &mdash; Last updated 2026-04-10 &mdash; Not for citation
</div>

<article class="paper-article">
  <div class="paper-wrap">

<header class="paper-section-header">
  <div class="paper-section-eyebrow">Section 2</div>
  <h1 class="paper-section-title">Audit Framework</h1>
  <p class="paper-lede">A three-stage, platform-agnostic methodology for auditing disparate impact in automated hiring systems.</p>
</header>

Our framework comprises three stages, each targeting a different aspect of the hiring pipeline. The stages are designed to be applied sequentially, though they can also be used independently depending on the level of access available for a given platform.

<div class="figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 200" width="680" height="200">
  <rect x="0" y="0" width="680" height="200" fill="#fafaf7"/>
  <text x="340" y="22" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="12" fill="#1a2030" letter-spacing="0.08em">THREE-STAGE AUDIT FRAMEWORK</text>
  <line x1="40" y1="34" x2="640" y2="34" stroke="#d4cfc2" stroke-width="1"/>

  <!-- Stage 1 -->
  <rect x="40" y="50" width="180" height="110" fill="#ffffff" stroke="#d4cfc2" stroke-width="1.5" rx="3"/>
  <rect x="40" y="50" width="180" height="26" fill="#eaf5ef" rx="3"/>
  <rect x="40" y="73" width="180" height="1" fill="#d4cfc2"/>
  <text x="130" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#3a7d5c">Stage 1: Input</text>
  <text x="55" y="92" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Training data</text>
  <text x="55" y="106" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">representativeness</text>
  <text x="55" y="124" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Feature encoding</text>
  <text x="55" y="138" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Proxy variable</text>
  <text x="55" y="152" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">identification</text>

  <!-- Arrow 1-2 -->
  <line x1="224" y1="105" x2="246" y2="105" stroke="#d4cfc2" stroke-width="1.5"/>
  <polygon points="246,100 256,105 246,110" fill="#d4cfc2"/>

  <!-- Stage 2 -->
  <rect x="260" y="50" width="180" height="110" fill="#ffffff" stroke="#d4cfc2" stroke-width="1.5" rx="3"/>
  <rect x="260" y="50" width="180" height="26" fill="#eaf5ef" rx="3"/>
  <rect x="260" y="73" width="180" height="1" fill="#d4cfc2"/>
  <text x="350" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#3a7d5c">Stage 2: Process</text>
  <text x="275" y="92" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Algorithmic inspection</text>
  <text x="275" y="106" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">(where accessible)</text>
  <text x="275" y="124" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Counterfactual testing</text>
  <text x="275" y="138" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Sensitivity analysis</text>

  <!-- Arrow 2-3 -->
  <line x1="444" y1="105" x2="466" y2="105" stroke="#d4cfc2" stroke-width="1.5"/>
  <polygon points="466,100 476,105 466,110" fill="#d4cfc2"/>

  <!-- Stage 3 -->
  <rect x="480" y="50" width="180" height="110" fill="#ffffff" stroke="#d4cfc2" stroke-width="1.5" rx="3"/>
  <rect x="480" y="50" width="180" height="26" fill="#eaf5ef" rx="3"/>
  <rect x="480" y="73" width="180" height="1" fill="#d4cfc2"/>
  <text x="570" y="68" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#3a7d5c">Stage 3: Outcome</text>
  <text x="495" y="92" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Disparate impact ratios</text>
  <text x="495" y="106" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Statistical significance</text>
  <text x="495" y="124" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Bootstrap CIs</text>
  <text x="495" y="138" font-family="Crimson Pro, serif" font-size="10" fill="#3a3f4c">Intersectional analysis</text>

  <!-- Bottom note -->
  <text x="340" y="185" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="9" fill="#8a8d96">Each stage produces independent findings and can be applied separately if full access is not available.</text>
</svg>
<div class="caption"><span class="fig-num">Figure 2.</span> Overview of the three-stage audit framework. Stages proceed left to right but can be applied independently.</div>
</div>

### 2.1 Stage 1: Input Analysis

The first stage examines the data that feeds the algorithmic system. For hiring platforms, this includes the training data used to build predictive models, the features extracted from candidate profiles, and the encoding schemes that translate qualitative information into numerical representations.

**Training data representativeness.** We assess whether the training data reflects the demographic composition of the relevant labour market. Significant underrepresentation of protected groups in training data is a well-established source of algorithmic bias, as models trained on skewed data may learn to treat majority-group characteristics as normative.

**Feature encoding.** We examine how candidate attributes are encoded for algorithmic processing. Of particular concern are features that may serve as proxies for protected characteristics. For example, zip codes may proxy for race, graduation year for age, and name-based features for gender or ethnicity. We catalogue all features used by each platform and flag those with high proxy potential using mutual information analysis.

**Proxy variable identification.** We apply a systematic proxy detection method based on conditional mutual information. For each feature *f* and protected attribute *p*, we compute I(f; p | Y), where Y is the hiring outcome. Features with high conditional mutual information are flagged as potential proxies, even if they are not directly correlated with the protected attribute in the unconditional distribution.

### 2.2 Stage 2: Process Auditing

The second stage examines the algorithm itself, to the extent that access permits.

**Algorithmic inspection (Stage 2a).** Where platform operators provide access to model architecture, training procedures, or feature importance rankings, we conduct a direct inspection. This includes reviewing model documentation, examining feature weights or SHAP values, and assessing whether fairness constraints are incorporated into the objective function.

In practice, few platforms grant this level of access. For the three platforms in our study, only Platform B provided partial documentation of its model architecture (a gradient-boosted decision tree with post-hoc calibration). Platforms A and C declined to share technical details beyond marketing materials.

**Counterfactual testing (Stage 2b).** To overcome the limitations of algorithmic inspection, we implement a counterfactual testing protocol. For each synthetic applicant profile, we generate matched counterfactual pairs that differ only in demographic signals (e.g., name, which can signal gender and ethnicity). We then submit both profiles to the platform and measure differential outcomes.

Our counterfactual testing protocol uses the following procedure:

1. **Baseline profile generation.** Create a standardised profile with fixed qualifications, experience, and skills.
2. **Demographic signal manipulation.** Modify only the demographic signals (name, graduation year, address) while holding all substantive qualifications constant.
3. **Submission and measurement.** Submit both profiles and record all platform outputs (ranking scores, recommendation labels, interview flags).
4. **Statistical comparison.** Compute pairwise differences and test for systematic bias using paired permutation tests.

This protocol was refined during pilot testing (see revision history, v0.2, 2026-02-10) to include additional controls for profile ordering effects and to account for platforms that use randomised elements in their scoring.

**Sensitivity analysis (Stage 2c).** We assess how sensitive platform outcomes are to small perturbations in demographic signals. This helps distinguish between platforms that use demographic information directly and those where bias enters through correlated features.

### 2.3 Stage 3: Outcome Measurement

The third stage measures the aggregate outcomes of the algorithmic system across protected classes.

**Disparate impact ratios.** For each protected class and each decision point in the hiring pipeline (screening, ranking, recommendation, interview selection), we compute the disparate impact ratio as defined in Section 1.1. We report DIR values for each pairwise comparison (e.g., female vs. male, Black vs. White, over-45 vs. under-45).

**Statistical significance.** We test whether observed disparities are statistically significant using two complementary approaches: (i) asymptotic chi-squared tests for proportions, and (ii) permutation tests that make no distributional assumptions. We report both p-values and adjust for multiple comparisons using the Benjamini-Hochberg procedure.

**Bootstrap confidence intervals.** To provide a measure of uncertainty around our DIR estimates, we compute 95% confidence intervals using the bias-corrected and accelerated (BCa) bootstrap with 1,000 resamples. This approach was added in v0.3 to supplement the asymptotic inference (see revision history).

**Intersectional analysis.** We extend the standard single-axis DIR analysis to examine intersectional disparities. For example, we compute DIR separately for Black women, older women, and other intersectional groups. This is essential because single-axis analysis can mask compound discrimination that affects individuals at the intersection of multiple protected categories.

### 2.4 Synthetic Applicant Pool

Rather than relying on real applicant data -- which raises both ethical and practical concerns -- we construct a synthetic applicant pool of 12,000 profiles (4,000 per platform). The profiles are generated using a structured randomisation process:

<table class="paper-table">
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Variation Method</th>
      <th>Levels</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gender</td>
      <td>Name assignment</td>
      <td>Male, Female, Non-binary</td>
    </tr>
    <tr>
      <td>Race/Ethnicity</td>
      <td>Name assignment</td>
      <td>White, Black, Hispanic, Asian, Other</td>
    </tr>
    <tr>
      <td>Age</td>
      <td>Graduation year</td>
      <td>25-34, 35-44, 45-54, 55+</td>
    </tr>
    <tr>
      <td>Disability</td>
      <td>Accommodation request</td>
      <td>None, Physical, Cognitive</td>
    </tr>
    <tr>
      <td>Qualifications</td>
      <td>Fixed tiers</td>
      <td>High, Medium, Low</td>
    </tr>
  </tbody>
</table>

All profiles are designed to be realistic and internally consistent. The randomisation ensures that demographic attributes are orthogonal to qualifications, enabling clean estimation of demographic effects.

<div class="paper-section-footer">
  <a href="/sections/1-introduction/">&larr; Previous: Introduction</a> &nbsp;&middot;&nbsp; <a href="/sections/3-results-ab/">Next: Results A and B &rarr;</a>
</div>

  </div>
</article>
