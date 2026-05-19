+++
title = "Query API"
description = "The traversal grammar, with examples drawn from production workloads."
date = "2026-05-08"
weight = 3
tags = ["api", "traversal"]
+++

## Surface

The query API is a single endpoint. Queries are sent as a JSON envelope; the
planner returns a streaming result set. There is no client library beyond
the thin wrappers that ship with the runtime.

```http
POST /v3/query HTTP/1.1
Host: lattice.internal
Content-Type: application/json

{
  "trav": "g.V().has('Account','tier','pro').out('OWNS').values('region')",
  "timeout_ms": 250
}
```

## Traversal grammar

Traversals are expressed in a Gremlin-compatible subset. The compatible
operators are listed below. Steps not in this list will be rejected at
parse time.

| Step          | Cardinality | Notes                              |
|---------------|-------------|------------------------------------|
| `V()`         | many        | Entry into the vertex space        |
| `has(...)`    | filter      | Property predicate                 |
| `out(type)`   | many        | Outgoing edges of a type           |
| `in(type)`    | many        | Incoming edges of a type           |
| `values(k)`   | many        | Project a property to the stream   |
| `count()`     | one         | Terminal aggregation               |
| `limit(n)`    | many        | Bounded scan                       |

## Planner hints

```toml
[hint]
# Pin the plan to the property index even if cost says otherwise.
index = "Account.tier"

# Reject queries the planner estimates above this row budget.
max_rows = 10_000_000
```

Hints are advisory in development and enforced in production. The same
query, with the same hint, will either succeed or fail consistently across
environments.

## Errors

The query API returns structured errors. The shape is stable across
versions; new fields may be added but existing fields will not be removed.

```json
{
  "error": {
    "code": "PLAN_TIMEOUT",
    "stage": "planner",
    "detail": "exceeded 50ms budget",
    "trace_id": "01HW3K9F4Z...PQ"
  }
}
```
