+++
title = "Sections & pages"
description = "Pin 4 — content bus. How the tree is wired, how sections behave, and why _index.md carries more current than it looks."
weight = 4
date = "2026-05-04"
+++

A *section* is a directory under `content/` that contains an `_index.md`. The `_index.md` is the listing page for that section.

## Anatomy

```
content/
├── _index.md          # the home section (optional)
├── about.md           # a single page
└── docs/
    ├── _index.md      # the docs section's listing page
    ├── installation.md
    └── configuration.md
```

A page inside `content/docs/` is automatically a member of the `docs` section. You will see `page.section == "docs"` inside templates.

## Sort options

In a section's `_index.md`, you can set:

```toml
sort_by = "date"      # or "weight" or "title"
reverse = true
paginate = 20
```

If you choose `weight`, lower numbers come first.

## Transparent sections

A section with `transparent = true` in its `_index.md` exposes its pages to its parent. This is useful when you want a deep tree but a flat listing.

> Use transparency sparingly. It is the kind of feature that, when overused, makes a content tree harder to reason about.
