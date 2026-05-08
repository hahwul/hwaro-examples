+++
title = "Template Reference"
+++

Reference for the template engine variables, filters, and tags available within Hwaro layouts.

## Global Context

The following objects are available on every page render.

| Variable | Type | Description |
|----------|------|-------------|
| `site` | object | Values pulled from `config.toml` (`site.title`, `site.description`, `site.base_url`). |
| `page` | object | Front matter and rendered HTML for the current page. |
| `current_path` | string | Path of the current page relative to the site root. |
| `base_url` | string | Site base URL with no trailing slash. Use this for every internal link. |

## Page Object

```jinja
{{ page.title }}
{{ page.description }}
{{ page.date }}
{{ page.taxonomies.tags }}
{{ page.content }}
```

The `page.taxonomies` map contains arrays for each configured taxonomy. Iterate with the standard `for` tag.

## Section Object

Available inside `section.html` and any template that renders a listing.

| Field | Description |
|-------|-------------|
| `section.pages` | Array of pages within the current section. |
| `section.subsections` | Nested sections under the current path. |
| `section.list` | Pre-rendered HTML list of pages. |
| `pagination` | Rendered pagination links when enabled. |

## Filters

| Filter | Output |
|--------|--------|
| `e` | HTML-escapes a string. |
| `default(value=...)` | Falls back when the input is empty. |
| `length` | Returns the size of an array or string. |
| `truncate(length=N)` | Truncates a string to N characters. |
| `date(format="%Y-%m-%d")` | Formats a date value. |

## Includes and Inheritance

Partials are included with `{% include "header.html" %}`. Templates that extend a base layout use `{% extends "base.html" %}` and override blocks declared with `{% block name %}`.

## Linking Between Pages

Always prefix internal URLs with `{{ base_url }}` so the site renders correctly when deployed under a sub-path.

```jinja
<a href="{{ base_url }}/guide/">Read the guide</a>
<a href="{{ base_url }}/reference/cli/">CLI commands</a>
```

Avoid hardcoded leading slashes; they break when `base_url` resolves to anything other than the domain root.
