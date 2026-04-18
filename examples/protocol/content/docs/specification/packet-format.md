+++
title = "Packet Format"
weight = 1
description = "Wire-level frame structure, field definitions, and encoding rules"
+++

## 1. Overview

All NexusWire communication is composed of discrete frames transmitted over a TCP stream. Each frame consists of a fixed-length header followed by a variable-length payload. This section defines the binary layout of every field.

## 2. Frame Layout

The general frame structure is as follows:

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|    Version    |     Type      |            Flags              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        Payload Length                         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
|                        Payload Data                           |
|                         (variable)                            |
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

The fixed header occupies exactly **8 bytes** (64 bits). The payload immediately follows with no padding.

## 3. Field Definitions

### 3.1 Version (8 bits)

The protocol version encoded as a single unsigned byte. The current version is `0x12` (decimal 18), representing NW/1.2.

| Bits  | Field   | Description              |
|-------|---------|--------------------------|
| 7..4  | Major   | Major version (0-15)     |
| 3..0  | Minor   | Minor version (0-15)     |

### 3.2 Type (8 bits)

Identifies the frame type. Implementations MUST ignore frames with unrecognized type values.

| Value  | Name       | Direction        | Description                     |
|--------|------------|------------------|---------------------------------|
| 0x01   | HELLO      | Client -> Server | Initiate handshake              |
| 0x02   | WELCOME    | Server -> Client | Handshake acknowledgment        |
| 0x03   | DATA       | Bidirectional    | Application data frame          |
| 0x04   | ACK        | Bidirectional    | Acknowledgment                  |
| 0x05   | PING       | Bidirectional    | Keepalive probe                 |
| 0x06   | PONG       | Bidirectional    | Keepalive response              |
| 0x07   | ERROR      | Bidirectional    | Error notification              |
| 0x08   | GOAWAY     | Bidirectional    | Graceful shutdown initiation    |
| 0x09   | RST        | Bidirectional    | Stream reset                    |
| 0x0A   | WINDOW     | Bidirectional    | Flow control window update      |

### 3.3 Flags (16 bits)

A bitmask of frame-level flags. Undefined flag bits MUST be set to zero by the sender and ignored by the receiver.

```
 0                   1
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|F|C|P|E|       Reserved        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

| Bit | Name     | Description                              |
|-----|----------|------------------------------------------|
| 0   | FIN      | Final frame in a logical message         |
| 1   | COMPRESS | Payload is compressed (LZ4)              |
| 2   | PRIORITY | Frame carries priority metadata          |
| 3   | ENCRYPT  | Payload is encrypted                     |
| 4-15| Reserved | Must be zero                             |

### 3.4 Payload Length (32 bits)

An unsigned 32-bit integer specifying the number of bytes in the payload. Although 32 bits permit up to 4 GiB, conforming implementations MUST NOT send frames with a payload exceeding 16,777,215 bytes (0x00FFFFFF). Receivers SHOULD reject frames that exceed this limit with error code `FRAME_TOO_LARGE` (0x0003).

## 4. DATA Frame Payload

DATA frames carry application-level content. The payload of a DATA frame has the following sub-structure:

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          Stream ID                            |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        Sequence Number                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
|                     Application Data                          |
|                         (variable)                            |
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

| Field           | Size    | Description                                    |
|-----------------|---------|------------------------------------------------|
| Stream ID       | 32 bits | Identifies the logical stream (odd = client)   |
| Sequence Number | 32 bits | Monotonically increasing per stream            |
| Application Data| Variable| The raw message bytes                          |

Stream IDs are allocated by the initiator. Client-initiated streams use odd IDs starting at 1. Server-initiated streams use even IDs starting at 2. Stream ID 0 is reserved for connection-level control frames.

## 5. Byte Ordering

All multi-byte integer fields are encoded in network byte order (big-endian). Implementations on little-endian architectures MUST convert to and from network byte order when reading and writing frames.

## 6. Maximum Transmission Unit

NexusWire does not impose its own MTU. It relies on the underlying TCP stack for segmentation. However, implementations SHOULD avoid sending individual frames larger than 65,535 bytes when operating over links with constrained buffers, as this reduces head-of-line blocking for multiplexed streams.

## 7. Wire Example

The following hex dump shows a DATA frame carrying 12 bytes of application data on stream 1, sequence 0, with the FIN flag set:

```
Offset  Hex                                         ASCII
------  ------------------------------------------  ----------------
0x0000  12 03 80 00 00 00 00 14  00 00 00 01 00 00  ................
0x000E  00 00 48 65 6C 6C 6F 20  57 6F 72 6C 64 21  ..Hello World!
```

Decoded:

- `12` -- Version: NW/1.2
- `03` -- Type: DATA
- `80 00` -- Flags: FIN=1, others=0
- `00 00 00 14` -- Payload Length: 20 bytes (8 sub-header + 12 data)
- `00 00 00 01` -- Stream ID: 1
- `00 00 00 00` -- Sequence Number: 0
- `48 65 6C 6C 6F 20 57 6F 72 6C 64 21` -- "Hello World!"
