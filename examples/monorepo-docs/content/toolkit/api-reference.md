+++
title = "Toolkit API Reference"
description = "Core utilities exposed by the toolkit package."
+++

The toolkit exposes a small surface of generic utilities that other packages depend on. The API is intentionally narrow so that breaking changes are rare and consumers can pin to wide ranges without churn.

```ts
import { defer, memo, pipe, Result } from "@monorepo/toolkit";

const parsePort = pipe(
  (raw: string) => raw.trim(),
  (raw) => Number.parseInt(raw, 10),
  (n) => (Number.isFinite(n) && n > 0 ? Result.ok(n) : Result.err("invalid port"))
);
```

`defer` schedules a callback to run after the current microtask queue drains. It is implemented on top of `queueMicrotask` and falls back to `Promise.resolve().then` on hosts that do not expose the global. The function returns a handle that can be used to cancel the scheduled callback before it fires.

`memo` wraps a unary function with a single-slot cache. The cache compares arguments by reference for objects and by value for primitives. Callers that need a multi-argument or LRU cache should use `memoMany` instead, which accepts an explicit key generator and a maximum size.

`pipe` composes a sequence of single-argument functions into one. Type inference flows left to right, so the return type of each step becomes the parameter type of the next. The compiled output is a flat function call, not a chain of closures, which keeps stack traces readable.

`Result` is a tagged union with `ok` and `err` constructors. It is used in place of thrown exceptions for recoverable failures. Helpers such as `Result.map`, `Result.flatMap`, and `Result.unwrapOr` cover most call sites without requiring callers to discriminate the tag manually.

Every export is tree-shakable when consumed through a bundler that respects the `sideEffects: false` field in the package manifest.
