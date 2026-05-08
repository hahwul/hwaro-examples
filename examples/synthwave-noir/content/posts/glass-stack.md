+++
title = "Glass Stack Discipline"
date = "2024-04-22"
description = "Building layered glass panels that read as architecture, not decoration."
tags = ["glassmorphism", "layout"]
+++

A glass surface only works when the layers behind it carry meaning. Without that, the blur becomes wallpaper.

The base layer is a saturated indigo gradient, blocked into a single panel that anchors the page. Above it sits a column of secondary panels, each with a backdrop blur of twelve pixels and a background opacity near eight percent. The blur radius increases with depth, so a tooltip floating above a card uses sixteen pixels, while the card itself uses eight.

Borders are one pixel, set at twenty-percent white. Inset shadows replace outset shadows entirely. The result reads as etched glass rather than floating cards, which suits a noir interface where everything feels weighted and deliberate.

Type sits on the glass without softening. Body copy stays at full opacity to fight against the blurred ground. Headings borrow magenta only when they carry an action; otherwise they run in the same desaturated lavender as body. This prevents the layout from drifting into a poster aesthetic.

Hover states modulate opacity rather than translate the panel. A two-percent bump in background alpha is enough to register as a response without breaking the stillness. Click states cut the opacity briefly to communicate impact.

Test the stack against a busy photograph and a flat color background. If the hierarchy survives both, the discipline is correct. If panels disappear against the photograph, the opacity floor is too low.

Glass is structural, not ornamental.
