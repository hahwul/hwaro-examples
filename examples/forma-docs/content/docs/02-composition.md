+++
title = "Composition"
description = "How primitives combine into layouts. Slots, props, and policy types."
date = "2026-05-06"
weight = 2
tags = ["composition", "patterns"]
+++

## A typical composition

A real-world Forma component is a tree of primitives. Each primitive is
typed; the type checker enforces correct slot usage.

```tsx
<Sheet token="surface.elevated">
  <Stack token="space.lg" as="section">
    <Text token="heading.h2">Account settings</Text>
    <Field label="Display name" hint="Visible to everyone.">
      <Box as="input" type="text" />
    </Field>
    <Button policy="submit" token="action.primary">Save</Button>
  </Stack>
</Sheet>
```

## Slot typing

Some primitives declare named slots. The type checker rejects children
that do not match.

```tsx
<Field
  label={<Text token="label">Email</Text>}
  hint={<Text token="hint">We never share this.</Text>}
>
  <Box as="input" type="email" />
</Field>
```

Passing a `Button` as the `label` slot is a compile error. The slot type
is `ReactElement<typeof Text>`, not `ReactNode`.

## Policy types

Policies are first-class. A `Button` with `policy="submit"` activates the
parent form on Enter; with `policy="link"` it announces itself as a link
to assistive tech. The runtime checks for policy/primitive mismatches at
mount time.

| Primitive | Allowed policies                              |
|-----------|-----------------------------------------------|
| `Button`  | `default`, `submit`, `link`, `menuitem`       |
| `Field`   | `default`, `inline`, `required`               |
| `Sheet`   | `default`, `dialog`, `popover`                |

## Anti-patterns

A handful of compositions are technically possible but actively
discouraged. The linter flags them with an `forma/discouraged` warning.

- `Box` directly inside `Grid` without a `token`. Use `Sheet` or pass an
  explicit grid-area token.
- `Portal` inside a `Sheet` whose policy is `popover`. Portals already
  escape their parent; double-escaping is a paper-cut waiting to happen.
- Nested `Field`s. Forms with conditional rows should use a single
  `Stack` of `Field`s instead.
