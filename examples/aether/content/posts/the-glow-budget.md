+++
title = "The Glow Budget"
date = "2024-06-18"
summary = "Treat luminance like a finite resource. The page only has so much attention to spend."
tags = ["design", "color"]
+++

Glow draws the eye. That is its job. The mistake is letting it draw the eye to too many places at once.

## A Working Rule

Pick one element per viewport that is allowed to be the brightest thing on screen. Everything else sits at least 30% dimmer. When the user scrolls and a new element enters, it can take the spotlight — but no two elements should ever fight for it at the same time.

```css
.primary-glow { box-shadow: 0 0 24px var(--accent); }
.secondary    { box-shadow: 0 0 12px rgba(255,255,255,0.05); }
```

If everything glows, nothing does. Spend the glow budget on what matters: the call-to-action, the active nav item, the chart line you want the user to read first. The rest of the page is happy to sit in shadow.
