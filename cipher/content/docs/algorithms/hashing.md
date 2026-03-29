+++
title = "Hashing"
weight = 3
tags = ["algorithms", "hashing"]
+++

# Hash Functions

A cryptographic hash function takes arbitrary input and produces a fixed-size digest. It must be deterministic, fast to compute, and infeasible to reverse. Good hash functions exhibit the avalanche effect: a single bit change in input produces a completely different output.

## Algorithm Comparison

| Algorithm | Output Size (bits) | Speed | Security Status | Use Case |
|-----------|--------------------|-------|----------------|----------|
| SHA-256 | 256 | Moderate | Secure | General purpose |
| SHA-384 | 384 | Moderate | Secure | High-security contexts |
| SHA-512 | 512 | Moderate | Secure | Large data, 64-bit systems |
| SHA-3-256 | 256 | Moderate | Secure | Alternative to SHA-2 |
| BLAKE2b | 256-512 | Fast | Secure | Performance-sensitive |
| BLAKE3 | 256 | Very Fast | Secure | High throughput |
| MD5 | 128 | Fast | Broken | Legacy only |
| SHA-1 | 160 | Fast | Broken | Legacy only |

> MD5 and SHA-1 have known collision attacks. Do not use them for security-sensitive applications. They are acceptable only for non-cryptographic checksums.

## SHA-256 Example

```python
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.backends import default_backend

digest = hashes.Hash(hashes.SHA256(), backend=default_backend())
digest.update(b"input data to hash")
digest.update(b" additional data")
result = digest.finalize()

print(result.hex())
# e.g. "a1b2c3d4..."
```

## HMAC (Hash-based Message Authentication Code)

HMAC combines a hash function with a secret key to provide message authentication:

```python
from cryptography.hazmat.primitives import hmac, hashes

h = hmac.HMAC(key=b"shared-secret-key-32bytes-long!!", algorithm=hashes.SHA256())
h.update(b"message to authenticate")
tag = h.finalize()

# Verification side
h2 = hmac.HMAC(key=b"shared-secret-key-32bytes-long!!", algorithm=hashes.SHA256())
h2.update(b"message to authenticate")
h2.verify(tag)  # Raises InvalidSignature if tag does not match
```

## Password Hashing

Standard hash functions are too fast for password storage. Use dedicated password hashing functions with configurable work factors:

| Function | Type | Recommended |
|----------|------|-------------|
| Argon2id | Memory-hard | Yes (preferred) |
| bcrypt | CPU-hard | Yes |
| scrypt | Memory-hard | Yes |
| PBKDF2 | Iterative | Acceptable |
| MD5/SHA-* | Fast hash | Never for passwords |

Always use a unique random salt per password. Never store passwords with plain SHA-256 or similar fast hash functions.

## Choosing a Hash Function

- **Data integrity**: SHA-256 or BLAKE3
- **Digital signatures**: SHA-256 (paired with Ed25519 or RSA)
- **Password storage**: Argon2id
- **HMAC construction**: HMAC-SHA256
- **High throughput**: BLAKE3
