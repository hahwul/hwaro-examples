+++
title = "The Illusion of Depth"
date = "2026-04-06"
tags = ["design", "css"]
+++

Creating depth without gradients or blur requires a strict adherence to light and shadow principles, simplified into binary states: illuminated or shadowed.

<!-- more -->

By using a single, solid color for drop shadows offset heavily from their elements, we create an isometric-like projection.

> "The eye is easily tricked when given consistent rules of geometry."

### Implementation

Notice how blockquotes, images, and content blocks are defined by stark borders. The folded corner effect on the main content container is achieved using absolute positioning and thick borders, mimicking physical paper folding.

```css
/* Example of the folded corner */
main::after {
  content: '';
  position: absolute;
  top: -4px;
  right: -4px;
  border-width: 0 40px 40px 0;
  border-style: solid;
  border-color: var(--bg) var(--bg) var(--fg) var(--fg);
}
```

Embrace the constraints. No emojis, no smooth transitions, just stark reality.
