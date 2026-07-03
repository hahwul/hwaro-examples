+++
title = "The Dolomite specification"
description = "Every concept in Dolomite, shown as source and the JSON it compiles to."
sort_by = "weight"
template = "section"
generate_feeds = false
+++

This is the working specification for Dolomite, version 0.9. It is meant to be
read front to back once, then kept open in a second tab. Every concept below is
introduced the same way: a `.dolo` source file on the left, and the exact JSON
it compiles to on the right. If a rule cannot be shown as source and output, it
does not belong in the language.

The five chapters build on each other. Values and bindings cover the scalars
and the record that every document already is. Records and lists add nesting and
sequences. Types and schemas introduce the checking that makes Dolomite worth
using over raw JSON. Imports and merging show how large configurations are
composed from small files. The final chapter describes the compiler itself —
what `dolo build` guarantees about its output, and how types disappear on the
way to JSON.
