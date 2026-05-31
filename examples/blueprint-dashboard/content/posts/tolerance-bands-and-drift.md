+++
title = "Tolerance Bands and Where Drift Hides"
date = "2025-09-14"
draft = false
description = "How tolerance bands are set per assembly and the places measured values quietly drift out of spec."
tags = ["tolerances", "structural", "checks"]
categories = ["diagnostics"]
reading_time = 3
+++

A tolerance band is a promise: this dimension will land within these limits or the part is rejected. The trouble is that drift rarely announces itself. It accumulates across joints, settles into the datum, and only shows up when two assemblies that were each "in spec" refuse to meet.

## setting the band

Each assembly carries its own band because each one is doing different work. A core member is held tight; a rail can breathe.

> Tight everywhere is not precision, it is waste. Hold the members that carry load and let the rest move.

The current schedule looks like this:

- **C-CORE** &mdash; the tightest at &plusmn;0.02 mm, because everything hangs off it.
- **A-TRUSS** &mdash; &plusmn;0.03 mm, checked against the span datum.
- **E-WALL** &mdash; &plusmn;0.04 mm, the working mean for the sheet.
- **D-RAIL** &mdash; &plusmn;0.08 mm, generous by design.

## where drift hides

The dangerous gaps are between assemblies, not inside them. A stacked tolerance check catches them:

```text
A-TRUSS  +0.03
C-CORE   -0.02
STACK    +0.05  -> flag for review
```

When the stack approaches the working mean, the value gets flagged and a check note is raised on the sheet. That is the whole point of drawing the band before drawing the part.
