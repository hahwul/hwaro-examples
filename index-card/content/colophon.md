+++
title = "Colophon"
description = "Technical details about the construction of this card catalog publication."
+++

<p class="card-label">Colophon</p>

# Colophon

<p class="lede">Technical specifications for this catalog, filed under production details.</p>

## Typography

<p>Display headings and labels are set in Courier Prime, a typewriter face designed by Alan Dague-Greene for readable screen display at all sizes. It preserves the monospaced rhythm and mechanical character of the original Courier while improving legibility. Body text is set in Special Elite, a typewriter font by Astigmatic that captures the slightly irregular strike pattern of a manual typewriter.</p>

## Color palette

<p>The palette is drawn from the physical materials of a card catalog. Card stock is cream-white (#faf7f0), the warm off-white of acid-free library cards. Ruled lines are blue (#4a7ab5), matching the pale blue horizontal rules printed on standard catalog cards. The margin line is red (#d4576a). Tab dividers and drawer labels use brown (#c4a265 and #8b7355), the color of manila card stock and wooden drawer fronts. The background is a slightly darker cream (#f0ebe0), suggesting the wooden surface of a catalog cabinet.</p>

## Construction

<p>All decorative elements are rendered as inline SVG: card outlines, ruled lines, margin markers, tab divider cuts, and the catalog drawer illustration on the home page. No raster images are used. No CSS gradients are used. The card-frame shadow is achieved with solid box-shadow offsets to suggest stacked cards behind the current one. The ruled-line background pattern in the card body uses an SVG data URI in the background-image property.</p>

## Platform

<p>Built with Hwaro, a static site generator. Content is written in Markdown with TOML frontmatter. Templates use the Jinja2 syntax.</p>
