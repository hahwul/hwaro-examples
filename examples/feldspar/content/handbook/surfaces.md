+++
title = "Radius & Surfaces"
description = "Corner radii, fills, borders, rings, and elevation — the geometry that turns flat markup into distinct, layered surfaces."
weight = 40
date = "2026-05-14"
toc = true
[extra]
stage = "reference"
+++

Surfaces are where Feldspar's geometry shows. A surface is a fill plus a corner
radius, optionally lifted by a shadow or outlined by a ring. Each chip beside a
heading is the real compiled utility — an actual rounded, filled, or elevated
tile.

<!-- more -->

## Corner radius

The radius scale runs from a barely-there softening to a full pill. Match the
radius to the element's size: small controls take a small radius, large panels
a larger one, so the visual weight stays even.

<div class="util">
<h3 class="util-h" id="rounded-1"><code>.rounded-1</code> <span class="spec"><span class="spec-tile bg-accent rounded-1"></span></span></h3>
<p class="util-note">A subtle softening — enough to read as intentional, not enough to notice.</p>
<div class="util-demo">
<pre class="util-code"><code>.rounded-1 {
  border-radius: 0.25rem;
}</code></pre>
<div class="util-result"><div class="demo-box rounded-1"></div></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="rounded-2"><code>.rounded-2</code> <span class="spec"><span class="spec-tile bg-accent rounded-2"></span></span></h3>
<p class="util-note">The default for buttons, inputs, and chips.</p>
<div class="util-demo">
<pre class="util-code"><code>.rounded-2 {
  border-radius: 0.5rem;
}</code></pre>
<div class="util-result"><div class="demo-box rounded-2"></div></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="rounded-4"><code>.rounded-4</code> <span class="spec"><span class="spec-tile bg-accent rounded-4"></span></span></h3>
<p class="util-note">A pronounced radius for cards and hero panels.</p>
<div class="util-demo">
<pre class="util-code"><code>.rounded-4 {
  border-radius: 1.25rem;
}</code></pre>
<div class="util-result"><div class="demo-box rounded-4"></div></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="rounded-full"><code>.rounded-full</code> <span class="spec"><span class="spec-tile bg-accent rounded-full"></span></span></h3>
<p class="util-note">Fully rounded — pills, avatars, and icon buttons.</p>
<div class="util-demo">
<pre class="util-code"><code>.rounded-full {
  border-radius: 999px;
}</code></pre>
<div class="util-result"><div class="demo-box rounded-full"></div></div>
</div>
</div>

## Fills and outlines

A fill sets the surface colour; a border or ring defines its edge. Rings are
drawn with `box-shadow`, so they never affect layout and can sit on top of a
fill without nudging a single pixel.

<div class="util">
<h3 class="util-h" id="surface"><code>.surface</code> <span class="spec"><span class="spec-tile surface border rounded-2"></span></span></h3>
<p class="util-note">The tinted panel fill from <code>color.surface</code>.</p>
<div class="util-demo">
<pre class="util-code"><code>.surface {
  background: #f5eef6;
}</code></pre>
<div class="util-result"><div class="surface rounded-3 p-3" style="width:100%">A tinted surface panel</div></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="border"><code>.border</code> <span class="spec"><span class="spec-tile rounded-2 border" style="background:var(--bg)"></span></span></h3>
<p class="util-note">A hairline outline in the neutral border token.</p>
<div class="util-demo">
<pre class="util-code"><code>.border {
  border: 1.5px solid rgba(35,28,36,.13);
}</code></pre>
<div class="util-result"><div class="demo-frame rounded-2 border"></div></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="ring-accent"><code>.ring-accent</code> <span class="spec"><span class="spec-tile rounded-2 ring-accent" style="background:var(--bg)"></span></span></h3>
<p class="util-note">A two-pixel accent ring drawn with shadow — zero layout cost.</p>
<div class="util-demo">
<pre class="util-code"><code>.ring-accent {
  box-shadow: 0 0 0 2px rgba(162,28,175,.55);
}</code></pre>
<div class="util-result"><div class="demo-frame rounded-2 ring-accent"></div></div>
</div>
</div>

## Elevation

Shadows lift a surface off the page. The elevation scale is tuned so each step
reads as clearly higher than the last without turning the interface muddy.

<div class="util">
<h3 class="util-h" id="shadow-2"><code>.shadow-2</code> <span class="spec"><span class="spec-tile surface rounded-2 shadow-2"></span></span></h3>
<p class="util-note">The mid step — floating cards and popovers.</p>
<div class="util-demo">
<pre class="util-code"><code>.shadow-2 {
  box-shadow: 0 6px 18px -8px rgba(35,28,36,.30);
}</code></pre>
<div class="util-result"><div class="demo-card rounded-3 shadow-2 p-3">Elevated card</div></div>
</div>
</div>

Fill, radius, edge, elevation — four small decisions that compose into every
panel on this site. None of them is a bespoke rule; all of them trace back to a
token.
