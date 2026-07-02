+++
title = "Halite"
description = "Docs for an embeddable spreadsheet engine and its formula language"
template = "home"

[extra]
formula = "=SUM(Q1:Q4) / COUNT(Q1:Q4)"
formula_result = "20 368.75"
+++

Halite is a small, embeddable spreadsheet engine: a typed formula language,
a dependency graph that recalculates only the cells a change actually
touches, and a C-compatible core you can drop into a desktop app, a report
builder, or a batch job with no spreadsheet UI attached at all. It ships as
a single library with no runtime dependencies beyond libc.

<!-- more -->
