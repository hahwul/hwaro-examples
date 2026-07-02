+++
title = "Query Syntax"
description = "The Magnetite query grammar: terms, phrases, fields, boolean operators, and fuzzy modifiers."
date = "2026-05-18"
weight = 10
tags = ["query", "grammar", "typo-tolerance"]
toc = true
[extra]
section_id = "REF.1"
stability = "stable"
+++

Every request to Magnetite is a single query string. The parser turns it into a
tree of clauses, resolves synonyms and typo variants, and hands the tree to the
matcher. The grammar is small on purpose: six operators, three modifiers, and
field prefixes. This is the whole language.

<!-- more -->

A bare word is a term. Two words separated by a space are two terms combined
with an implicit `AND`. A quoted string is a phrase — matched only where the
tokens appear adjacent and in order.

{{ tape(query="cold start latency", label="Two terms, implicit AND — both must match, order does not matter.") }}

## Fields

Prefix a clause with a field name and a colon to scope it. Fields are declared
in the schema (see indexing) and only searchable fields accept a query prefix.

```text
title:manual          # term in the title field only
body:altitude         # term in the body field only
year:2025             # exact match on a numeric field
```

Phrases combine with fields the same way. Use double quotes around the phrase:

```text
title:"cold start" AND body:latency
```

## Operators

Operators are uppercase and bind left to right. Parentheses group clauses.

| Operator | Meaning | Example |
| --- | --- | --- |
| `AND` | both clauses must match | `search AND server` |
| `OR` | either clause may match | `stove OR burner` |
| `NOT` | exclude documents matching the clause | `search NOT legacy` |
| `( )` | group clauses to control precedence | `(a OR b) AND c` |
| `"..."` | phrase — adjacent tokens in order | `"typo tolerance"` |
| `field:` | scope the next clause to one field | `title:manual` |

## Modifiers

Modifiers attach to a single term and change how it matches.

| Modifier | Name | Effect |
| --- | --- | --- |
| `~n` | fuzzy | allow up to `n` edits (default `2` when `n` is omitted) |
| `*` | prefix | match any term beginning with the stem |
| `^n` | boost | multiply this clause's score by `n` |

A fuzzy term is the everyday case. `altitude~2` matches `altitude`,
`altittude`, and `altdue` — anything within edit distance two.

{{ tape(query="title:manual AND body:altitude~2 &facet=year:2025", label="A phrase-scoped clause, a fuzzy term, and a facet directive on one line.") }}

## Facet directives

Facets ride on the query string after an ampersand. They do not affect which
documents match — they ask the engine to count matches per value of a faceted
field. Multiple directives stack:

```text
climbing gear &facet=brand &facet=season &filter=in_stock:true
```

The response then carries a `facets` block with exact counts, computed from the
same posting lists that answered the query. See faceting for the full contract.

## Errors

An unbalanced quote, an unknown field, or a dangling operator returns `400` with
a parser message that points at the offending column. The server never guesses
at a malformed query — a typo in your *data* is tolerated; a typo in your
*grammar* is reported.
