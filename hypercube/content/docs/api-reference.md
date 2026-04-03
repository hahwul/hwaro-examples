+++
title = "API Reference"
description = "Complete interface documentation for all modules and configuration options"
date = "2026-03-20"
weight = 3
tags = ["api", "reference"]
+++

# API Reference

This page documents all configuration interfaces, template variables, and content schema definitions available in the Hypercube framework.

## Configuration Schema

### Site Configuration

The root `config.toml` file accepts the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | Yes | Site title displayed in header and metadata |
| `description` | String | Yes | Site description for SEO and social cards |
| `base_url` | String | Yes | Base URL for all generated links |

### Plugin Configuration

```toml
[plugins]
processors = ["markdown"]
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `processors` | Array | `["markdown"]` | Content processors to apply |

### Highlight Configuration

```toml
[highlight]
enabled = true
theme = "monokai"
use_cdn = true
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `enabled` | Boolean | `false` | Enable syntax highlighting |
| `theme` | String | `"github"` | Highlight.js theme name |
| `use_cdn` | Boolean | `true` | Load highlight.js from CDN |

### Pagination

```toml
[pagination]
enabled = true
per_page = 10
```

## Front Matter Schema

### Page Front Matter

All content files support the following TOML front matter fields:

```toml
+++
title = "Page Title"
description = "Page description"
date = "2026-01-15"
draft = false
weight = 1
tags = ["tag1", "tag2"]
categories = ["category1"]
template = "page"
slug = "custom-slug"
image = "/images/cover.jpg"
toc = true
[extra]
custom_field = "value"
+++
```

### Section Front Matter

Section index files (`_index.md`) accept additional fields:

```toml
+++
title = "Section Title"
sort_by = "weight"
reverse = false
paginate = 10
template = "section"
generate_feeds = true
transparent = false
+++
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `sort_by` | String | `"date"` | Sort field: `date`, `weight`, or `title` |
| `reverse` | Boolean | `false` | Reverse sort order |
| `transparent` | Boolean | `false` | Merge pages into parent section |

## Template Variables

### Global Objects

| Variable | Type | Description |
|----------|------|-------------|
| `site.title` | String | Site title from config |
| `site.description` | String | Site description from config |
| `site.base_url` | String | Base URL from config |
| `site.pages` | Array | All pages in the site |
| `site.sections` | Array | All sections |
| `base_url` | String | Shorthand for `site.base_url` |
| `current_year` | Integer | Current year |
| `current_date` | String | Current date |

### Page Objects

| Variable | Type | Description |
|----------|------|-------------|
| `page.title` | String | Page title |
| `page.date` | Date | Publication date |
| `page.url` | String | Relative URL path |
| `page.description` | String | Page description |
| `page.tags` | Array | Tag list |
| `page.reading_time` | Integer | Estimated reading time in minutes |
| `page.word_count` | Integer | Word count |
| `page.toc` | HTML | Table of contents markup |
| `page.extra` | Object | Custom fields from `[extra]` |
| `page.higher` | Page | Next page (newer) |
| `page.lower` | Page | Previous page (older) |
| `content` | HTML | Rendered page content |

### Section Objects

| Variable | Type | Description |
|----------|------|-------------|
| `section.title` | String | Section title |
| `section.pages` | Array | Pages in this section |
| `section.pages_count` | Integer | Number of pages |
| `section.subsections` | Array | Child sections |

## Template Filters

| Filter | Usage | Description |
|--------|-------|-------------|
| `date(fmt)` | `page.date \| date("%Y-%m-%d")` | Format a date |
| `slugify` | `title \| slugify` | URL-safe slug |
| `truncate_words(n)` | `text \| truncate_words(30)` | Truncate to N words |
| `strip_html` | `content \| strip_html` | Remove HTML tags |
| `safe` | `content \| safe` | Mark as safe HTML |
| `upper` / `lower` | `title \| upper` | Case conversion |
| `default(val)` | `desc \| default("None")` | Fallback value |
| `where(attr, val)` | `pages \| where("draft", false)` | Filter array |
| `sort_by(attr)` | `pages \| sort_by("date")` | Sort array |

## Error Codes

| Code | Meaning | Resolution |
|------|---------|------------|
| `E001` | Missing `config.toml` | Create config file in site root |
| `E002` | Invalid TOML syntax | Check front matter delimiters and field types |
| `E003` | Template not found | Verify template name in front matter matches file |
| `E004` | Broken internal link | Update href to match target page URL |
