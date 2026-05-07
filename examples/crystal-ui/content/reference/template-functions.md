+++
title = "Template Functions"
+++

Reference for built-in functions and filters available inside Hwaro templates.

## URL Helpers

Hwaro templates run on a Tera-derived engine. URL helpers normalize paths against the configured `base_url` so that sites deployed under a sub-path resolve correctly.

| Function | Arguments | Returns |
|----------|-----------|---------|
| `url_for(path)` | `path: string` | Absolute URL prefixed with `base_url` |
| `asset_url(path)` | `path: string` | URL to a file in `static/` |
| `permalink(page)` | `page: object` | Canonical URL of a page |

```jinja
<a href="{{ url_for('/about/') }}">About</a>
<link rel="stylesheet" href="{{ asset_url('/css/style.css') }}">
```

## Content Filters

Filters transform a value before it is rendered.

| Filter | Description |
|--------|-------------|
| `markdown` | Renders a Markdown string to HTML |
| `slugify` | Converts text into a URL-safe slug |
| `date(format)` | Formats a date using `strftime` syntax |
| `truncate(n)` | Trims a string to `n` characters |
| `excerpt(n)` | Extracts the first `n` words of body text |

```jinja
<time datetime="{{ page.date }}">{{ page.date | date(format="%Y-%m-%d") }}</time>
<p>{{ page.content | excerpt(n=40) }}</p>
```

## Collection Helpers

Collection helpers operate on lists of pages or terms.

| Helper | Description |
|--------|-------------|
| `get_section(path)` | Returns a section by its content path |
| `get_taxonomy(name)` | Returns all terms for a taxonomy |
| `paginate(items, by)` | Splits a list into page-sized chunks |
| `sort(by, reverse)` | Sorts pages by a front-matter field |

```jinja
{% set posts = get_section(path="posts/_index.md") %}
{% for post in posts.pages | sort(attribute="date", reverse=true) %}
  <article>{{ post.title }}</article>
{% endfor %}
```

## Conditional Output

The `if`, `for`, and `set` blocks behave as in Jinja2. The `safe` filter disables HTML escaping when output has already been sanitized upstream.
