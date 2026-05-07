+++
title = "File and Directory Structure"
weight = 20
+++

A predictable file layout reduces cognitive load and shortens the path between a feature request and the file that implements it. This section defines how files and directories are organized within a service.

## Principles

1.  **Group by Feature, Not by Type:** Co-locate the components, hooks, tests, and styles that make up a single feature. Do not split them into parallel `components/`, `hooks/`, and `tests/` trees.
2.  **One Public Entry Point:** Each feature directory exposes a single `index` file that defines the public surface. Internal modules are not imported from outside the directory.
3.  **Tests Live Next to the Code:** A test file shares the directory and base name of the file under test, with a `.test` suffix.

## Standard Layout

```
src/
  features/
    billing/
      api.ts
      billing-form.tsx
      billing-form.test.tsx
      hooks.ts
      index.ts
      types.ts
  shared/
    db/
    http/
    logging/
  app.ts
```

The `features/` tree contains domain logic. The `shared/` tree contains infrastructure that has no domain meaning on its own. A module in `shared/` must not import from `features/`.

## Naming the Files

File names use kebab-case. Component files match the component name they export, so `billing-form.tsx` exports `BillingForm`. The `index` file is reserved for the public surface; do not place implementation in it.

## Forbidden Patterns

Avoid `utils.ts` and `helpers.ts` files. These names attract unrelated code and become difficult to refactor. If a function does not have a clear home, the home does not yet exist; create a named module that describes the function's purpose.

Avoid deeply nested feature trees. Three levels under `features/` is the practical ceiling. Beyond that, the feature is too large and should be split.
