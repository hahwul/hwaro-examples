+++
title = "Welcome"
tags = ["cryptography", "security"]
+++

# Cipher

A reference guide for cryptographic algorithms, security protocols, and best practices in applied cryptography.

## Scope

This documentation covers the fundamentals of modern cryptography as used in production systems. Topics include symmetric and asymmetric encryption, cryptographic hash functions, key exchange protocols, and transport layer security.

## Sections

- **Getting Started** -- Core concepts, threat models, and terminology
- **Algorithms** -- Symmetric ciphers, asymmetric ciphers, and hash functions
- **Protocols** -- Key exchange mechanisms and TLS handshake internals

## Principles

All recommendations in this guide follow these principles:

1. Prefer well-studied, standardized algorithms over novel constructions
2. Use authenticated encryption modes (AEAD) by default
3. Never roll your own cryptography in production
4. Key management is harder than algorithm selection
5. Defense in depth applies to cryptographic systems too

Begin with the [Getting Started](docs/getting-started/) section, or jump directly to a specific topic using the sidebar.
