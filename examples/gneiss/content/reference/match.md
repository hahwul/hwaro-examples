+++
title = "MATCH"
description = "Grammar and semantics of the MATCH clause: graph patterns of nodes and edges, evaluated continuously against the current watermark."
date = "2025-01-20"
weight = 10
toc = true
[extra]
clause_number = "1"
+++

<figure class="rr-figure" aria-label="Railroad diagram: MATCH pattern, repeatable with a comma to match more than one pattern in a query">
  <svg class="rr" viewBox="0 0 620 120" aria-hidden="true" focusable="false">
    <defs>
      <marker id="rr-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path class="rr-marker-path" d="M0,0 L10,5 L0,10 z"/>
      </marker>
    </defs>
    <g class="rr-rail">
      <path d="M16,50 H600" marker-end="url(#rr-arrow)"/>
      <path d="M304,50 C330,50 330,94 304,94"/>
      <path d="M200,94 C174,94 174,50 200,50" marker-end="url(#rr-arrow)"/>
      <path d="M304,94 H200" marker-end="url(#rr-arrow)"/>
    </g>
    <circle class="rr-start" cx="12" cy="50" r="3.5"/>
    <circle class="rr-end" cx="606" cy="50" r="5"/>
    <rect class="rr-term" x="40" y="33" width="76" height="34" rx="6"/>
    <text class="rr-term-text" x="78" y="55" text-anchor="middle">MATCH</text>
    <rect class="rr-nonterm" x="200" y="33" width="104" height="34" rx="6"/>
    <text class="rr-nonterm-text" x="252" y="55" text-anchor="middle">pattern</text>
    <rect class="rr-sep" x="234" y="86" width="36" height="16" rx="4"/>
    <text class="rr-sep-text" x="252" y="98" text-anchor="middle">,</text>
  </svg>
  <figcaption class="rr-caption">Syntax: <code>MATCH pattern</code>, repeated with commas to match more than one pattern in a single query. Multiple patterns are implicitly joined wherever they share a variable.</figcaption>
</figure>

`MATCH` is the only clause that can appear more than once in effect — not by repeating the keyword, but by listing several comma-separated patterns after it. It is always the first clause in a query and it is the only one that is not optional.

<!-- more -->

## Grammar

<div class="grammar">
MATCH pattern (, pattern)*

pattern    ::= node (edge node)*
node       ::= "(" [variable] [":" Label] [properties] ")"
edge       ::= "-[" [":" RelType] "]->" | "-[" [":" RelType] "]-"
properties ::= "{" prop ":" value ("," prop ":" value)* "}"
</div>

## Pattern syntax

A node is a pair of parentheses holding an optional variable name, an optional label, and optional inline properties: `(s:Sensor {region: 'west'})`. Any part can be omitted — `()` matches any node at all, useful when you need to require an edge exists without caring what's on the other end of it.

An edge is a dash-bracket pair between two nodes: `-[:REPORTS]->` for a directed edge, or `-[:REPORTS]-` for either direction. The relationship type inside the brackets is required; Gneiss has no anonymous-edge shorthand, since an edge with no label can't be distinguished from any other edge at query time.

Chaining nodes and edges builds a path pattern:

```sql
MATCH (s:Sensor)-[:REPORTS]->(r:Reading)-[:TRIGGERED]->(a:Alert)
```

Listing a second pattern after a comma adds an independent path that Gneiss joins to the first automatically wherever a variable name repeats:

```sql
MATCH (s:Sensor)-[:REPORTS]->(r:Reading),
      (r)-[:TRIGGERED]->(a:Alert)
WHERE a.severity = 'critical'
```

## Notes

- Patterns match fixed-length paths only; there is no variable-length hop syntax (`*1..3`) yet. Write out each edge explicitly.
- A pattern is evaluated against the graph as it exists at the query's current watermark, not against the raw event log — see [Graphs Are Event Logs](/tutorial/graphs-are-event-logs/) for what that means in practice.
- At least one variable bound in `MATCH` must be referenced elsewhere in the query (in `WHERE`, `GROUP BY`, or the emitted columns), or Gneiss will reject the query at compile time as producing no useful output.
