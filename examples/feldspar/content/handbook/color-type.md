+++
title = "Color & Type"
description = "Fill and text-colour utilities alongside the fluid type scale — the two families that carry a brand's voice."
weight = 50
date = "2026-05-28"
toc = true
[extra]
stage = "reference"
+++

Colour and type are where a compiled system either sings or falls apart.
Feldspar keeps both anchored to tokens: colours come from the semantic layer,
type sizes from a fluid scale that interpolates between a small and a large
value with `clamp()`. Every chip below is the real utility.

<!-- more -->

## Fill colours

Fill utilities paint a surface. The accent is the single brand colour; the soft
tint is derived from it for low-emphasis backgrounds.

<div class="util">
<h3 class="util-h" id="bg-accent"><code>.bg-accent</code> <span class="spec"><span class="spec-tile bg-accent rounded-2"></span></span></h3>
<p class="util-note">The brand fill, with legible text colour paired automatically.</p>
<div class="util-demo">
<pre class="util-code"><code>.bg-accent {
  background: #a21caf;
  color: #ffffff;
}</code></pre>
<div class="util-result"><div class="demo-swatch bg-accent"></div></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="bg-soft"><code>.bg-soft</code> <span class="spec"><span class="spec-tile bg-soft rounded-2"></span></span></h3>
<p class="util-note">A low-emphasis tint for chips, highlights, and hover states.</p>
<div class="util-demo">
<pre class="util-code"><code>.bg-soft {
  background: #f6dcf3;
}</code></pre>
<div class="util-result"><div class="demo-swatch bg-soft"></div></div>
</div>
</div>

## Text colours

Text utilities set the ink. Body copy stays on `.text-fg`; reserve `.text-muted`
for captions and metadata, and `.text-accent` for the occasional emphasis.

<div class="util">
<h3 class="util-h" id="text-accent"><code>.text-accent</code> <span class="spec"><span class="spec-tile surface border rounded-2"><b class="text-accent spec-glyph">A</b></span></span></h3>
<p class="util-note">Brand-coloured text — links and inline emphasis.</p>
<div class="util-demo">
<pre class="util-code"><code>.text-accent {
  color: #a21caf;
}</code></pre>
<div class="util-result"><p class="demo-text text-accent">Compiled from tokens</p></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="text-muted"><code>.text-muted</code> <span class="spec"><span class="spec-tile surface border rounded-2"><b class="text-muted spec-glyph">A</b></span></span></h3>
<p class="util-note">Secondary ink for captions and supporting detail.</p>
<div class="util-demo">
<pre class="util-code"><code>.text-muted {
  color: #6a5e6c;
}</code></pre>
<div class="util-result"><p class="demo-text text-muted">Secondary text</p></div>
</div>
</div>

## The type scale

Sizes are fluid. `.text-xl` is not a fixed pixel count — it grows with the
viewport between a floor and a ceiling, so headings scale without a media query
in sight.

<div class="util">
<h3 class="util-h" id="text-xl"><code>.text-xl</code> <span class="spec"><span class="spec-tile surface border rounded-2"><b class="text-xl spec-cap">A</b></span></span></h3>
<p class="util-note">A fluid heading size, clamped between 1.45rem and 1.9rem.</p>
<div class="util-demo">
<pre class="util-code"><code>.text-xl {
  font-size: clamp(1.45rem, 1.28rem + 0.7vw, 1.9rem);
}</code></pre>
<div class="util-result"><p class="demo-text text-xl">Feldspar</p></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="font-bold"><code>.font-bold</code> <span class="spec"><span class="spec-tile surface border rounded-2"><b class="font-bold spec-glyph">A</b></span></span></h3>
<p class="util-note">The heaviest weight, switched to the display family for headings.</p>
<div class="util-demo">
<pre class="util-code"><code>.font-bold {
  font-weight: 800;
  font-family: "Bricolage Grotesque";
}</code></pre>
<div class="util-result"><p class="demo-text font-bold text-lg">Feldspar</p></div>
</div>
</div>

<div class="util">
<h3 class="util-h" id="uppercase"><code>.uppercase</code> <span class="spec"><span class="spec-tile surface border rounded-2"><b class="uppercase spec-glyph">ab</b></span></span></h3>
<p class="util-note">Small-caps-style labels — pair with <code>.tracking-wide</code> for legible kickers.</p>
<div class="util-demo">
<pre class="util-code"><code>.uppercase {
  text-transform: uppercase;
}</code></pre>
<div class="util-result"><p class="demo-text uppercase tracking-wide text-sm">compiled utilities</p></div>
</div>
</div>

Colour and type share the discipline of the rest of the system: a small,
named set of choices, each traceable to a token, each emitted only when your
markup asks for it.
