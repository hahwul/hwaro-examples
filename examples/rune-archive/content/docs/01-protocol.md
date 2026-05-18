+++
title = "The Protocol"
description = "Wire format, framing, and the lifecycle of a single request."
date = "2026-03-01"
weight = 1
tags = ["spec", "protocol"]
+++

## Wire format

Every message on the wire is composed of a four-byte length prefix, a
one-byte type discriminator, and a body of up to 65,531 bytes. Bodies that
exceed this length are split across continuation frames.

```
+-------------------+--------+-----------------------------+
| length (uint32 BE)| type   | body                        |
+-------------------+--------+-----------------------------+
```

Length values are encoded big-endian to match the conventions of established
internet protocols.[^1] Implementations MAY refuse messages whose declared
length is less than five — the smallest possible valid frame.

## Lifecycle of a request

A request passes through four states:

1. **Drafted.** The sender has constructed the frame but not yet committed
   it to the wire.
2. **In flight.** The frame has been transmitted, and the sender awaits
   acknowledgement.
3. **Settled.** The acknowledgement has been received and validated.
4. **Sealed.** The settlement has been recorded in the local journal and
   the corresponding draft has been discarded.

Sealing is the only state transition that is irreversible. Implementations
MUST NOT seal a request until the journal write has been fsynced.

## Reserved type discriminators

| Code | Name         | Meaning                                        |
|------|--------------|------------------------------------------------|
| 0x00 | `NOOP`       | Carrier wave; ignore.                          |
| 0x01 | `REQUEST`    | Client-initiated, expects a response.          |
| 0x02 | `RESPONSE`   | Reply to a prior request.                      |
| 0x03 | `EVENT`      | Server-initiated; no response required.        |
| 0x7F | `RESERVED`   | Forbidden; future protocol versions only.      |

[^1]: See RFC 791 §3.1 for an analogous encoding decision.
