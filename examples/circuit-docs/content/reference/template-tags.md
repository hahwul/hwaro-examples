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
| `{{ content }}` | Rendered Markdown body |

## Site Variables

| Tag | Description |
|-----|-------------|
| `{{ site.title }}` | Title from `config.toml` |
| `{{ site.sections }}` | Iterable of all top-level sections |
| `{{ base_url }}` | Site base URL prefix |

## Section Loops

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

## Auto Imports

The `{{ og_all_tags }}` and `{{ highlight_css }}` tags inject OpenGraph and syntax highlighting metadata automatically when used.
