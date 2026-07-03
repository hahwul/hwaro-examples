+++
title = "Headings"
description = "Six ATX levels ranked by leading hash marks, plus two setext levels written as an underline."
date = "2025-01-14"
weight = 1
toc = true
+++

A heading's level is either counted directly, from one to six leading `#`
characters, or inferred from the punctuation on the line beneath it. Gypsum
implements both forms exactly as the specification defines them, including
the small rules that trip up hand-rolled parsers.

<!-- more -->

## ATX headings

One to six `#` characters at the start of a line, followed by at least one
space, open an ATX heading of that level. A run of trailing `#` characters is
allowed and stripped, along with any trailing whitespace before it — so a
closing sequence is cosmetic, never required.

<div class="demo" role="group" aria-label="Three ATX heading levels and their rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code># Gypsum
## Syntax reference
### Compliance</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<div class="demo-h1">Gypsum</div>
<div class="demo-h2">Syntax reference</div>
<div class="demo-h3">Compliance</div>
</div>
</div>
</div>

Levels four through six follow the identical rule with four, five, and six
hashes; Gypsum places no ceiling on how deeply a document nests them, though
most style guides stop mattering past level four.

## Setext headings

A line of text followed immediately by a line of `=` characters becomes a
level-1 heading; a line of `-` characters makes it level 2. No blank line may
separate the text from its underline — that gap would instead close the text
as an ordinary paragraph.

<div class="demo" role="group" aria-label="Two setext headings and their rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>Gypsum
======
Syntax
------</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<div class="demo-h1">Gypsum</div>
<div class="demo-h2">Syntax</div>
</div>
</div>
</div>

## The missing-space edge case

The single most common heading bug in casual markdown is a hash mark with no
space after it. CommonMark resolves this deliberately: without the space, the
line is not a heading at all, hashes included.

<div class="demo" role="group" aria-label="A missing space and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>#NotAHeading, because the hash has no space after it.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<p>#NotAHeading, because the hash has no space after it.</p>
</div>
</div>
</div>

Parsers that skip this check will misrender any document containing a hashtag
or an issue reference like `#412` at the start of a line — a real bug class
Gypsum's test suite checks for explicitly.
