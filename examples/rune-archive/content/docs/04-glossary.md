+++
title = "Glossary"
description = "Vocabulary used throughout the Archive."
date = "2026-03-22"
weight = 4
tags = ["reference"]
+++

## Terms of art

**Folio.** A single chapter of the Archive. Folios are numbered, ordered,
and self-contained.

**Frame.** The smallest unit of data exchanged on the wire. See *The Protocol*.

**Segment.** An append-only log file on disk. Segments are immutable once
sealed.

**Settlement.** Acknowledgement that a request has been received and
validated by the peer. Distinct from *sealing*, which is durable.

**Soak.** A representative workload sustained long enough for steady-state
behaviour to emerge — typically thirty minutes.

**Snapshot.** The compacted representation of all sealed segments older
than the retention window.

## Conventions

Throughout the Archive, the words MUST, MUST NOT, SHOULD, SHOULD NOT, and
MAY carry the meanings assigned to them in RFC 2119, and are typeset in
small capitals so the reader cannot mistake them for ordinary emphasis.

Code samples are presented in C wherever the runtime's reference
implementation is unambiguous; otherwise pseudocode is used.
