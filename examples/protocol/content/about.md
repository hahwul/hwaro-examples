+++
title = "About"
+++

# About NexusWire Protocol

NexusWire was developed by the NexusWire Protocol Working Group to address the need for a compact, low-latency binary protocol suitable for service-to-service communication in data center environments.

## Design Principles

1. **Minimal overhead.** The fixed header is 8 bytes. No field is included unless it serves a clear purpose.
2. **Deterministic parsing.** Every frame can be parsed in a single pass with no backtracking. Length-prefixed fields eliminate ambiguity.
3. **Graceful degradation.** Unknown frame types are ignored by conforming implementations, allowing forward compatibility.
4. **Implementability.** A conforming client can be written in under 1,000 lines of code in most systems languages.

## Versioning

The protocol uses a two-component version number (major.minor). The major version changes only when backward-incompatible modifications are introduced. Minor versions add optional features that older implementations may safely ignore.

## Contributing

This specification is maintained as an open document. Contributions, errata reports, and implementation feedback are welcome. Please refer to the project repository for contribution guidelines.

## License

This specification is released under the Creative Commons Attribution 4.0 International License. Reference implementations are available under the MIT License.

---

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro).
