+++
title = "Smoke Season"
date = "2025-11-21"
description = "A ten-year area chart of wildfire smoke advisory days for a Pacific Northwest metro, built for a regional desk tracking how a new season entered the local vocabulary."
tags = ["climate", "wildfire", "area-chart"]
slug = "smoke-season"
[extra]
client = "Cascadia Report"
chart_type = "Area chart"
stat_value = "27 days"
stat_label = "smoke advisories in 2025, a 10-year high"
+++

Ten years ago, the Cascadia Report's editors tell me, "smoke season" wasn't a phrase anyone in the newsroom used. Now it gets its own line in the weather forecast most Augusts. I built this area chart for a retrospective piece tracking the phrase's arrival in the data: annual counts of air-quality smoke advisories issued for the metro, 2016 through 2025.

<!-- more -->

<figure class="case-chart">
<svg viewBox="0 0 640 300" role="img" aria-label="Area chart of wildfire smoke advisory days per year, rising unevenly from 4 days in 2016 to 27 days in 2025, the highest year on record.">
  <g class="chart-grid-full">
    <line x1="40" y1="260" x2="600" y2="260"/>
    <line x1="40" y1="145" x2="600" y2="145"/>
    <line x1="40" y1="30" x2="600" y2="30"/>
  </g>
  <g class="axis-label">
    <text x="34" y="264" text-anchor="end">0</text>
    <text x="34" y="149" text-anchor="end">14</text>
    <text x="34" y="34" text-anchor="end">28</text>
  </g>
  <text x="40" y="18" class="axis-unit">SMOKE ADVISORY DAYS PER YEAR</text>
  <path class="chart-area-fill" d="M40.0,227.1 L102.2,186.1 L164.4,136.8 L226.7,202.5 L288.9,79.3 L351.1,103.9 L413.3,161.4 L475.6,128.6 L537.8,87.5 L600.0,38.2 L600.0,260 L40.0,260 Z"/>
  <path class="chart-line" d="M40.0,227.1 L102.2,186.1 L164.4,136.8 L226.7,202.5 L288.9,79.3 L351.1,103.9 L413.3,161.4 L475.6,128.6 L537.8,87.5 L600.0,38.2" fill="none"/>
  <g class="chart-dot">
    <circle cx="40.0" cy="227.1" r="3"/><circle cx="102.2" cy="186.1" r="3"/><circle cx="164.4" cy="136.8" r="3"/>
    <circle cx="226.7" cy="202.5" r="3"/><circle cx="288.9" cy="79.3" r="3"/><circle cx="351.1" cy="103.9" r="3"/>
    <circle cx="413.3" cy="161.4" r="3"/><circle cx="475.6" cy="128.6" r="3"/><circle cx="537.8" cy="87.5" r="3"/>
  </g>
  <circle class="chart-dot-end" cx="600.0" cy="38.2" r="4.2"/>
  <g class="axis-label">
    <text x="40" y="278" text-anchor="middle">2016</text>
    <text x="164" y="278" text-anchor="middle">2018</text>
    <text x="289" y="278" text-anchor="middle">2020</text>
    <text x="413" y="278" text-anchor="middle">2022</text>
    <text x="538" y="278" text-anchor="middle">2024</text>
  </g>
  <line class="annotation-lead" x1="600" y1="38.2" x2="600" y2="22"/>
  <text class="annotation-text" x="596" y="18" text-anchor="end">27 days &mdash; ten-year high</text>
</svg>
<figcaption class="case-caption">Fig. 1 &mdash; Wildfire smoke advisory days issued for the metro area, annual 2016&ndash;2025.</figcaption>
</figure>

## The signal

The line does not climb in a straight run — 2019 dips to 7 days, nearly back to the 2016 baseline, before 2020 spikes to 22 — and the area fill under an uneven line like this does something a bar chart wouldn't: it reads as a shifting volume of bad-air days accumulating year over year, rather than eleven independent measurements. Cascadia's editors specifically wanted the fill because the story's argument was cumulative — not "this year was bad" but "smoke has become a structural part of late summer here" — and the shaded area under an unsteady line makes that structural read easier to see than a stick of eleven separate bars.

## Method

Advisory counts came from the regional air-quality management district's public alert log, filtered to advisories citing wildfire smoke specifically rather than the broader category that also includes industrial and ozone alerts. I used calendar-year counts rather than a rolling "fire season" window because the desk wanted the chart to line up cleanly with the other year-by-year charts already running in the same package.

```csv
year,smoke_advisory_days
2016,4
2017,9
2018,15
2019,7
2020,22
2021,19
2022,12
2023,16
2024,21
2025,27
```

## Why it held up

The piece ran with the chart pinned near the top, above even the lede photograph, on the strength of the 2025 record spike alone. Because the annotation calling out "ten-year high" is drawn directly onto the chart rather than only stated in the text, the graphic kept its point even when an aggregator later stripped the surrounding article and republished just the image.
