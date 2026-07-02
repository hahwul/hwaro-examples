+++
title = "Lists"
description = "Bullet and ordered lists, nesting by indentation, and the blank line that turns a tight list loose."
date = "2025-03-22"
weight = 3
toc = true
+++

Bullet lists start with `-`, `+`, or `*`; ordered lists start with a number
and either `.` or `)`. Both nest by indenting continuation content beneath
the marker, and both come in two rendering modes — tight and loose — decided
entirely by whether a blank line separates the items.

<!-- more -->

## Bullet and ordered lists

<div class="demo" role="group" aria-label="A bullet list, an ordered list with a custom start, and their rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>- First rule
- Second rule
- Third renders exactly as written
7. Seventh item
8. Eighth item
9. Ninth item</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<ul><li>First rule</li><li>Second rule</li><li>Third renders exactly as written</li></ul>
<ol start="7"><li>Seventh item</li><li>Eighth item</li><li>Ninth item</li></ol>
</div>
</div>
</div>

An ordered list keeps whatever number its first item uses as the `start`
value; every item after that renders sequentially regardless of the numbers
written in the source, so `7. / 7. / 7.` and `7. / 8. / 9.` render identically.
Notice the source above has no blank line between the two lists — a change
of marker type (bullet to ordered) always starts a fresh list on its own, no
separating blank line required.

## Nesting

A sub-list is any list whose marker is indented far enough to sit inside the
content column of the item above it — in practice, indented to line up with
the first character after the parent marker.

<div class="demo" role="group" aria-label="A nested list and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>- Block constructs
  - Headings
  - Lists
- Inline constructs
  - Emphasis
  - Links</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<ul><li>Block constructs<ul><li>Headings</li><li>Lists</li></ul></li><li>Inline constructs<ul><li>Emphasis</li><li>Links</li></ul></li></ul>
</div>
</div>
</div>

## Tight versus loose

If every item is on one line with no blank line between items, the list is
tight and item text is not wrapped in `<p>` tags. Add one blank line anywhere
between items and the whole list becomes loose: every item's content is
wrapped in a paragraph, adding vertical breathing room the tight form
deliberately withholds.

<div class="demo" role="group" aria-label="A loose list, marked with its blank line, and its rendered output">
<div class="demo-block demo-source">
<p class="demo-label">Source</p>
<pre><code>- Tight items sit close together
- No paragraph spacing between them
<span class="demo-blank" title="a blank line in the actual source">(blank line)</span>
- A single blank line above made this list loose
- Every item is now wrapped in its own paragraph</code></pre>
</div>
<div class="demo-joint" aria-hidden="true"><span class="demo-arrow">↓</span></div>
<div class="demo-block demo-output">
<p class="demo-label">Rendered</p>
<div class="demo-output-body prose">
<ul><li><p>Tight items sit close together</p></li><li><p>No paragraph spacing between them</p></li><li><p>A single blank line above made this list loose</p></li><li><p>Every item is now wrapped in its own paragraph</p></li></ul>
</div>
</div>
</div>

Looseness is a property of the whole list, not the individual item next to
the blank line — one gap anywhere is enough to wrap every item.
