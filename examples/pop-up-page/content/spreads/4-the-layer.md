+++
title = "The Layer"
description = "Stacked planes creating depth and parallax."
tags = ["layer", "dimensional"]
+++

<p class="spread-label">Spread IV</p>

# The Layer

<p class="lede">Depth without mechanics. The layer technique stacks flat panels at different distances from the base page, creating the illusion of three-dimensional space through parallax alone.</p>

## How it works

<p>A layered pop-up uses spacer strips to hold flat panels at fixed distances above the base page. Each panel is cut with openings that reveal the panels behind it. The foreground panel is closest to the viewer and has the largest openings; the background panel is closest to the base page and provides the most distant scenery. When the reader looks at the spread from different angles, the panels shift relative to each other, producing a parallax effect that mimics natural depth perception.</p>

<div class="popup-diagram" aria-hidden="true">
<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="140" width="360" height="30" fill="#f5f0e6" stroke="#c9bfae" stroke-width="0.5"/>
<rect x="40" y="100" width="320" height="30" fill="#fff7ee" stroke="#3a3530" stroke-width="0.8" opacity="0.9"/>
<rect x="60" y="60" width="280" height="30" fill="#fff7ee" stroke="#3a3530" stroke-width="0.8" opacity="0.8"/>
<rect x="80" y="20" width="240" height="30" fill="#fff7ee" stroke="#c4561a" stroke-width="1" opacity="0.9"/>
<line x1="40" y1="130" x2="40" y2="140" stroke="#c4561a" stroke-width="1"/>
<line x1="360" y1="130" x2="360" y2="140" stroke="#c4561a" stroke-width="1"/>
<line x1="60" y1="90" x2="60" y2="100" stroke="#c4561a" stroke-width="1"/>
<line x1="340" y1="90" x2="340" y2="100" stroke="#c4561a" stroke-width="1"/>
<line x1="80" y1="50" x2="80" y2="60" stroke="#c4561a" stroke-width="1"/>
<line x1="320" y1="50" x2="320" y2="60" stroke="#c4561a" stroke-width="1"/>
<text x="130" y="38" font-family="Inter, sans-serif" font-size="9" fill="#c4561a">foreground</text>
<text x="140" y="78" font-family="Inter, sans-serif" font-size="9" fill="#8a7d62">mid-ground</text>
<text x="150" y="118" font-family="Inter, sans-serif" font-size="9" fill="#8a7d62">background</text>
<text x="160" y="158" font-family="Inter, sans-serif" font-size="9" fill="#c9bfae">base page</text>
</svg>
</div>

## The tunnel book

<p>The most extreme application of the layer technique is the tunnel book (also called a peep show). A tunnel book is a series of panels connected by accordion-folded side strips. The viewer looks through a hole in the front panel and sees a deep scene receding into the distance. Tunnel books have been made since the eighteenth century, originally as souvenirs of theatrical performances and architectural views.</p>

## Depth on a screen

<p>The layer technique translates naturally to screen-based design. CSS stacking contexts, z-index values, and subtle shadow offsets can reproduce the same layered depth that a physical pop-up achieves with spacer strips. This publication uses background SVG planes at different opacities to suggest layered depth on every page.</p>
