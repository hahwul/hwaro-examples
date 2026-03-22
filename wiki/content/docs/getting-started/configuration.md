+++
title = "Configuration"
weight = 3
description = "All configuration options explained"
tags = ["config", "settings"]
categories = ["getting-started"]
+++

# Configuration

All site configuration lives in `config.toml` at the root of your project. This page covers every available option.

## Basic Settings

```toml
title = "My Wiki"
description = "A short description of the site"
base_url = "https://wiki.example.com"
```

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Site title, shown in header and metadata |
| `description` | string | Site description for SEO and social sharing |
| `base_url` | string | Production URL of the site |

## Content Processing

```toml
[plugins]
processors = ["markdown"]

[markdown]
safe = false
lazy_loading = true
```

When `safe` is enabled, raw HTML in Markdown files will be stripped. Enable `lazy_loading` to automatically add `loading="lazy"` to images.

## Syntax Highlighting

```toml
[highlight]
enabled = true
theme = "github"
use_cdn = true
```

Available themes: `github`, `monokai`, `atom-one-dark`, `vs2015`.

## Search

```toml
[search]
enabled = true
format = "fuse_json"
fields = ["title", "content"]
filename = "search.json"
```

When enabled, a JSON search index is generated at build time. Use a client-side library like Fuse.js to query it.

## Taxonomies

```toml
[[taxonomies]]
name = "tags"
feed = true

[[taxonomies]]
name = "categories"
```

Taxonomies create automatic listing pages. For example, defining a `tags` taxonomy generates `/tags/` and `/tags/{tag-name}/` pages.

## Pagination

```toml
[pagination]
enabled = true
per_page = 10
```

Override per section in `_index.md`:

```toml
+++
paginate = 20
sort_by = "weight"
+++
```

## Feeds

```toml
[feeds]
enabled = true
type = "rss"
limit = 20
sections = ["docs"]
```

Generates an RSS or Atom feed. Set `type` to `"atom"` for Atom format.

## Environment-Specific Configuration

Use separate configuration files for different environments. The `base_url` is typically the only value that changes between development and production, and can be overridden at build time:

```bash
acme build --base-url "https://wiki.example.com"
```
