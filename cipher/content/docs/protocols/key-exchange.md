+++
title = "Key Exchange"
weight = 1
tags = ["protocols", "key-exchange", "diffie-hellman"]
+++

# Key Exchange Protocols

Key exchange protocols allow two parties to establish a shared secret over an insecure channel. The shared secret is then used to derive symmetric encryption keys for the session.

## Diffie-Hellman Key Exchange Flow

The following diagram shows the basic Diffie-Hellman exchange:

```
    Alice                                    Bob
      |                                       |
      |  1. Generate private key (a)          |
      |     Compute A = g^a mod p             |
      |                                       |
      |  2. Generate private key (b)          |
      |     Compute B = g^b mod p             |
      |                                       |
      |          --- Send A --->              |
      |          <--- Send B ---              |
      |                                       |
      |  3. Compute shared secret:            |
      |     s = B^a mod p                     |
      |                                       |
      |  3. Compute shared secret:            |
      |     s = A^b mod p                     |
      |                                       |
      |  Both arrive at: s = g^(ab) mod p     |
      |                                       |
```

An eavesdropper who sees A and B cannot compute the shared secret without solving the discrete logarithm problem.

## Ephemeral Diffie-Hellman (DHE/ECDHE)

In practice, static DH is rarely used. Ephemeral variants generate fresh key pairs for each session, providing **forward secrecy**: compromise of long-term keys does not reveal past session keys.

```
    Client                                  Server
      |                                       |
      |  Generate ephemeral key pair          |
      |  (ec_priv, ec_pub)                    |
      |                                       |
      |       --- ec_pub_client --->          |
      |                                       |
      |         Generate ephemeral key pair   |
      |         (es_priv, es_pub)             |
      |                                       |
      |       <--- ec_pub_server ---          |
      |            + signature(long_term_key) |
      |                                       |
      |  shared = ECDH(ec_priv, es_pub)       |
      |  session_key = KDF(shared)            |
      |                                       |
```

## X25519 Key Exchange Example

```python
from cryptography.hazmat.primitives.asymmetric.x25519 import X25519PrivateKey
from cryptography.hazmat.primitives.kdf.hkdf import HKDF
from cryptography.hazmat.primitives import hashes

# Alice generates her key pair
alice_private = X25519PrivateKey.generate()
alice_public = alice_private.public_key()

# Bob generates his key pair
bob_private = X25519PrivateKey.generate()
bob_public = bob_private.public_key()

# Both compute the shared secret
alice_shared = alice_private.exchange(bob_public)
bob_shared = bob_private.exchange(alice_public)

assert alice_shared == bob_shared

# Derive a symmetric key from the shared secret
derived_key = HKDF(
    algorithm=hashes.SHA256(),
    length=32,
    salt=None,
    info=b"session-key-v1",
).derive(alice_shared)
```

## Comparison

| Protocol | Curve/Group | Key Size | Forward Secrecy | Status |
|----------|------------|----------|----------------|--------|
| X25519 | Curve25519 | 256-bit | Yes (ephemeral) | Recommended |
| ECDH P-256 | NIST P-256 | 256-bit | Yes (ephemeral) | Acceptable |
| DH (FFDHE) | RFC 7919 | 2048+ bit | Yes (ephemeral) | Acceptable |
| Static RSA | N/A | 2048+ bit | No | Deprecated |

Always use ephemeral key exchange. Static RSA key transport does not provide forward secrecy and is removed in TLS 1.3.
