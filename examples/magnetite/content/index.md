+++
title = "Magnetite — self-hosted search server"
description = "Docs for a self-hosted search server with typo tolerance and faceting"
template = "home"
+++

Magnetite is a single-binary search server you run on your own hardware. Point it
at a directory of JSON documents, declare a schema, and it builds an inverted
index that answers phrase queries, fuzzy terms, and faceted filters in a few
milliseconds — no cluster, no external services, no per-query billing.

The whole engine is one process and one memory-mapped index file. It speaks a
compact query grammar over HTTP, tolerates the typos your users actually make,
and returns exact facet counts alongside every result set. This manual is the
operator's reference: the grammar first, then the machinery underneath it.
