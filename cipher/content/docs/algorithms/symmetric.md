+++
title = "Symmetric Ciphers"
weight = 1
tags = ["algorithms", "symmetric", "encryption"]
+++

# Symmetric Ciphers

Symmetric encryption uses the same key for both encryption and decryption. It is fast, efficient, and suitable for bulk data encryption. The primary challenge is secure key distribution.

## Algorithm Comparison

| Algorithm | Key Size (bits) | Block Size (bits) | Mode | Security Level |
|-----------|----------------|-------------------|------|---------------|
| AES-128 | 128 | 128 | GCM, CTR, CBC | Strong |
| AES-256 | 256 | 128 | GCM, CTR, CBC | Very Strong |
| ChaCha20 | 256 | Stream | Poly1305 | Very Strong |
| 3DES | 168 | 64 | CBC | Deprecated |
| Blowfish | 32-448 | 64 | CBC | Legacy |
| RC4 | 40-2048 | Stream | N/A | Broken |

> Always use authenticated encryption (AEAD) modes like GCM or Poly1305. Using unauthenticated modes like ECB or plain CBC is a common source of vulnerabilities.

## AES-256-GCM Example

```python
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

# Generate a random 256-bit key
key = AESGCM.generate_key(bit_length=256)
aesgcm = AESGCM(key)

# Encrypt
nonce = os.urandom(12)  # 96-bit nonce for GCM
plaintext = b"classified transmission content"
aad = b"header-metadata"  # Additional authenticated data
ciphertext = aesgcm.encrypt(nonce, plaintext, aad)

# Decrypt
decrypted = aesgcm.decrypt(nonce, ciphertext, aad)
assert decrypted == plaintext
```

## ChaCha20-Poly1305 Example

```python
from cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305
import os

key = ChaCha20Poly1305.generate_key()
chacha = ChaCha20Poly1305(key)

nonce = os.urandom(12)
plaintext = b"secure payload data"
ciphertext = chacha.encrypt(nonce, plaintext, None)
decrypted = chacha.decrypt(nonce, ciphertext, None)
```

## When to Use Which

- **AES-256-GCM** -- Default choice when hardware AES-NI is available (most x86 processors)
- **ChaCha20-Poly1305** -- Preferred on platforms without AES hardware acceleration (mobile, embedded)
- **AES-CBC with HMAC** -- Only when GCM is unavailable; requires careful implementation

Never use ECB mode, 3DES, RC4, or Blowfish in new systems.
