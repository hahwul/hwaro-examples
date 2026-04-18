+++
title = "Sextant"
description = "Metrics, KPI definitions, and SLO reference for data-driven teams."
template = "page"
+++

Sextant is the single source of truth for metric definitions, KPI ownership, dashboard configuration, and service-level objectives across the organization.

## Getting Started

Use the sidebar to navigate between the three main sections of this reference.

- [Metrics](metrics/) -- Canonical definitions for revenue, engagement, and operational KPIs. Each metric entry includes its formula, data source, and accountable owner.
- [Dashboards](dashboards/) -- Guidelines for building and maintaining BI dashboards, including widget types, layout patterns, and refresh strategies.
- [SLO Reference](slo/) -- Service Level Objective, Indicator, and Agreement definitions with approved threshold tables.

## How to Use This Reference

Every metric documented here follows a standard card format:

| Field | Description |
|-------|-------------|
| **Name** | Human-readable metric name |
| **Formula** | Calculation logic or SQL expression |
| **Data Source** | Warehouse table or upstream system |
| **Owner** | Team or individual accountable for accuracy |
| **Status** | Active, Draft, or Deprecated |

If you find a metric that is missing or incorrect, open a pull request against the `metrics/` directory.
