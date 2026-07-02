+++
title = "Indexing & Schema"
description = "Declare fields, choose analyzers, and build the inverted index from a document source."
date = "2026-04-30"
weight = 20
tags = ["indexing", "schema", "configuration"]
toc = true
[extra]
section_id = "REF.2"
stability = "stable"
+++

Before Magnetite can answer a query it needs a schema and a source. The schema
declares each field, its type, and how it is analyzed; the source is a directory
of JSON documents or a stream on standard input. Indexing is a single command
and produces one memory-mapped file.

<!-- more -->

## The schema file

A schema is TOML. Each `[[field]]` block declares one field. Only fields marked
`searchable` accept a query prefix; only fields marked `facet` can be counted.

```toml
[[field]]
name = "title"
type = "text"
analyzer = "standard"
searchable = true
boost = 3.0

[[field]]
name = "body"
type = "text"
analyzer = "standard"
searchable = true

[[field]]
name = "year"
type = "int"
facet = true

[[field]]
name = "brand"
type = "keyword"
facet = true
searchable = true
```

## Field types

| Type | Stored as | Notes |
| --- | --- | --- |
| `text` | analyzed tokens | tokenized, lowercased, typo-eligible |
| `keyword` | one exact token | not tokenized; ideal for facets and IDs |
| `int` | 64-bit integer | range filters and numeric facets |
| `float` | 64-bit float | range filters; not faceted by default |
| `bool` | single bit | filter only |
| `date` | epoch seconds | range filters; parsed from RFC 3339 |

## Analyzers

An analyzer is a token pipeline. The `standard` analyzer splits on Unicode word
boundaries, lowercases, and folds diacritics. Swap in `whitespace` to keep
punctuation, or name a custom pipeline defined under `[analyzer.<name>]`.

| Analyzer | Splitting | Lowercase | Fold accents |
| --- | --- | --- | --- |
| `standard` | Unicode words | yes | yes |
| `whitespace` | spaces only | no | no |
| `keyword` | none (whole value) | no | no |

## Building the index

Point the indexer at a schema and a source directory. It reads every `.json`
file, applies the schema, and writes `index.mag`.

```bash
magnetite index \
  --schema schema.toml \
  --source ./documents \
  --out index.mag
```

Indexing is incremental when the source supports it: pass `--since <timestamp>`
and only documents modified after that point are reanalyzed and merged into the
existing segment set. A full rebuild is rarely needed — the segment merger keeps
read amplification bounded as new writes arrive.

## Verifying a build

`magnetite stat index.mag` prints the document count, segment count, and the
per-field term totals. If a field you expected to be searchable shows zero
terms, it was almost certainly declared `facet` without `searchable` — the two
flags are independent, and a field can be either, both, or neither.
