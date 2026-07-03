+++
title = "WHERE"
description = "Grammar and semantics of the WHERE clause: filter a MATCH pattern with boolean predicates over its bound variables."
date = "2025-01-27"
weight = 20
toc = true
[extra]
clause_number = "2"
+++

<figure class="rr-figure" aria-label="Railroad diagram: WHERE predicate, repeatable with AND to chain more than one predicate">
  <svg class="rr" viewBox="0 0 620 120" aria-hidden="true" focusable="false">
    <defs>
      <marker id="rr-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path class="rr-marker-path" d="M0,0 L10,5 L0,10 z"/>
      </marker>
    </defs>
    <g class="rr-rail">
      <path d="M16,50 H600" marker-end="url(#rr-arrow)"/>
      <path d="M330,50 C356,50 356,94 330,94"/>
      <path d="M200,94 C174,94 174,50 200,50" marker-end="url(#rr-arrow)"/>
      <path d="M330,94 H200" marker-end="url(#rr-arrow)"/>
    </g>
    <circle class="rr-start" cx="12" cy="50" r="3.5"/>
    <circle class="rr-end" cx="606" cy="50" r="5"/>
    <rect class="rr-term" x="40" y="33" width="76" height="34" rx="6"/>
    <text class="rr-term-text" x="78" y="55" text-anchor="middle">WHERE</text>
    <rect class="rr-nonterm" x="200" y="33" width="130" height="34" rx="6"/>
    <text class="rr-nonterm-text" x="265" y="55" text-anchor="middle">predicate</text>
    <rect class="rr-sep" x="237" y="86" width="56" height="16" rx="4"/>
    <text class="rr-sep-text" x="265" y="98" text-anchor="middle">AND</text>
  </svg>
  <figcaption class="rr-caption">Syntax: <code>WHERE predicate</code>, chained with <code>AND</code>. Use parentheses and <code>OR</code> / <code>NOT</code> inside a single predicate for more complex boolean logic.</figcaption>
</figure>

`WHERE` filters the rows a `MATCH` would otherwise produce. It always runs after pattern matching and before `WINDOW`, so predicates only ever see variables and properties that a pattern already bound — there is no way to filter on a value that isn't part of the graph.

<!-- more -->

## Grammar

<div class="grammar">
WHERE predicate (AND predicate)*
predicate  ::= expr comparator expr
             | predicate "OR" predicate
             | "NOT" predicate
             | "(" predicate ")"
comparator ::= "=" | "!=" | "&lt;" | "&lt;=" | "&gt;" | "&gt;="
</div>

## Comparators and property access

Dot notation reaches into a bound variable's properties: `s.threshold`, `r.value`. Comparators work over numbers, strings, and timestamps, with strings compared lexically and timestamps compared chronologically regardless of the literal format they were written in.

| Operator | Meaning |
| --- | --- |
| `=` / `!=` | equality / inequality |
| `<` `<=` `>` `>=` | ordering, numeric or chronological |

## Chaining and grouping

Top-level predicates separated by `AND` all must hold for a row to pass. `OR` and `NOT` are only available inside a single predicate expression, not as a way to repeat the clause — wrap them in parentheses to control precedence explicitly, since Gneiss does not guess at operator binding across a long unparenthesized chain:

```sql
MATCH (s:Sensor)-[:REPORTS]->(r:Reading)
WHERE r.value > s.threshold
  AND (s.region = 'west' OR s.region = 'central')
  AND NOT s.decommissioned
EMIT CHANGES
```

## Notes

- A predicate referencing a variable that no pattern bound is a compile-time error, not a runtime false.
- `WHERE` cannot reference the result of `WINDOW` or aggregate functions used after `GROUP BY` — filter those with a second query reading from this one's output instead.
- Comparing against `NULL` (an upsert that omitted a property) always evaluates to `false`, never `true`, including `!=`.
