+++
title = "Typo Tolerance"
description = "How fuzzy matching works: Levenshtein automata, edit-distance budgets, and prefix rules."
date = "2026-06-02"
weight = 30
tags = ["typo-tolerance", "query", "ranking"]
toc = true
[extra]
section_id = "REF.3"
stability = "stable"
+++

Users misspell things. Magnetite answers the query they meant, not the query
they typed, by matching every indexed term within a bounded edit distance of the
search term. There is no spell-check round trip and no dictionary lookup — the
tolerance is built into the matcher itself.

<!-- more -->

## Edit distance

The engine measures the Levenshtein distance between the query term and each
candidate: the number of single-character insertions, deletions, or
substitutions needed to turn one into the other. `altittude` is distance one
from `altitude` (delete a `t`); `altdue` is distance three.

The `~n` modifier sets the budget per term. Without a number, fuzzy defaults to
distance two, which covers the overwhelming majority of real typos.

{{ tape(query="altittude~1 OR barometre~2", label="A one-edit term OR a two-edit term — each carries its own budget.") }}

## The automaton

For each fuzzy term the parser compiles a Levenshtein automaton — a small state
machine that accepts exactly the strings within the budget. The matcher then
intersects that automaton with the index's term dictionary, which is stored as a
finite-state transducer. The intersection walks both machines in lockstep, so a
fuzzy lookup costs about the same as a prefix scan, not a full-dictionary
comparison.

```text
query term:  altitude~2
automaton:   accepts every string within 2 edits of "altitude"
dictionary:  FST of all indexed terms
match:       walk both; emit terms both machines accept
```

## Distance budget by length

Allowing two edits on a three-letter word matches almost everything, so the
budget is clamped by term length unless you override it.

| Term length | Default max edits | Prefix required |
| --- | --- | --- |
| 1–3 chars | 0 (exact) | — |
| 4–6 chars | 1 | first 1 char |
| 7+ chars | 2 | first 1 char |

The prefix requirement means the first character must match exactly. This keeps
`search` from matching `arch` and keeps fuzzy queries fast — the automaton
prunes the FST at the root.

## Scoring fuzzy matches

An exact match always outranks a fuzzy one. Internally each candidate is scored
by its base relevance (see ranking) multiplied by a distance penalty:

| Edit distance | Score multiplier |
| --- | --- |
| 0 (exact) | 1.00 |
| 1 | 0.75 |
| 2 | 0.55 |

So a document containing the exact term sorts above one that only matched a
two-edit variant, even when the fuzzy document is otherwise a stronger hit. To
disable tolerance for a single term — useful for codes and identifiers — quote
it as a one-word phrase: `"SKU-4417"` is matched verbatim.
