+++
title = "Ranking & Relevance"
description = "The scoring model: BM25, field boosts, typo penalties, and custom ranking signals."
date = "2026-01-22"
weight = 60
tags = ["ranking", "query", "configuration"]
toc = true
[extra]
section_id = "REF.6"
stability = "preview"
+++

Matching decides *which* documents come back; ranking decides their order.
Magnetite scores every matching document with BM25 as the base, then applies
field boosts, typo penalties, and any custom signals you declare. The final
sort is stable, so equal scores fall back to document order.

<!-- more -->

## The base: BM25

Each field contributes a BM25 score for the query terms it matched. BM25
rewards term frequency with diminishing returns and penalizes long fields, so a
term that appears three times in a short title outranks the same term buried in
a long body.

| Parameter | Default | Effect |
| --- | --- | --- |
| `k1` | `1.2` | term-frequency saturation — higher rewards repeats more |
| `b` | `0.75` | length normalization — `0` ignores field length |
| `field.boost` | `1.0` | per-field multiplier from the schema |

## Field boosts

A boost multiplies a field's contribution before the parts are summed. Set it in
the schema (`boost = 3.0` on `title`) for a global default, or per query with the
`^n` modifier for a one-off nudge.

{{ tape(query="title:manual^3 OR body:manual", label="A title hit is worth three body hits for this query only.") }}

The final document score is the sum of its per-field scores after boosts:

```text
score(doc) = Σ  boost(field) · bm25(field, query terms) · typo_penalty(term)
           over every field the query matched
```

## Typo and prefix penalties

Fuzzy and prefix matches are down-weighted so exact matches always win. The
multipliers compound with the field boost rather than replacing it.

| Match kind | Multiplier |
| --- | --- |
| exact term | 1.00 |
| prefix (`term*`) | 0.85 |
| fuzzy distance 1 | 0.75 |
| fuzzy distance 2 | 0.55 |

## Custom signals

Beyond text relevance you can fold in document-level signals — recency,
popularity, a manual pin — declared as `[[rank]]` blocks. Each signal reads a
stored numeric field and combines into the score with the given weight and
function.

```toml
[[rank]]
field = "views"
function = "log1p"   # log(1 + views), so popularity has diminishing returns
weight = 0.4

[[rank]]
field = "published_at"
function = "recency"  # newer documents score higher, decaying over 90 days
weight = 0.3
```

## Explaining a score

Append `&explain=true` and each hit gains an `explanation` tree: the BM25
contribution per field, the boost applied, the typo multiplier, and every custom
signal, down to the arithmetic that produced the final number. Use it when a
result ranks somewhere you did not expect — the tree almost always points at a
boost or a length-normalization surprise, not a bug in the matcher.

Ranking configuration is `preview`: the signal functions and their names may
change before the ranking API is covered by the 2.x compatibility promise.
