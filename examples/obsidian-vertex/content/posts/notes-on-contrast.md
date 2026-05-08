+++
title = "Notes on Contrast"
description = "Contrast as a structural device, not a decorative one."
date = "2024-02-03"
tags = ["typography", "contrast"]
+++

## Why Dark Surfaces

A dark surface widens the available luminance range for foreground elements. White text on black reads at a higher effective contrast than black text on white when the display is calibrated for emissive output. The trade is glare from extended reading sessions and the need for tighter type rendering, since dark backgrounds amplify subpixel artefacts.

This template addresses the trade through three measures. Body text uses a slightly off-white at #f0f0f0 instead of pure white, which softens the strike of each letterform. Line height is set to 1.7 to compensate for the optical pull of the dark surround. Paragraph spacing is one full line, never half, to keep blocks distinguishable without horizontal rules.

## Hierarchy Without Colour

When colour cannot carry hierarchy, structure must. Headings step in size by a constant factor of 1.25. The same factor governs the relationship between body text and small print. Lists indent by a fixed measure of 1.5em. Block quotes shift left by the same amount and gain a vertical rule on the leading edge.

These rules survive the loss of styling. A reader on a text browser, a screen reader, or a print sheet will still observe the same hierarchy because it is encoded in the document order and the heading levels rather than in the visual layer alone.

## On Restraint

Restraint is not absence. It is the selection of fewer elements with more deliberate placement. A page with three weights of type and one accent rule, well composed, communicates more clearly than a page with seven weights and a colour palette. The dark monolith holds because it does little, and does it without apology.
