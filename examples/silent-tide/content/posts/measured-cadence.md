+++
title = "Measured Cadence"
description = "On vertical rhythm and the discipline of typographic spacing."
date = "2024-06-18"
+++

Vertical cadence is the heartbeat of a long-form layout. It is rarely noticed when correct, and immediately noticed when broken. A page that maintains its rhythm reads faster, fatigues less, and earns the reader's trust over the course of a thousand words. A page that breaks rhythm forces the eye to recalibrate at every paragraph break, and the cost of that recalibration accumulates into a felt resistance to reading further.

### The Baseline Unit

Every vertical measurement in this site derives from a single unit: the line height of body text. Headings are not chosen for size first; they are chosen for the multiple of that unit they consume. A heading that breaks the cadence by half a line will look correct in isolation and wrong in context. We refuse to ship that wrongness.

### Margins Above and Below

The margin above a heading is larger than the margin below it. This is not symmetric, and the asymmetry is intentional. A heading belongs more to the section it introduces than to the section it follows. The visual proportions reinforce that grouping without a rule, a divider, or a color shift.

### Lists, Tables, Code

Each non-prose block carries its own internal rhythm and must be reconciled to the outer rhythm at its edges. We pad list containers, code blocks, and tables so that the baseline of the surrounding text resumes cleanly after the block ends. Without this discipline, a single code sample can throw off the rest of the article.

### Audited, Not Eyeballed

The cadence is verified with a baseline grid overlay during development. We do not trust visual judgment alone. The grid is the contract; the layout either honors it or fails review.
