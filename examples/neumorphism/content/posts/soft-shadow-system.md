+++
title = "A Soft Shadow System"
date = 2023-10-12
description = "How layered shadows create the illusion of extruded surfaces in neumorphic design."
[taxonomies]
tags = ["design", "shadows", "neumorphism"]
+++

The neumorphic look depends on a paired shadow technique. Each surface uses two shadows of equal blur radius. One sits at the top-left and casts in the highlight color of the background. The other sits at the bottom-right and casts in a darker tone. When the background is the same hue as the element, the two shadows make the surface appear to rise out of the canvas.

The same primitive inverts cleanly. Reverse the offsets, drop the spread, and the surface sinks into the page. Toggling between raised and inset states with a single CSS variable keeps interactive elements consistent across a layout.

Three variables drive the system in this theme: a base color, a light shadow color, and a dark shadow color. The light value is the base color shifted toward white by roughly twelve percent. The dark value is the base shifted toward black by the same amount. Symmetric offsets keep the geometry believable across rectangles, circles, and rounded rectangles.

Contrast is the recurring trade-off. A surface that reads well in low light may disappear under a brighter ambient. The fix is to widen the gap between the two shadow colors as the background moves toward the middle of the value range. A pure white background tolerates softer shadows; a mid gray needs stronger ones to keep the edges legible.

Accessibility constrains the rest of the choice space. Text on a neumorphic surface must still meet contrast ratios on the base color, not on the shadows. Buttons need a visible focus state that does not rely on shadow alone. Adding a thin inner border or a hue shift on focus keeps keyboard users oriented without breaking the soft aesthetic.
