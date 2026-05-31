+++
title = "Your first page"
description = "Pin 2 — application example. Write one markdown page, wire its front matter, and confirm a clean build."
weight = 2
date = "2026-05-02"
+++

Every page is a markdown file with TOML frontmatter at the top. Open `content/index.md` and you will see one already.

## Anatomy of a page

```toml
+++
title = "Welcome"
date = "2026-05-01"
description = "A short summary."
tags = ["intro"]
+++

This is the body. Write whatever you like. Markdown.
```

The block between `+++` delimiters is parsed as TOML and exposed to your templates as `page.title`, `page.date`, and so on. Everything below is markdown.

## A note on file naming

- `_index.md` makes a directory into a *section* — a thing with a listing page.
- Anything else becomes an individual page under that section.
- Slug derives from the filename unless you set `slug` explicitly in frontmatter.

## Building

```sh
hwaro build
```

The result appears in `public/`. The default output is unminified so you can read it. Pass `--minify` once you trust it.
