+++
title = "Nebula Tokens"
description = "Defining the color tokens that drive the shimmer system."
date = "2025-02-10"
tags = ["tokens", "color"]
+++

The shimmer system uses six color tokens. They are named for their role rather than their hue, which keeps the system durable across theme changes. The names are `surface-base`, `surface-raised`, `accent-cool`, `accent-warm`, `text-primary`, and `text-quiet`.

`surface-base` is the deepest layer. It anchors the page and provides the contrast against which translucent panels register. The current value is a near-black with a faint blue cast, which prevents the panels from looking yellow when their alpha drops below twenty percent.

`surface-raised` is the panel surface. It is a translucent white at sixteen percent alpha. The blur radius applied to this surface is set as a separate token rather than embedded in the color value, because the two properties evolve independently in practice.

`accent-cool` and `accent-warm` cover the two interactive states the system supports. Cool maps to information and navigation. Warm maps to confirmation and highlights. We deliberately avoided red because the system handles errors through type weight and an outline border rather than color.

`text-primary` and `text-quiet` cover the type. The quiet token is reserved for metadata and runs at sixty-eight percent of the primary luminance. We tested the contrast against every panel surface and confirmed that quiet text passes AA on raised panels at the current alpha settings.

The tokens are exported from a single source file and consumed by the CSS, the design tool, and the documentation. Any change to the source propagates to all three without manual synchronization.
