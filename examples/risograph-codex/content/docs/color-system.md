+++
title = "The Color System"
description = "Why only two inks can build twenty values."
date = "2026-01-19"
weight = 2
template = "doc"
[extra]
kind = "theory"
+++

A riso has one job at a time. It prints one solid color, lays down a screen, and stops. Every value beyond solid is built by your eye, not by the press. That single rule is the foundation of the system.

## Two inks, twenty values

When red ink lays down 50% halftone over blue 50% halftone, the eye reads a third color that exists nowhere on the page. Stack three densities (10, 50, 90) for each ink and you have nine combinations, plus paper white and full overprint — eleven distinct values from two drums.

Push the screens to five densities and the same math gives you twenty-six. That is the working palette of most riso publications you have ever held.

## Overprint and the optical mixing problem

Overprint is where the press stops cooperating. A red square on top of a blue square does not produce a uniform purple — it produces a *dirty* purple, because the riso ink is translucent and oxidizes on contact. Plan your overprints. Do not discover them after binding.

- **Solid + solid**: muddy, oxidizes within 48 hours.
- **Halftone + solid**: the cleanest overprint — use this whenever possible.
- **Halftone + halftone**: the most flexible, hardest to register.

## Color separations

Build the separations in two layers, both as solid black on white. The press does not need your color preview. The press needs to know which dots come off which drum.

```
layer-01-red.png    → drum 1 (red)
layer-02-blue.png   → drum 2 (blue)
```

Save both at 300dpi, grayscale, and never premultiply. The press driver is older than you think — it does not handle alpha gracefully.
