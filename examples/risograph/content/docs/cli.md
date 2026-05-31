+++
title = "CLI reference"
description = "Every command, every flag, and the one or two you actually need every day."
weight = 7
date = "2026-05-07"
+++

The `hwaro` CLI is small on purpose.

## Daily commands

| Command | Description |
| --- | --- |
| `hwaro init <name> --scaffold docs` | Scaffold a new docs site. |
| `hwaro serve` | Local dev server with hot reload. |
| `hwaro build` | Build to `public/`. |
| `hwaro new <path>` | Create a content file with frontmatter. |

## Occasional commands

| Command | Description |
| --- | --- |
| `hwaro build --base-url "https://example.com"` | Build with a production host. |
| `hwaro build --minify` | Minify the output. |
| `hwaro build --drafts` | Include draft content. |

## A note on flags

`hwaro serve -p 8080` starts the dev server on port 8080 instead of the default 3000. `hwaro build --minify --base-url "https://example.com"` is the canonical production run — set the host at build time so local previews stay on `localhost`.
