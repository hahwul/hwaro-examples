+++
title = "The Physics of Web Animation"
date = "2026-03-20"
description = "Exploring how real-world physics principles can transform web animations from decorative to deeply intuitive."
tags = ["animation", "physics", "web-api"]
categories = ["engineering"]
+++

The best animations do not just look good -- they feel right. When an element on screen moves the way a real object would, users understand it instinctively. There is no need to learn the interface; the physics teach them.

## Why Physics Matters

Traditional CSS transitions use easing functions like `ease-in-out`. These are mathematical curves, not physical models. They approximate natural motion but miss the nuance that comes from mass, velocity, and friction.

Consider a card sliding into view. A CSS transition moves it from point A to point B along a bezier curve. A physics-based animation gives that card mass. It accelerates, overshoots slightly, and settles into place. The difference is subtle but profound.

## The Web Animation API

The Web Animation API provides the foundation for building physics simulations in the browser:

```javascript
const element = document.querySelector('.particle');
const keyframes = calculatePhysicsKeyframes({
  mass: 1.0,
  stiffness: 200,
  damping: 15,
  initialVelocity: 0
});

element.animate(keyframes, {
  duration: 1000,
  fill: 'forwards'
});
```

This approach separates the physics model from the rendering pipeline. The browser handles interpolation and compositing, while your code handles the math.

## Spring Dynamics

Springs are the most versatile physics primitive for UI animation. A spring model needs three parameters:

- **Stiffness** -- how strongly the spring pulls toward its rest position
- **Damping** -- how quickly oscillations decay
- **Mass** -- the inertia of the animated element

High stiffness with low damping creates a bouncy, energetic feel. Low stiffness with high damping creates a smooth, weighted glide. The right combination depends on the element and the interaction.

## Gravity and Attraction

Mouse-driven gravity fields create some of the most compelling interactive experiences. Elements can be attracted to or repelled from the cursor, creating a living, responsive layout:

```javascript
function applyGravity(element, cursorX, cursorY) {
  const rect = element.getBoundingClientRect();
  const dx = cursorX - (rect.left + rect.width / 2);
  const dy = cursorY - (rect.top + rect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);
  const force = GRAVITY_CONSTANT / (distance * distance);

  return {
    fx: force * (dx / distance),
    fy: force * (dy / distance)
  };
}
```

The inverse-square law gives natural falloff. Elements close to the cursor respond strongly; distant elements barely move. This creates depth without any 3D transforms.

## Performance Considerations

Physics simulations run every frame. Performance is not optional. Three rules keep things smooth:

1. **Use `transform` and `opacity` only** -- these properties are composited on the GPU
2. **Batch DOM reads** -- measure all positions before applying any changes
3. **Use `requestAnimationFrame`** -- never run physics in `setTimeout` or `setInterval`

When done right, physics-based animation runs at 60fps even on modest hardware. The key is keeping the simulation lean and letting the browser do what it does best.
