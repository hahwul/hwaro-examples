+++
title = "Tiered retention"
description = "Describe the strata once — hot, warm, cold — and let the engine deposit data downward."
date = "2025-05-07"
weight = 3
toc = true
[extra]
band = "retention"
tier = "Retention"
+++

Retention in Marl is not a delete job. It is a set of **strata** — named tiers,
each with a resolution and a lifetime — that a series flows through as it ages.
You declare the layers once in `strata.toml`; the engine handles deposition,
compaction, and expiry.

<!-- more -->

## Declaring strata

Each tier has a resolution (the finest interval it keeps) and a `keep`
duration (how long data lives before it drops to the next tier or expires).

```toml
[[stratum]]
name = "hot"
resolution = "1s"
keep = "48h"

[[stratum]]
name = "warm"
resolution = "1m"
keep = "30d"

[[stratum]]
name = "cold"
resolution = "1h"
keep = "5y"
```

A point written now enters `hot` at one-second resolution. After 48 hours it
is rolled into `warm` at one-minute resolution; after 30 more days it settles
into `cold` at hourly resolution; after five years it is gone. No cron, no
manual reindex.

## The core sample

Reading a series across its full history means reading down through the strata.
This is the cross-section the engine walks for a long-range query:

<figure>
<svg viewBox="0 0 640 300" role="img" aria-label="A vertical core sample showing three retention tiers: hot at one-second resolution for 48 hours, warm at one-minute resolution for 30 days, and cold at one-hour resolution for 5 years, each layer coarser and older going down.">
  <rect x="40" y="20"  width="560" height="70" rx="6" fill="#1c261f" stroke="#4adea7" stroke-opacity="0.5"/>
  <rect x="40" y="98"  width="560" height="80" rx="6" fill="#161f19" stroke="#4adea7" stroke-opacity="0.4"/>
  <rect x="40" y="186" width="560" height="94" rx="6" fill="#111813" stroke="#4adea7" stroke-opacity="0.3"/>
  <g font-family="'IBM Plex Mono', monospace" font-size="13" fill="#e2e9e4">
    <text x="60" y="48" font-weight="500">hot</text>
    <text x="60" y="132" font-weight="500">warm</text>
    <text x="60" y="222" font-weight="500">cold</text>
  </g>
  <g font-family="'IBM Plex Mono', monospace" font-size="12" fill="#93a698">
    <text x="60" y="68">1s resolution</text>
    <text x="60" y="152">1m resolution</text>
    <text x="60" y="242">1h resolution</text>
    <text x="460" y="48" fill="#4adea7">keep 48h</text>
    <text x="460" y="132" fill="#4adea7">keep 30d</text>
    <text x="460" y="222" fill="#4adea7">keep 5y</text>
  </g>
  <g stroke="#4adea7" stroke-width="1.5" fill="none" opacity="0.7">
    <path d="M320 90 L320 98 M312 92 L320 100 L328 92"/>
    <path d="M320 178 L320 186 M312 180 L320 188 L328 180"/>
  </g>
</svg>
<figcaption>A single series as a core sample: newer, finer data near the surface; older, coarser data pressed into the deep store.</figcaption>
</figure>

## Per-series overrides

The default strata apply to every series, but you can override by measurement
or tag match. A high-cardinality debug metric might live only in `hot`:

```sql
ALTER RETENTION ON debug.trace SET strata = ['hot']
```

When a series matches no `keep` window, reads simply return nothing for that
range — there is no error, only absence. Downsampling decides *what* the
coarser layers actually contain; that is [the next chapter](/manual/downsampling/).
