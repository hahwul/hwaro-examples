+++
title = "Tokens"
description = "The design token surface. Colours, spacing, type scale, motion."
date = "2026-05-09"
weight = 3
tags = ["tokens", "design"]
+++

## What a token is

A token is a typed reference into the design surface. It is not a CSS
custom property; the runtime resolves tokens at render time so values can
change per-tree without a re-mount.

```ts
type TokenRef =
  | `color.${keyof typeof color}`
  | `space.${keyof typeof space}`
  | `text.${keyof typeof text}`
  | `radius.${keyof typeof radius}`
```

## The default set

The default token set is intentionally narrow. Most applications use the
defaults verbatim and override only the `color` namespace.

```toml
[color]
ink   = "#09090b"
paper = "#fafafa"
soft  = "#f4f4f5"
rule  = "#e4e4e7"

[space]
xs = "0.25rem"
sm = "0.5rem"
md = "1rem"
lg = "1.5rem"
xl = "2rem"

[text]
caption = { size = "0.78rem", weight = 500, line = 1.4 }
body    = { size = "0.95rem", weight = 400, line = 1.6 }
heading = { size = "1.8rem",  weight = 600, line = 1.1 }

[radius]
sm = "4px"
md = "8px"
lg = "12px"
```

## Overriding

Token overrides are scoped to a subtree by the `TokenScope` component.

```tsx
<TokenScope tokens={{ color: { ink: "#fff", paper: "#000" } }}>
  <Sheet>
    <Text>Inverted theme, locally.</Text>
  </Sheet>
</TokenScope>
```

The override is shallow-merged with the parent scope. A child that asks
for `color.ink` resolves to the nearest defined value walking up the tree,
same as CSS cascade — but typed.

## Motion

Motion tokens are a separate namespace and are always opt-in. A primitive
with no `motion` token is fully static; this is the default.

| Token             | Duration | Easing              |
|-------------------|----------|---------------------|
| `motion.fast`     | 120ms    | `cubic-bezier(...)` |
| `motion.normal`   | 200ms    | `cubic-bezier(...)` |
| `motion.deliberate` | 360ms  | `cubic-bezier(...)` |
