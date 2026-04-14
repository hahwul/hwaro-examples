+++
title = "4. Implementation Roadmap"
description = "Phased migration guidance for enterprises transitioning from legacy to resilient architectures, with cost models, timeline benchmarks, and organizational change management."
weight = 4
template = "post"
tags = ["implementation", "migration", "cost-model"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## 4.1 Phased migration approach

Our data shows that enterprises attempting a single large-scale migration to resilient architectures experience a 2.3x higher failure rate than those following a phased approach. We recommend a four-phase migration spanning 18--24 months:

**Phase 1: Assessment (months 1--3).** Map the complete service dependency graph, establish baseline resilience metrics (BRS, DCD, CRI), and identify the top 10 services with the highest blast radius scores. This phase requires no infrastructure changes and produces the prioritised migration backlog.

**Phase 2: Foundation (months 4--9).** Implement observability instrumentation (dependency health maps, blast radius projections) and deploy circuit breakers on the top 10 highest-risk dependency edges. Establish isolation zone boundaries and begin fault injection testing.

**Phase 3: Migration (months 10--18).** Migrate critical services to resilience-first architectures in priority order, beginning with the highest blast radius components. Each migration follows a strangler pattern: deploy the resilient version alongside the legacy version, shift traffic incrementally, validate resilience properties through fault injection, and decommission the legacy version.

**Phase 4: Optimisation (months 19--24).** Fine-tune circuit breaker parameters based on production telemetry, implement adaptive degradation strategies, and establish ongoing resilience regression testing in CI/CD pipelines.

## 4.2 Cost model

Infrastructure resilience investment follows a characteristic cost curve with front-loaded capital expenditure and declining operational expenditure:

<table class="paper-table">
<caption>Table 3. Resilience investment cost model (median values, normalised per 100 services)</caption>
<thead>
<tr>
<th>Phase</th>
<th>Duration</th>
<th>Capital Cost</th>
<th>Operational Cost/mo</th>
<th>Cumulative ROI</th>
</tr>
</thead>
<tbody>
<tr>
<td>Assessment</td>
<td>3 months</td>
<td>$180K</td>
<td>$12K</td>
<td>-$216K</td>
</tr>
<tr>
<td>Foundation</td>
<td>6 months</td>
<td>$420K</td>
<td>$28K</td>
<td>-$804K</td>
</tr>
<tr>
<td>Migration</td>
<td>9 months</td>
<td>$1.2M</td>
<td>$45K</td>
<td>-$1.6M</td>
</tr>
<tr>
<td>Optimisation</td>
<td>6 months</td>
<td>$90K</td>
<td>$18K</td>
<td>+$420K</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="5">ROI calculation assumes $9,200/min downtime cost and observed 73% reduction in cascading failure incidents.</td>
</tr>
</tfoot>
</table>

Median payback period across our dataset is 22 months from programme initiation. Enterprises in financial services achieve payback in 14 months due to higher per-minute downtime costs; logistics enterprises average 28 months.

## 4.3 Organisational change management

Technical architecture changes alone are insufficient. Our data shows that 41% of resilience programme failures are attributable to organisational factors rather than technical ones:

- **On-call fatigue** from increased alert volume during migration (mitigated by phased rollout and alert consolidation).
- **Skill gaps** in distributed systems debugging (mitigated by embedded SRE coaching and incident simulation exercises).
- **Incentive misalignment** when teams are measured on feature delivery velocity rather than system reliability (mitigated by incorporating CRI into team-level OKRs).

## 4.4 Governance framework

Sustained resilience requires governance structures that prevent regression:

1. **Quarterly resilience reviews** at the architecture board level, examining CRI trends and blast radius scores for all critical services.
2. **Resilience gates** in the deployment pipeline that block releases introducing new single points of failure or increasing dependency chain depth beyond thresholds.
3. **Annual chaos engineering campaigns** that validate isolation zone boundaries and recovery procedures under realistic failure conditions.
