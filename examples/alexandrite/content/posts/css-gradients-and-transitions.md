+++
title = "CSS Gradients and Transitions"
date = "2026-03-10"
description = "A deep dive into the CSS techniques behind dynamic color-shifting effects."
tags = ["css", "tutorial"]
categories = ["tutorial"]
template = "post"
+++

Modern CSS provides everything needed to create rich, dynamic visual effects without a single line of JavaScript. This post explores the techniques used in this theme.

## CSS Custom Properties

Custom properties (CSS variables) form the foundation of any themeable design:

```css
:root {
  --emerald: #00c853;
  --ruby: #d50000;
  --shift-angle: 135deg;
}
```

These variables can be referenced anywhere and even animated with `@property` declarations.

## Gradient Techniques

Linear gradients create the color-shift effect:

```css
background: linear-gradient(
  var(--shift-angle),
  var(--emerald),
  var(--ruby)
);
```

For more complex effects, layer multiple gradients:

```css
background:
  linear-gradient(135deg, rgba(0,200,83,0.3), transparent 50%),
  linear-gradient(315deg, rgba(213,0,0,0.3), transparent 50%),
  #0a0a0a;
```

## Transitions and Animations

CSS transitions bring gradients to life:

```css
@keyframes colorShift {
  0%   { filter: hue-rotate(0deg); }
  50%  { filter: hue-rotate(30deg); }
  100% { filter: hue-rotate(0deg); }
}
```

The `hue-rotate` filter can shift entire color palettes smoothly, creating the illusion of a gemstone turning under changing light.

## Performance Considerations

GPU-accelerated properties like `transform`, `opacity`, and `filter` ensure animations remain smooth at 60fps. Avoid animating `background-position` on large elements, as it triggers expensive repaints.
