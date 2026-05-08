+++
title = "Wavelength Tokens and Component Drift"
description = "Why a single hue index outperforms parallel palettes"
date = "2023-12-04"
[taxonomies]
tags = ["tokens", "systems"]
+++

A token is a contract between the design system and the components that consume it. When the contract is wavelength rather than a flat color string, the contract survives palette redesigns. Most drift in production interfaces comes from components that captured a literal value and never released it.

We define the palette as a function of one base wavelength, expressed in nanometers for the documentation and in HSL for runtime. Each component receives an offset, never an absolute. A primary button at plus-fifteen, a danger surface at minus-forty, a muted divider at zero with a saturation cut. Changing the base shifts the whole interface in one operation, and the relationships between elements stay intact.

The risk with offset-based systems is over-correction. A component author, looking at a surface that feels too cool, is tempted to add a local tweak. We disallow this at review. Either the offset is wrong for every instance, in which case the token changes, or the offset is fine and the surrounding context is the problem. Local fixes are how parallel palettes are born.

Documentation tracks each offset alongside its rationale. A token without a note about why it exists will be deleted within two cycles, because nobody will defend it. We also record the perceptual reading: how the offset behaves under the standard sRGB profile and under the wider gamut used on newer panels. The two are close enough to share a token, and far enough apart to require a calibration check at release.

The result is a smaller palette that ages better than the alternatives we have shipped before.
