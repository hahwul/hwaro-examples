+++
title = "Protocol Layer"
date = "2026-04-30"
weight = 5
description = "OHMIC's optional protocol layer. CRC-checked framing for UART, simple request/response RPC, and the tradeoffs."
tags = ["reference"]
+++

The protocol layer is optional. If you are writing pure register-level firmware, you do not need it. If you are sending structured data between an MCU and a host (or between two MCUs), the protocol layer gives you a small, well-tested foundation.

## framing

The framer is a COBS-encoded byte stream with a CRC-16/X25 trailer. Frames are delimited by a single `0x00` byte. The complete frame format:

```
[ payload bytes (1–253) ] [ CRC-16 LSB ] [ CRC-16 MSB ] [ 0x00 ]
                          ─ COBS-encoded ─
```

COBS encoding guarantees that no byte inside the encoded frame is `0x00`, which means the frame delimiter is unambiguous. The CRC is computed over the *unencoded* payload, not over the encoded bytes.

## using the framer

```rust
let mut framer = ohmic::proto::Framer::new(uart);

framer.send(b"hello, host").unwrap();

// On the other side:
let mut buf = [0u8; 64];
let n = framer.recv(&mut buf).unwrap();
```

`Framer::recv` is blocking by default. The async variant, `framer.recv_async()`, returns a future that resolves when a complete frame arrives.

## RPC

On top of the framer, OHMIC ships an optional RPC layer for request/response interactions. The RPC is type-checked at compile time using a small derive macro:

```rust
#[ohmic::rpc]
trait BoardStatus {
    fn temperature(&self) -> i16;
    fn battery_percent(&self) -> u8;
    fn led_set(&mut self, state: bool);
}
```

The macro generates request/response enums, serialization code, and a server skeleton. You implement the methods on the MCU side:

```rust
impl BoardStatus for Board {
    fn temperature(&self) -> i16 { self.adc.read_temp_c() }
    fn battery_percent(&self) -> u8 { self.bat.percent() }
    fn led_set(&mut self, state: bool) {
        if state { self.led.set_high(); } else { self.led.set_low(); }
    }
}
```

The host side uses a generated client:

```rust
let mut client = BoardStatusClient::new(uart);
let temp = client.temperature()?;
println!("Board is at {}°C", temp);
```

## what we will not add

OHMIC does not ship a TCP/IP stack. We do not ship a JSON parser. We do not ship a CoAP implementation. We support **bytes in, bytes out**. If you need higher-level protocols, build them on top of the framer or use a crate from the wider ecosystem.

> The framer is intentionally small. The encoded code path is 1.1kb on Cortex-M0 and 480 bytes on Cortex-M4. If those numbers are too large for your budget, you can use the raw UART driver directly and write your own framing — the framer does not have privileged access to the UART that you do not.

## fault behavior

If a CRC mismatch is detected, the framer returns `Err(FrameError::Crc)` and discards the frame. It does *not* attempt to recover the next byte boundary heuristically — it waits for the next `0x00` delimiter. This is intentional. We have seen heuristic resynchronization produce silent data corruption that is much harder to debug than a missing frame.
