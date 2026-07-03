+++
title = "Spacing & Rhythm"
description = "The padding, margin, gap, and layout utilities that share one spacing scale — so every gap in your interface is a multiple of the same unit."
weight = 30
date = "2026-05-01"
toc = true
[extra]
stage = "reference"
+++

Every space in a Feldspar interface is a step on one scale. Rather than choosing
pixels, you choose a step — `2`, `3`, `4` — and the compiler resolves it to the
value in `scale.space`. Consistent rhythm stops being discipline and becomes the
default. The specimen bar beside each heading shows the magnitude of that step.

<!-- more -->

## Padding

Padding utilities apply the scale inward on all sides. Reach for the larger
steps on cards and sections, the smaller ones on chips and buttons.

<div class="util">
<h3 class="util-h" id="p-3"><code>.p-3</code> <span class="spec"><span class="spec-bar"><i class="s-3"></i></span></span></h3>
<p class="util-note">One base step of padding — the workhorse for cards and callouts.</p>
<div class="util-demo">
<pre class="util-code"><code>.p-3 {
  padding: 1rem;
}</code></pre>
<div class="util-result"><div class="demo-pad rounded-2 p-3"><span class="demo-core">content</span></div></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="p-4"><code>.p-4</code> <span class="spec"><span class="spec-bar"><i class="s-4"></i></span></span></h3>
<p class="util-note">A generous step for section interiors and hero panels.</p>
<div class="util-demo">
<pre class="util-code"><code>.p-4 {
  padding: 1.5rem;
}</code></pre>
<div class="util-result"><div class="demo-pad rounded-2 p-4"><span class="demo-core">content</span></div></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="px-4"><code>.px-4</code> <span class="spec"><span class="spec-bar"><i class="s-4"></i></span></span></h3>
<p class="util-note">Inline-axis padding only — left and right, nothing top or bottom.</p>
<div class="util-demo">
<pre class="util-code"><code>.px-4 {
  padding-inline: 1.5rem;
}</code></pre>
<div class="util-result"><div class="demo-pad rounded-2 px-4 py-2"><span class="demo-core">content</span></div></div>
</div>
</div>

## Gaps between children

Gap utilities set the space between flex and grid items without touching the
items themselves. No margin bookkeeping, no last-child exceptions.

<div class="util">
<h3 class="util-h" id="gap-2"><code>.gap-2</code> <span class="spec"><span class="spec-bar"><i class="s-2"></i></span></span></h3>
<p class="util-note">A tight gap for related controls such as button rows and tag lists.</p>
<div class="util-demo">
<pre class="util-code"><code>.gap-2 {
  gap: 0.5rem;
}</code></pre>
<div class="util-result"><div class="row gap-2"><span class="demo-dot"></span><span class="demo-dot"></span><span class="demo-dot"></span><span class="demo-dot"></span></div></div>
</div>
</div>

## Stacks and rows

Two layout helpers cover most of what a page needs. `.stack` inserts vertical
rhythm between every child; `.row` lays children out horizontally and centres
them. Both draw their spacing from the same scale.

<div class="util">
<h3 class="util-h" id="stack"><code>.stack</code> <span class="spec"><span class="spec-bar"><i class="s-3"></i></span></span></h3>
<p class="util-note">Adds one step of top margin to every child after the first.</p>
<div class="util-demo">
<pre class="util-code"><code>.stack &gt; * + * {
  margin-top: 1rem;
}</code></pre>
<div class="util-result"><div class="stack" style="width:100%"><div class="demo-card rounded-2 p-2">First</div><div class="demo-card rounded-2 p-2">Second</div><div class="demo-card rounded-2 p-2">Third</div></div></div>
</div>
</div>

Because padding, gap, and stack all resolve against `scale.space`, tightening a
layout is a single edit to one token — not a hunt through a stylesheet for stray
pixel values.
