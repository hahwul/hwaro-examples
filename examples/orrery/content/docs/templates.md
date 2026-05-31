+++
title = "Templates"
description = "The lens — Crinja templates, where they live, and the small set of globals you are allowed to count on."
weight = 5
date = "2026-05-05"
+++

Templates live in `templates/`. They use Crinja, a Crystal port of Jinja2, so most things look familiar.

## The required templates

- `page.html` — the default for any single page.
- `section.html` — the listing page for a section.
- `taxonomy.html` and `taxonomy_term.html` — for `/tags/` and `/tags/foo/`.
- `404.html` — the not-found page.

Anything beyond that is optional. You can include partials with `{% include %}` and use `{% extends %}` for inheritance.

## Globals

| Variable | What it is |
| --- | --- |
| `site` | The whole site, with `pages`, `sections`, `taxonomies`. |
| `page` | The current page. |
| `section` | The current section, on listing pages. |
| `base_url` | Always available. Always prepended to links. |
| `current_year` | An integer. Useful in the footer. |

## A worked example

```jinja
{% include "header.html" %}

<article>
  <h1>{{ page.title }}</h1>
  {% if page.date %}<time>{{ page.date | date(format="%B %d, %Y") }}</time>{% endif %}
  <div class="content">{{ content | safe }}</div>
</article>

{% include "footer.html" %}
```

Rendered content is `{{ content | safe }}`, not `{{ page.content }}`. Common pitfall.
