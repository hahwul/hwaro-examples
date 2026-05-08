+++
title = "Refraction Layers"
date = "2024-04-30"
description = "Constructing depth through stacked glass surfaces."
+++

Glassmorphism depends on the perceived thickness of each translucent surface. A single blurred panel reads as a frosted overlay; stack three with offset positions and the composition gains volumetric depth. The technique works because human vision interprets layered blur as physical separation.

The first surface sits closest to the viewer at twelve pixels of backdrop blur. The second sits four pixels behind it with eighteen pixels of blur. The third anchors the back plane with twenty-eight pixels of blur and reduced opacity. Each layer carries its own border radius, slightly larger than the previous, suggesting telescoped frames.

Color tinting on each layer pulls from a constrained palette. Magenta and cyan dominate the foreground, ultraviolet and indigo recede into the background. The shift from warm to cool follows the natural color gradient of atmospheric perspective, where distant objects appear bluer than nearby ones.

Performance considerations limit how many surfaces can stack before frame rate degrades. On mid-tier mobile devices, three layers maintain sixty frames per second during scroll. Four layers drop to forty. We cap stacks at three by convention and rely on flat panels for elements that fall outside the depth-emphasis zones.

Edge highlights complete the effect. Each surface receives a one-pixel inner border at fifteen percent white opacity, applied to top and left edges only. This simulates the catchlight that real glass exhibits when ambient light strikes its leading edge. Without the highlight, the surfaces collapse visually into solid translucent rectangles.

The system degrades gracefully on browsers without backdrop-filter support. The fallback substitutes a semi-transparent solid fill with a subtle gradient, preserving the layered hierarchy without the optical depth.
