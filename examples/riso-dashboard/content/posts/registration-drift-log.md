+++
title = "Registration Drift Log"
date = "2026-03-02"
draft = false
description = "A week of measuring how far the blue plate lands from the pink, and why a little misregistration is the whole point."
tags = ["registration", "press", "qa"]
categories = ["studio"]
reading_time = 3
+++

Perfect registration is a digital fantasy. On a drum press the second ink always lands a hair off the first, and the size of that hair is something we actually log.

{% alert(type="note", body="Anything under 0.5mm of drift we keep. Over 1mm and we re-hang the plate.") %}{% end %}

## the week's readings

We pull a proof every morning and measure the offset between the pink and blue marks with a loupe:

- **Monday**: 0.3mm, pink leading. Clean.
- **Wednesday**: 0.6mm after a paper swap, still inside tolerance.
- **Friday**: 0.9mm and climbing &mdash; re-tensioned the drum and reset.

## why we tolerate it at all

A tiny, consistent offset is what makes a riso print look printed. It gives type a faint colored ghost and gives flat shapes an edge that vibrates a little. Chase it to zero and the work starts to look like a screen, not a press.

The dashboard mirrors this on purpose: headings carry a blue ghost a few pixels behind the pink, the same way the plates sit on paper.

```
DRIFT = | blue_origin - pink_origin |
KEEP  if DRIFT < 0.5mm
WATCH if DRIFT < 1.0mm
STOP  otherwise
```

Drift is not a defect here. It is a signature, measured and kept on a short leash.
