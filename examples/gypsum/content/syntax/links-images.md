+++
title = "Links and images"
description = "Inline links, reference-style links resolved by a separate definition, and images as the same syntax with a leading bang."
date = "2025-05-09"
weight = 4
toc = true
+++

Links and images share one syntax: `[text](target)`. An image is exactly a
link with a `!` in front of it, its "text" becomes the `alt` attribute rather
than clickable text, and Gypsum resolves both the inline form and a
reference form that separates the target from where it's used.

<!-- more -->

## Inline links

The target and an optional title sit in parentheses immediately after the
link text, with no space between `]` and `(`.

<div class="demo" role="group" aria-label="An inline link and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>Read the [CommonMark specification](https://commonmark.org/ "Opens the spec") for the full grammar.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<p>Read the <a href="https://commonmark.org/" title="Opens the spec">CommonMark specification</a> for the full grammar.</p>
</div>
</div>
</div>

## Reference-style links

A reference link writes `[text][label]` in the flow of a sentence and
resolves the target from a definition — `[label]: target "title"` — that can
sit anywhere in the document, including after the paragraph that uses it.
This keeps long URLs out of the sentence you're actually writing.

<div class="demo" role="group" aria-label="A reference-style link and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>Gypsum's [test suite][suite] runs on every commit.
[suite]: https://commonmark.org/testsuite/ "The official CommonMark test corpus"</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<p>Gypsum's <a href="https://commonmark.org/testsuite/" title="The official CommonMark test corpus">test suite</a> runs on every commit.</p>
</div>
</div>
</div>

When `[label]` and the link text are identical, the label may be omitted
entirely — `[suite][]` and even a bare `[suite]` both resolve against the
same definition, which is why reference links pair so naturally with a
"further reading" list of definitions at the bottom of a file.

## Images

An image uses the same bracket-and-parenthesis target syntax, prefixed with
`!`. The bracketed text becomes the `alt` attribute; there is no visible
"image text" the way there is link text.

<div class="demo" role="group" aria-label="An image and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>![A simple crystal facet outline, the same mark used in Gypsum's wordmark](/favicon.svg)</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<p><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTE2IDQgTDI0IDEwIEwyMS41IDI1IEwxNiAyOCBMMTAuNSAyNSBMOCAxMCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNiZTE4NWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNiA0IEwxNiAyOCBNOCAxMCBMMjQgMTAiIHN0cm9rZT0iI2JlMTg1ZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjQ1Ii8+PC9zdmc+" alt="A simple crystal facet outline, the same mark used in Gypsum's wordmark" width="72" height="72"></p>
</div>
</div>
</div>

Titles work on images exactly as they do on links, and reference-style
images resolve against the same definition pool as reference-style links —
they're one lookup table, not two.
