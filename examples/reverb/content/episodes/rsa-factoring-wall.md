+++
title = "RSA and the Factoring Wall"
date = "2025-11-18"
description = "Two large primes, one public product, and a bet that multiplying stays easy while un-multiplying stays hard. We walk through Rivest, Shamir, and Adleman's 1977 answer to public-key cryptography."
tags = ["public-key", "modern", "number-theory"]

[extra]
block = "0x05"
duration = "47 min"
guest = "Dr. Naomi Kessler, applied cryptographer"
cipher = "RSA, modular exponentiation over a composite modulus"
preview = "Two large primes, one product, and sixty years of hoping factoring stays hard. We walk through why RSA still guards half the internet."
preview_rot13 = "Gjb ynetr cevzrf, bar cebqhpg, naq fvkgl lrnef bs ubcvat snpgbevat fgnlf uneq. Jr jnyx guebhtu jul EFN fgvyy thneqf unys gur vagrearg."
+++

Every cipher in the first four blocks shared one hard requirement: both sides needed the same secret key before they could talk, and getting that key from one party to the other securely was its own unsolved problem. RSA, published in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman, broke that requirement entirely. It gave you a *public* key that anyone can encrypt with, and a *private* key — related to the public one by a hard problem — that only you can decrypt with.

<!-- more -->

## Multiplying is cheap, factoring is not

The hard problem is embarrassingly easy to state: pick two large prime numbers, multiply them together, and publish the product. Reconstructing the two original primes from that product — factoring it — is believed to take exponentially longer than the multiplication did, for primes large enough. There's no proof this asymmetry is fundamental; it's an empirical bet backed by decades of failed attempts to factor large semiprimes efficiently.

```python
from math import gcd

def totient(p: int, q: int) -> int:
    return (p - 1) * (q - 1)

def keypair(p: int, q: int, e: int = 65537):
    n = p * q
    phi = totient(p, q)
    d = pow(e, -1, phi)  # modular inverse of e mod phi(n)
    return (e, n), (d, n)  # (public key, private key)
```

The modulus `n` is public. Factoring it back into `p` and `q` — the only currently known way to recover the private exponent `d` without already knowing it — is what the world's key-size recommendations are built around.

## The wall keeps moving

We spend the second half on the arms race between key size and factoring records: 512-bit RSA fell in 1999, 768-bit in 2009 after roughly two years of distributed computation, and 1024-bit is now considered too close to feasible for new deployments. Current guidance sits at 2048 bits minimum, with 3072 or 4096 recommended for anything meant to stay confidential past 2030 — a number that has nothing to do with elegance and everything to do with the General Number Field Sieve's measured cost curve.

## Cited in this episode

- Rivest, Shamir, Adleman, *A Method for Obtaining Digital Signatures and Public-Key Cryptosystems* (1977)
- The RSA-768 factorization writeup (Kleinjung et al., 2010)
- NIST SP 800-57, key length recommendations by decade

Which sets up the one question every guest this season keeps circling back to: what happens to that factoring wall once a quantum computer shows up. That's [block 0x06](/episodes/lattices-after-shor/).
