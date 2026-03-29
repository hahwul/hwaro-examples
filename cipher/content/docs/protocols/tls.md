+++
title = "TLS"
weight = 2
tags = ["protocols", "tls", "transport-security"]
+++

# Transport Layer Security (TLS)

TLS provides encrypted, authenticated communication between two parties over a network. TLS 1.3 (RFC 8446) is the current version and should be used exclusively in new deployments.

## TLS 1.3 Handshake

The TLS 1.3 handshake completes in a single round trip (1-RTT), compared to two round trips in TLS 1.2:

```
    Client                                    Server
      |                                         |
      |  ClientHello                            |
      |    + supported_versions (TLS 1.3)       |
      |    + key_share (X25519)                 |
      |    + signature_algorithms               |
      |    + supported_groups                   |
      |  ---------------------------------->    |
      |                                         |
      |                          ServerHello    |
      |                + key_share (X25519)     |
      |          EncryptedExtensions            |
      |          Certificate                    |
      |          CertificateVerify              |
      |          Finished                       |
      |  <----------------------------------    |
      |                                         |
      |  [All subsequent data is encrypted]     |
      |                                         |
      |  Finished                               |
      |  ---------------------------------->    |
      |                                         |
      |  <== Application Data (encrypted) ==>  |
      |                                         |
```

## Handshake Steps

1. **ClientHello** -- The client sends supported cipher suites, key shares, and extensions. In TLS 1.3, the client optimistically includes key material in the first message.

2. **ServerHello** -- The server selects the cipher suite and responds with its key share. From this point, handshake messages are encrypted.

3. **EncryptedExtensions** -- Additional server parameters, now encrypted.

4. **Certificate** -- The server sends its certificate chain for authentication.

5. **CertificateVerify** -- The server proves possession of the private key by signing the handshake transcript.

6. **Finished** -- Both sides send a MAC over the entire handshake to confirm integrity and key agreement.

## TLS 1.3 Cipher Suites

TLS 1.3 reduced the cipher suite list to five secure options:

| Cipher Suite | Key Exchange | Encryption | Hash |
|-------------|-------------|------------|------|
| TLS_AES_256_GCM_SHA384 | ECDHE | AES-256-GCM | SHA-384 |
| TLS_AES_128_GCM_SHA256 | ECDHE | AES-128-GCM | SHA-256 |
| TLS_CHACHA20_POLY1305_SHA256 | ECDHE | ChaCha20-Poly1305 | SHA-256 |
| TLS_AES_128_CCM_SHA256 | ECDHE | AES-128-CCM | SHA-256 |
| TLS_AES_128_CCM_8_SHA256 | ECDHE | AES-128-CCM-8 | SHA-256 |

## Removed in TLS 1.3

The following features from TLS 1.2 were removed for security:

- Static RSA key exchange (no forward secrecy)
- CBC mode ciphers (padding oracle vulnerabilities)
- RC4 stream cipher (broken)
- SHA-1 in signature algorithms
- Renegotiation
- Compression (CRIME attack)

## Configuration Recommendations

For server deployments:

- Enable only TLS 1.3 (disable TLS 1.2 if possible)
- Prefer `TLS_AES_256_GCM_SHA384` and `TLS_CHACHA20_POLY1305_SHA256`
- Use ECDSA certificates with P-256 or Ed25519 keys
- Enable OCSP stapling for certificate revocation checking
- Set HSTS headers with a minimum max-age of one year
- Implement certificate transparency logging

## Verifying TLS Configuration

```
# Check supported protocols and ciphers
openssl s_client -connect example.com:443 -tls1_3

# Test with nmap
nmap --script ssl-enum-ciphers -p 443 example.com

# Online scanner
# Use ssllabs.com/ssltest for comprehensive analysis
```

Refer to the [Key Exchange]({{ base_url }}/docs/protocols/key-exchange/) page for details on the ECDHE mechanism used in TLS 1.3.
