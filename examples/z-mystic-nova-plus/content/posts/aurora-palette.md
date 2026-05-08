+++
title = "Aurora Palette"
date = "2024-05-08"
description = "Selecting hues for atmospheric backdrop washes."
+++

The aurora palette derives from photographic studies of high-latitude sky phenomena. Six base hues anchor the system: aurora green at 510 nanometers, magenta at 580, indigo at 450, violet at 410, cyan at 490, and a near-black called nightwell at minimal saturation.

These hues never appear at full saturation in the interface. Instead, they pass through a normalization pipeline that caps saturation at sixty-eight percent and lifts lightness floor to twelve percent. The result feels saturated when viewed in isolation but never overwhelms when adjacent to body text or photography.

Background washes combine two hues with a radial gradient. Aurora green to indigo produces the most stable composition; the wavelengths sit close enough on the spectrum that the transition appears continuous rather than banded. Magenta to cyan creates intentional dissonance, suitable for accent regions but unsuitable for full-page backgrounds.

Text contrast against these gradients required custom verification. Standard contrast checkers measure against solid backgrounds, but radial gradients shift the effective contrast across the viewport. We sampled twelve points across each gradient and confirmed minimum contrast ratios at every sample. Body text remains above seven-to-one against the worst-case background point.

The palette extends to interactive states through controlled lightness shifts. Hover states lift base hues by eight percent lightness; active states drop them by six percent. These shifts remain perceptible without disrupting the overall mood of the composition.

Accessibility audits informed two adjustments. We reduced the saturation cap from seventy-two to sixty-eight after testing with users sensitive to chromatic motion. We also added a reduced-motion variant that replaces the radial gradients with solid fills sampled from the gradient midpoint.
