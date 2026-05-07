+++
title = "Glossy Button Construction"
date = "2007-04-18"
description = "Anatomy of the plastic button shape that defined a decade of operating system design."
tags = ["design", "ui", "buttons"]
categories = ["design"]
+++

The glossy button is the emblem of the Frutiger Aero period. Between Windows XP and the introduction of flat design in 2013, almost every shipping operating system rendered controls as small reflective objects. They behaved less like printed widgets and more like injection-molded plastic seen under stage lighting.

<!-- more -->

### Layered Construction

A typical Aero button was assembled from four optical layers stacked from back to front. The base color carried the semantic meaning of the control. A subtle inner shadow described the depth of the body. A specular highlight, anchored to the top edge, simulated reflection from an off-screen light source. A thin one-pixel rim, slightly darker than the body, separated the control from the surrounding chrome and gave the edge a polished feel.

Without gradients, these layers can be approximated using stacked solid fills, hard inset shadows, and a flat semi-transparent overlay placed across the top half of the button. The overlay supplies the highlight without smoothly blending into the body, which preserves the era's slight cartoon quality.

### Press State

Pressed states inverted the lighting model. The highlight slid downward, the inner shadow flipped to the top, and the body color darkened by a small percentage. The total displacement was usually one pixel in screen space, enough to register the click without disturbing the surrounding layout.

### Why It Faded

The glossy button worked well at fixed display densities, but its pixel-level construction did not survive the transition to retina displays and resolution-independent rendering. When every interface needed to scale across phones, tablets, and projectors, the cheaper geometry of flat design replaced the carefully drawn plastic surface. The button became a rectangle of solid fill, and the lights went out.
