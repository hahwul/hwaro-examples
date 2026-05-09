+++
title = "Template Tags"
weight = 3
+++

Reference for the template tags Hwaro exposes inside `templates/*.html`.

## Page Variables

| Tag | Description |
|-----|-------------|
| `{{ page.title }}` | Title from the page front matter |
| `{{ page.url }}` | URL path of the current page |
| `{{ page.date }}` | Publish date |
| `{{ page.description }}` | Description string from front matter |
| `{{ content }}` | Rendered Markdown body |

## Site Variables

| Tag | Description |
|-----|-------------|
| `{{ site.title }}` | Title from `config.toml` |
| `{{ site.description }}` | Site description |
| `{{ site.sections }}` | Iterable of all top-level sections |
| `{{ base_url }}` | Site base URL prefix |

## Section Helpers

```jinja
{% for s in site.sections | sort_by("weight") %}
  <h3>{{ s.title }}</h3>
  {% for p in s.pages | sort_by("weight") %}
    <a href="{{ base_url }}{{ p.url }}">{{ p.title }}</a>
  {% endfor %}
{% endfor %}
```

## Filters

| Filter | Purpose |
|--------|---------|
| `e` | Escape HTML |
| `sort_by("weight")` | Order pages by `weight` front-matter |
| `date(format="%Y-%m-%d")` | Format a date value |
| `slice(start, end)` | Extract a sub-range from a list |

## Includes and Auto-Imports

The `{{ og_all_tags }}` and `{{ hreflang_tags }}` tags inject the standard OpenGraph and language metadata. `{{ highlight_css }}` and `{{ auto_includes_css }}` pull in syntax highlight and shortcode CSS automatically when used.
