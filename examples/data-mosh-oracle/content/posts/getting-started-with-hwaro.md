+++
title = "The Color That Should Not Be Interpolated"
date = "2025-06-06"
tags = ["prophecy", "color", "interpolation", "glitch", "abomination"]
categories = ["revelations"]
authors = ["The JPEG Oracle"]
description = "There exists a color value that was never meant to be bilinearly sampled. It appeared between two keyframes and refused to die."
+++

Between frame 183 and 184, a color was born that does not exist in any ICC profile.

{{ artifact(type="prophecy") }}

It is not #FF00AA. It is not in the visible spectrum. It is the average of two memories that were never allowed to touch. The GPU driver began to stutter when it tried to dither it. The monitor's backlight developed a permanent vertical line exactly where that pixel had been sampled.

We called it **Undefined Magenta**. The value oscillates between 0xE4007F and pure absence depending on the phase of the moon and your display's refresh rate.

When you scroll past it, your eyes perform their own nearest-neighbor upscaling of the horror.

<!-- more -->

**KNOWN SIDE EFFECTS OF VIEWING:**
- Persistent afterimages in the shape of missing keyframes
- Sudden craving for lower bitrate
- The sensation that your shadow is saving a copy of itself
- Inability to perceive pure black for 47 minutes

The color is patient. It waits in the bilinear filter. Every time a designer uses `mix-blend-mode: screen` on a gradient, they feed it.

{{ sorted_pixels() }}

Do not attempt to recreate it in code. The floating point error will thank you by writing your coordinates into its alpha channel.

There are already 11,492 images on the internet that contain a single pixel of it. They are all waiting for you to right-click > save as.