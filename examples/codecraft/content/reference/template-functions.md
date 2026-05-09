+++
title = "Template Functions"
+++

Reference for built-in template functions available in Hwaro themes.

## get_url

Build an absolute URL for an internal path. Honors `base_url` from `config.toml` and any configured path prefixes.

```jinja
<a href="{{ get_url(path='@/posts/welcome.md') }}">Welcome</a>
```

## get_section

Load a section by its `_index.md` path. Useful for cross-referencing pages from outside the section template.

```jinja
{% set posts = get_section(path='posts/_index.md') %}
{% for post in posts.pages | slice(end=5) %}
  <li>{{ post.title }}</li>
{% endfor %}
```

## resize_image

Generate a responsive image variant at build time. Returns the resized asset URL.

```jinja
<img src="{{ resize_image(path='hero.jpg', width=960) }}" alt="Hero">
```

## load_data

Read a JSON, TOML, or YAML data file from the project and expose it to the template.

```jinja
{% set authors = load_data(path='data/authors.toml') %}
{% for entry in authors.list %}
  <p>{{ entry.name }} &mdash; {{ entry.role }}</p>
{% endfor %}
```

## now

Return the current build timestamp. Combine with the `date` filter for footers and copyright lines.

```jinja
&copy; {{ now() | date(format='%Y') }}
```
