+++
title = "Grid Systems and the Visual Baseline"
description = "Aligning text, images, and components to a shared rhythm"
date = "2026-04-22"
tags = ["grid", "layout", "rhythm"]
categories = ["principles"]
authors = ["axiom"]
+++

## A Shared Frame of Reference

A grid is the silent contract between every element on a page. Without one, components float in isolation, and the reader's eye must work to find relationships. With one, alignment happens almost without thought, and the layout reads as a single composition rather than a collection of parts.

The most useful grid for editorial work is not a strict twelve-column scaffold, but a baseline grid: a series of horizontal lines at a fixed vertical interval. Every line of text, every image edge, every button sits on one of these lines.

## Choosing a Baseline Unit

Pick a unit that divides cleanly into common type sizes. An 8-pixel baseline works well for body text set at 16 pixels with 24-pixel line height: each line of body copy occupies three baseline units. Headings at 32 or 40 pixels also resolve to whole units.

When a component breaks the grid, it should do so deliberately. A pull quote that sits between two baseline rows draws attention precisely because it interrupts the rhythm.

## Vertical Rhythm Across Sections

The harder discipline is preserving rhythm across section boundaries. A heading followed by a paragraph, then a list, then a code block should still land on the baseline at the bottom of the section. This requires margins that are themselves multiples of the baseline unit, never arbitrary values pulled from a hat.

A grid is restrictive only in the way that meter is restrictive in poetry. The constraint is what makes the result feel composed.
