+++
title = "About Sgraffito"
date = 2024-04-06
+++

The sgraffito technique dates back to antiquity, but found widespread use in the Renaissance. By applying multiple layers of contrasting colored plaster and meticulously scraping away the top layer before it fully sets, artisans could create striking, durable murals and geometric patterns on building facades.

## The Digital Translation

In this theme, we mimic that effect using:

*   **High Contrast:** Deep charcoal backgrounds layered over terracotta or light cream.
*   **Solid Shadows:** Using CSS `box-shadow` and `text-shadow` with solid offsets (no blur) to give elements thickness and reveal a "base" color.
*   **Text Strokes:** Webkit text stroke properties to outline large type, letting the background color show through as if the text itself was scraped out of the page.
*   **Irregular Borders:** Using CSS `clip-path` to "chip" away the corners of containers, mimicking the rough edge of dried plaster.

> "To scratch the surface is not to deface, but to reveal what lies beneath."

This aesthetic completely eschews modern, smooth web design trends like gradients and soft dropshadows in favor of something raw and physical.