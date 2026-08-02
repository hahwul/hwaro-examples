+++
title = "Journal Colophon & Production Notes"
description = "Typographic, design, and technical specifications for November Issue 11."
date = "2025-11-01"
tags = ["colophon", "design-system", "specifications"]
+++

The November web journal is designed around a strict architectural grid, prioritizing typographic hierarchy, high-contrast readability, and low asset overhead. The aesthetic draws inspiration from mid-century Swiss architectural monographs and northern European trade journals.

### Typography & Palette

The primary display and body typeface is **Instrument Sans**, designed by Roderick Mills and Rodrigo Fuenzalida. It provides exceptional clarity at small text scales while delivering authoritative geometric structure in display headings. Technical diagrams, metadata rails, and colophon notations are set in **JetBrains Mono**, an open-source monospace font tailored for precise data alignment.

The color system is derived from late-autumn landscape tones: cold limestone background (`#f7f4ee`), deep charcoal ink (`#1c1917`), and a singular plum accent (`#6b216b`) representing twilight light levels at fifty-six degrees north latitude. In dark mode, the surfaces invert to deep basalt (`#141216` and `#1e1b22`) with desaturated orchid accents (`#ca76ca`).

### Technical Architecture

The site is constructed using the Hwaro static site generator. All visual diagrams are rendered as inline SVG vectors, eliminating binary raster dependencies and ensuring crisp rendering across high-density displays. The layout utilizes asymmetric CSS grid containers that reflow into single-column structures below 768 pixels viewport width.

Search functionality is driven client-side by Fuse.js utilizing a pre-built search index generated during static build assembly. Page styles adhere strictly to modern vanilla CSS custom property standards without external utility frameworks.
