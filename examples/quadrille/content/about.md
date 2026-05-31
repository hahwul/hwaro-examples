+++
title = "About"
description = "Why Quadrille looks like graph paper, the design rules behind it, and where to send corrections."
date = "2026-04-01"
+++

Quadrille is a documentation theme drawn on an engineer's graph paper. It takes its look from the cheap, dependable quadrille notebook every lab and machine shop keeps on the bench: a faint cyan grid, ink in graphite, the occasional correction in red pencil. Documentation, we think, reads more honestly when the ruling is visible and everything lands on the line.

## The drawing conventions

- A real graph-paper background — a minor grid every 24 px and a major line every fifth square — drawn with tiled solid-color SVG ruling, with no soft fades anywhere.
- Headings carry monospace plate numbers, the way a figure in a manual is labelled before it is described.
- Callouts are framed as figures, with L-shaped corner ticks and a measured caption.
- A margin rail carries the revision mark and dimension ticks, so each sheet reads like a page torn from a notebook.

## What this is not

This is not a marketing theme. There is no carousel, no testimonial wall, and no animation that fires on scroll. The grid does the decorating. Your words do the rest.

## Built on Hwaro

Quadrille is a theme for [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator written in Crystal. Scaffold a docs site with `hwaro init my-docs --scaffold docs`, preview it with `hwaro serve`, and ship it with `hwaro build`.

## License

MIT. Use it, fork it, rule your own lines, and send corrections.
