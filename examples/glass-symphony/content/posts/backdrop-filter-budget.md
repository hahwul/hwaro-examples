+++
title = "A Budget for Backdrop Filters"
date = 2025-09-12
[taxonomies]
tags = ["css", "performance"]
categories = ["notes"]
+++

A glass surface that looks effortless usually depends on `backdrop-filter: blur()`. The effect is cheap on a static page and expensive on a scrolling, animating one. The cost is paid for every painted pixel under every blurred panel, on every frame the compositor cannot promote.

The first move is to set a budget. Pick the count that matters: how many simultaneously visible blurred surfaces are acceptable on the slowest device the site needs to support. For a content-focused theme, a header and a single panel is usually the ceiling. Anything beyond that should justify itself with a measurement.

The second move is to keep the filter stack short. A single `blur(20px)` is dramatically cheaper than `blur(20px) saturate(150%)`, which is cheaper still than chained filter and backdrop-filter declarations on the same element. Combine the visual effects you actually want, then drop the rest.

The third move is to give the compositor a hint. A blurred panel that never moves, never changes size, and never reorders relative to the page can be promoted to its own layer with `will-change: transform` or `transform: translateZ(0)`. Once promoted, the layer caches its blurred result instead of recomputing it.

The last move is to test on a real low-end device, not a desktop with a throttled CPU profile. Mobile GPUs handle blur differently from integrated desktop GPUs, and the developer tools approximation is not always close. A Pixel 4a or an older iPhone is a more honest review than any synthetic benchmark.

None of this is exotic. It is the same logic applied to box shadows ten years ago: a beautiful effect, used sparingly, with a clear understanding of what each instance costs.
