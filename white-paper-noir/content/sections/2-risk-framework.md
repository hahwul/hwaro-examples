+++
title = "2. Risk Framework"
description = "A quantitative risk model for infrastructure resilience assessment, including blast radius scoring, dependency chain analysis, and recovery velocity benchmarks."
weight = 2
template = "post"
tags = ["risk-assessment", "blast-radius", "dependency-analysis"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## 2.1 Beyond availability percentages

Traditional infrastructure risk assessment centres on availability targets expressed as percentages of uptime (99.9%, 99.99%, etc.). While these metrics remain useful for capacity planning, they fail to distinguish between systems that degrade gracefully under stress and systems that fail catastrophically at the same availability threshold.

We propose a resilience risk model structured around three dimensions: **blast radius** (how far does a failure propagate?), **recovery velocity** (how quickly does the system return to baseline?), and **degradation quality** (what capabilities remain available during partial failure?).

## 2.2 Blast radius scoring

Blast radius quantifies the proportion of system functionality affected by a single component failure. We define a blast radius score (BRS) on a 0--100 scale:

<div class="rec-box">
<p class="rec-box-label">Definition</p>
<p><strong>BRS = (Affected services / Total services) x (Affected users / Total users) x 100</strong></p>
<p>A BRS of 0 indicates complete isolation; a BRS of 100 indicates total system failure from a single component fault. Organisations should target BRS &lt; 15 for any individual component.</p>
</div>

Our survey data shows that enterprises with mean component BRS below 15 experience 68% fewer customer-visible incidents than those with BRS above 40, even when both groups report identical availability percentages.

## 2.3 Dependency chain analysis

Dependency chain depth (DCD) measures the longest critical path through a system's service dependency graph. Each additional hop in the dependency chain multiplies failure probability and compounds latency during degraded operations.

<table class="paper-table">
<caption>Table 2. Dependency chain depth and cascading failure correlation</caption>
<thead>
<tr>
<th>Chain Depth</th>
<th>Cascading Failure Rate</th>
<th>Median Recovery Time</th>
<th>P95 Recovery Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>1--3 hops</td>
<td>4.2%</td>
<td>18 min</td>
<td>42 min</td>
</tr>
<tr>
<td>4--6 hops</td>
<td>17.8%</td>
<td>54 min</td>
<td>2.8 hrs</td>
</tr>
<tr>
<td>7--10 hops</td>
<td>41.3%</td>
<td>2.1 hrs</td>
<td>8.4 hrs</td>
</tr>
<tr>
<td>11+ hops</td>
<td>73.6%</td>
<td>4.8 hrs</td>
<td>18+ hrs</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="4">Cascading failure rate = proportion of component failures that affected 3+ downstream services.</td>
</tr>
</tfoot>
</table>

## 2.4 Recovery velocity benchmarks

Recovery velocity captures the time-to-recovery curve shape, not merely the endpoint. We distinguish between four recovery profiles observed in our dataset:

- **Snap recovery** (12% of incidents): System returns to full capacity within 5 minutes, typically through automated failover.
- **Ramp recovery** (34%): System capacity increases linearly over 15--60 minutes as manual or semi-automated procedures execute.
- **Step recovery** (38%): System recovers in discrete jumps as individual components are restored, often with gaps between steps.
- **Tail recovery** (16%): System reaches 90% capacity quickly but takes hours or days to resolve the final 10%, typically due to data consistency reconciliation.

## 2.5 Composite resilience index

We combine blast radius, recovery velocity, and degradation quality into a Composite Resilience Index (CRI) that enables cross-sector benchmarking:

<div class="rec-box">
<p class="rec-box-label">Recommendation</p>
<p>Adopt the Composite Resilience Index as a board-level metric alongside traditional availability SLAs. CRI provides a single number (0--100) that captures infrastructure resilience posture and enables quarter-over-quarter tracking of improvement initiatives.</p>
</div>

Across our dataset, top-quartile CRI performers (CRI > 72) experience 4.2x faster mean recovery and generate 31% fewer customer-visible incidents than bottom-quartile performers (CRI < 35), independent of infrastructure spend.
