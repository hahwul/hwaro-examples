+++
title = "About Feldspar"
description = "Where Feldspar came from, what it refuses to do, and how to reach the people who build it."
date = "2026-05-12"
+++

Feldspar started as an internal tool at a small product studio that was tired
of two failure modes. The first was the hand-written stylesheet that grew a
new one-off class every sprint until nobody could delete anything safely. The
second was the utility framework so large that shipping it meant shipping a
dictionary to render a business card. We wanted the ergonomics of utilities
without the weight, and we wanted the whole system to trace back to a single
source of truth.

<!-- more -->

The answer was to treat utilities as *compiler output* rather than a library
you install. You author tokens; Feldspar reads your templates, resolves every
utility those templates reference, and writes out only those rules. Change a
token and the utilities that derive from it change with it. Delete a component
and its utilities evaporate from the next build. The stylesheet is never larger
than the interface it dresses.

## What Feldspar will not do

Feldspar is deliberately narrow. It has no opinion about your JavaScript
framework, ships no runtime, and never injects a `<style>` tag at page load.
It does not try to be a component library — there are no pre-built modals or
carousels. It compiles utilities from tokens, checks them against your markup,
and stops. Everything past that is your design.

We also refuse configuration that cannot be explained in a sentence. Every
option in `feldspar.toml` maps to a concept in this handbook. If a feature
needs a paragraph of caveats, it does not ship.

## The team and the license

Feldspar is maintained by a rotating group of four engineers under the handle
**Orthoclase Labs**, released under the MIT license, and funded by the studio
that still uses it in production. There is no hosted service and no telemetry;
the compiler runs on your machine and reports to no one.

Bug reports, token presets, and recipe contributions are welcome. The fastest
way to reach a maintainer is the `#feldspar` room on the studio's community
server, linked from the project repository. Please include the offending
`feldspar.toml` and the compiled output — nine times out of ten the answer is
visible in the diff between the two.
