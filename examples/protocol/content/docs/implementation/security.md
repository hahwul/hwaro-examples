+++
title = "Security Considerations"
date = 2025-01-11
description = "Security best practices for implementing the protocol."
+++
When implementing the protocol, security must be a primary consideration. All implementations should enforce strict validation on incoming packets. This ensures that malicious actors cannot exploit memory corruption vulnerabilities, such as buffer overflows or out-of-bounds reads, by sending carefully crafted payloads.

## Packet Validation

Every incoming packet must be validated against the maximum allowed length. Malformed packets should be immediately dropped, and the connection should be terminated to prevent potential buffer overflow attacks. Parsers must accurately track the state of fragmented payloads and refuse any packet sequence that attempts to consume excessive memory resources.

## Cryptography

The protocol requires TLS 1.3 for all connections. Implementations must not allow fallback to older versions of TLS or unencrypted connections. Certificate validation must be strictly enforced, including checking for revocation via OCSP stapling or CRLs. Furthermore, the cipher suites should be restricted to strong, forward-secrecy enabled options. Implementers must ensure that key material is safely zeroed from memory when connections are closed and that random number generators are properly seeded from cryptographically secure sources.
