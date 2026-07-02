+++
title = "io_uring in Anger: Completion-Based I/O for Real Systems"
date = "2026-03-13"
weight = 3
description = "Moving a production storage engine from epoll to io_uring: the submission-queue mistakes that cost a rewrite, and the ones that were free."
[extra]
kind = "talk"
time = "09:30"
duration = "40 min"
speaker = "Priya Ostrander"
speaker_role = "Staff engineer, Fenwick Data"
room = "Main Hall"
day = "Day 02 — 13 March"
+++

Switching an I/O layer from readiness-based to completion-based semantics
sounds like a driver-level detail. It is actually a rewrite of every
assumption your buffer-ownership model makes, and this talk is the story
of finding that out the hard way, on a storage engine handling production
traffic the whole time.

<!-- more -->

## The mental model that has to change

`epoll` tells you a file descriptor is *ready*; you still own the syscall.
`io_uring` tells you an operation is *done*; the kernel owned the buffer
for the entire duration of the operation, which means your buffer
lifetime now has to survive until a completion event arrives, not until
you finish issuing the request.

```c
struct io_uring_sqe *sqe = io_uring_get_sqe(&ring);
io_uring_prep_read(sqe, fd, buf, len, offset);
sqe->user_data = (uint64_t)(uintptr_t)request;
io_uring_submit(&ring);

/* buf must stay valid until the matching CQE arrives — even if the
   caller that issued the read has already moved on. */
```

Fenwick's storage engine used a pool-allocated buffer with reference
counting for exactly this reason, and the migration surfaced two bugs
that had been latent for years: a buffer reused one instruction too early
under `epoll`'s more forgiving timing, and a short-read handler that
assumed partial reads were rare enough not to matter. Under io_uring's
batching, both stopped being rare.

## What got faster, and why

The talk includes before/after latency histograms from three workloads —
small random reads, large sequential writes, and a mixed OLTP-shaped
trace — with `IOSQE_IO_LINK` chains explained through an actual
production chain (open, then read, then close, submitted as one unit)
rather than a toy example. Registered buffers and registered file
descriptors get their own section, including the one case where
registering files made things measurably *slower* because it defeated an
existing readahead heuristic elsewhere in the stack.

Closing ten minutes: what Fenwick would tell a team starting this
migration today, including the two abstractions that turned out to be
unnecessary and the one (a completion-queue depth watchdog) that should
have existed from day one.
