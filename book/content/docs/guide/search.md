+++
title = "Search"
weight = 3
tags = ["search"]
+++

# Search

Book supports client-side full-text search powered by a JSON index generated at build time.

## How It Works

When search is enabled in `config.toml`, Hwaro generates a `search.json` file containing the title and content of every page. A client-side library (like Fuse.js) can then query this index.

## Configuration

```toml
[search]
enabled = true
format = "fuse_json"
fields = ["title", "content"]
filename = "search.json"
```

### Options

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `enabled` | bool | `false` | Enable search index generation |
| `format` | string | `"fuse_json"` | Index format |
| `fields` | array | `["title", "content"]` | Fields to index |
| `filename` | string | `"search.json"` | Output filename |
| `exclude` | array | `[]` | Paths to exclude |

{{ hint(type="info", message="The search bar in the top navigation is a UI placeholder. Wire it up to Fuse.js or another client-side search library using the generated search.json.") }}
