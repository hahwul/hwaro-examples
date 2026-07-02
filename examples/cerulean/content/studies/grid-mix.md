+++
title = "Grid Mix"
date = "2025-06-18"
description = "A two-bar comparison of a state's electricity generation mix in 2018 and 2025, built for a research briefing that needed one chart to carry the whole finding."
tags = ["climate", "energy", "stacked-bar"]
slug = "grid-mix"
[extra]
client = "Halcyon Climate Lab"
chart_type = "Stacked bar"
stat_value = "11%→44%"
stat_label = "renewables share, 2018 vs 2025"
+++

Halcyon Climate Lab briefs state legislators twice a year, and their staff asked for exactly one chart that a lawmaker's aide could understand in the ten seconds before a hearing starts. A two-bar, four-segment stacked comparison — generation mix in 2018 against generation mix in 2025 — does the whole job: it shows what left the grid and what replaced it, without asking anyone to track eight years of monthly detail.

<!-- more -->

<figure class="case-chart">
<svg viewBox="0 0 640 300" role="img" aria-label="Stacked bar chart comparing electricity generation mix in 2018 and 2025. Coal falls from 37 percent to 8 percent and renewables rise from 11 percent to 44 percent, with gas and nuclear roughly stable.">
  <g class="chart-grid-full">
    <line x1="40" y1="260" x2="600" y2="260"/>
    <line x1="40" y1="145" x2="600" y2="145"/>
    <line x1="40" y1="30" x2="600" y2="30"/>
  </g>
  <g class="axis-label">
    <text x="34" y="264" text-anchor="end">0%</text>
    <text x="34" y="149" text-anchor="end">50%</text>
    <text x="34" y="34" text-anchor="end">100%</text>
  </g>
  <text x="40" y="18" class="axis-unit">SHARE OF STATE GENERATION</text>
  <g class="chart-stack">
    <rect x="140" y="174.9" width="130" height="85.1" class="seg-coal"/>
    <rect x="140" y="99.0" width="130" height="75.9" class="seg-gas"/>
    <rect x="140" y="55.3" width="130" height="43.7" class="seg-nuclear"/>
    <rect x="140" y="30.0" width="130" height="25.3" class="seg-renew"/>
    <rect x="400" y="241.6" width="130" height="18.4" class="seg-coal"/>
    <rect x="400" y="172.6" width="130" height="69.0" class="seg-gas"/>
    <rect x="400" y="131.2" width="130" height="41.4" class="seg-nuclear"/>
    <rect x="400" y="30.0" width="130" height="101.2" class="seg-renew"/>
  </g>
  <g class="axis-label">
    <text x="205" y="278" text-anchor="middle">2018</text>
    <text x="465" y="278" text-anchor="middle">2025</text>
  </g>
  <line class="annotation-lead" x1="530" y1="70" x2="560" y2="46"/>
  <text class="annotation-text" x="564" y="42">44% renewables</text>
</svg>
<figcaption class="case-caption">Fig. 1 &mdash; State electricity generation mix by source, 2018 vs. 2025, in percent of total generation.</figcaption>
</figure>

<ul class="chart-legend">
  <li><span class="swatch seg-coal" aria-hidden="true"></span>Coal</li>
  <li><span class="swatch seg-gas" aria-hidden="true"></span>Gas</li>
  <li><span class="swatch seg-nuclear" aria-hidden="true"></span>Nuclear</li>
  <li><span class="swatch seg-renew" aria-hidden="true"></span>Renewables</li>
</ul>

## The signal

Nuclear barely moves — 19% to 18% — and that stability is as much a finding as the two big swings either side of it. Legislators often assume the story is simply "coal out, solar in," but the honest chart shows gas holding almost steady too, dipping only from 33% to 30%. The renewables buildout mostly displaced coal directly, with gas acting as the more stubborn incumbent. A chart that only showed coal and renewables, dropping the other two segments as "noise," would have flattered the finding and made the transition look more complete than it is.

## Method

Both years come from the state utility commission's annual generation-mix filing, which reports percentages to one decimal place; I rounded to whole percent for the chart since the underlying meter data doesn't support the precision a decimal would imply. The four categories are drawn in a single-hue ramp from the site's one accent color rather than four unrelated hues — coal in a neutral tone, gas and nuclear as two steps of that accent, renewables at full saturation — so the "cleanliness" gradient reads visually without a reader having to learn an arbitrary four-color key.

```csv
source,share_2018_pct,share_2025_pct
coal,37,8
gas,33,30
nuclear,19,18
renewables,11,44
```

## Why it held up

The briefing runs this chart on a single projector slide with no speaker notes, and Halcyon's staff report it's the one visual from the deck that legislative aides screenshot on their phones during the hearing. Because both bars share one axis and one color key, the comparison survives being cropped out of context — a risk every briefing chart runs the moment it leaves the room it was built for.
