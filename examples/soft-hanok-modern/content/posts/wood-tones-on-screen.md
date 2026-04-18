+++
title = "Wood Tones on Screen"
date = "2025-04-16"
description = "Choosing a warm neutral palette that reads as 'wooden' without actually putting wood grain anywhere."
tags = ["color", "palette", "design"]
template = "page"
+++

## Wood Without the Wood

The lazy way to make a site feel wooden is to add a wood-grain background. It always looks worse than you hoped. The better approach is to pick a palette the eye already associates with timber and let the association do the work.

Three tones are usually enough:

- A pale cream, for the page surface
- A muted mid-brown, for borders and low-emphasis text
- A deep walnut, for body text and emphasis

That is basically the Soft Hanok palette. No textures, no images, just a controlled range of warm neutrals.

## The Key Trick

The single most important move is to **keep the body text warm**. A common mistake is to pair a warm background with near-black text. The result is a page that feels like it cannot decide what temperature to be.

```css
/* Avoid */
body { background: #F7F2E7; color: #111; }

/* Prefer */
body { background: #F7F2E7; color: #4A3E28; }
```

Walnut body text on a rice-cream background reads as a single warm system. Black body text on the same background reads as a warm background with a cool foreground stapled to it.

## A Range That Works

If you want to extend the three-tone system, add intermediate steps:

| Step | Hex | Use |
|---|---|---|
| Rice | `#F7F2E7` | Section surface |
| Linen | `#EFE8D6` | Borders |
| Sand | `#E2D6B8` | Tags, decoration |
| Bamboo | `#C9B98E` | Muted lines |
| Pine | `#8E7B54` | Metadata |
| Oak | `#6B5A3A` | Links |
| Walnut | `#4A3E28` | Body text |

Seven steps is more than you need for any individual page, but the range lets you move between intimate prose and structured documentation without ever leaving the wood-tone family.
