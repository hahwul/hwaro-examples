+++
title = "About"
description = "Why Deco looks the way it does — the palette, the ornament, and the things it deliberately refuses to do."
date = "2026-04-01"
+++

Deco is a documentation theme that borrows from the architecture of the 1920s and 1930s: the stepped towers, the brass fixtures, the fluted columns, and the wide-tracked capitals carved above a marble entrance. The idea is simple. A good reference manual is a building you return to often, so it may as well have a memorable lobby.

It is intentionally opulent but restrained. The brass does the talking; everything else stays out of its way.

## The palette

Four colours carry the whole theme, all declared as CSS variables.

- **Charcoal black-green** (`#13171c`) — the deep ground the type sits on.
- **Warm cream** (`#ece3cf`) — the reading colour, chosen for contrast that stays comfortable over long pages.
- **Brass / champagne** (`#b9975b`) — the single accent. It is a flat, solid colour. The metal never fades from one tone to another; the shine is implied entirely by typography and proportion, not by a colour blend.
- **Deep emerald and oxblood** (`#1f5d4c`, `#7a2c25`) — secondary tones, used sparingly for quotes and emphasis.

## The ornament

Three motifs do the decorative work, and all of them are drawn with solid fills, borders, and box-shadows:

- **Stepped corners** on cards — short brass brackets that echo a ziggurat setback.
- **The deco rule** — a thin brass line interrupted by a single rotated diamond, used as a section divider.
- **The sunburst** — solid radiating brass spokes, drawn as SVG lines, never as a radial blend.

## What this is not

This is not a marketing theme. There is no carousel, no testimonial wall, and no animation that fires on scroll. The motion budget is spent entirely on small, deliberate hover states.

## Built on Hwaro

Deco runs on [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator written in Crystal. Scaffold a copy with `hwaro init my-docs --scaffold docs`, preview it with `hwaro serve`, and ship it with `hwaro build`.

## License

MIT. Use it, fork it, and send improvements.
