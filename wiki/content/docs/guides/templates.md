+++
title = "Templates"
weight = 2
description = "How the template system works and how to customize it"
tags = ["templates", "customization"]
categories = ["guides"]
+++

# Templates

Templates control how content is rendered into HTML. They use Jinja2 syntax and have access to page data, site configuration, and helper functions.

## Template Resolution

Templates are selected automatically based on content type:

| Content | Template |
|---------|----------|
| `content/index.md` | `home.html` or `page.html` |
| `content/about.md` | `page.html` |
| `content/docs/_index.md` | `section.html` |
| `content/docs/article.md` | `page.html` |
| Taxonomy listing | `taxonomy.html` |
| Taxonomy term | `taxonomy_term.html` |

Override the template in front matter:

```toml
+++
template = "custom"
+++
```

## Available Variables

### Page Variables

```jinja
{{ page.title }}         {# Page title #}
{{ page.description }}   {# Page description #}
{{ page.date }}          {# Publication date #}
{{ page.url }}           {# Page URL path #}
{{ page.tags }}          {# Array of tags #}
{{ page.reading_time }}  {# Estimated reading time #}
{{ page.word_count }}    {# Word count #}
{{ page.toc }}           {# Table of contents HTML #}
{{ page.ancestors }}     {# Breadcrumb trail #}
{{ page.higher }}        {# Next page #}
{{ page.lower }}         {# Previous page #}
```

### Site Variables

```jinja
{{ site.title }}         {# Site title from config #}
{{ site.description }}   {# Site description #}
{{ base_url }}           {# Base URL #}
{{ current_year }}       {# Current year #}
```

### Content Rendering

```jinja
{{ content | safe }}     {# Rendered Markdown content #}
{{ toc | safe }}         {# Table of contents #}
```

## Includes

Break templates into reusable partials:

```jinja
{% include "header.html" %}
{% include "footer.html" %}
```

## Filters

Common filters for transforming data:

| Filter | Description |
|--------|-------------|
| `safe` | Output raw HTML |
| `date(format)` | Format a date |
| `truncate_words(n)` | Truncate to n words |
| `slugify` | Convert to URL slug |
| `upper` / `lower` | Change case |
| `default(value)` | Fallback value |

## Conditionals and Loops

```jinja
{% if page.description %}
  <p>{{ page.description }}</p>
{% endif %}

{% for article in section.pages %}
  <a href="{{ article.url }}">{{ article.title }}</a>
{% endfor %}
```
