+++
title = "Automatic downsampling"
description = "Rollups computed once at each tier boundary, so coarse queries stay cheap forever."
date = "2025-07-22"
weight = 4
toc = true
[extra]
band = "retention"
tier = "Retention"
+++

When a series drops from one stratum to the next, Marl does not simply throw
points away. It **downsamples**: it computes aggregates over each target
interval and stores those instead of the raw points. The rollup is computed
once, at the tier boundary, and every later query reuses it.

<!-- more -->

## Rollup functions

Each stratum declares which aggregates it keeps. Storing more functions costs
more space but answers more queries without touching raw data.

```toml
[[stratum]]
name = "warm"
resolution = "1m"
keep = "30d"
rollups = ["mean", "min", "max", "count", "sum"]

[[stratum]]
name = "cold"
resolution = "1h"
keep = "5y"
rollups = ["mean", "max", "count", "p99"]
```

A query for `mean(value)` over data six months old reads a single stored value
per hour, not 3,600 raw points that no longer exist. Percentiles like `p99`
are kept as compact sketches, so they stay mergeable across intervals.

## What survives the boundary

Downsampling is lossy on purpose. Once `hot` data ages into `warm`, the raw
one-second points are gone; only the declared rollups remain. This is why the
rollup list is a design decision, not a default:

<figure>
<svg viewBox="0 0 640 220" role="img" aria-label="Raw one-second samples on the left collapse into a single one-minute bucket on the right holding mean, max, and count.">
  <g stroke="#4adea7" stroke-opacity="0.5" fill="#1c261f">
    <rect x="30" y="40" width="10" height="120" rx="2"/>
    <rect x="48" y="70" width="10" height="90"  rx="2"/>
    <rect x="66" y="55" width="10" height="105" rx="2"/>
    <rect x="84" y="90" width="10" height="70"  rx="2"/>
    <rect x="102" y="60" width="10" height="100" rx="2"/>
    <rect x="120" y="100" width="10" height="60" rx="2"/>
    <rect x="138" y="75" width="10" height="85" rx="2"/>
    <rect x="156" y="50" width="10" height="110" rx="2"/>
  </g>
  <text x="30" y="185" font-family="'IBM Plex Mono', monospace" font-size="12" fill="#93a698">60 raw samples · 1s</text>
  <path d="M210 100 L280 100 M270 92 L282 100 L270 108" stroke="#4adea7" stroke-width="1.5" fill="none"/>
  <rect x="320" y="40" width="120" height="120" rx="6" fill="#161f19" stroke="#4adea7" stroke-opacity="0.4"/>
  <g font-family="'IBM Plex Mono', monospace" font-size="12" fill="#e2e9e4">
    <text x="336" y="72">mean 0.53</text>
    <text x="336" y="98">max  0.91</text>
    <text x="336" y="124">count 60</text>
  </g>
  <text x="320" y="185" font-family="'IBM Plex Mono', monospace" font-size="12" fill="#93a698">1 bucket · 1m</text>
</svg>
<figcaption>Sixty one-second samples collapse into one one-minute bucket holding only the rollups declared for the warm tier.</figcaption>
</figure>

## Reading across a boundary

A query whose range spans two tiers stitches raw and rolled data together, and
Marl tells you when a result is downsampled so dashboards can label it:

```sql
SELECT mean(value), meta.resolution
FROM cpu.load
WHERE time > now() - 40d
GROUP BY time(1h)
```

```
time                 mean   resolution
2025-06-20T00:00:00  0.48   1m      (warm, rolled)
2025-05-14T00:00:00  0.51   1h      (cold, rolled)
```

Rolled data changes how aggregation composes across gaps — the subject of
[Gap-aware queries](/manual/gap-aware-queries/).
