+++
title = "Grid Against the Void"
description = "How a layout grid holds together in a dark, low-contrast field."
date = "2024-05-18"
template = "page"

[taxonomies]
tags = ["layout", "grid", "typography"]
categories = ["logs"]
+++

A grid in a dark theme cannot rely on white space alone to define its columns. The eye, given a near-black field, reads continuity rather than separation. The grid must therefore be anchored by elements with sufficient material weight to break the field at predictable intervals.

The base grid runs twelve columns at a sixteen-pixel gutter, centered in a maximum width of eleven hundred and twenty pixels. Below the eight-hundred-pixel breakpoint, it collapses to four columns at a twelve-pixel gutter. The collapse points are fixed at eight hundred, six hundred, and four hundred pixels, with no fluid scaling between them. Each breakpoint corresponds to a layout intent rather than a device class.

Anchoring elements include glass panels, accent dividers, and typographic blocks set in increased weight. A row of three panels at the standard four-column width produces a stable rhythm that reads as deliberate composition. A single panel set at full width acts as a section break and resets the vertical rhythm beneath it.

Vertical spacing follows an eight-pixel base. Sections separate at multiples of forty-eight, paragraph blocks at twenty-four, and inline elements at eight or sixteen. Headings carry their own internal spacing, with margin-top set larger than margin-bottom to imply that they introduce the content that follows rather than belonging equally to the content above.

The grid does not appear in the rendered page. It exists only as a constraint on element placement. A reader should sense its presence as proportion, not see it as structure.
