+++
title = "Manpage"
description = "What tty.monitor watches, how it renders, and the design rules of the phosphor console."
tags = ["manpage", "colophon"]
categories = ["meta"]
+++

`tty.monitor` is a single-pane system console for a fleet of build nodes. It tails uptime, load average, packet flow, and the job queue, then renders the whole thing as a glowing monochrome terminal you can read from across a dim room.

There is no live socket here. Every figure on the console is a snapshot compiled by Hwaro into static HTML, so the page loads instantly and never leaks a connection.

## NAME

> tty.monitor &mdash; phosphor CRT console for build-node fleet telemetry

## DESIGN

1. **Monochrome first.** One phosphor green carries the whole interface. Amber means caution, red means stop. Nothing else gets a color.
2. **Solid light, never blended.** Depth comes from borders, box-shadow glow, and a tiled scanline texture. No gradient is ever drawn.
3. **Everything is a box.** Panels are 1px green rectangles with bracketed `[ HEADERS ]`. Status reads as `[ OK ]`, `[WARN]`, or `[FAIL]`.

<div class="alert">
<strong>NOTE</strong> The blinking cursor and pulsing status lamps respect <code>prefers-reduced-motion</code>. Turn motion off in your OS and the console holds perfectly still.
</div>

## ENVIRONMENT

- **Renderer**: Hwaro static site generator, compiled in Crystal.
- **Type**: JetBrains Mono for the UI, VT323 for the big display numerals.
- **Widgets**: block-bar load meters and an inline-SVG load graph, both solid-stroke only.
- **Footprint**: a single hand-written stylesheet, no JavaScript, no tracking.

Read the [process directory](../posts/) for the running build logs, or return to the [live console](../).
