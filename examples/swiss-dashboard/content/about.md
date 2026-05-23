+++
title = "The Construction"
description = "Specifications and architectural guidelines of the Swiss Dashboard."
tags = ["philosophy", "specs"]
categories = ["meta"]
+++

Swiss Dashboard is an objective modular telemetry exploration applying early modernist design principles to web data presentation.

We follow Josef Müller-Brockmann's manifesto of visual clarity, mathematical grids, and neutral type sizing.

## the layout regulations

1. **Rigid Module Alignment**: Metric blocks align to modular baseline grids, ensuring consistent visual weight.
2. **typographic dominance**: Fonts are set in high-contrast scales, allowing extra-bold sans-serif titles (Inter) to immediately organize visual priority.
3. **Primary Color Focus**: Visual emphasis is created strictly using stark flat black panels and crimson red solid accents.

## engine parameters

- **SSG Core**: Hwaro Engine statically compiled in Crystal.
- **Visual Styles**: Bespoke Vanilla CSS (under 280 lines).
- **Compile Time**: Instantaneous generation under 10ms.