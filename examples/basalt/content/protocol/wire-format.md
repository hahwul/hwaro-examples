+++
title = "Wire Format"
description = "The binary framing every request and response uses on the wire: header layout, varints, and payload boundaries."
date = "2025-05-14"
toc = true
weight = 1

[extra]
topic = "protocol/wire-format"
+++

Every Basalt request and response is a length-prefixed frame over a persistent TCP connection: a four-byte big-endian size, then a header, then a payload whose shape depends on the API key. There is no text framing anywhere in the protocol — clients that want introspection use `basalt inspect`, not a raw socket.

<!-- more -->

## Frame layout

```text
+------------------+------------------+------------------------+
|  size (4 bytes)  |  header (varies) |  payload (size - hdr)   |
+------------------+------------------+------------------------+
```

`size` counts every byte that follows it, header included. A client reads four bytes, learns the frame length, then reads exactly that many more — no scanning for a delimiter, no ambiguity about where one frame ends and the next begins.

## Request header

```text
api_key       int16    which request type (Produce, Fetch, JoinGroup, ...)
api_version   int16    negotiated at connection time
correlation_id int32   echoed back on the matching response, unmodified
client_id     string   length-prefixed, for broker-side logging only
```

`correlation_id` is what lets a client pipeline multiple in-flight requests on one connection: responses can arrive out of order relative to when the requests were sent, and the client matches each response back to its caller by this field alone.

## Varints and strings

Integers in payload bodies use a variable-length zig-zag encoding — small values (partition indexes, small offsets) cost one byte, and the encoding only grows for large values, which keeps typical Produce and Fetch payloads compact without a fixed-width tax on every field. Strings are length-prefixed with a varint, never null-terminated, so a value is free to contain any byte sequence, including embedded zero bytes.

```text
0x00        -> 0
0x01        -> -1
0x02        -> 1
0x7F        -> -64
```

Zig-zag encoding is why small negative numbers (like `-1`, Basalt's sentinel for "no offset yet") cost the same one byte as small positive ones, instead of the ten bytes a naive signed varint would need.

Client authors implementing this from scratch should start with Produce and Fetch — the two request types that carry log data — and treat every other API key (JoinGroup, SyncGroup, Heartbeat, Metadata) as administrative traffic that shares the same frame and header shape but a much smaller payload.
