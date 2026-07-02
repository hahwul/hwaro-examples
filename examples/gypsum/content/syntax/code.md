+++
title = "Code spans and fenced code blocks"
description = "Backtick spans for inline code, and fenced blocks that preserve whitespace exactly and carry an optional language tag."
date = "2025-08-30"
weight = 5
toc = true
+++

Inline code uses backtick delimiters around a short span; block code fences
a whole region between matching lines of three or more backticks (or tildes)
so that indentation and blank lines inside it are kept byte-for-byte, never
reflowed as prose.

<!-- more -->

## Inline code spans

A run of one or more backticks opens a code span; it closes at the next run
of the *same length*. This is what lets a code span contain a shorter run of
backticks without ending early.

<div class="demo" role="group" aria-label="Inline code spans and their rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>Call `parse()` before `render()`; both are exported from the core crate.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<p>Call <code>parse()</code> before <code>render()</code>; both are exported from the core crate.</p>
</div>
</div>
</div>

## A backtick inside a code span

To include a literal backtick, delimit the span with a longer run than the
one you need to show. Gypsum also trims exactly one leading and one trailing
space when the content itself starts and ends with a backtick, so the space
doesn't get rendered as part of the code.

<div class="demo" role="group" aria-label="A code span containing a literal backtick and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>Wrap a literal backtick like this: `` `mark` ``.</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<p>Wrap a literal backtick like this: <code>`mark`</code>.</p>
</div>
</div>
</div>

## Fenced code blocks

Three or more backticks on their own line open a fence; the same character
repeated at least as many times, alone on its line, closes it. Everything
between the fences is literal — no emphasis, no nested links, no heading
parsing — and an optional info string after the opening fence names the
language for downstream syntax highlighting.

<div class="demo" role="group" aria-label="A fenced code block with a language info string and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>```rust
fn parse(source: str) -&gt; Node {
    Block::from(source)
}
```</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<pre><code class="language-rust">fn parse(source: str) -&gt; Node {
    Block::from(source)
}</code></pre>
</div>
</div>
</div>

Only the first word of the info string is kept and used as the language tag
(as `language-rust` on the `<code>` element); anything after the first
space is available to tooling but ignored for highlighting. This is also the
attachment point for one of Gypsum's most common plugins: a directive fence
whose info string is a keyword like `callout` rather than a language name,
intercepted by the plugin pipeline before the default fenced-block handler
ever sees it.
