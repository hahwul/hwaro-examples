+++
title = "The 20/20 Test Every Designer Fails"
date = "2024-03-12"
description = "What optometry teaches us about visual hierarchy and why most interfaces cannot pass a basic acuity check."
tags = ["design", "typography"]
authors = ["Dr. R. Lens"]
+++

## THE CHART DOES NOT LIE

When a patient sits in the examination chair and reads down the Snellen chart, there is no ambiguity. Either the letters resolve or they do not. Either the prescription works or it does not. The chart is a binary diagnostic. The feedback is immediate.

I have spent years thinking about why no equivalent instrument exists for software design.

Most interfaces are designed in conditions that resemble nothing like how they will be used. A designer on a calibrated 5K display at 100% zoom, in a bright studio, with the source files open in another window. The patient — I mean the user — sits in a dim office, on a laptop, with forty browser tabs open, and has never seen a style guide in their life.

> The chart is not cruel. It is honest. Most design critique is neither.

## WHAT ACUITY ACTUALLY MEASURES

Visual acuity is not about the quality of your eyes in isolation. It is about the *system*: your cornea, lens, retina, optic nerve, and visual cortex working together. A problem anywhere in that chain degrades the output.

Interface legibility works the same way. Consider the chain:

- **Color contrast** — does the text separate from the background at all?
- **Type size** — is the point size appropriate for the reading distance and medium?
- **Weight** — is the letterform heavy enough to survive rendering at low resolution?
- **Line length** — does the measure allow the eye to track without losing its place?
- **Leading** — does the line spacing give each row room to breathe?

Most teams optimize one or two of these. They congratulate themselves. The result still fails.

---

## THE CORRECTIVE LENS

The Snellen chart works because it tests *contrast*, *size*, and *spacing* simultaneously. A single letter at the bottom of the chart is a small, high-contrast, well-spaced object. That is the entire prescription for readable text: **small enough to test you, contrasty enough to see, spaced enough to distinguish**.

Here is what I recommend. When you finish a design, step back two meters from your monitor. Can you still read the primary call-to-action? Can you identify the section headings without squinting? Does the hierarchy survive the distance?

If not, you have a refractive error. It is correctable. The answer is almost always:

1. Increase contrast — not color, *contrast*
2. Increase type weight — especially at small sizes
3. Reduce visual noise — remove anything that does not carry information

## THE MOST COMMON FAILURE

The single most common acuity failure in modern interface design is `font-weight: 300` on body text. Somebody decided thin looked refined. It does not. It looks like a patient reading an eye chart through the wrong prescription.

**Bold is not loud. Bold is legible.** There is a difference.

---

The chart at the top of the optometrist's room is not decoration. The gigantic E is not there because someone thought big letters were fashionable. It is there because legibility has a *scale*, and that scale must be tested from its largest expression to its smallest.

Design your type stack the same way. Start with something enormous and work down. At each step ask: does this still resolve? Does it still pass?

The chart does not lie. And neither will your users — they will simply leave.
