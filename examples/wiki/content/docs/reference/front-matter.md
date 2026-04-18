+++
title = "Front Matter"
weight = 2
description = "All available front matter fields for content files"
tags = ["content", "reference"]
categories = ["reference"]
+++

# Front Matter

Every content file begins with TOML front matter enclosed in `+++` delimiters. This page documents all available fields.

## Page Fields

```toml
+++
title = "Page Title"
date = "2025-03-15"
description = "A short summary of this page"
draft = false
weight = 1
slug = "custom-url"
template = "page"
tags = ["tag1", "tag2"]
categories = ["category1"]
authors = ["Author Name"]
image = "/images/cover.jpg"
toc = true
aliases = ["/old-url/"]

[extra]
custom_field = "custom value"
+++
```

## Field Reference

### Required

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Page title |

### Content Metadata

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `date` | string | — | Publication date in YYYY-MM-DD format |
| `description` | string | — | Summary used in listings and SEO |
| `authors` | array | — | List of author names |
| `image` | string | — | Featured image for social sharing |
| `draft` | boolean | `false` | Exclude from production builds |

### Organization

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `weight` | integer | — | Sort order within a section (lower = first) |
| `slug` | string | filename | Custom URL segment |
| `aliases` | array | — | Redirect old URLs to this page |
| `tags` | array | — | Tag taxonomy terms |
| `categories` | array | — | Category taxonomy terms |

### Rendering

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `template` | string | auto | Override template selection |
| `toc` | boolean | `false` | Generate table of contents |

### Extra Fields

The `[extra]` table holds custom key-value pairs accessible in templates via `{{ page.extra.field_name }}`:

```toml
[extra]
difficulty = "beginner"
estimated_time = "10 minutes"
```

## Section Fields

Section index files (`_index.md`) support additional fields:

```toml
+++
title = "Section Title"
sort_by = "weight"
reverse = false
paginate = 10
page_template = "doc"
transparent = false
generate_feeds = true
+++
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `sort_by` | string | `"date"` | Sort pages by: `date`, `weight`, or `title` |
| `reverse` | boolean | `false` | Reverse sort order |
| `paginate` | integer | — | Items per page |
| `page_template` | string | — | Template for child pages |
| `transparent` | boolean | `false` | Merge pages into parent section |
| `generate_feeds` | boolean | `true` | Include in RSS/Atom feeds |
