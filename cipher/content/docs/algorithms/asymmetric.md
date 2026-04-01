+++
title = "Asymmetric Ciphers"
weight = 2
tags = ["algorithms", "asymmetric", "encryption", "signatures"]
+++

# Asymmetric Ciphers

Asymmetric (public-key) cryptography uses a pair of keys: a public key for encryption or verification, and a private key for decryption or signing. It solves the key distribution problem but is significantly slower than symmetric encryption.

## Algorithm Comparison

| Algorithm | Key Size (bits) | Use Case | Security Level | Performance |
|-----------|----------------|----------|---------------|-------------|
| RSA-2048 | 2048 | Encryption, Signatures | Strong | Slow |
| RSA-4096 | 4096 | Encryption, Signatures | Very Strong | Very Slow |
| Ed25519 | 256 | Signatures only | Very Strong | Fast |
| X25519 | 256 | Key Exchange | Very Strong | Fast |
| ECDSA P-256 | 256 | Signatures | Strong | Moderate |
| ECDH P-256 | 256 | Key Exchange | Strong | Moderate |

## Ed25519 Digital Signatures

Ed25519 is the recommended signature algorithm. It provides fast signing and verification with small key and signature sizes.

```python
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey

# Generate key pair
private_key = Ed25519PrivateKey.generate()
public_key = private_key.public_key()

# Sign a message
message = b"authenticate this payload"
signature = private_key.sign(message)

# Verify the signature (raises InvalidSignature on failure)
public_key.verify(signature, message)
```

## RSA Encryption

RSA is still used in legacy systems and some certificate operations. Always use OAEP padding for encryption.

```python
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes

# Generate RSA key pair
private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=4096,
)
public_key = private_key.public_key()

# Encrypt with OAEP padding
plaintext = b"secret key material"
ciphertext = public_key.encrypt(
    plaintext,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None,
    ),
)

# Decrypt
decrypted = private_key.decrypt(
    ciphertext,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None,
    ),
)
```

## Recommendations

- Use **Ed25519** for digital signatures in new systems
- Use **X25519** for key exchange (see [Key Exchange](../../protocols/key-exchange/))
- Use RSA only when interoperability with legacy systems requires it
- Minimum RSA key size: 2048 bits; prefer 4096 for long-term keys
- Never use PKCS#1 v1.5 padding for new encryption implementations
