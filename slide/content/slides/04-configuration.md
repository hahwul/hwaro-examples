+++
title = "Configuration"
weight = 4
description = "Understanding config.toml"
tags = ["setup"]
[extra]
chapter = "Setup"
+++

# Configuration

All site settings live in a single `config.toml` file.

```toml
title = "My Site"
description = "A personal blog"
base_url = "https://example.com"

[plugins]
processors = ["markdown"]

[highlight]
enabled = true
theme = "atom-one-dark"
use_cdn = true

[[taxonomies]]
name = "tags"
feed = true
```

## Key Sections

| Section | Purpose |
|---------|---------|
| `[plugins]` | Content processors |
| `[highlight]` | Syntax highlighting |
| `[[taxonomies]]` | Tags, categories |
| `[pagination]` | Page size settings |
| `[feeds]` | RSS / Atom output |
