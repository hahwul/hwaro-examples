+++
title = "Static Site Generators, Revisited After a Decade"
date = "2025-03-04"
description = "What changed, what stayed the same, and which assumptions still hold."
draft = false
template = "page"
[extra]
tags = ["ssg", "tooling", "build"]
categories = ["technology"]
+++

Static site generators were declared obsolete several times in the last ten years and yet the category keeps growing. The shift from Jekyll to Hugo to the current generation of Rust-based generators tracks a small set of priorities: build time, plugin surface, and content authoring ergonomics.

## Build Time

The first generation accepted minute-long builds as normal. With modest sites this was fine. As content libraries grew past a thousand pages, incremental builds and parallel rendering became unavoidable. Modern generators emit pages in tens of milliseconds and rebuild only the affected subtree on file changes.

Cold builds still matter for CI, where caching is unreliable. A site that takes two seconds locally can take forty in a clean container. The fix is usually a smaller dependency tree, not a faster compiler.

## Plugin Surface

The Jekyll era leaned on Ruby gems for everything. The current trend is the opposite: a small core with a stable template language and a documented data pipeline. Image processing, syntax highlighting, and feed generation are built in. Anything beyond that is a preprocess step in the user's makefile.

This is healthier. Plugins were a common source of upgrade breakage, and most of the popular ones have been absorbed into core features.

## Authoring

Markdown with front matter is still the dominant format. The interesting change is in front matter validation. Strict schemas catch typos at build time and let editors offer real autocomplete. The tradeoff is that schema drift across a long-running site has to be planned for.

## What to Pick

Pick the generator whose template language matches the team's comfort. Build speed differences are small once a project is shaped correctly. Migration cost dominates everything else.
