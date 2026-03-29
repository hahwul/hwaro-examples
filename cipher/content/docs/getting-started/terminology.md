+++
title = "Terminology"
weight = 2
tags = ["getting-started", "terminology"]
+++

# Terminology

A glossary of terms used throughout this documentation. Familiarize yourself with these before diving into specific algorithms and protocols.

## Core Terms

| Term | Definition |
|------|-----------|
| Plaintext | The original, unencrypted data |
| Ciphertext | The encrypted output produced by a cipher |
| Key | A secret value used to parameterize a cryptographic algorithm |
| Nonce | A number used once; prevents replay attacks and ensures unique ciphertexts |
| IV | Initialization Vector; similar to a nonce, used to randomize encryption |
| Salt | Random data added to input before hashing, typically for password storage |
| Digest | The fixed-size output of a hash function |
| MAC | Message Authentication Code; verifies integrity and authenticity |
| AEAD | Authenticated Encryption with Associated Data |
| KDF | Key Derivation Function; derives keys from passwords or other key material |
| PKI | Public Key Infrastructure; manages digital certificates and public keys |
| HSM | Hardware Security Module; tamper-resistant device for key storage |
| CSPRNG | Cryptographically Secure Pseudo-Random Number Generator |
| PRF | Pseudo-Random Function; indistinguishable from random to an adversary |

## Key Management Terms

| Term | Definition |
|------|-----------|
| Key Pair | A public key and its corresponding private key |
| Key Rotation | The practice of periodically replacing cryptographic keys |
| Key Escrow | Storing a copy of a key with a trusted third party |
| Key Wrapping | Encrypting a key with another key for secure transport |
| Forward Secrecy | Compromise of long-term keys does not compromise past session keys |
| Ephemeral Key | A temporary key used for a single session or operation |

## Attack Terminology

| Term | Definition |
|------|-----------|
| Brute Force | Trying every possible key until the correct one is found |
| Side Channel | Extracting secrets through timing, power consumption, or electromagnetic emissions |
| MITM | Man-in-the-Middle; intercepting and potentially altering communication |
| Chosen Plaintext | Attacker can encrypt arbitrary plaintexts and observe the ciphertexts |
| Oracle Attack | Exploiting an encryption or decryption oracle to recover secrets |
| Collision | Two distinct inputs that produce the same hash output |

Refer back to this page as needed while reading the [Algorithms]({{ base_url }}/docs/algorithms/) and [Protocols]({{ base_url }}/docs/protocols/) sections.
