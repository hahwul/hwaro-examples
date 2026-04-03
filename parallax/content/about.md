+++
title = "About"
description = "The story behind this journey through layered landscapes."
+++

## About Parallax

This site is an experiment in depth and motion. Every scroll carries you deeper into a landscape that shifts and breathes, layer by layer, from the bright meadows of morning to the quiet stillness of the night sky.

The parallax technique -- named after the apparent displacement of objects when viewed from different positions -- creates an illusion of three-dimensional space on a flat screen. Foreground elements drift quickly while distant mountains and clouds barely move at all, mimicking the way we perceive depth in the physical world.

## The Journey

The experience is structured as a day-long passage through terrain:

**Dawn Meadow** -- Tall grasses catch the first light. The air is cool and the horizon is wide open.

**The Deep Forest** -- Canopy closes overhead. Light filters through in fragments. The pace slows.

**Mountain Pass** -- Rock and sky dominate. The world opens up again, but vertically now, with peaks stacking into the distance.

**Twilight Ridge** -- Colors deepen. The sun drops behind the range and everything turns to silhouette.

**Night Sky** -- Stars emerge. The land below is reduced to dark shapes. Silence.

## Technical Approach

The depth effect is achieved entirely with CSS. A perspective container wraps all content, and each layer is pushed backward or pulled forward along the Z-axis using `translateZ`. Elements further back appear to scroll more slowly, creating natural parallax without a single line of JavaScript dedicated to scroll hijacking.

Position-sticky headers anchor each chapter in place as you pass through, giving each section a cinematic hold before the next scene takes over.

## Philosophy

Scrolling is the most natural interaction on the web. Rather than fighting it with complex animations and scroll-jacking, Parallax leans into it. The scroll becomes the narrative device itself -- a simple, continuous gesture that moves you through space and time.
