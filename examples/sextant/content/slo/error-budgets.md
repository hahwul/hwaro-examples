+++
title = "Error Budgets"
weight = 30
description = "Understanding and managing error budgets to balance reliability with innovation."
template = "page"
+++

An error budget is the acceptable level of unreliability for a given service. It is calculated as `100% - SLO`. For example, a service with a 99.9% availability SLO has an error budget of 0.1%. This budget represents the maximum allowable downtime or failure rate over a specific window (usually rolling 30 days).

The concept of an error budget transforms the abstract goal of "reliability" into a quantifiable metric that guides engineering decisions.

## Utilizing the Error Budget

The error budget is not a target to be hit, but a resource to be managed. It serves as a bridge between development (who want to ship features quickly) and operations (who want to maintain stability).

### 1. Promoting Innovation

If a service has ample error budget remaining, teams can take calculated risks, such as deploying major new features, experimenting with infrastructure changes, or increasing deployment frequency.

### 2. Prioritizing Stability

When the error budget is exhausted or close to being depleted, policies should dictate a shift in focus. New feature deployments may be frozen in favor of investing in reliability engineering, addressing technical debt, or improving testing procedures.

## Tracking and Alerting

- **Burn Rate**: Monitor how quickly the error budget is being consumed. A high burn rate indicates a systemic issue that needs immediate attention, even if the budget is not yet empty.
- **Alerting Strategy**: Alert on burn rates rather than individual failures to avoid alert fatigue and focus on issues that genuinely threaten the SLO.

Effective error budget management aligns incentives across teams and ensures a sustainable balance between velocity and stability.
