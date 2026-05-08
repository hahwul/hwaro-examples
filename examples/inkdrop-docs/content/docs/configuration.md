---
title: Configuration
description: Reference for the inkdrop-docs configuration surface.
---

# Configuration

The `config.toml` file controls site identity, navigation, and per-section behavior. Most projects only edit a handful of keys, but every option below is documented for completeness.

## Site Identity

`title`, `description`, and `base_url` form the visible header on every generated page. The base URL must include a scheme and should match the deployment origin so absolute links and feed URLs resolve correctly.

```toml
title = "Inkdrop Docs"
description = "Refined documentation with ink-drop aesthetics"
base_url = "https://docs.example.com"
```

When the docs site lives under a subpath, append it to `base_url` rather than the routing layer. Templates concatenate this prefix when emitting links, so the generated HTML stays portable across hosts.

## Taxonomies

Documentation sites rarely need tags, but the option exists when you want to cross-link release notes or grouped tutorials.

```toml
[taxonomies]
tags = "tags"
categories = "categories"
```

Each taxonomy declared here gets a list page and a per-term page. Empty taxonomies are skipped at build time.

## Section Defaults

The `docs` section accepts the standard Hwaro keys: `paginate_by` to limit list pages, `sort_by` to control ordering (`weight`, `date`, or `title`), and `transparent` to expose pages from nested folders to the parent listing. For long reference manuals, set `sort_by = "weight"` and assign explicit weights in each page front-matter so the sidebar mirrors the intended reading order.

## Extra Variables

Anything under `[extra]` is passed verbatim to templates. The default theme reads `accent_color`, `mono_font`, and `code_theme` to tune the inked look. Override them in your overlay:

```toml
[extra]
accent_color = "#1f1f1f"
mono_font = "Iosevka"
code_theme = "papercolor-light"
```

Unrecognized keys are ignored, so the file is forward compatible with future theme revisions.
