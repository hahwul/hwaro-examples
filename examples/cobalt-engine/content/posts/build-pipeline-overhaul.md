+++
title = "Build Pipeline Overhaul: Incremental Compilation"
date = 2024-06-12
description = "How Cobalt Engine reduced cold-build times by isolating the dependency graph from the asset graph."
+++

# Build Pipeline Overhaul

The 1.2 release ships a redesigned build pipeline. Earlier versions traversed the content tree and the asset tree in a single pass, which forced the engine to reparse Markdown whenever a CSS file changed. The new pipeline separates these graphs and keeps each one warm between runs.

## Two Graphs, One Cache

The dependency graph tracks Markdown, front matter, and template references. The asset graph tracks stylesheets, scripts, fonts, and images. A change in one no longer invalidates the other. On a 4,000-page reference site, a single CSS edit now finishes in 180 ms instead of 6.4 s.

```toml
[build]
incremental = true
cache_dir = ".cobalt/cache"
parallel = true
```

## Stable Output Hashes

Asset hashes are now derived from canonical source bytes rather than from the rendered output. This means re-running the build on a clean machine produces byte-identical artifacts, which is a prerequisite for reproducible deployments and signed bundles.

## Worker Coordination

The internal task scheduler uses a work-stealing queue. Each worker pulls from its local deque first and only crosses cores when its queue is empty. Lock contention during the parse phase dropped to under one percent of total wall time on the test corpus.

## What Breaks

Custom shortcodes that mutated shared state during rendering are no longer safe. The render phase is now parallel by default. Migration is straightforward: move shared lookups into a build-time hook that runs before rendering begins.

The full migration notes are in the upgrade guide. Existing v1.0 projects will continue to build, but the legacy serial path is deprecated and will be removed in v2.0.
