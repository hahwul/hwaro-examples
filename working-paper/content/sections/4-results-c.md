+++
title = "4. Results: Platform C"
description = "Preliminary and pending results for the Platform C audit. Mostly incomplete -- data access pending."
weight = 4
template = "post"
tags = ["paper", "results", "platform-c", "in-progress", "todo"]
categories = ["sections"]

[extra]
section_number = 4
+++

<div class="draft-banner">
  <strong>DRAFT v0.3</strong> &mdash; Last updated 2026-04-10 &mdash; Not for citation
</div>

<article class="paper-article">
  <div class="paper-wrap">

<header class="paper-section-header">
  <div class="paper-section-eyebrow">Section 4 -- In Progress</div>
  <h1 class="paper-section-title">Results: Platform C</h1>
  <p class="paper-lede">This section is substantially incomplete. The Platform C audit is pending data access. Placeholder structure and preliminary notes are provided below.</p>
</header>

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>This entire section is in progress.</strong> The data access agreement with Platform C is under legal review. Most subsections below contain placeholder text and TODO markers. Estimated completion: 2-3 weeks after data access is granted.</p>
</div>

### 4.1 Platform C: Overview

Platform C is a comprehensive talent management system that integrates resume screening, skills assessment, and video interview analysis into a single pipeline. It is widely used in healthcare, retail, and public sector hiring. Unlike Platforms A and B, Platform C claims to use "bias-free AI" in its marketing materials, making it a particularly important subject for independent audit.

Preliminary information about Platform C has been gathered from public documentation, marketing materials, and published case studies. However, the empirical audit requires API access that is currently under negotiation.

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Complete platform overview.</strong> Add technical details about Platform C's architecture once NDA and data access terms are finalised. Current information is based solely on public sources and may be incomplete or inaccurate.</p>
</div>

### 4.2 Stage 1: Input Analysis

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Conduct input analysis for Platform C.</strong> This stage requires API access to examine feature extraction and encoding. Preliminary review of Platform C's documentation suggests it uses approximately 80 features including video-derived features (facial expression analysis, speech patterns) that may introduce novel forms of bias not present in text-only platforms.</p>
</div>

The video analysis component of Platform C raises unique fairness concerns that are not addressed by our current framework. Video-based features may encode demographic information more directly than text-based features, as facial characteristics, speech patterns, and nonverbal behaviours are strongly correlated with race, gender, age, and disability status. We plan to extend our proxy variable identification methodology (Section 2.1) to address these modalities.

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Extend proxy detection methodology for video features.</strong> Coordinate with Sven on the statistical approach for multimodal proxy detection. This may require additional theoretical development beyond what was pre-registered.</p>
</div>

### 4.3 Stage 2: Process Auditing

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Design and execute counterfactual testing protocol for Platform C.</strong> The counterfactual testing protocol needs to be adapted for Platform C's multi-modal pipeline. Text-based counterfactuals can follow the established protocol (Section 2.2), but video-based counterfactuals require a separate design. Options under consideration:</p>
  <p>(a) Use synthetic video generation to create matched pairs with controlled demographic variation.<br>
  (b) Use real video clips from consenting participants, matched on qualifications and interview content.<br>
  (c) Bypass video analysis and audit only the text-based pipeline components.</p>
  <p>Option (c) is the fallback if technical or ethical constraints prevent video-based testing.</p>
</div>

Preliminary design work for the counterfactual protocol is underway. The key challenge is generating synthetic video profiles that are sufficiently realistic to pass Platform C's quality checks while maintaining controlled demographic variation. We are collaborating with the University of Toronto's Computer Vision Lab on a synthetic video generation pipeline, but this work is not yet complete.

### 4.4 Stage 3: Outcome Measurement

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Run full outcome analysis for Platform C.</strong> This requires:</p>
  <p>1. Finalise data access agreement.<br>
  2. Generate and submit 4,000 synthetic profiles.<br>
  3. Collect platform outputs (scores, recommendations, interview flags).<br>
  4. Compute DIR for all protected classes at each pipeline stage.<br>
  5. Run bootstrap confidence intervals and permutation tests.<br>
  6. Conduct intersectional analysis.</p>
  <p>None of these steps have been started.</p>
</div>

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Create results tables for Platform C.</strong> Tables should follow the format established in Section 3 (Tables 1 and 2). Placeholder table structure below.</p>
</div>

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
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Gender</td>
      <td>Female vs. Male</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Race</td>
      <td>Black vs. White</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Disability</td>
      <td>Physical vs. None</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
    </tr>
  </tbody>
</table>

<div class="caption"><span class="fig-num">Table 3.</span> Disparate impact ratios for Platform C. Data not yet collected. Dashes indicate pending results.</div>

### 4.5 Preliminary Hypotheses

Based on Platform C's documented architecture and the patterns observed in Platforms A and B, we have the following preliminary hypotheses for the Platform C audit:

1. **Video analysis will introduce detectable bias.** Platform C's video interview analysis component is likely to show disparate impact along racial and disability dimensions, given that facial analysis and speech pattern recognition are known to exhibit differential accuracy across demographic groups.

2. **The "bias-free" claim is likely overstated.** Marketing claims of bias-free AI are rarely substantiated by rigorous independent testing. We expect Platform C to show measurable disparate impact on at least one protected class, consistent with findings from Platforms A and B.

3. **The multi-modal pipeline will complicate attribution.** Determining which component of Platform C's pipeline is responsible for any observed disparate impact will be more challenging than for single-modality platforms. Our stage-by-stage analysis should help isolate the source.

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Revise or confirm hypotheses after data collection.</strong> These hypotheses should be updated based on the actual audit findings. If the "bias-free" claim is substantiated, discuss the mechanisms that may explain Platform C's success.</p>
</div>

<div class="paper-section-footer">
  <a href="/sections/3-results-ab/">&larr; Previous: Results A and B</a> &nbsp;&middot;&nbsp; <a href="/sections/5-discussion/">Next: Discussion &rarr;</a>
</div>

  </div>
</article>
