+++
title = "Contrast Ratios in Practice"
date = "2026-04-10"
tags = ["accessibility", "color"]
categories = ["design"]
description = "Minimum ratios for body text, large text, and non-text elements."
+++

Contrast ratio is the relative luminance of two colors expressed as a single number between one and twenty-one. A white pixel against a black pixel scores twenty-one to one; identical pixels score one to one. The standards in common use draw their thresholds from this scale.

## Text Thresholds

Body text at fourteen points or smaller requires a ratio of at least four-and-a-half to one against its background. Large text, defined as eighteen-point regular or fourteen-point bold, requires at least three to one. The higher AAA tier raises these to seven and four-and-a-half respectively. Most production sites target the AA thresholds and treat AAA as a goal for primary reading surfaces.

## Non-Text Elements

Form fields, focus rings, icons that convey state, and chart elements that distinguish data series all require a three-to-one ratio against their immediate background. The rule is often missed because the boundaries are visual rather than typographic. A border of one pixel at three to one is legible; the same border at two to one disappears at typical viewing distances.

## Measurement

Compute the relative luminance of each color, add zero-point-zero-five to both values to account for ambient flare, and divide the larger by the smaller. The relative luminance formula is a weighted sum of gamma-corrected channel values, with green weighted heaviest because the human eye is most sensitive to it. A pure red and a pure blue can share a hue contrast that looks high but a luminance contrast that fails the test.

## Failure Modes

The most common failure is gray text on a colored background. A medium gray loses contrast against a saturated background of any color, since the perceived brightness of saturated hues falls in the middle of the luminance scale. The second most common failure is the placeholder text inside a form field; designers often pick a color that matches the field border, which is invariably below threshold.
