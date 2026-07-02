+++
title = "Blockquotes"
description = "A leading angle bracket per line, lazy continuation, nesting, and the blank line that closes a quote."
date = "2026-01-12"
weight = 6
toc = true
+++

A line beginning with `>` starts or continues a blockquote. The marker only
needs to appear once per paragraph, though — CommonMark allows "lazy"
continuation lines that omit it, and Gypsum follows that rule exactly rather
than requiring every wrapped line to repeat the angle bracket.

<!-- more -->

## Lazy continuation

<div class="demo" role="group" aria-label="A blockquote with a lazy continuation line and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>&gt; Gypsum resolves every construct
against the same grammar, every time.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<blockquote><p>Gypsum resolves every construct against the same grammar, every time.</p></blockquote>
</div>
</div>
</div>

The second line has no `>` in front of it, and it still belongs to the quote
because it continues the same paragraph the marked line started. A line that
starts a genuinely new block — a heading, a list, another blockquote — is
never treated as lazy continuation, marker or not.

## Nesting

A second `>` immediately after the first opens a blockquote inside the
blockquote. Nesting has no fixed limit.

<div class="demo" role="group" aria-label="A nested blockquote and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>&gt; Outer quote, one level deep.
&gt;&gt; Nested quote, two levels deep.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<blockquote><p>Outer quote, one level deep.</p><blockquote><p>Nested quote, two levels deep.</p></blockquote></blockquote>
</div>
</div>
</div>

## Block content inside a quote

A blockquote is a container, not a leaf — anything that can appear at the
top level of a document can appear inside one, prefixed with `>` on every
line that needs it.

<div class="demo" role="group" aria-label="A blockquote containing a list and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>&gt; Three things every parser must get right:
&gt; - Block structure first
&gt; - Inline spans second
&gt; - Whitespace exactly as written</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<blockquote><p>Three things every parser must get right:</p><ul><li>Block structure first</li><li>Inline spans second</li><li>Whitespace exactly as written</li></ul></blockquote>
</div>
</div>
</div>

## What actually closes a quote

A blank line ends a blockquote unless the next line also starts with `>`, in
which case the quote continues right through the gap as a single block
containing two loose paragraphs.

<div class="demo" role="group" aria-label="A blank line inside and outside a blockquote and their rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>&gt; First paragraph, still open.
<span class="demo-blank" title="a blank line in the actual source">(blank line)</span>
&gt; Second paragraph, same quote, because &gt; reopened it.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<blockquote><p>First paragraph, still open.</p><p>Second paragraph, same quote, because &gt; reopened it.</p></blockquote>
</div>
</div>
</div>

Drop the second `>` and the same blank line instead closes the quote for
good — the paragraph after it renders as ordinary, unquoted text.
