+++
title = "Contrast on Translucent Surfaces"
date = 2025-10-04
[taxonomies]
tags = ["accessibility", "design"]
categories = ["notes"]
+++

Translucent panels invert the usual contrast model. The effective background color of any text on a glass surface is a blend of the panel tint and whatever happens to be behind the panel at that moment. A header that passes WCAG AA against a flat dark wallpaper can fail the same check the moment the user scrolls a bright photograph beneath it.

The pragmatic answer is to assume the worst-case background and design against it. If the page can ever show a near-white image, the text on a translucent surface needs to remain legible against near-white. The simplest method is to add a semi-opaque base layer to every glass panel: a `rgba(15, 23, 42, 0.6)` floor, for example, that absorbs whatever the backdrop filter brings forward. The blur still does its work, but the readable foreground no longer depends on the page state.

The second adjustment is to weight typography for the noisy case. Glass surfaces blur the background but they do not denoise it. Hairline strokes that look elegant on a still test page will dissolve into the texture behind them when the page is scrolling. A weight of 400 or higher for body copy and 600 or higher for navigation labels holds up across a wider range of conditions.

The third adjustment is to test in motion. Static screenshots are misleading because the eye reads a still image more generously than it reads moving text. Open a scrolling section, record a few seconds of video, watch it back at half speed, and read every label aloud. If you stumble, the contrast is wrong even when the numeric ratio looks fine.

A glass theme that passes these checks tends to feel calmer than one tuned only to a hero shot, because the legibility does not depend on the user staying still.
