+++
title = "Values and Expressions"
description = "The six value types, literal syntax, and the one-space-only rule around every operator."
date = "2025-03-09"
weight = 3
toc = true
template = "chapter"
[extra]
chapter = "03"
+++

Agate has six value types and no implicit conversion between them. A `string` is never coerced to a `number` for comparison, and a `null` never silently becomes `false` in a boolean context — you test for it explicitly. This chapter covers literals, access, and the operators that combine them.

<!-- more -->

## The six types

`string`, `number`, `bool`, `list`, `map`, and `null`. Numbers are always double-precision; there is no separate integer type, because a template language that renders text rarely needs one, and the ones that do can format explicitly with a filter.

```
{% set title = "Quarterly Report" %}
{% set count = 42 %}
{% set enabled = true %}
{% set tags = ["draft", "internal"] %}
{% set meta = { author: "R. Okafor", version: 3 } %}
{% set owner = null %}
```

## Access

Dot access reads a map field: `meta.author`. Bracket access reads a list by index or a map by a dynamic key: `tags[0]`, `meta[key_var]`. Both fail loudly at compile time if the compiler can prove the field does not exist on a statically known shape — Agate templates are typed against the context you declare in `def`, not against whatever object happens to show up at render time.

## Operators

Comparison: `== != < > <= >=`. Boolean: `and or not`. String concatenation uses `~`, kept separate from `+` so a stray string next to a number is a compile error instead of a silent `"3" + 4` producing `"34"` or `7` depending on which side won.

```
{% if count > 0 and not owner %}
  {{ count }} unassigned item(s)
{% if title ~ " — " ~ meta.author != previous_title %}
  {{ title }} — {{ meta.author }}
```

Every operator above is spaced exactly as shown — one space each side, per the rule from [Whitespace and Indentation](/language/whitespace/). The parser does not treat `count>0` as a typo to be forgiven; it treats it as a different, invalid token stream.

## Truthiness

Only `false` and `null` are falsy. An empty string, an empty list, and the number `0` are all truthy — a deliberate departure from languages where `if items:` silently does double duty for "the list exists" and "the list has entries." Write `items.length > 0` when you mean the second thing; Agate will not guess which one you meant.
