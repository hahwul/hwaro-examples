+++
title = "Post-mortem 0019 — A Six-week Fuzz Against a Modem Firmware"
date = "2026-05-13"
description = "What we found running a stateful AFL++ fuzz against the parser layer of a commodity cellular modem. Three findings, two of which are fixed."
tags = ["fuzz", "firmware", "post-mortem", "modem"]
[extra]
operator = "relic"
hash = "0x2BAC ⌬ FF22"
+++

For six weeks beginning in February 2026, three members of this channel ran a stateful AFL++ fuzz against the AT-command parser of a commodity cellular modem firmware. We found three distinct crashes, two of which are now patched in the manufacturer's release stream. This post-mortem describes the setup, the findings, the responsible-disclosure process, and what the experience taught us about fuzzing firmware that was not designed to be fuzzed.

## the target

The target is a 4G/LTE cellular modem that ships in dozens of OEM devices, including several brands of home routers, point-of-sale terminals, and industrial telemetry kits. The firmware runs a Cortex-A7 application processor and exposes its command surface over a UART AT-command interface. The interface is well-documented in the manufacturer's developer docs and is widely used in production.

We selected this target because it sits at the boundary between a user-controlled string (`AT+...`) and the modem's own state machine — exactly the kind of boundary where parsers tend to be weak.

## the harness

We could not run the firmware in our fuzzer's address space. The firmware is licensed only for use on the original silicon and we did not want to deal with the licensing question or the lift of porting the firmware to a different ABI. Instead, we built a hardware-in-the-loop harness:

```
[ AFL++ ]  →  [ libftdi ]  →  [ USB-UART bridge ]  →  [ modem AT port ]
                                       ↓
                              [ modem JTAG → AFL feedback ]
```

The fuzzer drove the modem over a USB-UART bridge using a small Python wrapper around `libftdi`. The modem's JTAG port was wired back to the fuzz host through an inexpensive J-Link adapter, where a custom OpenOCD script extracted coverage information from the modem's branch trace.

The throughput was, charitably, terrible. We achieved about 90 executions per second — three orders of magnitude slower than an in-process fuzz. We compensated by running 12 modems in parallel from a single host, and by carefully pruning the input corpus to avoid the slow parts of the modem's state machine.

## what we found

We discovered three findings in six weeks of fuzzing:

### finding #1 — out-of-bounds read in `AT+CHRP` parser

The `AT+CHRP` command sets a custom carrier hopping pattern. The parser accepts up to 32 entries; the parsing loop does not bound-check the number of commas in the input. A pathological input with 64 commas reads 32 entries past the end of the input buffer.

The read does not directly leak memory back to the user — the parsed entries are stored internally and used only to configure the radio. But the out-of-bounds read can return arbitrary bytes from adjacent memory, which then become the carrier hopping pattern. In practice, this means an attacker who can issue AT commands can cause the radio to transmit on frequencies it should not.

**Status:** Fixed in firmware version 4.2.18.

### finding #2 — null-pointer dereference in `AT+SOCKETOPEN`

The `AT+SOCKETOPEN` command opens an outbound TCP socket. The implementation accepts a hostname or an IP literal. The hostname-resolution path can fail (DNS lookup timeout), in which case the implementation should return an error. Under one specific failure mode — DNS lookup returns success but with zero records — the implementation dereferences a null pointer in the result buffer.

The crash is recoverable; the modem reboots within 4 seconds. An attacker who can issue AT commands can therefore reboot the modem at will, but cannot gain code execution.

**Status:** Fixed in firmware version 4.2.20.

### finding #3 — stack overflow in `AT+IPMUX` (unfixed)

The `AT+IPMUX` command configures multiplexed sockets. The parsing routine for the multiplex configuration uses a 256-byte stack buffer. A malformed input can write 4 bytes past the end of the buffer. The 4 bytes that get overwritten land in the return address on this ABI.

We have not been able to demonstrate a clean code-execution exploit because the modem's heap layout is randomized at boot and the return address overwrite lands in a region the attacker does not control. We have demonstrated that the overwrite causes consistent crashes, with the modem rebooting into a recovery mode.

**Status:** Reported 2026-04-18. Responsible-disclosure window expires 2026-07-18. The manufacturer has acknowledged the report and is preparing a patch.

> We are publishing the existence of finding #3 because the responsible-disclosure window includes a public disclosure date. We are not publishing the exact triggering input. Once the window expires and the patch is available, we will update this post-mortem.

## what we learned

The targeted modem was not designed to be fuzzed. The vendor has no fuzz harness, no coverage instrumentation, and no published security contact. We located their security contact through a third-party CERT.

Despite the lack of vendor support, we found three real issues in six weeks of part-time work, two of which have been fixed. The third has been acknowledged. The targeted firmware has shipped on this silicon since 2020. We are reasonably confident that no other team has fuzzed this surface before us.

If the modem is in your supply chain, please verify that you are running version 4.2.20 or later. If you cannot identify your firmware version, please contact your vendor.

— *@relic, 0x2BAC ⌬ FF22*

*Signed: 2026-05-13T08:42Z · SHA-256 hash recorded in the integrity log. Co-authored with @dial and @harken.*
