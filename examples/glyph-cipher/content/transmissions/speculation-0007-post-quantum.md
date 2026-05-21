+++
title = "Speculation 0007 — How Will Post-quantum Migration Actually Fail?"
date = "2026-04-28"
description = "A speculative note on the failure modes we should expect when production systems migrate to ML-KEM. None of the speculative failures are about the mathematics."
tags = ["post-quantum", "speculation", "kem", "migration"]
[extra]
operator = "kestral"
hash = "0xBEEF ⌬ 1107"
+++

The post-quantum migration is now well underway. ML-KEM (formerly known as Kyber) is published and deployed. ML-DSA (formerly known as Dilithium) is published and shipping. The major standards bodies have published their guidance and the major libraries have published their implementations.

This is a speculative note about how the migration will actually fail in production. None of the speculative failures are about the underlying mathematics. The mathematics has been hardened by hundreds of cryptographers over a decade of public review. The mathematics will not fail.

The migration will fail in engineering. Here is how I expect it to fail.

## failure #1 — hybrid mode silently downgrades

Most production deployments are using a *hybrid* construction: a classical key-exchange (X25519, ECDH) combined with a post-quantum KEM (ML-KEM). The hybrid is meant to remain secure as long as *either* component remains secure.

The first failure I expect is a configuration drift that silently disables the post-quantum side. A deployment notes that a particular hardware accelerator does not support ML-KEM. A platform team adds a feature flag to disable the post-quantum side "temporarily." The flag is forgotten. A year later, the deployment is running pure X25519 against a key-exchange that has been quietly assumed to be post-quantum-secure.

This will not be caught by any standard penetration test. The handshake still completes. The session is still encrypted. The downgrade is invisible from the outside.

> The detection mechanism — and we should build it now — is a regular automated test that asserts the post-quantum component is active. The test should fail loudly if the deployment is operating in classical-only mode.

## failure #2 — ML-KEM ciphertexts overflow buffers

The cleartext of an ML-KEM-768 ciphertext is 1088 bytes. The classical X25519 ciphertext it is replacing is 32 bytes. The new ciphertext is therefore *34 times larger* than the old one.

A large fraction of production cryptographic code assumes ciphertexts fit in a 256-byte buffer. The assumption is often hard-coded. The assumption is often deep in a parser that has been working correctly for ten years. When the assumption breaks, the parser either truncates the ciphertext (silent corruption) or reads past the end of the input buffer (potential vulnerability).

I expect a small number of high-profile incidents in 2026-2027 caused by this. The fix is mechanical: audit your protocol's buffer sizes against the new ciphertext sizes. The cost of not doing the audit is potentially significant.

## failure #3 — entropy budgets are wrong

ML-KEM consumes more entropy per handshake than X25519. The increase is not catastrophic — about 4x — but it is real, and most entropy budget calculations were done in the X25519 era.

On a low-power device with a slow hardware RNG, the additional entropy consumption can push the device into a state where it cannot produce enough random bytes for the handshake within its application timeout. The handshake fails. The device retries. The retry fails for the same reason.

I expect this to manifest in cellular IoT deployments first — battery-powered sensor devices with weak hardware RNGs that complete handshakes in single-digit milliseconds and have no headroom for the 4x increase. The fix is to upgrade the hardware RNG, which is often not possible without a board re-spin.

## failure #4 — implementations don't agree on which standard

NIST's final ML-KEM specification is not byte-compatible with the earlier Kyber drafts. A library that shipped support for draft-3 in 2022 is not interoperable with a library that shipped support for the final standard in 2024. Several libraries shipped support for multiple drafts and the configuration is exposed to the user.

I expect a long tail of interoperability failures throughout 2026 caused by drift between draft versions. The fix is to deprecate the draft versions and force-migrate to the final standard. Some libraries have already done this; others have not.

## what is not a failure

I want to be clear about what I am *not* speculating will fail. The underlying mathematics of ML-KEM is solid. The lattice-based assumptions have survived a decade of public cryptanalysis. The standardization process was rigorous. The reference implementations have been audited.

The failures I expect are engineering failures: configuration drift, buffer overflows, entropy budgets, and version skew. These are the same kinds of failures we have seen in every previous migration. They are not specific to post-quantum cryptography. They are specific to *migration*.

The takeaway is mundane: do the engineering work. Audit the buffers. Test the hybrid mode. Measure the entropy. Force-migrate to the final standard. The post-quantum migration will succeed mathematically. It is up to us, the operators, to make it succeed in practice.

— *@kestral, 0xBEEF ⌬ 1107*

*Signed: 2026-04-28T19:30Z · This is a speculative transmission; the predictions herein are explicitly labeled as opinion, not measurement.*
