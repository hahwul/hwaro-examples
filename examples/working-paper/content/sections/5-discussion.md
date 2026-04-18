+++
title = "5. Discussion"
description = "Discussion of findings, implications, limitations, and policy recommendations. Partially complete pending Platform C results."
weight = 5
template = "post"
tags = ["paper", "discussion", "in-progress", "todo"]
categories = ["sections"]

[extra]
section_number = 5
+++

<div class="draft-banner">
  <strong>DRAFT v0.3</strong> &mdash; Last updated 2026-04-10 &mdash; Not for citation
</div>

<article class="paper-article">
  <div class="paper-wrap">

<header class="paper-section-header">
  <div class="paper-section-eyebrow">Section 5 -- Partially Complete</div>
  <h1 class="paper-section-title">Discussion</h1>
  <p class="paper-lede">Interpretation of findings, implications for practice and policy, and limitations. Several subsections await Platform C results.</p>
</header>

The results from Platforms A and B demonstrate that algorithmic bias in automated hiring is real, measurable, and highly variable. This section discusses the implications of our findings, acknowledges limitations, and offers preliminary recommendations. Several subsections will be expanded or revised after the Platform C audit is complete.

### 5.1 The Heterogeneity of Algorithmic Bias

Perhaps the most striking finding from our audits is the degree to which bias patterns differ across platforms. Platform A exhibits significant age discrimination but minimal racial bias. Platform B shows the reverse: effective age and gender mitigation but emerging racial disparities at the interview-recommendation stage. This heterogeneity has important implications:

**For researchers**, it means that findings from audits of individual platforms cannot be generalised to the broader ecosystem of hiring algorithms. Each platform embodies a different combination of training data, feature engineering, model architecture, and (in some cases) fairness interventions, and each combination produces a distinct pattern of disparate impact. Research agendas that focus on a single platform risk drawing overly narrow conclusions.

**For practitioners**, it means that adopting a hiring platform cannot be treated as a one-time decision. Ongoing monitoring is essential, as platforms update their models, retrain on new data, and modify their feature sets over time. A platform that passes a fairness audit today may fail one tomorrow if its underlying data or algorithms change.

**For regulators**, it underscores the inadequacy of one-size-fits-all compliance standards. A regulation that mandates DIR > 0.80 across all protected classes at the screening stage would flag Platform A (for age) but not Platform B -- even though Platform B shows concerning racial disparities at a later pipeline stage that the regulation does not specifically address.

### 5.2 The Pipeline Problem

Our findings reveal that bias can emerge at different stages of the hiring pipeline, and that interventions targeting one stage may not prevent bias at others. Platform B's post-hoc calibration is instructive: it effectively equalises outcomes at the screening stage but fails to prevent racial disparities at the interview-recommendation stage. This suggests that the calibration is applied to the wrong representation of fairness, or that it introduces a fairness-accuracy trade-off that shifts rather than eliminates bias.

We propose the term "pipeline leakage" to describe this phenomenon: fairness interventions that address bias at one stage while allowing it to persist or emerge at subsequent stages. Pipeline leakage is a predictable consequence of stage-specific fairness constraints and highlights the need for end-to-end auditing of the type our framework provides.

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Expand pipeline discussion with Platform C findings.</strong> Platform C's multi-modal pipeline (text + video) provides a particularly interesting case for pipeline leakage analysis. If bias is concentrated in the video analysis component, it would support the hypothesis that novel modalities introduce novel forms of discrimination that existing fairness interventions do not address.</p>
</div>

### 5.3 Intersectional Compounding

The intersectional analysis in Section 3.4 reveals that compound discrimination can be substantially worse than what single-axis analysis would predict. On Platform A, older women in technical roles face a DIR of 0.54 -- well below the individual DIRs for either age (0.71) or gender (0.78). This compounding effect is consistent with theoretical predictions from intersectionality scholarship (Crenshaw, 1989; Buolamwini and Gebru, 2018) but has rarely been documented in the context of commercial hiring platforms.

The practical implication is that regulatory frameworks and audit methodologies that examine only single-axis disparities will systematically underestimate the impact of algorithmic bias on individuals who belong to multiple disadvantaged groups. Our framework's intersectional analysis component (Stage 3) addresses this gap, but further methodological development is needed to handle the combinatorial explosion of intersectional categories in a statistically rigorous way.

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Add intersectional analysis for Platform C.</strong> Platform C's video component may introduce additional intersectional effects related to disability and race (e.g., facial recognition accuracy varies across racial groups, and disability-related behaviours may be flagged differently). Discuss these effects once data are available.</p>
</div>

### 5.4 Cross-Platform Comparison

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Write full cross-platform comparison.</strong> This subsection should synthesise findings across all three platforms. Currently, only the A vs. B comparison (Section 3.3) is available. Key questions to address:</p>
  <p>1. Do the three platforms exhibit distinct "bias profiles," or are there common patterns?<br>
  2. Is there evidence that fairness interventions (calibration, anonymisation) are effective, and if so, at which pipeline stages?<br>
  3. What platform characteristics (architecture, training data, feature sets) best predict the magnitude and type of disparate impact?<br>
  4. Does Platform C's "bias-free" marketing claim hold up under independent audit?</p>
</div>

### 5.5 Limitations

Our study has several important limitations:

**Synthetic profiles.** While our synthetic applicant pool provides controlled demographic variation, it may not capture the full complexity of real applicant profiles. Synthetic profiles are designed to be internally consistent but may lack the subtle correlations between attributes that characterise real-world applications. If platforms use these correlations in their scoring (e.g., expecting certain combinations of education and experience that are more common in some demographic groups), our audit may underestimate the true extent of disparate impact.

**Platform access.** Our audit methodology is constrained by the level of access each platform grants. For Platforms A and C, we could not inspect the algorithm directly, limiting our Stage 2 analysis to counterfactual testing. This means we cannot definitively identify the mechanisms through which bias enters the system, only that bias is present in the outputs.

**Temporal validity.** Our audits represent snapshots in time. Platforms continuously update their models, and the bias patterns we observe may change with future updates. Our findings should be understood as evidence that these platforms exhibited specific bias patterns during the audit period, not as permanent characterisations.

**Jurisdictional scope.** Our legal analysis focuses on the US four-fifths rule and the EU AI Act. Other jurisdictions may use different standards for evaluating disparate impact, and our framework may need to be adapted accordingly.

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Add Platform C-specific limitations.</strong> The video analysis component of Platform C introduces additional limitations related to synthetic video quality, the representativeness of video-based counterfactuals, and the ecological validity of lab-generated interview videos. Discuss these once the audit methodology is finalised.</p>
</div>

### 5.6 Policy Recommendations

Based on our findings from Platforms A and B, we offer the following preliminary recommendations:

1. **Mandatory independent auditing.** Platforms that deploy automated hiring systems should be required to undergo regular independent fairness audits using standardised methodologies. Self-reported fairness metrics are insufficient, as demonstrated by the gap between Platform B's fairness-aware design and its actual outcomes.

2. **Multi-stage evaluation.** Regulatory standards should require disparate impact assessment at every stage of the hiring pipeline, not just the final decision point. Platform B's pipeline leakage illustrates how stage-specific standards can miss significant disparities.

3. **Intersectional analysis requirements.** Audit standards should explicitly require intersectional analysis across multiple protected classes simultaneously. Single-axis analysis systematically underestimates compound discrimination.

4. **Transparency obligations.** Platforms should be required to disclose the features used in their models, the composition of their training data, and any fairness interventions applied. This information is essential for effective auditing and is currently difficult or impossible to obtain.

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Revise policy recommendations after Platform C results.</strong> If Platform C's video analysis component shows significant disparate impact, add specific recommendations for regulating multi-modal hiring systems. Coordinate with Beatrice on labour policy implications and with Sven on statistical standards for multi-modal auditing.</p>
</div>

### 5.7 Future Work

This paper opens several avenues for future research:

- **Longitudinal auditing.** Repeating our audits over time to track how bias patterns evolve as platforms update their models.
- **Causal analysis.** Moving beyond disparate impact measurement to identify the causal mechanisms through which bias enters algorithmic hiring systems.
- **Intervention design.** Developing and testing specific technical interventions (e.g., adversarial debiasing, counterfactual fairness constraints) tailored to the bias patterns identified by our framework.
- **International comparison.** Applying our framework across jurisdictions to understand how different regulatory environments affect platform behaviour and fairness outcomes.

<div class="paper-section-footer">
  <a href="/sections/4-results-c/">&larr; Previous: Results Platform C</a> &nbsp;&middot;&nbsp; <a href="/">Back to abstract</a>
</div>

  </div>
</article>
