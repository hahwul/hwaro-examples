+++
title = "Fractured Light"
date = "2024-05-15"
description = "Observing how light interacts with sharp edges."
tags = ["design", "glassmorphism"]
+++

When light hits the edge of a properly knapped piece of obsidian, it doesn't just reflect; it seems to get trapped and fractured.

We attempt to simulate this in CSS by layering borders:

1.  A dark, opaque base border.
2.  A highly transparent white top and left border to simulate a rim light.
3.  A harsh, un-blurred drop shadow.

The result is an element that looks separated from its background, yet solid and imposing.