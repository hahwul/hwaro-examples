+++
title = "One-Time Pad"
date = "2025-02-18"
description = "Perfect secrecy under strict key discipline"
tags = ["advanced", "stream"]
+++

# One-Time Pad Exercise

The one-time pad is the only encryption scheme proved to be information-theoretically secure. Claude Shannon established this result in 1949. The proof is straightforward, but the operational requirements are severe enough that the scheme is rarely used outside narrow diplomatic and military channels.

## Requirements

A correctly used pad satisfies four conditions. The key material must be truly random, drawn from a uniform distribution over the alphabet or bit space. The key must be at least as long as the message. The key must never be reused, in whole or in part. The key must be destroyed after a single use, on both ends of the channel.

## The Exercise

You are given two ciphertexts encrypted under the same pad. This is a textbook key-reuse failure. XOR the two ciphertexts and the pad cancels, leaving the XOR of the two plaintexts.

```
C1 = 5A 3F 21 0E 4D 8C 19 7B
C2 = 4B 2D 33 1A 50 91 0E 6F
```

## Approach

Compute C1 XOR C2. The result is P1 XOR P2. With assumptions about the plaintext distribution, typically English with spaces, the two messages can be recovered by crib-dragging. Slide a likely word across the XOR and check whether the implied other plaintext is also readable.

The lesson generalizes. A perfect cipher used incorrectly is no better than a weak cipher used correctly. The Venona project recovered substantial Soviet traffic in the 1940s by exploiting exactly this kind of pad reuse, which had been introduced under wartime production pressure.
