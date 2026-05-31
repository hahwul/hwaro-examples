+++
title = "The build pipeline"
description = "What happens between hwaro build and public/, traced in seven readable phases like a diagram."
weight = 1
date = "2026-05-09"
+++

The build pipeline runs in seven phases, in order. Each phase reads the output of the previous one.

## Phase 1 — Discover

Walk the `content/` tree. Identify sections by `_index.md`. Identify pages by anything else with a markdown extension. Build a single in-memory tree.

## Phase 2 — Parse

Parse the TOML frontmatter for every page. Validate against the known fields. Stop on unknown required fields. Warn on unknown optional ones.

## Phase 3 — Render markdown

Run each page's body through the markdown processor. Apply syntax highlighting if enabled.

## Phase 4 — Build site graph

Assemble the `site.pages`, `site.sections`, and `site.taxonomies` collections. Compute pagination groups.

## Phase 5 — Render templates

For every page, pick the right template and render it. This is the only phase that requires the templates directory.

## Phase 6 — Static assets

Copy `static/` verbatim into `public/`. Process images if `--skip-image-processing` is not set.

## Phase 7 — Sitemap, feeds, search

Generate `sitemap.xml`, RSS/Atom feeds, search indexes, and any other endpoint described by config.

> If you understand the seven phases, you understand the entire pipeline. Everything else is convenience.
