+++
title = "Template API"
+++

Reference for variables and filters available inside Hwaro templates.

## Page Object

Every page template receives a `page` object representing the current document.

| Field | Type | Description |
|-------|------|-------------|
| `page.title` | string | Title from front matter |
| `page.date` | datetime | Publication date |
| `page.url` | string | Permalink relative to `base_url` |
| `page.content` | string | Rendered HTML body |
| `page.tags` | array | Tags declared in front matter |
| `page.summary` | string | First paragraph or explicit `<!-- more -->` cut |

## Section Object

Section templates receive a `section` object that mirrors `page` and adds a `pages` collection.

```html
{% for entry in section.pages %}
  <li><a href="{{ entry.url }}">{{ entry.title }}</a></li>
{% endfor %}
```

The `pages` collection respects the section's `sort_by` setting. Default ordering is descending by date.

## Site Object

The global `site` object exposes configuration values declared in `hwaro.toml`.

| Field | Description |
|-------|-------------|
| `site.title` | Project title |
| `site.description` | Tagline used in metadata |
| `site.base_url` | Deployment root |
| `site.languages` | Configured language codes |

## Filters

Hwaro ships a small filter set. Custom filters can be registered through the plugin API.

| Filter | Purpose |
|--------|---------|
| `slugify` | Convert strings into URL-safe slugs |
| `truncate(length=N)` | Trim a string to N characters |
| `markdown` | Render a string as Markdown |
| `date(format="%Y-%m-%d")` | Format a datetime |
| `default(value="...")` | Provide a fallback when a value is missing |

Filters chain with the pipe operator. The order of evaluation is left to right.

## Macros

Macros are reusable template fragments declared in `templates/shortcodes/`. They accept named arguments and return a rendered string. Macros invoked from Markdown content use the same registry as those invoked from templates.
