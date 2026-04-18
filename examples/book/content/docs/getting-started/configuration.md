+++
title = "Configuration"
weight = 2
tags = ["setup", "config"]
+++

# Configuration

All site configuration lives in `config.toml` at the root of your project.

## Basic Settings

```toml
title = "My Documentation"
description = "A knowledge base built with Hwaro"
base_url = "http://localhost:3000"
```

## Enabling Search

Book supports client-side search via a JSON index:

```toml
[search]
enabled = true
format = "fuse_json"
fields = ["title", "content"]
```

## Syntax Highlighting

Code blocks are highlighted automatically when enabled:

```toml
[highlight]
enabled = true
theme = "github"
use_cdn = true
```

{{ hint(type="info", message="The `github` highlight theme matches Book's light design. Other options include `atom-one-dark` and `monokai`.") }}

## Taxonomies

Define tags or categories for your content:

```toml
[[taxonomies]]
name = "tags"
```

## Full Reference

| Setting | Type | Description |
|---------|------|-------------|
| `title` | string | Site title shown in the header |
| `description` | string | Meta description for SEO |
| `base_url` | string | Root URL of the site |
| `[pagination]` | table | Pagination settings |
| `[[taxonomies]]` | array | Taxonomy definitions |

See the [Hwaro documentation](https://github.com/hahwul/hwaro) for a complete reference of all configuration options.
