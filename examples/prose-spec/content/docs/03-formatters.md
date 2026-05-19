+++
title = "Formatters"
description = "How a single document tree becomes PDF, paginated HTML, and EPUB."
date = "2026-04-23"
weight = 3
tags = ["formatter", "pdf", "html", "epub"]
categories = ["output"]
+++

A formatter is the part of the engine that turns a document tree into an
artifact. Prose Spec ships with three: a print formatter that produces
PDF, a screen formatter that produces paginated HTML, and a reflow
formatter that produces EPUB. They share a common interface and a common
type system, but each is free to make decisions appropriate to its
medium. A long footnote is set at the bottom of a page in print; it
becomes a popover in HTML; it is moved to a chapter-end note set in EPUB.
The source does not change.

## The formatter interface

Every formatter implements three calls. The engine drives all three in
turn, with the tree available at each step but never mutated.

```text
fn measure(tree, frame) -> Measurement
fn layout(tree, measurement) -> Frames
fn render(frames, sink) -> Artifact
```

`measure` computes intrinsic sizes for each block at a candidate frame
width. `layout` walks the tree and assigns blocks to frames &mdash; pages
in print, pages-in-a-scroll in paginated HTML, or a single flowing frame
in EPUB. `render` writes bytes to a sink. The three calls are pure: given
the same tree and the same configuration, they produce byte-identical
output.

## The print formatter

The print formatter is the most opinionated of the three. It enforces a
typographic baseline grid, applies optical-sized font variants, and
balances paragraphs across two columns when configured.

```toml
[output.pdf]
size        = "a5"
margin      = { top = "22mm", bottom = "22mm", inner = "20mm", outer = "16mm" }
baseline    = "13pt"
columns     = 1
hyphenation = "en-US"
widow_lines = 2
orphan_lines = 2
```

The baseline grid is the heart of the formatter. Every block in the
document &mdash; including images, code listings, and tables &mdash;
is rounded to a multiple of the baseline before placement. The result
is that facing pages align line-for-line, an effect that is impossible
to achieve in CSS without manual tuning.

| Feature | Print | HTML | EPUB |
|---------|-------|------|------|
| Baseline grid | yes | optional | no (reflow) |
| Hyphenation | Knuth-Liang | browser hint | reader-defined |
| Widow / orphan control | yes | yes | reader-defined |
| Footnotes | bottom of page | popover | chapter-end |
| Cross-references | page numbers | anchors | anchors |

## The HTML formatter

The HTML formatter produces a paginated reading surface that imitates the
print artifact without imitating its limitations. Pages have fixed
heights on desktop, snap to the viewport on mobile, and remember the
reader's position across sessions. The artifact is plain HTML and CSS;
there is no runtime JavaScript required to read it.

```html
<!-- A page emitted by the HTML formatter -->
<article class="page" data-page="14" data-of="142">
  <header class="folio">
    <span class="title">An Essay on Light</span>
    <span class="num">14</span>
  </header>
  <div class="frame">
    <p class="b-p">The mirror, considered closely, is never quite a copy.</p>
  </div>
</article>
```

The HTML output is also the source-of-truth for the engine's preview
mode. `prose serve` produces a paginated, navigable rendering at the
same dimensions as the eventual PDF, so that proof-reading does not
require a build.

```bash
prose serve --output html
# => watching ./content for changes
# => preview: http://localhost:4400/preview
# => first build: 318 ms, 142 pages
```

## The EPUB formatter

EPUB is a reflow format, and the EPUB formatter respects that. The
baseline grid is dropped; pages do not exist; the reader chooses the
measure. What remains is structure: chapters are EPUB navigation points,
footnotes are linked endnotes, and figures carry their captions in
semantic markup.

> A formatter that fights the reader is a formatter that will be
> uninstalled.
> <cite>&mdash; the EPUB formatter's commit message, in full</cite>

The EPUB formatter also handles subsetting. Fonts declared in the
project configuration are embedded into the EPUB, subsetted to exactly
the characters that appear in the document. A two-hundred-page novel
typically ships with under 80 KB of embedded font data.

## Choosing a formatter

You do not choose a formatter; you choose an output. The engine routes
the tree to the right formatter based on the `output` list in the
project's configuration. Build all three at once, or one at a time:

```bash
prose build --output pdf
prose build --output html epub
prose build              # all configured outputs
```

The next chapter describes the pipeline that orchestrates the parser,
the transforms, and the formatters into a single build.
