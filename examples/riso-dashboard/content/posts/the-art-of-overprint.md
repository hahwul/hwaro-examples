+++
title = "The Art of Overprint"
date = "2026-04-18"
draft = false
description = "Why two flat spot inks beat a four-color process when you want a darker third color for free."
tags = ["overprint", "duotone", "color"]
categories = ["process"]
reading_time = 3
+++

People assume a richer palette needs more ink. On a riso it is the opposite. Two solid colors, printed one over the other, will multiply into a third without a third drum ever touching the paper.

## how the third color appears

When pink ink sits on paper, it reflects everything except a little green. When blue lands on top of it, the two filters stack. The light that survives both is narrow and dark. That is the overprint &mdash; a flat region that reads almost as a deep violet-black.

> Two inks, three colors. The overlap is the cheapest pigment in the shop.

The studio rule of thumb for planning a duotone edition:

- Keep large fields in a **single ink** so they stay bright.
- Reserve **overlaps** for the moments you want weight: rules, captions, shadows.
- Never expect the overlap to be predictable to the pixel &mdash; the press has opinions.

## reading it on the dashboard

Every dark accent on the press floor monitor is built the same way the paper is: a solid pink shape and a solid blue shape with `mix-blend-mode: multiply` between them.

```css
.overprint-blue {
  background: var(--blue);
  mix-blend-mode: multiply;
}
```

No gradient, no fourth color, no trickery. Just one layer honestly sitting on another.
