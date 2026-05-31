+++
title = "Configuration"
description = "Every dial in config.toml, what it does, and the smallest sensible default to set it to."
weight = 3
date = "2026-05-03"
+++

`config.toml` lives at the root of your site. It is the only configuration file you need.

## Minimum viable config

```toml
title = "My Docs"
description = "Docs for the my-docs project."
base_url = "http://localhost:3000"

[plugins]
processors = ["markdown"]
```

That is sufficient. Hwaro will fill in the rest with sensible defaults and warn you about anything ambiguous.

## Common additions

```toml
[highlight]
enabled = true
theme = "github"

[[taxonomies]]
name = "tags"

[sitemap]
enabled = true
```

## A note on base_url

Leave it as `http://localhost:3000` in your repository. Your CI workflow should override it at build time with `--base-url`. Hardcoding the production URL leads to broken local previews and broken self-respect.
