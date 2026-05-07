+++
title = "Why we chose Lua for plugins"
date = "2025-03-19"
description = "The reasoning behind a small, embedded scripting language"
+++

A recurring question on the issue tracker is why devtool plugins are written in Lua rather than JavaScript or the host language. The decision predates the first public release, and the trade-offs that motivated it have held up well in practice.

## Embedding cost

Lua is the smallest practical scripting runtime. The interpreter compiles to roughly two hundred kilobytes and starts in microseconds. Embedding a JavaScript engine would have multiplied the binary size by an order of magnitude and pushed cold start time past the threshold where users start to notice. For a tool that runs hundreds of times per day on a developer laptop, that distance matters.

## Sandbox surface area

The Lua standard library is small enough to audit by hand. Restricting access to the file system, network, and process layer is a matter of removing entries from a single table. JavaScript runtimes ship with substantially more capability, and producing a tight sandbox requires either a forked engine or a permissions wrapper that needs ongoing maintenance to keep up with the runtime.

The smaller surface translates directly into fewer security review hours per release.

## Stability

Lua 5.4 is the current stable release. Lua 5.1 was released in 2006 and is still widely supported. The language evolves slowly and breaks compatibility rarely. Plugins written against the 1.0 release of devtool continue to work without modification three years later. That stability is unusual in the scripting world and makes long-lived plugin ecosystems possible.

## What we gave up

Lua is not a popular language outside of game development and embedded scripting. Most contributors learn it on the job. We provide a typed standard library shim, an LSP configuration, and a starter template that covers the common cases. The learning curve is real but flattens within a week of regular use.

If we were starting today, we would make the same choice. The constraints that drove the decision have not changed.
