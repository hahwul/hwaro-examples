+++
title = "Template Reference"
+++

Complete reference for the template system used to render pages, sections, and taxonomies.

## Template Lookup Order

When rendering a page, Hwaro searches the `templates/` directory in a fixed order. The first match wins.

| Page type | Lookup order |
|-----------|--------------|
| Single page | `page.html` |
| Section index | `section.html`, then `page.html` |
| Taxonomy index | `taxonomy.html` |
| Taxonomy term | `taxonomy_term.html` |
| Error page | `404.html` |

## Available Variables

Templates receive a context object with site-wide and page-specific data.

### Site context

| Variable | Type | Description |
|----------|------|-------------|
| `site.title` | string | Value of `title` in `config.toml` |
| `site.description` | string | Value of `description` in `config.toml` |
| `base_url` | string | Resolved base URL with sub-path applied |
| `page_language` | string | Language code from front matter or default |

### Page context

| Variable | Type | Description |
|----------|------|-------------|
| `page.title` | string | Title from front matter |
| `page.url` | string | Permalink relative to `base_url` |
| `page.permalink` | string | Absolute URL including `base_url` |
| `page.date` | datetime | Date from front matter |
| `page.tags` | list | Tags from front matter |
| `page.lower` / `page.higher` | object | Adjacent pages by date |
| `content` | string | Rendered HTML body |

### Section context

| Variable | Type | Description |
|----------|------|-------------|
| `section.pages` | list | All pages in the section, sorted by `sort_by` |
| `section.list` | string | Pre-rendered list of pages |
| `pagination` | string | Pre-rendered pagination control |

## Filters

Filters transform values inside template expressions.

- `slugify` converts a string to a URL-safe slug
- `e` escapes HTML in user-supplied text
- `date` formats a datetime using a strftime pattern
- `truncate` shortens a string to a target length

## Includes and Inheritance

Use `{% include "header.html" %}` to compose shared fragments. Templates do not inherit from a base layout. Compose pages by including header and footer fragments at the top and bottom of each template file.
