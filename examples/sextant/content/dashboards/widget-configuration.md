+++
title = "Widget Configuration"
description = "Reference for dashboard widget types and their configuration options."
weight = 1
+++

## Widget Types

Every dashboard is composed of widgets. Select the widget type that best fits the data being displayed.

| Widget | Best For | Refresh Interval |
|--------|----------|-----------------|
| Scorecard | Single KPI with trend | 5 min |
| Time Series | Metric over time | 5 min |
| Bar Chart | Categorical comparison | 15 min |
| Table | Detailed breakdowns | 15 min |
| Heatmap | Correlation or density | 1 hour |
| Funnel | Conversion sequences | 1 hour |

## Scorecard Widget

Scorecards display a single headline number with optional comparison to a previous period. Use them for the most important KPIs at the top of a dashboard.

### Configuration

```yaml
widget: scorecard
metric: mrr
aggregation: sum
comparison: previous_period
period: month
format: currency_usd
thresholds:
  warning: -5%
  critical: -10%
```

### Rules

- Always include a comparison period so viewers can judge direction
- Use `currency_usd` or `currency_eur` format for financial metrics
- Use `percentage` format for rates and ratios
- Set thresholds to match the alert levels defined in the SLO reference

## Time Series Widget

Time series charts plot a metric over a configurable time window. They support multiple series for comparison.

### Configuration

```yaml
widget: time_series
metrics:
  - name: dau
    aggregation: count_distinct
    field: user_id
  - name: wau
    aggregation: count_distinct
    field: user_id
    window: 7d
time_range: 30d
granularity: day
y_axis:
  label: "Users"
  min: 0
```

### Rules

- Default time range is 30 days; adjust based on the metric's natural cadence
- Always set `y_axis.min` to 0 unless the data is narrowly distributed
- Limit to 4 series per chart to maintain readability
- Use consistent colors: blue for primary, gray for comparison

## Table Widget

Tables are appropriate when users need to drill into specific rows or when the data has more than two dimensions.

### Configuration

```yaml
widget: table
source: analytics.feature_usage
columns:
  - field: feature_name
    label: "Feature"
    sortable: true
  - field: adoption_rate
    label: "Adoption %"
    format: percentage
    sortable: true
  - field: owner_team
    label: "Owner"
sort:
  field: adoption_rate
  direction: desc
row_limit: 25
```

### Rules

- Always define an explicit sort order
- Cap row display at 25; provide a "View All" link for longer datasets
- Right-align numeric columns
- Include the `sortable` flag on columns users are likely to filter by
