+++
title = "Contour Intervals and the Sand Garden"
description = "Translating cartographic spacing into raked patterns."
date = "2023-11-04"
+++

A topographic map encodes terrain through contour intervals. Each line marks a constant elevation, and the spacing between lines tells the reader how steep the slope rises. Closely packed contours indicate a cliff face. Lines drifting apart describe a gentle plain.

The same logic governs the rake patterns of a karesansui garden. The gardener selects a tine spacing that suits the rock placement and the daily wind. A coarse rake leaves wide grooves that read like a low-gradient plateau. A fine rake produces tight ripples that compress meaning into a small footprint, the way 5-meter contour intervals describe a steep ridge on a 1:25,000 sheet.

This theme borrows the same intuition. The base SVG repeats a hand-tuned curve at fixed vertical offset, then perturbs each copy with a low-amplitude noise field. The result reads as relief without committing to any specific terrain. Visitors interpret the pattern as sand, water, or a quiet hillside depending on the page they are reading.

When choosing the interval, contrast matters more than density. Two lines too close together blur into a single band. Two lines too far apart lose any sense of a connected surface. The default values in this template aim for the middle range used by Japanese national geographic maps: dense enough to suggest motion, sparse enough to let the eye rest between strokes.

Try adjusting the spacing variable in the stylesheet. Reducing it by one pixel sharpens the texture into a finer grain. Increasing it relaxes the surface into broad swells that suit long-form reading.
