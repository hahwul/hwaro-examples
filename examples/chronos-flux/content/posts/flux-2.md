+++
title = "Flux II: On Asynchronous Time"
date = "2024-06-04"
description = "Why interfaces increasingly model time as a stream of partial results rather than a single completion event."
tags = ["architecture", "ui"]
+++

A request to a backend used to have one shape: send, wait, receive. Modern interfaces increasingly speak in a different idiom — start a stream, render whatever arrives, keep updating until the stream closes.

## Two Models, Two Affordances

- **Request/response** — an empty state, a spinner, a result. The user knows they are waiting and roughly when the wait ends.
- **Stream** — partial output that fills in as it arrives. The user starts reading or scanning before the data is complete; the screen never sits empty.

Streams trade certainty for momentum. The tradeoff is usually worth it when the data is large or the source is slow, and rarely worth it when the data is small and arrives fast — a streaming interface for sub-100ms responses is overhead for no benefit.

## What Changes in the Frontend

A streaming UI has to assume that *every render is partial*. Counters update, sort orders shift, the layout reflows mid-read. Designers who treat the first render as authoritative produce streaming interfaces that feel buggy. The discipline is to design for the in-between state, not just the empty and complete ones.
