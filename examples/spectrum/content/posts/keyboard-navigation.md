+++
title = "Designing for Keyboard Navigation"
date = "2026-03-15"
description = "Practical patterns for sites that must be operable without a pointing device."
tags = ["spectrum", "a11y", "keyboard"]
categories = ["Spectrum"]
+++

A site is keyboard accessible when every interactive element can be reached, activated, and dismissed using only the keyboard. The work is mostly mechanical, but a handful of patterns cause the bulk of audit failures.

## Tab order should match visual order

Browsers walk the DOM in document order. When CSS rearranges columns with flex or grid, the visual sequence drifts away from the tab sequence. Reorder the markup, not the layout, and the two stay aligned. Avoid `tabindex` values greater than zero; they create a parallel order that contradicts the rest of the page.

## Focus must remain visible

Removing the default outline without supplying a replacement is the most common regression. A two-pixel solid ring with a four-to-one contrast ratio against both the element and the surrounding background is sufficient. Test the indicator on every interactive surface, including link cards, buttons inside dark panels, and form controls in disabled states.

## Skip links earn their keep

A skip link near the top of the document lets a keyboard user bypass the masthead and primary navigation. Hide it off-screen until it receives focus, then bring it forward into the layout. The destination should be a region with a `tabindex="-1"` so focus moves cleanly when the link is activated.

## Modals trap focus, then return it

When a dialog opens, focus moves into the dialog and cycles within it until dismissed. On close, focus returns to the element that opened the dialog. Without that return, the user is dropped at the top of the document and must rebuild context. Standard libraries handle this; hand-rolled overlays usually do not.

Together these four patterns cover the majority of WCAG 2.1 keyboard requirements at the AA level.
