+++
title = "OLED Blacks and the Physics of On-Screen Glow"
date = "2024-06-18"
description = "Why glow effects render differently on OLED panels and how to design backgrounds that hold the illusion."
tags = ["design", "displays"]
categories = ["technology"]
+++

A glowing horizon depends on the contrast between light pixels and the background they sit on. On LCD panels the background is never truly off — backlight bleed leaks through the liquid crystal layer even at maximum cell rotation. On OLED panels each pixel emits its own light, and a fully black pixel is electrically inactive. The contrast ratio between an active pixel and a neighboring black pixel approaches infinity in measurement and reads as infinite to the eye.

This difference changes how glow gradients should be authored. A radial gradient that fades from cyan to a near-black `#0a0f1e` looks plausible on an LCD because the surrounding panel emits residual light that hides the boundary. On OLED, the same gradient terminates abruptly when the pixels reach true zero, leaving a visible ring at the edge of the gradient.

Three practical adjustments help:

- Avoid pure black as the base color. Use a low-luminance value such as `#04060c` so the gradient has room to fade smoothly into the surrounding field rather than clipping to off.
- Extend gradient stops past the visible edge of the element. A radial gradient sized at 150 percent of its container terminates outside the viewport and never shows its outer ring.
- Test on both panel technologies before shipping. Browser developer tools cannot simulate the difference because the simulation is itself rendered on whatever panel the developer is using.

The glow effect is not a property of the gradient stops alone. It is a relationship between the brightest pixel in the composition and the dimmest. On a panel that can produce true black, the dimmest pixel is darker than the room around the screen, which is why OLED dark themes feel like windows into a different space rather than overlays on a surface.
