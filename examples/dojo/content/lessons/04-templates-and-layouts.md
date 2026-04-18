+++
title = "Templates and Layouts"
description = "Design your site with Jinja2-compatible templates -- includes, variables, and filters."
date = "2026-03-04"
weight = 4
template = "lesson"
tags = ["templates", "design"]
difficulty = "intermediate"
duration = "20 min"
step = "4"
+++

## Template Basics

Hwaro templates use Jinja2 syntax (via Crinja). If you have used Jinja2, Django templates, or Nunjucks, this will feel familiar.

Three types of delimiters:

```
{{ variable }}       Output a value
{% if condition %}   Control flow
{# comment #}       Comment (not rendered)
```

## Template Variables

Inside a template, you have access to these variables:

### Page Context

```html
{{ page.title }}          Page title
{{ page.date }}           Publication date
{{ page.description }}    Meta description
{{ page.url }}            Page URL path
{{ page.reading_time }}   Estimated reading time
{{ page.word_count }}     Word count
{{ page.tags }}           Array of tags
{{ page.extra.field }}    Custom front matter fields
```

### Site Context

```html
{{ site.title }}          Site title from config.toml
{{ site.description }}    Site description
{{ base_url }}            Base URL for links and assets
{{ current_year }}        Current year (for copyright)
```

### Content

The rendered HTML content of the page:

```html
{{ content }}
```

> Use `{{ content }}` directly. Do not use `{{ page.content }}` -- that gives you the raw Markdown, not the rendered HTML.

## Includes

Break templates into reusable parts:

```html
{% include "header.html" %}

<main>
  {{ content }}
</main>

{% include "footer.html" %}
```

This is how most Hwaro themes are structured. The `header.html` contains the opening `<html>`, `<head>`, and navigation. The `footer.html` closes everything.

## Conditionals and Loops

### Conditionals

```html
{% if page.image %}
  <img src="{{ page.image }}" alt="{{ page.title }}">
{% endif %}

{% if page.tags %}
  <div class="tags">
    {% for tag in page.tags %}
      <a href="{{ base_url }}/tags/{{ tag | slugify }}/">{{ tag }}</a>
    {% endfor %}
  </div>
{% endif %}
```

### Loops

```html
{% for post in section.pages %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <time>{{ post.date }}</time>
    <p>{{ post.description }}</p>
  </article>
{% endfor %}
```

## Filters

Transform values with filters using the pipe (`|`) syntax:

```html
{{ page.date | date("%B %d, %Y") }}
{{ page.title | slugify }}
{{ content | strip_html | truncate_words(30) }}
{{ "/css/style.css" | relative_url }}
```

Common filters:

| Filter | Description |
|---|---|
| `date(fmt)` | Format a date |
| `slugify` | Convert to URL-safe string |
| `strip_html` | Remove HTML tags |
| `truncate_words(n)` | Limit word count |
| `safe` | Output raw HTML |
| `sort_by(attr)` | Sort an array |
| `where(attr, val)` | Filter an array |

## Section Templates

Section pages (`_index.md`) use `section.html` by default. You can list child pages:

```html
{% for item in section.pages %}
  <a href="{{ item.url }}">{{ item.title }}</a>
{% endfor %}

{{ pagination }}
```

The `{{ pagination }}` tag renders navigation when pagination is enabled.

## Custom Page Templates

Assign a custom template in front matter:

```toml
+++
title = "My Page"
template = "special"
+++
```

Hwaro will look for `templates/special.html` instead of the default `page.html`.

## Previous and Next Navigation

For sequential content, use `page.higher` and `page.lower`:

```html
{% if page.higher %}
  <a href="{{ page.higher.url }}">Previous: {{ page.higher.title }}</a>
{% endif %}
{% if page.lower %}
  <a href="{{ page.lower.url }}">Next: {{ page.lower.title }}</a>
{% endif %}
```

## Key Takeaways

- Templates use `{{ }}` for output, `{% %}` for logic, `{# #}` for comments
- Use `{{ content }}` for rendered HTML, never `{{ page.content }}`
- Break templates into includes for maintainability
- Filters transform output inline with the pipe syntax
- Custom templates are assigned via front matter
