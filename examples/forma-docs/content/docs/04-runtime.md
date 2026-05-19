+++
title = "Runtime"
description = "Server rendering, hydration, and the streaming render pipeline."
date = "2026-05-13"
weight = 4
tags = ["runtime", "rendering"]
+++

## The pipeline

Forma's runtime renders in three discrete phases. Each phase has a
well-defined input and output; you can stop after any phase and inspect
the intermediate result.

```text
   ┌──────────┐    ┌──────────┐    ┌──────────┐
   │ Resolve  ├───▶│  Layout  ├───▶│  Paint   │
   └──────────┘    └──────────┘    └──────────┘
        ▲              ▲                ▲
        │              │                │
     tokens         policies          markup
```

## Resolve

The resolve phase walks the tree and replaces every `TokenRef` with its
concrete value. The output of this phase is a token-free tree that the
layout phase can process without dereferencing anything.

```ts
const resolved = resolve(tree, { tokens, scope })
// All `token="color.ink"` are now real CSSValues.
```

## Layout

The layout phase computes box positions and dimensions. It runs once on
the server during SSR and a second time on the client only when the
viewport changes class (mobile / tablet / desktop).

## Paint

Paint is the only browser-only phase. It writes the resolved tree to the
DOM and attaches event handlers. Paint never recurses into descendants
that have not changed; the runtime tracks a per-subtree dirty bit.

## Streaming

Forma supports streaming SSR. The server emits the resolved tree
incrementally so the browser can begin painting before layout is complete
for the full document.

```ts
import { renderStream } from "forma/server"

for await (const chunk of renderStream(<App />, { tokens })) {
  response.write(chunk)
}
```

Streaming is on by default. Disabling it requires explicit configuration;
this is the only place in the framework where we discourage the
non-default path.

## Hydration

Hydration walks the existing DOM and attaches policies. Because policies
are declared at compile time, hydration does not need a virtual diff —
the server-emitted tree and the client-resolved tree are byte-identical.
