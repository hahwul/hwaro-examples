+++
title = "Home"
+++

# NexusWire Protocol

NexusWire is a binary application-layer protocol designed for low-latency, reliable message exchange between distributed services. This documentation covers the complete wire format specification, handshake procedures, error handling, and implementation guidance.

## Protocol Overview

NexusWire operates over TCP and provides structured framing, multiplexed streams, and built-in flow control. The protocol is designed to be compact on the wire while remaining straightforward to implement.

- Current version: **NW/1.2**
- Transport: TCP (port 9470 by default)
- Byte order: Network byte order (big-endian)
- Maximum frame size: 16,777,215 bytes (2^24 - 1)

## Documentation

- [Specification](docs/specification/) -- Wire format, handshake, and error codes
- [Implementation](docs/implementation/) -- Client library and server setup guides
- [About](about/) -- Project background and contributors
