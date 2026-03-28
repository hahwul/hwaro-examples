+++
title = "Client Library"
weight = 1
description = "Integration guide for the NexusWire client SDK"
+++

## 1. Overview

The NexusWire client library (`libnwclient`) provides a high-level API for establishing connections, sending and receiving messages, and handling errors. This guide covers installation, basic usage, and configuration for production deployments.

## 2. Installation

### 2.1 Rust (Cargo)

```toml
[dependencies]
nexuswire = "1.2.0"
```

### 2.2 Go

```bash
go get github.com/nexuswire/nw-go@v1.2.0
```

### 2.3 Python

```bash
pip install nexuswire==1.2.0
```

### 2.4 C

```bash
git clone https://github.com/nexuswire/libnwclient.git
cd libnwclient
make && sudo make install
```

## 3. Basic Usage

### 3.1 Connecting to a Server

```rust
use nexuswire::{Client, Config};

fn main() -> Result<(), nexuswire::Error> {
    let config = Config::builder()
        .address("10.0.1.50:9470")
        .client_id("service-alpha-01")
        .max_streams(64)
        .window_size(65536)
        .capabilities(nexuswire::CAP_COMPRESS | nexuswire::CAP_MULTIPLEX)
        .build();

    let mut client = Client::connect(config)?;
    println!("Connected, session: {:08x}", client.session_id());
    Ok(())
}
```

### 3.2 Sending a Message

```rust
let stream = client.open_stream()?;
stream.send(b"REQ:get_status")?;

// Send with FIN flag to indicate end of message
stream.send_final(b"REQ:shutdown")?;
```

### 3.3 Receiving a Message

```rust
let response = stream.recv()?;
println!("Received {} bytes on stream {}", response.len(), stream.id());
```

### 3.4 Error Handling

```rust
use nexuswire::Error;

match client.open_stream() {
    Ok(stream) => { /* use stream */ }
    Err(Error::StreamRefused(reason)) => {
        eprintln!("Stream refused: {}", reason);
    }
    Err(Error::ConnectionLost) => {
        eprintln!("Connection lost, attempting reconnect...");
        client.reconnect()?;
    }
    Err(e) => return Err(e),
}
```

## 4. Configuration Reference

| Parameter            | Type     | Default  | Description                                   |
|----------------------|----------|----------|-----------------------------------------------|
| `address`            | String   | Required | Server address in `host:port` format          |
| `client_id`          | String   | Random   | Identifier sent during HELLO                  |
| `max_streams`        | u16      | 128      | Maximum concurrent streams                    |
| `window_size`        | u32      | 65536    | Initial flow control window (bytes)           |
| `capabilities`       | u16      | 0x0007   | Capability bitmask                            |
| `connect_timeout`    | Duration | 10s      | TCP connection timeout                        |
| `handshake_timeout`  | Duration | 10s      | NW handshake timeout                          |
| `idle_timeout`       | Duration | 300s     | Inactivity before disconnect                  |
| `keepalive_interval` | Duration | 30s      | PING interval                                 |
| `retry_attempts`     | u32      | 3        | Reconnection attempts on failure              |
| `retry_backoff`      | Duration | 1s       | Initial backoff between retries               |
| `tls_enabled`        | bool     | false    | Enable TLS for the underlying TCP connection  |
| `tls_ca_cert`        | Path     | None     | CA certificate for server verification        |

## 5. Connection Lifecycle

The client library manages the full connection lifecycle automatically:

```
    Application                  libnwclient                  Server
        |                            |                           |
        |  Client::connect()         |                           |
        |--------------------------->|                           |
        |                            |  TCP connect              |
        |                            |-------------------------->|
        |                            |  HELLO                    |
        |                            |-------------------------->|
        |                            |  WELCOME                  |
        |                            |<--------------------------|
        |                            |  ACK                      |
        |                            |-------------------------->|
        |  Ok(client)                |                           |
        |<---------------------------|                           |
        |                            |                           |
        |  client.open_stream()      |                           |
        |--------------------------->|  DATA (Stream 1)          |
        |                            |-------------------------->|
        |                            |  DATA (Stream 1)          |
        |                            |<--------------------------|
        |  stream.recv()             |                           |
        |<---------------------------|                           |
        |                            |                           |
        |  client.close()            |                           |
        |--------------------------->|  GOAWAY                   |
        |                            |-------------------------->|
        |                            |  GOAWAY                   |
        |                            |<--------------------------|
        |                            |  TCP FIN                  |
        |                            |<------------------------->|
        |  Ok(())                    |                           |
        |<---------------------------|                           |
```

## 6. Flow Control

The client library handles flow control automatically using a sliding window mechanism. When the receive buffer fills, the library stops reading from the TCP socket, which applies TCP-level backpressure to the sender.

Applications can tune flow control behavior with the `window_size` parameter. Larger windows improve throughput on high-latency links but consume more memory. A reasonable starting point is:

```
window_size = bandwidth_bytes_per_sec * round_trip_seconds * 2
```

For a 1 Gbps link with 1 ms RTT:

```
window_size = 125000000 * 0.001 * 2 = 250000 bytes
```

## 7. Reconnection Strategy

When a connection is lost, the library implements exponential backoff with jitter:

```
delay = min(retry_backoff * 2^attempt + random(0, 1000ms), 30s)
```

If `CAP_RESUME` was negotiated, the library attempts to resume the existing session rather than performing a full handshake. Resumption preserves stream state and avoids retransmitting data that was already acknowledged.

## 8. Thread Safety

The `Client` struct is safe to share across threads. Internally, it uses a lock-free message queue for outbound frames and a dedicated I/O thread for reading and writing the TCP socket. Stream objects are also thread-safe and may be used concurrently from multiple goroutines or tasks.
