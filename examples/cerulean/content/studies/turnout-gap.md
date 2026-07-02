+++
title = "Turnout Gap"
date = "2025-09-05"
description = "A four-bracket horizontal bar chart of municipal election turnout by age, built for an elections desk's post-mortem on a low-turnout race."
tags = ["elections", "demographics", "horizontal-bar"]
slug = "turnout-gap"
template = "study"
[extra]
client = "Civic Signal"
chart_type = "Horizontal bar chart"
stat_value = "43 pts"
stat_label = "turnout spread, 18–29 vs 65+"
+++

Civic Signal's elections desk covers municipal races that rarely crack twenty percent overall turnout, and every cycle the same question comes up in the newsroom: who actually shows up. A horizontal bar chart broken into four age brackets answers it faster than a paragraph of percentages ever could, and it reads the same way whether the story runs as a scroll piece or a single social card.

<!-- more -->

<figure class="case-chart">
<svg viewBox="0 0 640 300" role="img" aria-label="Horizontal bar chart of municipal election turnout by age bracket: 29 percent for ages 18 to 29, 44 percent for 30 to 44, 57 percent for 45 to 64, and 72 percent for 65 and older.">
  <g class="chart-grid-full chart-grid-v">
    <line x1="140" y1="30" x2="140" y2="260"/>
    <line x1="370" y1="30" x2="370" y2="260"/>
    <line x1="600" y1="30" x2="600" y2="260"/>
  </g>
  <g class="chart-bars-h">
    <rect x="140" y="53.8" width="166.8" height="27.5"/>
    <rect x="140" y="108.8" width="253.0" height="27.5"/>
    <rect x="140" y="163.8" width="327.8" height="27.5"/>
    <rect x="140" y="218.8" width="414.0" height="27.5" class="chart-bar-end"/>
  </g>
  <g class="axis-label">
    <text x="132" y="71.5" text-anchor="end">18&ndash;29</text>
    <text x="132" y="126.5" text-anchor="end">30&ndash;44</text>
    <text x="132" y="181.5" text-anchor="end">45&ndash;64</text>
    <text x="132" y="236.5" text-anchor="end">65+</text>
  </g>
  <g class="annotation-text">
    <text x="314.8" y="71.5">29%</text>
    <text x="401.0" y="126.5">44%</text>
    <text x="475.8" y="181.5">57%</text>
    <text x="570.0" y="236.5">72%</text>
  </g>
  <g class="axis-label">
    <text x="140" y="278" text-anchor="middle">0%</text>
    <text x="370" y="278" text-anchor="middle">40%</text>
    <text x="600" y="278" text-anchor="middle">80%</text>
  </g>
  <text x="140" y="18" class="axis-unit">TURNOUT, PERCENT OF REGISTERED VOTERS</text>
</svg>
<figcaption class="case-caption">Fig. 1 &mdash; Municipal general-election turnout by age bracket, precinct-level sample.</figcaption>
</figure>

## The signal

Forty-three points separate the youngest and oldest brackets, and the chart's flat baseline at zero makes that gap physically visible as four bars of clearly different length rather than four numbers a reader has to subtract in their head. Civic Signal's editors specifically asked against a donut or pie for this reason — with four wedges, the 18-point difference between the two middle brackets nearly disappears to the eye, but on a shared bar baseline it holds its true proportion.

## Method

The brackets come from the county clerk's precinct-level turnout file, joined against voter-file birth years and grouped into the same four brackets Civic Signal uses across all of its election coverage for consistency from race to race. I set the axis maximum at 80% rather than 100% because no bracket in this county's ten-year municipal-election history has ever cleared the mid-seventies — an unused fifth of the chart would have flattened all four bars toward the bottom for no analytical reason.

```csv
age_bracket,turnout_pct
18-29,29
30-44,44
45-64,57
65+,72
```

## Why it held up

The chart ran both in the desk's scroll story and, cropped to just the four bars and labels, as a standalone social card — the value labels printed at the end of each bar meant the card still carried its full information even stripped of the surrounding article. That single design choice, keeping the numbers on the chart rather than only in a caption, is the difference between a graphic that survives being shared out of context and one that doesn't.
