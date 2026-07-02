+++
title = "About Gypsum"
description = "Why the parser is named after a mineral, how compliance is tested, and what the plugin pipeline promises."
+++

Gypsum is named after the mineral, not the plaster it becomes. Raw gypsum is
soft, pale, and takes a straight edge cleanly — which is roughly the design
brief for a markdown parser: predictable, undramatic, and honest about where
its edges are. This documentation follows the same rule. It has one column,
one accent color, and no screenshots standing in for real output.

## Compliance, tested literally

Every commit runs the full official CommonMark specification test suite —
652 examples pulled directly from the spec text, each one a source string and
an exact expected HTML string. Gypsum's CI fails the build on a single
mismatched byte. This is a stronger promise than "CommonMark-inspired" or
"CommonMark-flavored," phrases that usually mean a handful of edge cases in
list-loosening or link-reference resolution were quietly given up on. The
[syntax reference](@/syntax/_index.md) that makes up the rest of this site is
generated from the same fixtures the test suite uses, so the examples you
read here are the examples the parser is graded against.

## The plugin pipeline

Plugins register with one of two stages: block-level, which runs before
paragraphs are split into inline spans, or inline-level, which runs after.
A plugin declares a trigger — a leading character sequence for block plugins,
a delimiter run for inline ones — and Gypsum only calls into it when that
trigger is seen at a position where CommonMark itself has no competing
interpretation. This ordering guarantee is the whole point: a plugin can add
syntax, but it cannot silently reinterpret anything the specification already
assigns a meaning to. Popular first-party plugins add footnotes, definition
lists, and fenced directive blocks that key off a `callout` info string; none
of them are loaded by default.

## Stability

Gypsum is at version 2.3. The core parser has not changed its output for any
CommonMark-only document since version 1.0, and a document that avoids
plugins entirely is safe to upgrade across any version boundary without a
diff. The plugin interface is younger and versioned separately; consult a
plugin's own changelog before bumping a major version if your documents
depend on one.
