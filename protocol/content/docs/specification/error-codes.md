+++
title = "Error Codes"
weight = 3
description = "Comprehensive reference of protocol error codes and recovery procedures"
+++

## 1. Overview

NexusWire defines a set of numeric error codes transmitted in ERROR and RST frames. Each error code has a fixed meaning and an associated severity level that determines the expected recovery behavior. This section serves as the normative reference for all defined error codes.

## 2. ERROR Frame Payload

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          Error Code                           |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                          Stream ID                            |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Reason Length         |                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+                               |
|                    Reason String (variable)                   |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

| Field         | Size     | Description                                   |
|---------------|----------|-----------------------------------------------|
| Error Code    | 32 bits  | Numeric error identifier                      |
| Stream ID     | 32 bits  | Affected stream (0 = connection-level error)  |
| Reason Length | 16 bits  | Length of the human-readable reason string     |
| Reason String | Variable | UTF-8 diagnostic message (not for parsing)    |

## 3. Error Code Registry

### 3.1 Connection-Level Errors (0x0001 - 0x00FF)

These errors affect the entire connection. Upon receiving a connection-level error, the peer SHOULD initiate graceful shutdown.

| Code   | Name                  | Severity | Description                                             |
|--------|-----------------------|----------|---------------------------------------------------------|
| 0x0001 | VERSION_MISMATCH      | Fatal    | Client and server protocol versions are incompatible    |
| 0x0002 | HANDSHAKE_FAILED      | Fatal    | Handshake did not complete within the timeout           |
| 0x0003 | FRAME_TOO_LARGE       | Fatal    | Received frame exceeds the maximum allowed size         |
| 0x0004 | PROTOCOL_ERROR        | Fatal    | Generic violation of the protocol specification         |
| 0x0005 | INTERNAL_ERROR        | Fatal    | Implementation encountered an unrecoverable condition   |
| 0x0006 | FLOW_CONTROL_ERROR    | Fatal    | Peer violated flow control constraints                  |
| 0x0007 | SETTINGS_TIMEOUT      | Fatal    | Capability negotiation timed out                        |
| 0x0008 | CONNECTION_LIMIT      | Warning  | Server has reached maximum connection count             |
| 0x0009 | IDLE_TIMEOUT          | Info     | Connection closed due to inactivity                     |
| 0x000A | GOAWAY_GRACEFUL       | Info     | Graceful shutdown initiated by peer                     |

### 3.2 Stream-Level Errors (0x0100 - 0x01FF)

These errors affect a single stream. The connection remains usable after a stream-level error. The affected stream is identified by the Stream ID field in the ERROR frame.

| Code   | Name                  | Severity | Description                                             |
|--------|-----------------------|----------|---------------------------------------------------------|
| 0x0100 | STREAM_REFUSED        | Warning  | Server refused to open the requested stream             |
| 0x0101 | STREAM_CANCELLED      | Info     | Stream was cancelled by the initiator                   |
| 0x0102 | STREAM_RESET          | Warning  | Stream was forcefully reset                             |
| 0x0103 | STREAM_LIMIT          | Warning  | Maximum number of concurrent streams exceeded           |
| 0x0104 | SEQUENCE_ERROR        | Fatal    | Received out-of-order sequence number                   |
| 0x0105 | INVALID_STREAM_STATE  | Warning  | Frame received in an invalid stream state               |
| 0x0106 | PAYLOAD_ERROR         | Warning  | Payload failed integrity or format validation           |

### 3.3 Application-Level Errors (0x1000 - 0xFFFF)

The range 0x1000 through 0xFFFF is reserved for application-defined error codes. The NexusWire protocol does not assign meaning to codes in this range. Applications using NexusWire SHOULD document their error codes separately.

## 4. Severity Levels

| Level   | Meaning                                                                  |
|---------|--------------------------------------------------------------------------|
| Fatal   | The connection or stream cannot continue. Immediate teardown required.   |
| Warning | An anomaly occurred, but recovery is possible. Log and continue.         |
| Info    | Normal operational event (e.g., graceful shutdown). No action needed.    |

## 5. Error Handling Rules

1. **Connection-level fatal errors.** The receiving endpoint MUST send a GOAWAY frame (if possible), wait up to 1 second for in-flight frames to drain, and then close the TCP connection.

2. **Stream-level errors.** The receiving endpoint MUST close the affected stream and release associated resources. Other streams on the same connection are unaffected.

3. **Unknown error codes.** Implementations MUST treat unrecognized error codes in the connection-level range (0x0001-0x00FF) as PROTOCOL_ERROR. Unrecognized stream-level codes (0x0100-0x01FF) SHOULD be treated as STREAM_RESET.

4. **Reason strings.** The Reason String field is intended for logging and debugging. Implementations MUST NOT parse the reason string to determine error handling behavior. Only the numeric Error Code is authoritative.

## 6. Error Response Examples

### 6.1 Frame Too Large

```
    Client                                  Server
      |                                       |
      |  DATA (payload: 20 MB)                |
      |-------------------------------------->|
      |                                       |
      |  ERROR                                |
      |<--------------------------------------|
      |    Code: 0x0003 (FRAME_TOO_LARGE)     |
      |    Stream: 0 (connection-level)        |
      |    Reason: "max frame 16777215 bytes"  |
      |                                       |
      |  GOAWAY                               |
      |<--------------------------------------|
      |                                       |
      |  [TCP FIN]                            |
      |<------------------------------------->|
```

### 6.2 Stream Refused

```
    Client                                  Server
      |                                       |
      |  DATA (Stream ID: 5)                  |
      |-------------------------------------->|
      |                                       |
      |  ERROR                                |
      |<--------------------------------------|
      |    Code: 0x0100 (STREAM_REFUSED)      |
      |    Stream: 5                           |
      |    Reason: "rate limit exceeded"       |
      |                                       |
      |  [Stream 5 closed, connection alive]   |
      |                                       |
```

## 7. Error Metrics

Conforming implementations SHOULD maintain the following counters for observability:

| Metric                        | Type    | Description                                     |
|-------------------------------|---------|-------------------------------------------------|
| `nw_errors_total`             | Counter | Total error frames sent and received             |
| `nw_errors_by_code`           | Counter | Error count grouped by error code                |
| `nw_connection_resets_total`  | Counter | Connections terminated due to fatal errors       |
| `nw_stream_resets_total`      | Counter | Streams terminated due to stream-level errors    |
| `nw_unknown_errors_total`     | Counter | Error frames with unrecognized codes             |
