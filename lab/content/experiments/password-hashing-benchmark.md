+++
title = "Password Hashing Performance: Argon2id vs bcrypt vs scrypt"
date = "2025-04-05"
tags = ["security", "cryptography", "benchmarks"]
categories = ["security"]
description = "Measuring hash computation time and memory usage to find optimal parameters for a web authentication service."
experiment_id = "EXP-005"
status = "completed"
+++

## Hypothesis

Argon2id with OWASP-recommended parameters (19 MiB memory, 2 iterations) will provide the best trade-off between brute-force resistance and server-side latency, staying under 500ms on commodity hardware.

## Method

### Test Environment

| Component | Specification |
|-----------|--------------|
| CPU | AMD Ryzen 7 5800X (8 cores) |
| RAM | 32 GB DDR4-3200 |
| OS | Ubuntu 22.04, kernel 5.15 |
| Runtime | Go 1.22 |

### Algorithms and Parameters

| Algorithm | Parameters | Target Time |
|-----------|-----------|:-----------:|
| bcrypt | cost=12 | ~250ms |
| bcrypt | cost=14 | ~1000ms |
| scrypt | N=32768, r=8, p=1 (32 MiB) | ~300ms |
| Argon2id | m=19456, t=2, p=1 (19 MiB) | ~300ms |
| Argon2id | m=47104, t=1, p=1 (46 MiB) | ~400ms |

Each algorithm hashed 1,000 unique passwords. Timing measured via monotonic clock. Memory measured via runtime profiling.

## Results

| Algorithm | Median (ms) | P99 (ms) | Peak Mem (MiB) | Hashes/sec |
|-----------|:---:|:---:|:---:|:---:|
| bcrypt-12 | 234 | 268 | 0.1 | 4.27 |
| bcrypt-14 | 941 | 1,024 | 0.1 | 1.06 |
| scrypt-32M | 312 | 348 | 33.1 | 3.21 |
| Argon2id-19M | 287 | 318 | 19.8 | 3.48 |
| Argon2id-46M | 391 | 432 | 47.2 | 2.56 |

### Observations

- bcrypt-12 is the fastest but provides no memory-hardness, leaving it vulnerable to GPU-based attacks.
- scrypt used the most memory relative to its time cost, with less tunable parameters than Argon2id.
- Argon2id-19M met the latency target comfortably while providing memory-hardness against GPU/ASIC attacks.
- Argon2id-46M is viable for lower-traffic services where 400ms latency is acceptable.

## Conclusion

Argon2id with 19 MiB / 2 iterations is the recommended configuration for the authentication service. It stays well under the 500ms target, provides memory-hardness, and aligns with OWASP guidelines.

bcrypt-12 remains a reasonable fallback for environments where Argon2 is not available, but should be considered a minimum -- not a recommendation.
