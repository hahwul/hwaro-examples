+++
title = "Reading the Contrast Ratio Formula"
date = "2026-02-04"
description = "What the WCAG contrast number actually measures and where it breaks down."
tags = ["spectrum", "a11y", "color"]
categories = ["Spectrum"]
+++

The contrast ratio reported by accessibility tools is not a perceptual measurement. It is a ratio of relative luminance values, computed from the sRGB components of the two colors after a gamma correction step. Knowing the formula clarifies why two designs that look similar can score very differently.

## The luminance step

Each channel is normalised to the zero-to-one range, then either divided by 12.92 for low values or pushed through a power curve with exponent 2.4 for higher values. The three corrected channels are weighted by 0.2126, 0.7152, and 0.0722 for red, green, and blue respectively. The blue channel contributes the least, which is why pure blue on white scores worse than a casual reading of the swatches suggests.

## The ratio step

Add 0.05 to the lighter and the darker luminance, then divide. The constant accounts for ambient glare on a typical office screen. A ratio of 4.5 to 1 satisfies AA for normal text; AAA requires 7 to 1. Large text relaxes those numbers to 3 to 1 and 4.5 to 1 respectively.

## Where the formula misleads

The model does not know about hue. Yellow on white can pass at 18-point sizes while remaining unreadable for most users, because the perceptual difference is small even when the luminance gap is wide. Grey on coloured backgrounds can fail despite looking fine, because the colour shifts the perceived lightness of the surface.

## A safer workflow

Pick the text colour first, then derive the surface colour from it rather than the other way around. Lock the body copy at 7 to 1 and accept that decorative elements will sometimes need a second opinion from a perceptually uniform space such as APCA or OKLCH. The numeric rule is a floor, not a target.
