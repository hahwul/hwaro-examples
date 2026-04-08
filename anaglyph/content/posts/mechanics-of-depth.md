+++
title = "The Mechanics of Depth"
date = "2025-01-20"
tags = ["design", "3d", "anaglyph"]
categories = ["Art"]
+++

Anaglyph 3D is the stereoscopic 3D effect achieved by means of encoding each eye's image using filters of different colors, typically red and cyan.

<!-- more -->

In this web theme, we simulate the displacement of these color channels using CSS `text-shadow` and `box-shadow`.

```css
.anaglyph-text {
  text-shadow:
    4px 2px 0 rgba(0, 255, 255, 0.8),
    -4px -2px 0 rgba(255, 0, 0, 0.8);
}
```

The result is a design that feels tactile and deep, even though it relies entirely on flat, solid colors. This approach proves that you don't need complex gradients or shadows to create a sense of presence.
