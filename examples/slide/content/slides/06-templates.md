+++
title = "Templates"
weight = 6
description = "Jinja2-compatible template engine"
tags = ["templates"]
[extra]
chapter = "Templates"
+++

# Templates

Hwaro uses a **Jinja2-compatible** template engine.

## Basic Structure

```html
{% raw %}{% include "header.html" %}
  <main>
    <h1>{{ page.title }}</h1>
    <div class="content">
      {{ content }}
    </div>
  </main>
{% include "footer.html" %}{% endraw %}
```

## Available Variables

- `site` -- Global site configuration
- `page` -- Current page metadata
- `content` -- Rendered markdown content
- `section` -- Section data (in section templates)
- `base_url` -- Site root URL

## Filters

```
{% raw %}{{ page.date | date("%Y-%m-%d") }}
{{ page.title | slugify }}
{{ content | truncate_words(50) }}{% endraw %}
```
