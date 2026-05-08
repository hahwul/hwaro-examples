+++
title = "Build Pipeline"
description = "Structuring multi-stage builds for large documentation projects."
date = "2025-02-04"
+++

For sites that contain more than a few hundred pages, a single-pass build becomes the slowest part of the development loop. Splitting the build into discrete stages keeps incremental work cheap and isolates failures.

## Stages

A typical pipeline runs three stages in order:

1. **Content collection.** Walk the `content/` tree, parse front matter, and emit a manifest of pages, sections, and taxonomies. Cache the result by file mtime so unchanged files are skipped on the next run.
2. **Asset processing.** Compile stylesheets, transform images, and copy static files. Hash each output and write the mapping to a manifest the renderer can read.
3. **Rendering.** Use the content manifest plus the asset manifest to render templates. Because the previous stages already deduplicated work, this is the only stage that always runs to completion.

## Cache Keys

A reliable cache key combines the source file path, the file's modification time, and the version of the build tool. Adding the tool version invalidates the cache automatically when the renderer changes, which prevents subtle bugs from stale output.

```toml
[cache]
strategy = "mtime"
include_tool_version = true
directory = ".hwaro/cache"
```

## Parallel Execution

Stages within the same level can run in parallel when their inputs do not overlap. Asset processing usually splits into image, style, and script branches. Use a worker pool sized to the number of physical cores; oversubscription rarely helps for I/O-bound work.

## Failure Modes

Treat warnings as errors in CI builds. A broken link or missing image that appears as a warning during local development becomes invisible once the site is deployed. Most pipelines expose a `--strict` flag that promotes the entire warning class.
