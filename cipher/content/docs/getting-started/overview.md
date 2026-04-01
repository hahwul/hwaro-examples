+++
title = "Overview"
weight = 1
tags = ["getting-started", "overview"]
+++

# Cryptography Overview

Cryptography is the practice of securing communication and data against adversarial access. Modern cryptography relies on mathematical hardness assumptions rather than secrecy of the algorithm itself (Kerckhoffs's principle).

## The Three Pillars

Every cryptographic system addresses one or more of these properties:

- **Confidentiality** -- Only authorized parties can read the data
- **Integrity** -- Data has not been altered in transit or at rest
- **Authentication** -- The identity of the communicating party is verified

## Threat Model

Before selecting any algorithm or protocol, define your threat model:

1. What assets are you protecting?
2. Who are the adversaries?
3. What capabilities do they have (passive eavesdropping, active manipulation, physical access)?
4. What is the cost of failure?

## Algorithm Categories

| Category | Purpose | Examples |
|----------|---------|----------|
| Symmetric Ciphers | Encrypt data with a shared key | AES, ChaCha20 |
| Asymmetric Ciphers | Encrypt or sign with key pairs | RSA, Ed25519 |
| Hash Functions | One-way data fingerprinting | SHA-256, BLAKE3 |
| Key Exchange | Establish shared secrets over insecure channels | ECDH, X25519 |
| MACs | Verify message integrity and authenticity | HMAC-SHA256, Poly1305 |

## Recommended Defaults

For most applications, the following choices provide strong security with good performance:

```
Encryption:     AES-256-GCM or ChaCha20-Poly1305
Hashing:        SHA-256 or BLAKE3
Signatures:     Ed25519
Key Exchange:   X25519
Key Derivation: HKDF or Argon2id (for passwords)
```

These defaults are suitable for the vast majority of use cases. Deviate only when specific constraints require it, and document the rationale.

## Next Steps

Review the [Terminology](../terminology/) page for definitions of key terms used throughout this documentation.
