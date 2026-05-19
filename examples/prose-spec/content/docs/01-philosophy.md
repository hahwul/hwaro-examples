+++
title = "Philosophy"
description = "Why a new publishing engine, and what it refuses to compromise on."
date = "2026-04-15"
weight = 1
tags = ["design", "prose"]
categories = ["foundations"]
+++

There is a particular kind of document that resists the tools we have. It is
long enough to need structure but short enough to read in an evening. It is
technical enough to require code but literary enough to be set with care.
It will be read on paper, on a phone, and inside an EPUB reader on a train
with no signal. Prose Spec was written because none of the existing engines
treat this document as a first-class citizen. Word processors flatten it,
static site generators ignore the print case, and academic typesetters
demand a fluency in macros that the modern author has long since traded
away.

## What we are building

Prose Spec is a build tool for *considered prose*. The source is a tree, not
a string; the formatter is a renderer, not a templater; and the pipeline is
a deterministic graph that you can inspect at any step. The engine has
three goals, in order of stubbornness.

1. **Typography is a primary concern.** Optical sizing, hanging
   punctuation, balanced paragraphs, and per-document font subsetting are
   defaults, not opt-ins.
2. **One source, many artifacts.** A single project produces PDF, paginated
   HTML, and EPUB without forking the source. Output-specific concerns are
   isolated in the formatter, never bled into the document.
3. **The build is auditable.** Every step is named, every artifact is
   hashed, and the build graph is queryable from the command line.

> The page is not a container for content. The page is content.
> <cite>&mdash; from the Prose Spec design notes, draft three</cite>

## A small example

A Prose Spec source file looks like Markdown with a few well-defined
extensions. The front matter is TOML, the body is annotated, and the
project's typographic stance is declared in one place.

```toml
# spec.toml
title       = "An Essay on Light"
author      = "C. Mendel"
serif       = "Newsreader"
sans        = "Inter"
mono        = "IBM Plex Mono"
measure     = "28em"
leading     = 1.65
output      = ["pdf", "html", "epub"]
```

The build is invoked the same way for every artifact. The formatter for
each output is selected by the configuration above, not by a flag.

```bash
prose build
# => parse:     12 documents, 4,318 blocks (38 ms)
# => layout:    1 spread set,  142 pages   (210 ms)
# => render:    pdf, html, epub            (612 ms)
# => artifact:  ./build/out/essay-on-light.{pdf,html,epub}
```

## The three refusals

Prose Spec refuses three things that other engines accept without comment.
These are not features we lack; they are features we will not add.

| Refusal | Why |
|---------|-----|
| Inline styling | A `<span style="...">` in source is a leak. The document model carries semantic marks; the formatter decides their visual treatment. |
| Output-time CSS | Cosmetic CSS belongs to the formatter, not the document. Source files are the same whether you target paper or screen. |
| Runtime templates | Templates run at *build* time. Nothing in a Prose Spec artifact requires JavaScript to read. |

These refusals are why Prose Spec produces small, durable artifacts. A
hundred-page PDF rendered by the engine is typically under two megabytes,
fully subsetted, and contains no hidden raster fallbacks.

## What this manual will cover

The next three chapters describe the parts of the engine in the order you
will meet them when you read your first build log. **Chapter two** is the
document model: the tree, the blocks, and the marks that decorate them.
**Chapter three** is the formatter family &mdash; how the same tree
becomes three different artifacts. **Chapter four** is the pipeline: the
ordered set of passes the engine applies, and how to extend them with
your own.

If you are in a hurry, read chapter four first and the others later. The
manual was written in reading order, but the engine does not care.
