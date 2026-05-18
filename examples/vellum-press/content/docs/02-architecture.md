+++
title = "Architecture"
description = "The shape of the system, and the reasoning behind that shape."
date = "2026-01-09"
weight = 2
tags = ["spec"]
+++

## The shape of the system

The system is composed of three processes, each of which performs one
duty and no other. The processes communicate by means of a shared
journal on disk and a pair of named pipes; no process holds a network
socket open to any other process within the same host.[^1]

| Process     | Duty                                       |
|-------------|--------------------------------------------|
| `ingest`    | Accepts new entries from the outside.      |
| `journal`   | Records accepted entries to durable media. |
| `egress`    | Serves entries to clients on request.      |

The separation is intentional. A failure in the ingress path — for
instance, a malformed entry, or a sudden surge of traffic — cannot
prevent the egress path from serving entries that have already been
journalled.

## Why three, and not one

A single process would be simpler to operate but harder to reason
about. The three-process arrangement makes the dependencies explicit
in the process table: at any moment, an operator running `ps` can see
which duties are healthy and which are not.

```
USER       PID   STAT  COMMAND
press      4101  Ss    /usr/local/bin/press-ingest
press      4102  Ss    /usr/local/bin/press-journal
press      4103  Ss    /usr/local/bin/press-egress
```

The cost of the additional fork-and-pipe is small: in the worst case
observed, less than two hundred microseconds of latency on the ingress
path.

## What is *not* in the diagram

The diagram above omits two things on purpose. There is no cache and
there is no message queue. Both were considered during the design and
both were rejected: the cache because the underlying journal is fast
enough, the queue because pipes already suffice. The author has
observed too many systems where a cache or a queue was added once and
never removed.

[^1]: A single host. Cross-host communication is described in chapter
four, which addresses the protocol on the wire.
