+++
title = "3. Section 3.2: Statistical Reporting"
description = "Corrections to p-value precision and confidence interval calculation in the selectivity comparison section."
weight = 3
template = "post"
tags = ["correction", "statistics", "p-values"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## Source of error

Two errors were identified in the statistical reporting within Section 3.2 ("Selectivity Comparison Across the Benzazepine Series"):

1. **P-value precision.** Two p-values were rounded to one decimal place (p < 0.01) where the journal's reporting standards require exact values to three decimal places when p > 0.001.

2. **Confidence interval.** The 95% confidence interval for the mean D3/D2 selectivity ratio was calculated using n-1 degrees of freedom (t-distribution with df=4) when the correct calculation should have used df=3 (n=4 compounds in the selective subset, with n-1=3 degrees of freedom for the mean).

## Corrections to Section 3.2

<div class="correction-block">
<p class="correction-label">Correction 1 -- Paragraph 2, Sentence 3</p>
<p>In the sentence comparing BZ-04 and BZ-06 D2 selectivity:</p>
<p><span class="strike-text">"The difference in D3/D2 selectivity between BZ-04 and BZ-06 was significant (p < 0.01, two-tailed t-test)."</span></p>
<p>Should read:</p>
<p><span class="insert-text">"The difference in D3/D2 selectivity between BZ-04 and BZ-06 was significant (p = 0.004, two-tailed t-test)."</span></p>
</div>

<div class="correction-block">
<p class="correction-label">Correction 2 -- Paragraph 3, Sentence 1</p>
<p>In the sentence reporting the overall series selectivity:</p>
<p><span class="strike-text">"Across the four D2-selective compounds, the mean D3/D2 selectivity ratio was significantly greater than 1.0 (p < 0.01, one-sample t-test)."</span></p>
<p>Should read:</p>
<p><span class="insert-text">"Across the four D2-selective compounds, the mean D3/D2 selectivity ratio was significantly greater than 1.0 (p = 0.008, one-sample t-test)."</span></p>
</div>

<div class="correction-block">
<p class="correction-label">Correction 3 -- Paragraph 3, Sentence 2</p>
<p>The confidence interval for the mean D3/D2 selectivity ratio:</p>
<p><span class="strike-text">"95% CI: [8.2, 22.4]"</span></p>
<p>Should read:</p>
<p><span class="insert-text">"95% CI: [7.1, 23.5]"</span></p>
<p>The wider interval reflects the correct use of t(df=3) = 3.182 rather than t(df=4) = 2.776.</p>
</div>

## Impact assessment

The corrected exact p-values (0.004 and 0.008) remain well below the significance threshold of 0.05 used throughout the paper. The corrected confidence interval is wider but still excludes 1.0, preserving the conclusion that the D2-selective subset shows significant preferential binding. These corrections affect reporting precision only and do not alter any conclusions.
