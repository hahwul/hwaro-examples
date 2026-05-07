+++
title = "Forging the Token Set"
description = "Building a minimal design token system for translucent surfaces."
date = "2024-05-26"
tags = ["tokens", "design-system"]
+++

A token set for glass surfaces does not need to be large. It needs to be precise. Our current set contains eleven tokens. Eight describe surface behavior. Three describe accent color. Anything beyond this introduces ambiguity at integration time.

Surface tokens cover four properties across two states. The properties are background alpha, blur radius, border alpha, and inner shadow strength. The states are resting and active. We avoid hover-specific tokens because they tend to drift from the resting values without justification.

Accent tokens carry the cyan, orange, and neutral white that define the forge identity. The cyan is referenced as `accent-primary`, the orange as `accent-secondary`, and the white as `accent-base`. None of these are used for body text. They appear only on focus rings, key indicators, and a small set of interactive borders.

We rejected gradient tokens during the first review. Gradients require two color stops and a direction, which means three values per token. They also resist accessibility audits because contrast varies along the interpolation curve. The forge uses solid colors with adjusted alpha instead, which keeps contrast deterministic.

Token names follow the pattern `surface-{state}-{property}`. The pattern is verbose, but it is readable in code review and survives renaming better than abbreviated forms. We tried two-letter prefixes early on and reverted within a sprint.

The token file lives at the root of the design system package. It exports both CSS custom properties and JSON. The JSON form is consumed by the iOS team without modification, which has eliminated the previous round of platform-specific reinterpretation.
