+++
title = "The Melt Line"
date = "2025-01-14"
description = "Eleven Septembers of shrinking sea ice across the Baffin–Kara monitoring corridor, built as a live line chart for a climate desk's year-end package."
tags = ["climate", "sea-ice", "line-chart"]
slug = "melt-line"
template = "study"
[extra]
client = "Boreal Dispatch"
chart_type = "Line chart"
stat_value = "−0.92M km²"
stat_label = "September minimum, 2015→2025"
+++

Boreal Dispatch's climate desk closes out December with a "state of the ice" piece every year, and every year the hardest part isn't the reporting — it's finding a chart that reads clearly at the size a phone screen allows. This year I built them an eleven-point line, one September minimum-extent reading per year, drawn from the desk's own regional monitoring corridor rather than a single global headline number.

<!-- more -->

<figure class="case-chart">
<svg viewBox="0 0 640 300" role="img" aria-label="Line chart of September minimum sea ice extent across the Baffin–Kara corridor, declining from 4.61 million square kilometers in 2015 to 3.69 million in 2025.">
  <g class="chart-grid-full">
    <line x1="40" y1="260" x2="600" y2="260"/>
    <line x1="40" y1="145" x2="600" y2="145"/>
    <line x1="40" y1="30" x2="600" y2="30"/>
  </g>
  <g class="axis-label">
    <text x="34" y="264" text-anchor="end">3.6</text>
    <text x="34" y="149" text-anchor="end">4.15</text>
    <text x="34" y="34" text-anchor="end">4.7</text>
  </g>
  <text x="40" y="18" class="axis-unit">MILLION KM&sup2;, SEPTEMBER MINIMUM</text>
  <path class="chart-area-fill" d="M40.0,48.8 L96.0,78.1 L152.0,67.6 L208.0,134.5 L264.0,111.5 L320.0,188.9 L376.0,122.0 L432.0,165.9 L488.0,201.5 L544.0,186.8 L600.0,241.2 L600.0,260 L40.0,260 Z"/>
  <path class="chart-line" d="M40.0,48.8 L96.0,78.1 L152.0,67.6 L208.0,134.5 L264.0,111.5 L320.0,188.9 L376.0,122.0 L432.0,165.9 L488.0,201.5 L544.0,186.8 L600.0,241.2" fill="none"/>
  <g class="chart-dot">
    <circle cx="40.0" cy="48.8" r="3"/><circle cx="96.0" cy="78.1" r="3"/><circle cx="152.0" cy="67.6" r="3"/>
    <circle cx="208.0" cy="134.5" r="3"/><circle cx="264.0" cy="111.5" r="3"/><circle cx="320.0" cy="188.9" r="3"/>
    <circle cx="376.0" cy="122.0" r="3"/><circle cx="432.0" cy="165.9" r="3"/><circle cx="488.0" cy="201.5" r="3"/>
    <circle cx="544.0" cy="186.8" r="3"/>
  </g>
  <circle class="chart-dot-end" cx="600.0" cy="241.2" r="4.2"/>
  <g class="axis-label">
    <text x="40" y="278" text-anchor="middle">2015</text>
    <text x="152" y="278" text-anchor="middle">2017</text>
    <text x="264" y="278" text-anchor="middle">2019</text>
    <text x="376" y="278" text-anchor="middle">2021</text>
    <text x="488" y="278" text-anchor="middle">2023</text>
    <text x="600" y="278" text-anchor="middle">2025</text>
  </g>
  <line class="annotation-lead" x1="600" y1="241.2" x2="600" y2="205"/>
  <text class="annotation-text" x="596" y="199" text-anchor="end">3.69M km&sup2; in 2025<tspan class="dim" x="596" dy="15">&minus;0.92 since 2015</tspan></text>
</svg>
<figcaption class="case-caption">Fig. 1 — September minimum extent, Baffin&ndash;Kara monitoring corridor, annual readings 2015&ndash;2025.</figcaption>
</figure>

## The signal

The line isn't smooth, and that's the point of showing it as a line rather than a single before/after comparison. 2021 ticks up against the trend — a cold, cloud-heavy summer over the corridor that year briefly slowed melt — and a design that hid that bump in favor of a clean downward arrow would have been lying about the texture of the record, even in service of a true headline. Readers who remember a mild summer would have every right to distrust a chart that erased it. The eleven-point line keeps the noise in and still ends unambiguously lower than it started: a net loss of 0.92 million square kilometers, or roughly the land area of Texas and Colorado combined, over one decade.

## Method

The desk's monitoring corridor is narrower than the whole Arctic basin by design — it tracks a fixed shipping-relevant strip rather than a basin-wide aggregate, which is the number the desk actually needs for the shipping-season stories it runs every spring. I pulled the eleven annual minimums from the desk's existing tracking spreadsheet, sanity-checked the two outlier years against the desk's own archived wire copy, and plotted the result as a single SVG path with y-axis gridlines at the low, mid, and high value so the eye has a scale to check the slope against.

```csv
year,min_extent_million_km2
2015,4.61
2016,4.47
2017,4.52
2018,4.20
2019,4.31
2020,3.94
2021,4.26
2022,4.05
2023,3.88
2024,3.95
2025,3.69
```

## Why it held up

The chart ran unedited from filing to publish, including through a same-day headline change when the desk's editor wanted to lead with "a lost decade" instead of the original working title. Because the chart is markup, not an exported image, that headline swap didn't touch it at all — only the surrounding prose changed. That's the whole pitch for building charts this way: the visualization and the words around it can move independently, right up until the last minute before a deadline.
