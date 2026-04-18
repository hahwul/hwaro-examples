+++
title = "Layout Guidelines"
description = "Best practices for arranging widgets and structuring dashboards."
weight = 2
+++

## Grid System

Dashboards use a 12-column grid. Widgets snap to column boundaries to ensure alignment across rows.

| Widget Size | Columns | Use Case |
|-------------|---------|----------|
| Small | 3 | Scorecards |
| Medium | 6 | Charts, small tables |
| Large | 12 | Full-width tables, heatmaps |

## Layout Pattern

Follow a top-down information hierarchy. Place the most critical information at the top of the dashboard and progressive detail below.

### Row 1: Headline Scorecards

Place 3--4 scorecard widgets across the top row. These should represent the primary KPIs that the audience checks first.

### Row 2: Trend Charts

Use 1--2 time series widgets to show how the headline numbers are trending. Each chart should directly relate to a scorecard above it.

### Row 3: Breakdown Tables

Display supporting detail in tables or bar charts. This row answers "why" the headline numbers moved.

### Row 4: Diagnostics (Optional)

For operational dashboards, include lower-priority signals such as queue depth, cache hit rates, or per-service breakdowns.

## Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Dashboard | `[Team] Domain -- Audience` | `[Growth] Revenue -- Executive` |
| Widget Title | Metric name, no abbreviations | `Monthly Recurring Revenue` |
| Filter Label | Dimension: readable name | `Region: North America` |

## Refresh Strategy

Not all widgets need the same refresh interval. Configure each widget based on the data's natural update frequency.

| Data Cadence | Refresh Interval | Examples |
|-------------|-----------------|----------|
| Real-time | 1--5 min | Error rate, request latency |
| Hourly batches | 15--60 min | DAU, session counts |
| Daily ETL | 6 hours | Revenue, cohort retention |
| Weekly snapshots | 24 hours | DORA metrics, NPS |

## Access Control

Each dashboard has an owner and a visibility level.

| Level | Who Can View | Who Can Edit |
|-------|-------------|-------------|
| Private | Owner only | Owner only |
| Team | Team members | Owner and editors |
| Organization | All employees | Owner and editors |
| Public | Anyone with link | Owner only |

Set the narrowest visibility that serves the audience. Executive dashboards should be Organization-level. Team operational dashboards should be Team-level.
