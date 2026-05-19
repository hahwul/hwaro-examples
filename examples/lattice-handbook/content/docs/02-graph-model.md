+++
title = "Graph Model"
description = "Nodes, edges, properties, and the typing rules the planner depends on."
date = "2026-05-05"
weight = 2
tags = ["model", "schema"]
+++

## Nodes

Every node has a stable 128-bit identifier and a typed label. Labels are
immutable for the lifetime of a node; renaming a label requires inserting
a new node and migrating edges.

```toml
[node]
id = "01HW3K2N9A...XQ"
label = "Account"

[node.properties]
created_at = 1714521600
status      = "active"
tier        = "pro"
```

## Edges

Edges are directed and typed. A pair `(label, direction)` defines a unique
adjacency list on the source node, which is what makes single-hop
traversals constant-time.

```toml
[edge]
type   = "OWNS"
source = "01HW3K2N9A...XQ"
target = "01HW3K8T1Q...AB"
weight = 1.0
```

## Properties

Properties are typed and indexed at write time. The supported scalar types
are: `int64`, `float64`, `bool`, `string`, `bytes`, and `instant`. Lists of
scalars are allowed; nested maps are not.

| Type      | Indexable | Range scan |
|-----------|-----------|------------|
| `int64`   | •         | •          |
| `float64` | •         | •          |
| `bool`    | •         | —          |
| `string`  | •         | prefix     |
| `instant` | •         | •          |
| `bytes`   | —         | —          |

## Typing rules

The planner relies on three invariants:

1. **Label closure.** Every node has exactly one label, fixed at insert.
2. **Edge constancy.** An edge's `(source_label, type, target_label)` tuple
   is fixed at insert and cannot be redefined.
3. **Property monotonicity.** Property types may only be widened
   (`int64 → float64`), never narrowed.
