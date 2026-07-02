+++
title = "Heat Advisory"
date = "2025-03-02"
description = "A decade of days at or above 95°F for a mid-size city desk, built so readers can find the year they remember and check it against the trend."
tags = ["climate", "heat", "bar-chart"]
slug = "heat-advisory"
[extra]
client = "The Meridian Times"
chart_type = "Bar chart"
stat_value = "+20 days"
stat_label = "≥95°F days per year, 2015→2025"
+++

The Meridian Times city desk wanted a chart for their annual heat-season preview that would let a reader find their own memory in the data — "was last summer as bad as it felt" is the actual question most people bring to a story like this, more than any headline trend line answers on its own. A year-by-year bar chart, eleven bars for eleven years, does that better than almost any other form.

<!-- more -->

<figure class="case-chart">
<svg viewBox="0 0 640 300" role="img" aria-label="Bar chart of days at or above 95 degrees Fahrenheit per year, rising from 11 days in 2015 to 31 days in 2025.">
  <g class="chart-grid-full">
    <line x1="40" y1="260" x2="600" y2="260"/>
    <line x1="40" y1="145" x2="600" y2="145"/>
    <line x1="40" y1="30" x2="600" y2="30"/>
  </g>
  <g class="axis-label">
    <text x="34" y="264" text-anchor="end">0</text>
    <text x="34" y="149" text-anchor="end">16</text>
    <text x="34" y="34" text-anchor="end">32</text>
  </g>
  <text x="40" y="18" class="axis-unit">DAYS &ge;95&deg;F PER YEAR</text>
  <g class="chart-bars">
    <rect x="50.2" y="180.9" width="30.5" height="79.1"/>
    <rect x="101.1" y="159.4" width="30.5" height="100.6"/>
    <rect x="152.0" y="166.6" width="30.5" height="93.4"/>
    <rect x="202.9" y="130.6" width="30.5" height="129.4"/>
    <rect x="253.8" y="145.0" width="30.5" height="115.0"/>
    <rect x="304.7" y="101.9" width="30.5" height="158.1"/>
    <rect x="355.6" y="123.4" width="30.5" height="136.6"/>
    <rect x="406.5" y="80.3" width="30.5" height="179.7"/>
    <rect x="457.5" y="58.8" width="30.5" height="201.2"/>
    <rect x="508.4" y="87.5" width="30.5" height="172.5"/>
    <rect x="559.3" y="37.2" width="30.5" height="222.8" class="chart-bar-end"/>
  </g>
  <g class="axis-label">
    <text x="65" y="278" text-anchor="middle">2015</text>
    <text x="167" y="278" text-anchor="middle">2017</text>
    <text x="269" y="278" text-anchor="middle">2019</text>
    <text x="371" y="278" text-anchor="middle">2021</text>
    <text x="473" y="278" text-anchor="middle">2023</text>
    <text x="574" y="278" text-anchor="middle">2025</text>
  </g>
  <line class="annotation-lead" x1="574.5" y1="37.2" x2="574.5" y2="18"/>
  <text class="annotation-text" x="574.5" y="14" text-anchor="middle">31 days in 2025</text>
</svg>
<figcaption class="case-caption">Fig. 1 &mdash; Days reaching or exceeding 95&deg;F, downtown station, annual 2015&ndash;2025.</figcaption>
</figure>

## The signal

The gain isn't a straight ramp. 2018 and 2019 sit close to 2016 and 2017 before the chart steps up hard from 2020 onward — useful context for a desk that gets letters every summer arguing "it's always been hot here." The bars let a reader see that the recent run really is a step up from the prior five years, not just a single scary outlier season getting all the attention.

## Method

The station data came from the city's own public-works heat-monitoring page, which the desk's meteorology stringer already cross-checks against the regional airport gauge each year for the print almanac. I took the eleven-year window because it's the span the city has published continuously without a methodology change — an earlier gauge relocation in 2013 makes pre-2015 counts not quite comparable, so the chart starts where the clean run starts rather than reaching for a longer but noisier decade.

```csv
year,days_ge_95f
2015,11
2016,14
2017,13
2018,18
2019,16
2020,22
2021,19
2022,25
2023,28
2024,24
2025,31
```

## Why it held up

The desk reruns this exact chart every June with one more bar added and the axis max unchanged unless a new year actually breaks it — a small continuity decision that means readers who've seen the chart before don't have to re-learn the scale each summer. Because the SVG is generated from a short script rather than redrawn by hand, adding 2026's bar next year is a one-line data change, not a redesign.
