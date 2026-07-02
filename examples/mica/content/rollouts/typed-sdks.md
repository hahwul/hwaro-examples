+++
title = "Typed SDKs"
description = "Generate a typed client from your flag schema so a renamed flag or a wrong-typed default becomes a compile error, not a production surprise."
date = "2026-05-14"
weight = 4
toc = true
[extra]
tag = "sdk"
status = "on"
+++

Stringly-typed flags rot. Someone renames `new-checkout` to `checkout-v2`, the
old string lingers in a forgotten branch, and it silently evaluates to its
default forever. Mica's typed SDKs close that gap by generating a client from
your flag schema, turning every mistake the stringly API allows into a compile
error.

<!-- more -->

## Generate a client

Point the generator at a project and it writes a module with one accessor per
flag, each carrying the flag's real type and default.

```bash
mica codegen typescript --project checkout-service --out src/flags.ts
```

The generated module is a plain artifact you commit. Regenerate it in CI and a
diff shows exactly which flags changed shape since the last release.

## The renamed-flag problem, solved

With the typed client you never pass a flag name as a string. You call a
method, and the compiler knows whether it exists.

```ts
import { flags } from "./flags";

// ✓ known flag, boolean return, typed context
if (flags.newCheckout.eval(context)) {
  renderNewCheckout();
}

// ✗ won't compile — no such flag after the rename
flags.checkut.eval(context);
```

Delete a flag in Mica, regenerate, and every call site that still references it
turns red. The rename becomes a mechanical refactor instead of an archaeology
project.

## Typed variants, not just booleans

Multivariate flags return a union, so a `switch` on the variant is
exhaustively checked. Add a variant to the flag, regenerate, and the compiler
lists every switch that no longer handles all cases.

```ts
switch (flags.checkoutLayout.variant(context)) {
  case "control":  return <Legacy />;
  case "compact":  return <Compact />;
  case "wide":     return <Wide />;
  // adding a "beta" variant here becomes a compile error until handled
}
```

## Defaults live with the flag

The default is baked into the generated accessor from the flag's schema, so a
call site cannot disagree with the source of truth. If Mica is unreachable at
startup, `eval` returns that schema default — the same value your team reviewed
when the flag was created, not a guess typed at the call site.
