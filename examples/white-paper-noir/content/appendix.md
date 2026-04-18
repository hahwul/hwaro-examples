+++
title = "Appendix"
description = "Supplementary materials including survey instrument excerpt, glossary of resilience terms, author contributions, and disclosure statements."
tags = ["appendix", "supplementary", "glossary"]
+++

<header class="paper-section-header">
<p class="paper-section-eyebrow">SUPPLEMENTARY</p>
<h1 class="paper-section-title">Appendix</h1>
</header>

<div class="paper-content">

## A. Glossary of Key Terms

<table class="paper-table">
<caption>Table A1. Key resilience terminology used in this paper</caption>
<thead>
<tr>
<th>Term</th>
<th>Definition</th>
</tr>
</thead>
<tbody>
<tr>
<td>Blast Radius Score (BRS)</td>
<td>Quantitative measure (0--100) of the proportion of system functionality affected by a single component failure.</td>
</tr>
<tr>
<td>Composite Resilience Index (CRI)</td>
<td>Aggregate metric combining blast radius, recovery velocity, and degradation quality into a single infrastructure resilience score.</td>
</tr>
<tr>
<td>Dependency Chain Depth (DCD)</td>
<td>Length of the longest critical path through a system's service dependency graph, measured in hops.</td>
</tr>
<tr>
<td>Isolation Zone</td>
<td>A bounded failure domain within which component failures are contained and cannot propagate to the broader system.</td>
</tr>
<tr>
<td>Circuit Breaker</td>
<td>Pattern that detects downstream degradation and short-circuits requests before they consume upstream resources.</td>
</tr>
<tr>
<td>Graceful Degradation</td>
<td>System behaviour that maintains partial functionality during component failure rather than failing entirely.</td>
</tr>
<tr>
<td>MTTR</td>
<td>Mean Time to Recovery. The average duration from incident detection to full service restoration.</td>
</tr>
</tbody>
</table>

## B. Survey Instrument Excerpt

The following questions are representative of the 42-item survey instrument administered to infrastructure leadership:

1. How many distinct services comprise your organisation's critical infrastructure path?
2. What is the maximum dependency chain depth in your service graph?
3. What percentage of critical services operate in two or more independent isolation zones?
4. How frequently does your organisation conduct fault injection testing on production systems?
5. Does your organisation track a composite resilience metric at the board level?
6. What was the total cost of unplanned downtime for your organisation in the past 12 months?
7. How many severity-1 incidents involved cascading failure across three or more services?
8. What is your organisation's current mean time to recovery for severity-1 incidents?

## C. Author Contributions

- **Reiko Nakamura** -- Conceptualization, methodology, data analysis, writing (original draft and revision).
- **Chidiebere Okonkwo** -- Architecture reviews, data collection (enterprise survey), writing (Sections 3 and 4).
- **Erik Lindqvist** -- Risk framework development, statistical analysis, writing (Section 2).
- **Sanya Patel** -- Industry landscape research, sector-specific analysis, writing (Section 1), project administration.

## D. Conflict of Interest

Reiko Nakamura serves as Chief Architect at Meridian Systems, which provides infrastructure consulting services. Sanya Patel is CTO of Arclight Consulting. Both organisations offer services related to the topics discussed in this paper. The analysis and recommendations presented here are based on the empirical data described in the Methodology section and were not influenced by commercial considerations.

## E. Funding

This research was supported by the Enterprise Architecture Research Consortium (EARC) under grant EA-2024-0187 and by in-kind contributions from the participating enterprises. The funding source had no role in study design, data collection, analysis, or manuscript preparation.

## F. Data Availability

De-identified summary statistics and the analytical code used in this paper are available upon request from the corresponding author (r.nakamura@meridian-systems.example). Raw survey responses and incident reports are not available due to data sharing agreement restrictions.

</div>
