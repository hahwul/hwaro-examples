+++
title = "Primitives"
description = "The eight components Forma exposes, with their full type signatures."
date = "2026-05-03"
weight = 1
tags = ["api", "components"]
+++

## The eight

Forma exposes exactly eight primitives. Adding a ninth requires an RFC and
unanimous approval from the maintainers. This is deliberate; the small
surface is the product.

| Primitive | Purpose                                  | Slots          |
|-----------|------------------------------------------|----------------|
| `Box`     | The unstyled rectangle                   | `children`     |
| `Stack`   | One-dimensional flex layout              | `children`     |
| `Grid`    | Two-dimensional grid layout              | `children`     |
| `Text`    | Typographic block                        | —              |
| `Field`   | Labelled form input                      | `label, hint`  |
| `Button`  | Press-able control                       | `children`     |
| `Sheet`   | Bordered surface                         | `children`     |
| `Portal`  | Render escape hatch                      | `children`     |

## Signature

Every primitive shares the same prop conventions:

```ts
type FormaPrimitive<P> = {
  as?: keyof JSX.IntrinsicElements
  token?: TokenRef
  policy?: PolicyRef
  children?: ReactNode
} & P
```

If a primitive does not use a convention (e.g. `Text` has no `children`),
that prop is omitted from its specific signature.

## Conventions

Three conventions hold across every primitive:

1. **`as` is structural.** It changes the HTML tag but never the visual.
2. **`token` is decorative.** It changes the visual but never the structure.
3. **`policy` is behavioural.** It changes interaction rules — focus,
   keyboard, ARIA — but never the visual or the structure.

This separation is what lets composition work without surprise. A page can
be re-themed by swapping tokens, and re-skinned for accessibility by
swapping policies, without touching the markup.
