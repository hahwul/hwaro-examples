+++
title = "Faceting & Filters"
description = "Exact facet counts, range filters, and the difference between narrowing and counting."
date = "2026-03-14"
weight = 40
tags = ["faceting", "query", "configuration"]
toc = true
[extra]
section_id = "REF.4"
stability = "stable"
+++

Faceting and filtering answer two different questions. A filter narrows the
result set — show me only in-stock items. A facet counts the result set —
how many matches fall under each brand. Magnetite computes both from the same
posting lists in a single pass, so counts are always exact, never sampled.

<!-- more -->

## Filters

A `&filter=` directive removes documents that do not match. Filters never
contribute to scoring; they are pure set intersection, so they are cheap and
composable.

```text
climbing gear &filter=in_stock:true &filter=year:>=2024
```

| Filter form | Matches | Applies to |
| --- | --- | --- |
| `field:value` | exact value | keyword, int, bool |
| `field:>=n` | greater than or equal | int, float, date |
| `field:<n` | strictly less than | int, float, date |
| `field:[a TO b]` | inclusive range | int, float, date |

Multiple filters on the same field are combined with `OR`; filters across
different fields are combined with `AND`. That mirrors how people think about
faceted navigation: any red *or* blue item, that is also in stock.

## Facets

Declare a field as `facet = true` in the schema, then ask for its counts with
`&facet=`. The response gains a `facets` block keyed by field, each holding the
distinct values and their exact match counts.

{{ tape(query="tent &facet=brand &facet=season &filter=weight:<2000", label="Count matches per brand and per season, but only among sub-2 kg tents.") }}

A faceted response looks like this:

```json
{
  "hits": [ /* ...documents... */ ],
  "total": 42,
  "facets": {
    "brand":  [ { "value": "Cairn",   "count": 18 },
                { "value": "Marrow",  "count": 14 } ],
    "season": [ { "value": "3-season", "count": 30 },
                { "value": "4-season", "count": 12 } ]
  }
}
```

## Facet counts respect filters, not their own field

The subtle rule: a facet's counts reflect every active filter *except* a filter
on that same facet's field. This is what makes faceted UIs feel right — after you
click "Cairn", the brand facet still shows the other brands' counts so you can
switch, while every other facet narrows to the Cairn subset.

| Active filters | `brand` facet counts reflect | `season` facet counts reflect |
| --- | --- | --- |
| none | all matches | all matches |
| `brand:Cairn` | all matches | Cairn matches only |
| `season:4-season` | 4-season matches only | all matches |

## Limits and ordering

By default a facet returns its top 20 values by count. Set `&facet=brand:50` to
raise the cap, or `&facet_sort=alpha` to order values lexically instead of by
frequency. High-cardinality fields — anything approaching unique-per-document,
like a free-text title — should not be faceted; the count block would be as
large as the corpus.
