+++
title = "The End of the Soft Web"
date = "2026-05-21"
description = "A field report on the death of the polite interface and what should be built on top of its grave."
tags = ["essay", "design", "brutalism"]
+++

For the better part of a decade, the prevailing fashion in web design has been *softness*. Soft pastels. Soft shadows. Soft microcopy that calls the user *you* and the company *we*. Soft confirmation modals that ask you to *take a moment*.

It was, in retrospect, a reasonable response to the brittle, ugly web of the early 2010s. We had been served gradient buttons and skeuomorphic dashboards for years, and the swing toward minimalism was a relief. But minimalism became a uniform. The uniform became a costume. And the costume eventually became a cage.

> The result is a web where every interface looks like it was designed by the same nervous intern, terrified of giving offense.

The cage cracks when the constraint changes. The constraint, for us, is mass. A page should announce itself. A page should hold weight on the screen the way a poster holds weight on a wall. It should be possible to tell, from a glance, that you have arrived somewhere — not at a generic dashboard, but at a particular place, with a particular voice.

### Reclaiming the slab

The slab is the unit of brutalist design. A slab is a block of color, type, or rule that refuses to dissolve into the background. The slab is what the soft web was missing — and it is, conveniently, the easiest thing in the world to build with HTML.

```html
<header class="masthead">
  <h1>SHADOW//MASS</h1>
</header>
```

There is nothing here a 1996 browser could not render. The trick is committing to the slab — refusing to round the corners, refusing to wash the contrast, refusing to apologize for the size of the type.

### What we are building

This publication is one attempt at an answer. The pages are heavy. The type is set in Archivo Black at unfashionable sizes. There is exactly one accent — sulfur yellow — and it is reserved for the things the page cannot afford to whisper.

If you find yourself, after reading this, wanting to delete a gradient or two from your own work: we will consider this dispatch a success.
