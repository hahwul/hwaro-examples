+++
title = "Lighting"
date = "2025-08-18"
tags = ["design", "process"]
+++

# Lighting Notes

The void in this theme is not a flat black. It is a layered space, lit from the inside by soft amethyst orbs that drift behind the foreground panels. Getting the lighting right is what makes the glass feel like it is floating.

## Layers

Three layers carry the work. The base is a deep, slightly warm purple. A middle layer holds the slow-moving orb gradients that imply volume. The top layer is the frosted glass surface that catches the orbs and turns them into a diffuse glow.

## Orb Behaviour

Each orb has its own slow animation. The cycles are intentionally out of sync so the background never falls into a visible loop. The motion is pure CSS so the page stays light and the animation does not stall when other work is happening on the main thread.

## Adjustments

The default palette favours violet, but the same structure accepts cyan, magenta, or a muted teal without any change to the layout. Shift the orb colours together rather than individually so the scene continues to read as a single coherent space.
