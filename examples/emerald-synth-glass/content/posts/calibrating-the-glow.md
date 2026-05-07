+++
title = "Calibrating the Glow"
description = "On the use of accent emission in dark interfaces."
date = "2024-05-04"
template = "page"

[taxonomies]
tags = ["color", "glow", "calibration"]
categories = ["logs"]
+++

A glow is a directional brightness applied to an element to indicate that it is the operative target. In a dark interface, the eye reads emission as priority. Anything that emits draws attention before anything that reflects. This makes the glow a precise instrument and an easy one to overuse.

The system reserves three accent hues. The primary is a saturated emerald, used for confirmed actions and active state. The secondary is a cooler cyan, used for navigation and structural elements. The tertiary is a desaturated teal, used for ambient indicators that should remain readable but not solicit attention. Each hue carries a fixed luminosity. The emerald sits at sixty-eight percent, the cyan at seventy-two, and the teal at fifty-four.

A glow is implemented as an outer box-shadow with a blur radius between eight and twenty pixels. The shadow color matches the accent hue but at thirty percent alpha, allowing the underlying surface to retain its contour. A second, tighter shadow at eighty percent alpha and four pixels of blur sits inside the first, producing the impression of a halo with a defined source.

Glows do not animate by default. A pulsing element draws sustained attention, which is appropriate for a notification but disruptive in a paragraph of text. Animation is reserved for state transitions: a button receiving focus, a toggle changing position, a panel becoming active. Static glows describe the structure of the page. Animated glows describe its behavior.

Calibration is iterative. A glow that reads correctly in isolation may need to be reduced by ten percent when several appear in sequence, to prevent the page from flattening into uniform luminance.
