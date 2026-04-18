+++
title = "Connection Handshake"
weight = 2
description = "Three-phase connection establishment and capability negotiation"
+++

## 1. Overview

Before exchanging application data, a NexusWire client and server MUST complete a handshake sequence. The handshake serves three purposes: version verification, capability negotiation, and initial window advertisement.

## 2. Handshake Sequence

The connection handshake consists of three messages exchanged over a freshly established TCP connection:

```
    Client                                  Server
      |                                       |
      |  (1) TCP SYN/SYN-ACK/ACK             |
      |<------------------------------------->|
      |                                       |
      |  (2) HELLO                            |
      |-------------------------------------->|
      |       Version: NW/1.2                 |
      |       Capabilities: 0x000F            |
      |       Max Streams: 128                |
      |       Window Size: 65536              |
      |                                       |
      |  (3) WELCOME                          |
      |<--------------------------------------|
      |       Version: NW/1.2                 |
      |       Capabilities: 0x0007            |
      |       Max Streams: 256                |
      |       Window Size: 131072             |
      |       Session ID: 0xA3B7C9D1         |
      |                                       |
      |  (4) ACK (session confirmation)       |
      |-------------------------------------->|
      |       Session ID: 0xA3B7C9D1         |
      |                                       |
      |  Connection ESTABLISHED               |
      |                                       |
```

## 3. HELLO Frame

The client sends a HELLO frame immediately after the TCP connection is established. The HELLO payload has the following structure:

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Capabilities          |         Max Streams           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                         Window Size                           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|    Client ID Length           |                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+                               |
|                      Client ID (variable)                     |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

| Field            | Size      | Description                                |
|------------------|-----------|--------------------------------------------|
| Capabilities     | 16 bits   | Bitmask of requested capabilities          |
| Max Streams      | 16 bits   | Maximum concurrent streams client supports |
| Window Size      | 32 bits   | Initial flow control window in bytes       |
| Client ID Length | 16 bits   | Length of the Client ID string              |
| Client ID        | Variable  | UTF-8 encoded client identifier            |

### 3.1 Capability Bits

| Bit | Name              | Description                               |
|-----|-------------------|-------------------------------------------|
| 0   | CAP_COMPRESS      | LZ4 payload compression                   |
| 1   | CAP_ENCRYPT       | ChaCha20-Poly1305 payload encryption       |
| 2   | CAP_MULTIPLEX     | Stream multiplexing                        |
| 3   | CAP_PRIORITY      | Priority-based scheduling                  |
| 4   | CAP_RESUME        | Session resumption after disconnect        |
| 5-15| Reserved          | Must be zero                               |

The effective capability set for the session is the bitwise AND of the client and server capability masks. A feature is enabled only if both endpoints advertise it.

## 4. WELCOME Frame

The server responds with a WELCOME frame. This frame echoes the negotiated parameters and assigns a session identifier.

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Capabilities          |         Max Streams           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                         Window Size                           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                         Session ID                            |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                      Idle Timeout (ms)                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

| Field          | Size    | Description                                    |
|----------------|---------|------------------------------------------------|
| Capabilities   | 16 bits | Negotiated capability bitmask                  |
| Max Streams    | 16 bits | Minimum of client and server max streams       |
| Window Size    | 32 bits | Server's initial flow control window           |
| Session ID     | 32 bits | Unique session identifier assigned by server   |
| Idle Timeout   | 32 bits | Milliseconds before idle connection is closed  |

## 5. Session Confirmation

The client MUST send an ACK frame containing the Session ID from the WELCOME frame. Upon receiving a valid ACK, the server transitions the connection to the ESTABLISHED state.

If the ACK does not arrive within 5 seconds of sending WELCOME, the server MUST close the TCP connection and log the event.

## 6. Version Mismatch

If the server does not support the client's protocol version, it MUST respond with an ERROR frame (error code `VERSION_MISMATCH`, 0x0001) and close the connection. The ERROR payload SHOULD include the highest version the server supports, allowing the client to retry with a compatible version.

```
    Client                                  Server
      |                                       |
      |  HELLO (Version: NW/2.0)              |
      |-------------------------------------->|
      |                                       |
      |  ERROR (0x0001, supports NW/1.2)      |
      |<--------------------------------------|
      |                                       |
      |  [TCP FIN]                            |
      |<------------------------------------->|
```

## 7. Timeout Parameters

| Parameter              | Default   | Range          | Description                        |
|------------------------|-----------|----------------|------------------------------------|
| Handshake timeout      | 10s       | 1s - 60s       | Maximum time to complete handshake |
| Idle timeout           | 300s      | 10s - 3600s    | Inactivity before GOAWAY           |
| Keepalive interval     | 30s       | 5s - 300s      | PING transmission interval         |
| Keepalive timeout      | 10s       | 1s - 60s       | Time to wait for PONG response     |

## 8. Connection State Machine

```
                        +-------+
                        | CLOSED|
                        +---+---+
                            |
                      TCP established
                            |
                        +---v---+
                  +---->| HELLO |
                  |     | SENT  |
                  |     +---+---+
                  |         |
            timeout    WELCOME received
                  |         |
                  |     +---v---+
                  +-----| ACK   |
                        | SENT  |
                        +---+---+
                            |
                      ACK confirmed
                            |
                      +-----v------+
                      | ESTABLISHED|
                      +-----+------+
                            |
                    GOAWAY / error / timeout
                            |
                      +-----v------+
                      |  CLOSING   |
                      +-----+------+
                            |
                      TCP teardown
                            |
                        +---v---+
                        | CLOSED|
                        +-------+
```

Implementations MUST track the connection state and reject frames that are invalid for the current state. For example, DATA frames received before the connection reaches ESTABLISHED MUST be discarded and an ERROR frame sent in response.
