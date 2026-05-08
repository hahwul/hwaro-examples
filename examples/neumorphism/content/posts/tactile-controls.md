+++
title = "Tactile Controls Without Skeuomorphism"
date = 2023-10-20
description = "Notes on building neumorphic buttons, toggles, and sliders that stay readable."
[taxonomies]
tags = ["ui", "components", "neumorphism"]
+++

Neumorphic controls borrow from physical objects without copying their textures. The buttons in this theme do not use bevels, gradients, or noise. They rely on the shadow primitive alone, then add a small hue shift to communicate state. The result feels tactile because the geometry stays consistent, not because the surfaces imitate plastic or metal.

A standard button has three states. The default state casts an outward shadow pair. The hover state lifts the same shadow by reducing offsets, which reads as a small motion toward the viewer. The active state inverts the shadows and pushes the label down by one pixel. The label color does not change; the surface treatment carries the entire state signal.

Toggles use the same logic in reverse. The track is an inset surface with a recessed shadow. The handle is a raised circle that slides along the track. When the toggle is off, the handle sits at one end and the track shows a neutral fill. When it flips on, the handle slides and the track fills with an accent color. The accent never bleeds into the handle, which keeps the moving part legible.

Sliders combine both shapes. The rail is inset, the thumb is raised, and the filled portion of the rail picks up the accent. Because the thumb shadow follows it as it moves, the control reads as one piece even when the user drags quickly.

Form fields stay flat. Soft input wells use only the inset shadow with a one-pixel inner stroke for focus. Stacking too many shadow layers in a single form makes the surface hard to scan, so the rule of thumb is: one elevation per group, no nesting beyond two levels.
