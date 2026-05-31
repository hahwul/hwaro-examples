+++
title = "CLI reference"
description = "Every command, every flag, and the two you actually reach for every working day."
weight = 7
date = "2026-05-07"
+++

The `hwaro` CLI is small on purpose. A handful of commands cover the whole notebook workflow.

## Daily commands

| Command | Description |
| --- | --- |
| `hwaro init <name> --scaffold docs` | Scaffold a new docs site. |
| `hwaro serve` | Local dev server with hot reload. |
| `hwaro build` | Build the site to `public/`. |
| `hwaro new <path>` | Create a content file with frontmatter. |

## Occasional commands

| Command | Description |
| --- | --- |
| `hwaro doctor --fix` | Audit and patch the config. |
| `hwaro tool check-links` | Look for broken internal links. |
| `hwaro tool platform github-pages` | Generate a CI config. |

## A note on flags

`hwaro serve -p 4000` starts on port 4000. `hwaro build --minify --skip-image-processing` is the fastest production build, and `hwaro build --base-url "https://example.com"` rules the URLs for the host you are shipping to.
