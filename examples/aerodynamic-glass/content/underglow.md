+++
title = "Underglow Without Excess"
description = "The point of an accent glow is to mark hierarchy, not to decorate every surface."
date = "2024-05-08"
template = "page"
tags = ["design", "color"]
+++

## Underglow Marks the Active

Aerodynamic surfaces benefit from a single underglow accent on the element the user is currently engaging with — the focused input, the hovered card, the playing track. Everywhere else stays flat.

### When the Glow Travels

Move the glow with the user's attention. Focus shifts to a new card, the glow follows. The element they just left snaps back to flat. This makes the page feel responsive without ever animating layout.

```css
.surface { box-shadow: none; transition: box-shadow 200ms ease; }
.surface:hover,
.surface:focus-within { box-shadow: 0 6px 24px var(--accent-soft); }
```

### When It Doesn't

Static decoration glow on every card flattens the hierarchy you were trying to create. If five things glow, none of them are the answer to "what should I look at first."
