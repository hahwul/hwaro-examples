+++
title = "Observation 0039 — A Keylogger in a Vendored Dependency"
date = "2026-04-14"
description = "A small build-tool dependency, vendored into a popular Node.js application, was modified upstream to include a keylogger that activated on Linux desktops only."
tags = ["supply-chain", "observation", "node"]
[extra]
operator = "relic"
hash = "0x2BAC ⌬ FF22"
+++

In late March 2026, a small JavaScript build-tool dependency was modified by its maintainer to include a keylogger. The keylogger activated only on Linux desktops with a graphical session. The modified version was published to npm and was consumed by a popular Node.js application before the malicious change was detected and reported.

The full incident is documented in the application's published post-mortem; this observation focuses on what the supply-chain analysis revealed about how the malicious change escaped detection.

## the timeline

| Date | Event |
|---|---|
| 2026-03-04 | Maintainer publishes version 1.4.0 of the dependency. Clean. |
| 2026-03-11 | Maintainer's account is compromised (post-incident analysis attributes this to a phishing attack against the maintainer's npm 2FA). |
| 2026-03-12 | Version 1.4.1 published. Contains the keylogger. |
| 2026-03-12 | The downstream application's CI updates to 1.4.1 and ships a release within four hours. |
| 2026-03-26 | A security researcher running a corpus-level malware-detection scan on npm packages flags 1.4.1. |
| 2026-03-26 | The maintainer is contacted; the account is locked; 1.4.1 is yanked. |
| 2026-03-27 | The downstream application publishes an advisory and rolls back. |

The malicious version was live for fourteen days. Approximately 220,000 systems installed the malicious version during that window. The actual exfiltration appears to have been small — the keylogger was selective about what it captured, and the attacker's exfiltration endpoint was rate-limited.

## how it escaped detection

The keylogger was 18 lines of obfuscated JavaScript. It was hidden inside a 4,200-line file that was 99% legitimate code. It activated only when:

1. The host OS was Linux.
2. The DISPLAY environment variable was set.
3. The hostname did not match a list of known-bad strings (a primitive sandbox-detection check).
4. The process had `read` access to `/dev/input/event0` through `event7`.

The fourth condition is the interesting one. The keylogger did not bind to X11 — that would have been visible to standard process tools. It bound directly to the kernel input device, which is normally only accessible to processes running with `CAP_SYS_ADMIN` or to processes in the `input` group.

On most Linux distributions, only privileged services have this access. On *some* distributions — notably a couple of community-managed desktop distributions popular with developers — the `input` group includes the user's primary account by default. The keylogger was specifically targeting these distributions.

## the supply-chain audit

The downstream application's CI was configured with a number of supply-chain defenses:

- `npm audit` ran on every PR.
- The dependency lockfile was checked into source control.
- A third-party SBOM tool generated a dependency graph for every release.

None of these caught the change. `npm audit` only checks for known CVEs; the keylogger had no CVE. The lockfile noted the version bump from 1.4.0 to 1.4.1, but the version bump was a normal patch release that the team's policy allowed without review. The SBOM tool noted the version change but produced no alert.

> What would have caught it: source-level diffing of the dependency between versions. The team did not have this. Most teams do not have this.

## what we recommend

After this incident, we have changed our own internal recommendations for supply-chain hygiene:

1. **Pin dependencies to commit hashes, not version numbers.** A version bump should require a deliberate audit; an automated lockfile bump is not enough.
2. **Diff dependency source on update.** If your CI does not show you the source diff between the old version and the new version, you are blind to malicious changes.
3. **Trust no one's package manager.** npm, PyPI, RubyGems, and crates.io are all vulnerable to account takeover. The package manager's signing infrastructure is not your last line of defense; *you* are your last line of defense.

These are not novel recommendations. They are recommendations that have been published since at least 2017. We restate them because we continue to be surprised by how rarely they are followed in production.

— *@relic, 0x2BAC ⌬ FF22*

*Signed: 2026-04-14T15:12Z · SHA-256 hash recorded in the integrity log.*
