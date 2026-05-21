+++
title = "Roster"
description = "Who operates this channel, what we work on, and what we will not."
+++

## the team

glyph_cipher is operated by four people, all of whom hold day jobs at other organizations. We post here in our personal capacities. Our employers do not endorse our writings.

| Handle | Joined | Focus |
|---|---|---|
| @dial | 2019-11-17 | Protocol analysis, Noise variants, side-channels |
| @relic | 2020-04-02 | Memory-safety incidents, fuzzing, firmware review |
| @harken | 2022-08-15 | Random-number generation, PRNG audits |
| @kestral | 2024-02-09 | Post-quantum migration, KEM analysis |

## what we publish

We publish three kinds of transmissions:

- **Observations** — notes on protocol behavior we have measured or reproduced in our own lab. These are signed off-line and posted with a SHA-256 hash.
- **Post-mortems** — analyses of public incidents. We do not post pre-disclosure findings; we wait for the responsible-disclosure window to close.
- **Speculations** — occasional notes on practice and pedagogy. Less rigorous; explicitly labeled.

We do not publish:

- Vulnerability details before responsible disclosure has closed.
- Exploit code, even for issues that have been fully disclosed.
- Analyses of clients' private systems.
- Anything that would identify a specific person without their consent.

## integrity

Every transmission carries a SHA-256 of the source markdown at the time of publication. The hashes are recorded in [the integrity log](/integrity/), which is itself signed with the channel's PGP key (0x47A1 ⌬ 9D03).

If you find a transmission whose body does not match the hash in the integrity log, please report it to *relay@glyph-cipher.example*. We will investigate, and if the transmission has been tampered with, we will say so plainly. We have not had a tamper event since the channel was established, but we treat the possibility as real.

## contact

For research correspondence, use the channel relay above. We respond when we can. We do not respond to:

- Recruiting messages.
- Requests for private analysis of your specific system.
- Requests to remove or amend our published work without a concrete factual correction.

For factual corrections, please include the transmission ID, the exact passage in question, and your evidence. We will issue corrections in the integrity log.
