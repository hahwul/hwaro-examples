+++
title = "Synonym Maps"
description = "One-way and two-way synonym sets, query-time expansion, and hot reloading."
date = "2026-02-09"
weight = 50
tags = ["synonyms", "query", "configuration"]
toc = true
[extra]
section_id = "REF.5"
stability = "stable"
+++

A synonym map teaches the engine that different words mean the same thing.
Magnetite expands synonyms at query time, not index time, so you can edit the
map and see the effect on the next request without rebuilding a single segment.

<!-- more -->

## The map file

A synonym map is a plain-text file, one rule per line. Whitespace is ignored;
lines beginning with `#` are comments. There are two rule forms.

```text
# two-way: every term expands to all the others
stove, burner, cooker

# one-way: the left side expands to the right, not the reverse
=> puffy, insulated jacket, down jacket
sleeping bag => bag, quilt
```

A two-way rule (`a, b, c`) makes the terms interchangeable: a query for any one
matches documents containing any of them. A one-way rule (`lhs => rhs`) expands
`lhs` into the right-hand terms only — searching `parka` can find `insulated
jacket`, but searching `insulated jacket` will not pull in every `parka`.

## How expansion works

When the parser meets a term, it looks it up in the map. Each matching rule adds
its partner terms to the clause as an `OR` group, preserving any field prefix and
fuzzy modifier on the original term.

{{ tape(query="title:stove~1", label="With the rule `stove, burner, cooker`, this becomes title:(stove~1 OR burner~1 OR cooker~1).") }}

Multi-word synonyms are matched as phrases. The rule `sleeping bag => bag, quilt`
only fires when `sleeping` and `bag` appear adjacent in the query, so it never
misfires on a stray `bag`.

## Configuration

Point the server at a map with `--synonyms`, or set it in the server config.
The `mode` controls when unknown terms are dropped.

| Option | Values | Effect |
| --- | --- | --- |
| `--synonyms <path>` | file path | load a synonym map at startup |
| `synonym.mode` | `expand` / `replace` | keep the original term, or swap it out |
| `synonym.reload` | `true` / `false` | watch the file and reload on change |
| `synonym.case` | `fold` / `exact` | match rules case-insensitively or not |

## Hot reloading

With `synonym.reload = true` the server watches the map file and swaps in a new
copy atomically when it changes on disk. In-flight queries finish against the
old map; the next query sees the new one. There is no reindex and no dropped
request — expansion is a query-time concern, so the index never has to know a
synonym rule existed.

## A worked example

Given the map rule `two-way: laptop, notebook, ultrabook` and a document whose
body reads "a lightweight ultrabook for travel", all three of these queries
return that document:

```text
laptop
notebook~1
title:ultrabook OR body:laptop
```

The first matches by direct expansion; the second still expands *and* tolerates
one typo; the third shows expansion composing cleanly with fields and boolean
operators.
