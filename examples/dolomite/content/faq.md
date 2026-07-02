+++
title = "Frequently asked questions"
description = "Why Dolomite exists, how it compares, and what it will not do."
toc = true
+++

Short answers to the questions that come up most often when a team first reaches
for Dolomite. If your question is not here, the [specification](@/spec/_index.md) is the
authoritative source.

## Why not just write JSON?

JSON has no comments, no types, no way to share a value between files, and no way
to say "this must be a port number." Dolomite adds exactly those authoring
conveniences and then compiles them away. You keep JSON everywhere the config is
*consumed*, and gain checking everywhere it is *written*.

## How is this different from YAML?

YAML is untyped and famously surprising — the country code `NO` becomes the
boolean `false`, indentation errors pass silently, and there is no schema step.
Dolomite is typed, its scalars mean exactly one thing, and a document either
type-checks or fails the build. The output is JSON, which YAML tooling can read
too, so adopting Dolomite does not strand an existing YAML consumer.

## Does the output really contain no Dolomite?

Yes. Annotations, `schema` blocks, `let` bindings, imports, interpolation, and
merges are all resolved at build time. The compiled file is ordinary JSON with no
markers, no comments, and no residual types. A consumer cannot tell whether a
file was hand-written or compiled.

## Can I adopt it gradually?

Yes. Because `dolo build` emits plain JSON, you can convert one configuration
file at a time. Point your build at the `.dolo` source, commit the generated
`.json`, and nothing downstream changes. Teams commonly start with a single
noisy config — the one that breaks most often — and expand from there.

## What about secrets?

Dolomite does not read the network or the environment on its own, which keeps
builds reproducible. Secrets live in their own file that is supplied at build
time and imported like any other document. The compiler treats a secret value as
an ordinary string; keeping it out of version control is a matter of where the
file lives, not a language feature.

## Is it stable?

Dolomite is at version 0.9. The scalar model, records, lists, schemas, imports,
and the merge operator are considered settled and will not change shape before
1.0. The diagnostic format and a handful of standard schema helpers are still
being refined. The compiled JSON output is covered by the determinism guarantee
described in [Compiling to JSON](@/spec/compiling.md).

## What editor support exists?

The compiler ships a language server that provides live type errors, go-to for
imports, and formatting on save. Syntax definitions for the common editors are
generated from the same grammar the compiler uses, so highlighting never drifts
from the language it describes.
