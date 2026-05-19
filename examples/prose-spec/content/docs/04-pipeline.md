+++
title = "Pipeline"
description = "From ingest to artifact: the build pipeline, demystified."
date = "2026-04-27"
weight = 4
tags = ["pipeline", "build", "cli"]
categories = ["operations"]
+++

The pipeline is the named sequence of passes the engine applies to your
sources between `prose build` and an artifact on disk. It is the part of
the engine you will spend the most time with after the first week, and
it is the part most authors will want to extend. This chapter describes
every pass in order, what it produces, and how to insert your own.

## The eight passes

The pipeline has eight passes. Each pass is a pure function from the
output of the previous one. The engine memoizes each pass by content
hash, so an incremental build skips passes whose inputs have not
changed.

| # | Pass | Input | Output |
|---|------|-------|--------|
| 1 | `ingest` | source files | raw blob set |
| 2 | `parse` | raw blob set | parsed trees |
| 3 | `normalize` | parsed trees | canonical trees |
| 4 | `link` | canonical trees | resolved trees |
| 5 | `transform` | resolved trees | transformed trees |
| 6 | `measure` | transformed trees | measured trees |
| 7 | `layout` | measured trees | frame sets |
| 8 | `render` | frame sets | artifacts |

Each pass has a name, a hash, and an inspector. You can ask the engine
to dump the state at the boundary between any two passes, which is the
fastest way to debug a build that produces unexpected output.

```bash
prose inspect --after normalize chapters/01-philosophy.md
# => /tmp/prose-inspect-01-philosophy.normalize.json
```

## Ingest

Ingest reads the file system. It is the only pass with side effects in
the read direction, and the only pass that is allowed to block on I/O.
It produces a *blob set*: an ordered map from a source path to bytes,
plus the modification time and an integrity hash.

```text
$ prose inspect --after ingest
chapters/01-philosophy.md     11,842 B  2026-04-15T09:14:22Z  sha256:8a7e...
chapters/02-document-model.md 14,209 B  2026-04-19T15:02:08Z  sha256:b14c...
chapters/03-formatters.md     13,118 B  2026-04-23T08:48:51Z  sha256:9f02...
chapters/04-pipeline.md       10,773 B  2026-04-27T18:31:44Z  sha256:5e3a...
```

## Parse and normalize

Parsing turns each blob into a document tree. Normalization rewrites the
tree into a canonical shape: heading levels are demoted so that no
document has two level-one headings, trailing whitespace inside text
nodes is trimmed, and consecutive paragraphs separated by a single line
break are joined.

> A canonical tree is one whose serialization is byte-equal to the
> serialization of any other tree with the same meaning.
> <cite>&mdash; the engine's normalization invariant</cite>

## Link

The link pass resolves cross-references. A `[[chapter-3]]` reference
becomes a structured `cite` node that knows the chapter's title, its
page in the print artifact, and its anchor in HTML. References that
cannot be resolved are recorded as diagnostics and surfaced at the end
of the build, never as silent failures.

## Transform

Transform is where plugins run. The engine ships with a handful of
default transforms (small-caps normalization, smart quotes, footnote
collection), and a project can declare more.

```toml
[[transform]]
name = "drop-cap"
applies_to = "first-paragraph-of-chapter"

[[transform]]
name = "balance-headings"
options = { lines = 2 }

[[transform]]
name = "from-plugin"
load = "./plugins/redact.py"
options = { mark = "redacted" }
```

A transform receives a tree and returns a tree. It may not perform I/O.
This restriction is what lets the engine memoize the pass and produce
the deterministic builds the rest of the documentation has been
promising.

## Measure, layout, render

The last three passes are the formatter's domain. The engine dispatches
each output to its formatter, and the formatter runs `measure`, then
`layout`, then `render`. The engine collects the resulting artifacts
into the output directory and writes a build manifest.

```json
{
  "build_id": "2026-04-27T18:31:44Z-5e3a",
  "duration_ms": 612,
  "passes": [
    { "name": "ingest",    "ms":  12, "hits": 0, "items":  4 },
    { "name": "parse",     "ms":  38, "hits": 0, "items":  4 },
    { "name": "normalize", "ms":   9, "hits": 0, "items":  4 },
    { "name": "link",      "ms":  14, "hits": 0, "items":  4 },
    { "name": "transform", "ms":  41, "hits": 0, "items":  4 },
    { "name": "measure",   "ms":  82, "hits": 0, "items":  4 },
    { "name": "layout",    "ms": 210, "hits": 0, "items": 142 },
    { "name": "render",    "ms": 206, "hits": 0, "items":  3 }
  ],
  "artifacts": ["essay-on-light.pdf", "essay-on-light.html", "essay-on-light.epub"]
}
```

| Build mode | Cache hits | Wall time |
|------------|-----------|-----------|
| Cold | 0 of 8 | 612 ms |
| Incremental, one chapter changed | 5 of 8 | 178 ms |
| Incremental, no source changes | 8 of 8 | 22 ms |

## Watch mode

`prose watch` runs the pipeline whenever a source file changes. Because
every pass is memoized, watch builds are usually under 200 ms even for
book-length projects, which is fast enough to keep a PDF preview in
sync with an editor.

```bash
prose watch --output pdf --reload
# => watching ./content, ./assets, ./spec.toml
# => 22:14:08  rebuild  178 ms  (5 of 8 passes cached)
# => 22:14:34  rebuild  204 ms  (4 of 8 passes cached)
```

## Where to go from here

This is the end of the included manual. The reference is intentionally
short; the engine is intentionally small. Once the pipeline is familiar,
extending the engine is mostly a matter of writing transforms and,
occasionally, contributing a formatter. The project's plugin guide and
the formatter author's notes are available in the source repository.
