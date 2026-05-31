+++
title = "Taxonomies"
description = "Tags, categories, and the occasional custom index — how to declare them and how to template them."
weight = 6
date = "2026-05-06"
+++

A taxonomy is a way of grouping pages by a shared field. `tags` is the most common one, but you can declare any.

## Declaring

```toml
[[taxonomies]]
name = "tags"
feed = true

[[taxonomies]]
name = "authors"
```

## Using

In a page's frontmatter:

```toml
tags = ["onboarding", "guide"]
authors = ["A. Editor"]
```

Hwaro will generate `/tags/` and `/tags/onboarding/` URLs automatically. Your `taxonomy.html` template renders the list of terms. Your `taxonomy_term.html` template renders one term's pages.

## A small idiom

If you only care about the first tag in a list, this is the canonical shortcut:

```jinja
{% if page.tags %}<span class="tag">{{ page.tags | first }}</span>{% endif %}
```
