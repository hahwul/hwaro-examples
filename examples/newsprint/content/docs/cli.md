+++
title = "CLI reference"
description = "Every command, every flag, and the one or two you reach for in the daily print run."
weight = 7
date = "2026-05-07"
+++

The `hwaro` CLI is small on purpose.

## Daily commands

| Command | Description |
| --- | --- |
| `hwaro init <name>` | Scaffold a new site. |
| `hwaro serve` | Local dev server with hot reload. |
| `hwaro build` | Build to `public/`. |
| `hwaro new <path>` | Create a content file with frontmatter. |

## Occasional commands

| Command | Description |
| --- | --- |
| `hwaro doctor --fix` | Audit and patch the config. |
| `hwaro tool check-links` | Look for broken internal links. |
| `hwaro tool platform github-pages` | Generate a CI config. |

## A note on flags

`hwaro serve -p 4000 --open` will start on port 4000 and open the browser. `hwaro build --minify --skip-image-processing` is the fastest production build.
