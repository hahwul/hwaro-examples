+++
title = "Observation 0042 — A Quiet Replay Against Noise_XX"
date = "2026-05-20"
description = "A quiet replay attack against an early-binding Noise_XX implementation. Why nonces are not enough when the responder ignores them."
tags = ["noise", "protocol", "replay", "observation"]
[extra]
operator = "dial"
hash = "0x47A1 ⌬ 9D03"
+++

A small library that shipped a Noise_XX handshake in late 2024 has been observed accepting replayed first-flight messages from the initiator under a specific set of conditions. The library's authors have been notified through responsible disclosure; the issue is now public and the patch is available upstream. This observation is published only after the disclosure window has closed.

## context

[Noise_XX](https://noiseprotocol.org/noise.html#interactive-handshake-patterns-fundamental) is one of the most widely-deployed handshake patterns in the Noise framework. It provides mutual authentication, forward secrecy, and identity hiding for the initiator. It is used in WireGuard, in Signal's protocol family, in several IoT vendors' OEM stacks, and in the library we will examine in this observation.

The handshake comprises three messages:

```
-> e
<- e, ee, s, es
-> s, se
```

After the third message, both parties share a session key derived from the four ephemeral and static keys.

## the observation

In the affected library, the responder does not track which initiator ephemeral keys it has already seen. A second receipt of an initiator's first message (`-> e`) is treated as a fresh handshake attempt. The library generates a new responder ephemeral and proceeds.

This is not strictly a flaw in the Noise specification — the spec does not require the responder to track initiator ephemerals. The responder is permitted to be stateless until it has chosen its own ephemeral, and the library is technically conformant.

The problem appears one layer up. In the *application protocol* that uses this Noise instance, the responder's identity is a long-term static key. A network adversary who has captured a previous `(initiator → responder)` first message can replay it to the responder at any later time. The responder will accept the message, generate a new ephemeral, and proceed with the handshake — **even though the initiator did not intend to begin a new session.**

> The replay does not, on its own, break confidentiality. The initiator's session key is still safe — the adversary does not have the corresponding initiator secret. The replay produces *resource exhaustion* on the responder side: forced ephemeral generation, forced key derivation, and forced session bookkeeping.

## what is novel

Replay attacks against handshake protocols are not novel; they are textbook. What is novel about this particular failure is how *quiet* the replay is. There is no protocol-level alarm. The responder generates a new ephemeral, performs the key derivation, and waits patiently for a third message that will never arrive. No frame is dropped. No state machine throws an exception. The session lives until a soft timeout fires — typically 60 to 120 seconds, depending on the deployment.

An adversary can replay one captured first-flight message every few seconds across many sources, and the responder will keep generating ephemeral keys indefinitely. The result is a slow, cheap exhaustion of the responder's entropy pool and key-derivation throughput.

## measurement

We reproduced the behavior on a reference deployment using the affected library at version 0.6.4. The test machine was an Intel Core i7-12700K with 32GB of RAM. The responder was configured with default settings and a 90-second handshake timeout.

| Metric | Idle | Under attack (10 replays/s) | Under attack (100 replays/s) |
|---|---|---|---|
| CPU usage | 0.2% | 4.1% | 38.9% |
| Memory (handshake state) | 12kb | 920kb | 9.1mb |
| Entropy pool age | 0s | 28s | 4.2s |
| Successful real handshakes | 100% | 99.8% | 92.1% |

At 100 replays per second, the responder is still mostly functional — but the entropy pool is being drained four times as quickly as the kernel can refill it on this hardware, and 7.9% of legitimate handshake attempts are being delayed past the application's tolerance.

## why we report this now

The fix landed in upstream in 2025-09. The patched version (0.6.7 and later) tracks initiator ephemerals for a configurable window — typically 60 seconds — and refuses to start a new handshake if it has already seen the ephemeral. We waited until the responsible-disclosure window closed and the patched version had achieved meaningful deployment before publishing this observation.

If you are running any version of this library prior to 0.6.7 in production, update. The patch is backward-compatible and the behavior change is exposed only when an adversary tries to abuse it.

## what to take from this

There are three takeaways for protocol implementers:

1. **A specification's lower bound on responder state is not a license to keep less state.** Noise allows the responder to be stateless until the second message. Real responders should not be.
2. **A quiet attack is the dangerous attack.** A loud attack — frames dropped, exceptions thrown — at least tells you it is happening. A quiet attack waits in your logs.
3. **Measure your entropy pool under load.** If your protocol forces key derivations on a low-cost path for the adversary, your entropy pool is part of the attack surface. Don't assume `/dev/urandom` is infinite; it isn't.

— *@dial, 0x47A1 ⌬ 9D03*

*Signed: 2026-05-20T03:14Z · SHA-256 hash recorded in the integrity log.*
