+++
title = "Template filters"
description = "A reference of the most useful template filters, with examples you can paste."
weight = 8
date = "2026-05-08"
+++

Filters are applied with the pipe operator: `{{ thing | filter }}`.

## Most-used

| Filter | Example |
| --- | --- |
| `date(format)` | `{{ page.date \| date(format="%B %d, %Y") }}` |
| `slugify` | `{{ "Hello world" \| slugify }}` |
| `upper` | `{{ title \| upper }}` |
| `lower` | `{{ title \| lower }}` |
| `replace(from, to)` | `{{ title \| replace(from=" ", to="-") }}` |
| `default(value)` | `{{ desc \| default(value="No description") }}` |
| `truncate_words(n)` | `{{ summary \| truncate_words(n=30) }}` |

## For collections

| Filter | Example |
| --- | --- |
| `sort_by(attribute)` | `{{ pages \| sort_by(attribute="date") }}` |
| `reverse` | `{{ pages \| reverse }}` |
| `group_by(attribute)` | `{{ pages \| group_by(attribute="section") }}` |
| `first` / `last` | `{{ items \| first }}` |
| `length` | `{{ items \| length }}` |
| `slice(start, end)` | `{{ items \| slice(end=5) }}` |

> Filters compose. You can write `{{ pages \| sort_by(attribute="date") \| reverse \| slice(end=5) }}` and it does what it looks like it does.
