+++
title = "Observation 0040 — A Truncation Bug in TLS 1.3 Record Handling"
date = "2026-04-21"
description = "A TLS 1.3 implementation in a widely-deployed embedded library was accepting truncated records under a specific edge case. The bug allowed denial-of-service against the connection, not key compromise."
tags = ["tls", "observation", "truncation"]
[extra]
operator = "dial"
hash = "0x47A1 ⌬ 9D03"
+++

Between January and March 2026, a member of this channel discovered, reported, and validated the fix for a TLS 1.3 record-truncation bug in a widely-deployed embedded TLS implementation. The bug allowed an active network attacker to truncate the application data stream without the legitimate parties detecting the truncation in time. It did not allow key compromise. It did allow targeted denial-of-service.

This observation is published after the patch has been deployed for 30 days.

## what TLS 1.3 promises

TLS 1.3 protects against truncation of the application data stream through a `close_notify` alert. When a clean connection close occurs, both parties send a `close_notify`. If an active attacker truncates the stream — drops the last N bytes — neither party will receive the `close_notify`, and the application layer is supposed to treat the truncation as an error.

The implementation we examined did *not* treat truncated streams as errors under one specific configuration: when the application had not registered a close handler and the underlying TCP socket was closed cleanly by the attacker after the truncation. In that case, the TLS library returned a normal end-of-stream to the application, and the application treated the connection as having completed normally.

## the trigger

The bug requires three conditions to fire:

1. The connection uses the affected TLS library.
2. The application code does not register a TLS close handler — common in HTTP client libraries that treat any clean TCP close as the end of the body.
3. The attacker can inject a TCP FIN at the appropriate moment.

The third condition is the hardest. An attacker who can inject TCP into the stream has many other options, including outright reset. But in our test setup, an on-path attacker (a malicious WiFi access point, in our reproduction) could reliably inject the FIN after dropping any range of TLS records.

## the impact

The bug allowed the attacker to truncate the response to an HTTPS request without the client detecting the truncation. In our reproduction, this meant:

- Truncating the response body silently.
- Dropping HTTP trailer headers without the client noticing.
- Causing the client to act on partial responses as if they were complete.

For browser-based HTTPS clients, the impact is bounded — modern browsers detect the missing `close_notify` and report it. For embedded HTTPS clients running in IoT devices, OEM update systems, and industrial telemetry, the impact is larger. We confirmed several embedded HTTPS clients that would silently accept the truncated response.

The worst case we identified was an OEM update client that downloaded firmware over HTTPS and computed a SHA-256 hash of the received bytes. If the response was truncated *before* the firmware finished, the hash would not match the expected value and the update would be rejected — which is correct. But if the response was truncated *after* the firmware finished and during the trailer phase, the hash would match (the firmware bytes were all received), the trailer-side metadata would be missing or partial, and depending on the OEM's policy, the partial trailer might be accepted as a partial signature.

> We did not confirm code execution from this primitive. We did confirm that the attack was usable to suppress server-side trailer headers that several embedded clients used for signing decisions. The OEM has chosen not to disclose which clients are affected; they have committed to a quiet remediation through their normal update channel.

## what was fixed

The fix tightens the TLS library's close handling in three ways:

1. The library now treats any TCP close without `close_notify` as an error, regardless of whether the application has registered a close handler.
2. The library's HTTP client wrapper now reports the truncation up to the caller.
3. The library's documentation now explicitly recommends that callers register a close handler.

The fix has been backported to all maintained versions of the library and is available as of release 3.4.18.

## why this matters

Truncation attacks are a textbook class of TLS attack. The TLS 1.3 designers were aware of them and designed `close_notify` specifically to defend against them. The defense works only if implementations enforce it.

This is the third such finding we are aware of in TLS implementations over the past five years. In each case, the bug survived years of deployment because the test suites for the implementations did not cover the specific scenario. Test suites for TLS implementations should explicitly cover truncation under every supported close path. Many do not.

— *@dial, 0x47A1 ⌬ 9D03*

*Signed: 2026-04-21T11:08Z · SHA-256 hash recorded in the integrity log.*
