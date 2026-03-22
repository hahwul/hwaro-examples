+++
title = "Why Static Sites Matter for the Environment"
date = "2025-03-15"
description = "Static websites consume far fewer resources than their dynamic counterparts. Here's why that matters for sustainability."
tags = ["web", "sustainability", "static-sites"]
categories = ["technology"]
+++

The internet accounts for roughly 3.7% of global carbon emissions, comparable to the airline industry. Every page load, every database query, and every server-side computation contributes to that figure. Static sites offer a meaningful alternative.

## The Problem With Dynamic Sites

Traditional dynamic websites process each request on the server. A single page view might involve:

- Multiple database queries
- Server-side template rendering
- Session management
- Plugin execution chains

Each of these operations consumes CPU cycles and electricity. Multiply that by millions of visitors and the energy cost becomes significant.

## How Static Sites Help

A static site is pre-built. The HTML, CSS, and assets are generated once during build time and served as flat files. There is no database, no runtime processing, and no wasted computation.

> A static site served from a CDN can handle massive traffic spikes with virtually no increase in energy consumption per request.

### Measurable Differences

| Metric | Dynamic Site | Static Site |
|--------|-------------|-------------|
| Server CPU per request | High | Minimal |
| Database queries | Multiple | None |
| Time to first byte | 200-800ms | 10-50ms |
| Hosting requirements | Application server | Any file server |

## What You Can Do

1. **Choose static when possible.** Not every site needs a database.
2. **Optimize assets.** Compress images, minify CSS.
3. **Use green hosting.** Select providers powered by renewable energy.
4. **Measure your impact.** Tools like Website Carbon Calculator can help quantify your site's footprint.

Building for the web doesn't have to mean building against the planet.
