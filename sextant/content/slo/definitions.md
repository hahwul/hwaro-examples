+++
title = "Definitions"
description = "Formal definitions for SLI, SLO, and SLA."
weight = 1
+++

## Terminology

| Term | Full Name | Definition |
|------|-----------|-----------|
| **SLI** | Service Level Indicator | A quantitative measure of a specific aspect of service quality |
| **SLO** | Service Level Objective | A target value or range for an SLI, measured over a rolling window |
| **SLA** | Service Level Agreement | A contractual commitment that includes consequences for missing SLOs |

## How They Relate

An **SLI** is what you measure. An **SLO** is the target you set for that measurement. An **SLA** is the promise you make to customers, backed by the SLO.

For example:

- SLI: The proportion of HTTP requests that return a 2xx status code
- SLO: 99.9% of requests succeed over a 30-day rolling window
- SLA: If monthly availability drops below 99.5%, affected customers receive a 10% service credit

## Error Budgets

Each SLO implies an error budget: the amount of unreliability you can tolerate before violating the objective.

| SLO Target | Error Budget (30 days) | Equivalent Downtime |
|-----------|----------------------|-------------------|
| 99% | 1% | 7 hours 12 minutes |
| 99.5% | 0.5% | 3 hours 36 minutes |
| 99.9% | 0.1% | 43 minutes 12 seconds |
| 99.95% | 0.05% | 21 minutes 36 seconds |
| 99.99% | 0.01% | 4 minutes 19 seconds |

When the remaining error budget for a service drops below 25%, the on-call team should prioritize reliability work over feature development.

## SLI Specification vs. SLI Implementation

### Specification

The SLI specification describes *what* you want to measure in abstract terms. It is technology-agnostic.

> The proportion of valid requests served successfully.

### Implementation

The SLI implementation describes *how* you measure it using your specific infrastructure.

> `COUNT(status < 500) / COUNT(*)` computed from load balancer access logs over a 5-minute window.

Always document both. The specification stays stable even if the implementation changes (for example, when migrating from load balancer logs to distributed tracing).

## Choosing SLOs

Use the following principles when setting SLO targets:

1. **Start with user expectations.** What performance would make users satisfied? Set the SLO there, not at the current system performance.
2. **Use data to calibrate.** Review 90 days of historical SLI data before choosing a target. If the system already meets 99.95%, setting an SLO at 99% wastes the signal.
3. **Fewer is better.** Each service should have 2--4 SLOs. More than that dilutes focus.
4. **Review quarterly.** Targets should evolve as the product and user base change.
