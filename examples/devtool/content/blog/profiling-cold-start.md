+++
title = "Profiling cold start"
date = "2025-01-28"
description = "How we cut startup time from 41ms to 19ms"
+++

Cold start time is the wall clock duration between the user pressing enter and the first useful output appearing on the terminal. For a build tool that runs once per save, anything above thirty milliseconds is perceptible as a delay. We measured 2.3 at 41ms and worked down to 19ms across two release cycles.

## Measurement

The first step was to stop guessing. We instrumented the binary with a low-overhead tracer that records timestamps at well-known checkpoints: process entry, configuration parsed, plugins loaded, first hook fired, first file written. The tracer writes to a ring buffer and flushes on exit, which adds about forty microseconds to a run.

Running the trace against a representative project produced a clear picture. Configuration parsing dominated the cold path at 14ms. Plugin loading came in second at 9ms. Everything else was background noise.

## Lazy parsing

The configuration loader was eagerly validating every field, including profiles that were not active for the current run. Splitting validation into a fast pass that checks structure and a slow pass that checks values cut parsing time by roughly half. Field-level validation now runs only for the active profile.

```rust
// Before
let config = parse_and_validate(source)?;

// After
let raw = parse(source)?;
let config = raw.activate(profile)?;
```

## Plugin metadata cache

Plugin loading was reading every Lua file from disk on every run, even when the file had not changed. Adding a small on-disk cache keyed by file modification time eliminated the repeated reads. The cache lives at `.devtool/cache/plugins.json` and is invalidated whenever the configuration file changes.

The combined effect of the two changes was a 22ms reduction in cold start time. There is more to find. The next target is the global allocator, which currently accounts for about 3ms of fragmented small allocations during startup. A bump allocator scoped to the boot path should remove most of that.
