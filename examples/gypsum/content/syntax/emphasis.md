+++
title = "Emphasis and strong emphasis"
description = "Asterisks and underscores both produce emphasis, but only one of them respects word boundaries."
date = "2025-02-18"
weight = 2
toc = true
+++

A single run of `*` or `_` around a span produces `<em>`; doubling either
character produces `<strong>`. The two delimiters look interchangeable in the
simple case and diverge the moment a word boundary is involved.

<!-- more -->

## Single and double delimiters

Gypsum treats a lone asterisk and a lone underscore identically when they
wrap a clean word, and the same is true doubled.

<div class="demo" role="group" aria-label="Single and double delimiters and their rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>Gypsum treats *single* and _single_ the same. It treats **double** and __double__ the same too.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<p>Gypsum treats <em>single</em> and <em>single</em> the same. It treats <strong>double</strong> and <strong>double</strong> the same too.</p>
</div>
</div>
</div>

## Nesting for bold italic

Three of the same delimiter in a row nests `<strong>` around `<em>` (or the
reverse, depending on which closes first), giving bold italic text without
mixing delimiter characters.

<div class="demo" role="group" aria-label="Triple delimiters and their rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>You can ***nest them*** for bold italic in one run.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<p>You can <strong><em>nest them</em></strong> for bold italic in one run.</p>
</div>
</div>
</div>

## Underscores respect word boundaries, asterisks do not

This is the rule that actually matters day to day. An underscore inside a
word is left alone, so identifiers like `snake_case_variable` survive
unscathed. An asterisk makes no such exception.

<div class="demo" role="group" aria-label="Intraword underscores and asterisks and their rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>snake_case_variable stays literal, but hazard*ous is emphasized mid-word.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<p>snake_case_variable stays literal, but hazard<em>ous</em> is emphasized mid-word.</p>
</div>
</div>
</div>

The rule is implemented as a delimiter-flanking test, not a hardcoded
word-boundary check: an underscore only opens or closes emphasis when it sits
between whitespace or punctuation on the correct side. Writing prose with
underscores in file names or variable names has never required an escape in
a CommonMark-compliant renderer, Gypsum included.
