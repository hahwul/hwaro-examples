+++
title = "Rate Check"
date = "2026-02-09"
description = "A step chart of nine quarterly policy-rate readings, built for a markets desk that needed hikes and cuts to read as distinct, deliberate moves rather than a smooth curve."
tags = ["finance", "monetary-policy", "step-chart"]
slug = "rate-check"
template = "study"
[extra]
client = "Ledger Quarterly"
chart_type = "Step chart"
stat_value = "+525 / −200 bps"
stat_label = "policy rate, 2022→2026"
+++

Ledger Quarterly's markets team asked for a chart that would stop readers from mentally smoothing a central bank's rate path into a gentle curve, because it isn't one — every change is a discrete committee decision made on a fixed quarterly calendar. A step chart, holding flat between meetings and jumping only at each decision, draws the policy exactly as it happened: nine readings, a run of hikes, a pause, then a run of cuts.

<!-- more -->

<figure class="case-chart">
<svg viewBox="0 0 640 300" role="img" aria-label="Step chart of a central bank policy rate, rising from 0.25 percent in early 2022 to a peak of 5.50 percent, holding, then declining to 3.50 percent by early 2026.">
  <g class="chart-grid-full">
    <line x1="40" y1="260" x2="600" y2="260"/>
    <line x1="40" y1="145" x2="600" y2="145"/>
    <line x1="40" y1="30" x2="600" y2="30"/>
  </g>
  <g class="axis-label">
    <text x="34" y="264" text-anchor="end">0%</text>
    <text x="34" y="149" text-anchor="end">3%</text>
    <text x="34" y="34" text-anchor="end">6%</text>
  </g>
  <text x="40" y="18" class="axis-unit">POLICY RATE, QUARTER-END</text>
  <path class="chart-line chart-step" d="M40.0,250.4 L110.0,250.4 L110.0,164.2 L180.0,164.2 L180.0,87.5 L250.0,87.5 L250.0,49.2 L320.0,49.2 L320.0,49.2 L390.0,49.2 L390.0,68.3 L460.0,68.3 L460.0,97.1 L530.0,97.1 L530.0,116.2 L600.0,116.2 L600.0,125.8" fill="none"/>
  <g class="chart-dot">
    <circle cx="40.0" cy="250.4" r="3"/><circle cx="110.0" cy="164.2" r="3"/><circle cx="180.0" cy="87.5" r="3"/>
    <circle cx="250.0" cy="49.2" r="3"/><circle cx="320.0" cy="49.2" r="3"/><circle cx="390.0" cy="68.3" r="3"/>
    <circle cx="460.0" cy="97.1" r="3"/><circle cx="530.0" cy="116.2" r="3"/>
  </g>
  <circle class="chart-dot-end" cx="600.0" cy="125.8" r="4.2"/>
  <g class="axis-label">
    <text x="40" y="278" text-anchor="middle">2022</text>
    <text x="180" y="278" text-anchor="middle">2023</text>
    <text x="320" y="278" text-anchor="middle">2024</text>
    <text x="460" y="278" text-anchor="middle">2025</text>
    <text x="600" y="278" text-anchor="middle">2026</text>
  </g>
  <line class="annotation-lead" x1="320" y1="49.2" x2="320" y2="26"/>
  <text class="annotation-text" x="320" y="20" text-anchor="middle">peak 5.50%</text>
  <text class="annotation-text" x="596" y="145" text-anchor="end">3.50% now<tspan class="dim" x="596" dy="15">&minus;200bps since peak</tspan></text>
</svg>
<figcaption class="case-caption">Fig. 1 &mdash; Policy rate at each quarterly committee decision, Q1 2022 through Q1 2026.</figcaption>
</figure>

## The signal

The flat stretch across 2024 is as informative as either slope on either side of it — a committee holding steady is a decision too, not an absence of one, and a step chart is one of the only common forms that shows "no change" as its own visible, deliberate segment rather than collapsing it into the gap between two points on a smoother line. Ledger's writers use that flat stretch explicitly in the piece to talk about the committee's stated wait-and-see posture through the middle of the tightening cycle's aftermath.

## Method

All nine values are quarter-end policy-rate settings taken directly from the committee's own published decision statements — no interpolation, no averaging within a quarter. The path is drawn as horizontal-then-vertical segments rather than a smoothed curve for the same reason a smoothed curve would misrepresent every other chart in this set: the rate genuinely does not move between meetings, and drawing it as though it drifts continuously would invent a shape the data does not have.

```csv
quarter,policy_rate_pct
2022-Q1,0.25
2022-Q3,2.50
2023-Q1,4.50
2023-Q3,5.50
2024-Q1,5.50
2024-Q3,5.00
2025-Q1,4.25
2025-Q3,3.75
2026-Q1,3.50
```

## Why it held up

The chart runs at the top of Ledger's quarterly rate-outlook piece and gets its data point appended fresh each quarter with no other changes to the design — a deliberate choice so that regular readers can track the shape extending over time issue to issue, the same way a household names would track a stock chart. The peak annotation stays pinned to 2023-Q3 permanently now that the series has turned down, giving every future reader instant context for how far the current rate sits from its cycle high.
