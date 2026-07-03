+++
title = "Gypsum"
description = "A CommonMark-compliant markdown parser documented source-to-output, side by side"
template = "home"
[extra]
tagline = "A CommonMark-compliant markdown parser with a plugin pipeline for custom syntax."
+++

Gypsum is a small, embeddable markdown parser. It implements the CommonMark
specification in full — no undocumented deviations, no "mostly compatible"
footnotes — and adds exactly one extension point: a plugin pipeline that lets
a host application register new inline and block syntax without forking the
parser itself.

The two goals sit together on purpose. A document written in the CommonMark
subset renders identically in Gypsum and in any other conforming parser, so
teams can move content between tools without surprises. A document that uses
a plugin — a callout block, a footnote, a custom container — only renders
that way where the plugin is loaded, and Gypsum makes that boundary visible
rather than hiding it. Nothing about the core grammar is renegotiable to make
room for an extension; extensions sit strictly on top.

Internally, parsing happens in two passes matching the spec's own model:
block structure first, inline spans second, with plugins hooking both stages
through a small, stable interface. The reference implementation is written
in Rust and compiles to a single static library with no runtime dependencies.
