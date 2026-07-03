+++
title = "Case File 06: Six Months of Sensor Data — What Actually Knocks"
date = "2026-05-26"
description = "A review of a full six-month sensor window: what shows up most, what's rare but interesting, and what changed since the last review."
tags = ["honeypot", "telemetry", "review"]
toc = true
[extra]
older = "writeups/case-file-05-powershell-dropper.md"
+++

Every case file so far has been one interesting session pulled out of a much larger pile. This one goes the other direction: a look at the full six-month window across all four sensors, to see what the aggregate picture actually looks like once the noise is counted rather than filtered out.

<!-- more -->

## Volume by service

Session counts, deduplicated by source IP per day so a single noisy scanner does not dominate the totals:

```text
service        sessions   share
telnet/23      118,402    41.2%
ssh/22          89,115    31.0%
smb/445         41,660    14.5%
redis/6379      21,384     7.4%
http/80          9,801     3.4%
mysql/3306       6,912     2.4%
```

Telnet and SSH combined still account for nearly three quarters of all traffic, which tracks with how cheap credential-stuffing tooling is to run at scale — it needs no exploit development, just a wordlist and patience. Redis's 7.4% share is worth noting on its own: it is a single service with no authentication by default, and it punches well above services like MySQL that at least nominally require a password.

## What changed since the last window

Comparing against the same six-month window a year prior, three shifts stood out:

- **Redis exploitation attempts roughly doubled** as a share of total sessions, consistent with [case file 02's](/writeups/case-file-02-redis-cryptominer/) technique becoming more commoditized in scanning toolkits.
- **TFTP-based propagation, like the family in [case file 04](/writeups/case-file-04-dionaea-telnet-botnet/), remains a small minority** (under 2% of Telnet sessions) but has not disappeared the way HTTP-only tooling might suggest — older codebases are clearly still being maintained by someone.
- **Median time-to-first-contact for a newly provisioned sensor dropped from about 55 minutes to just under 20**, meaning an unprotected service now gets found roughly three times faster than it did a year ago.

## The long tail

Most sessions cluster into a handful of well-known families, but roughly 4% of captures did not match any signature in the local reference set. The majority of that long tail is minor variation on known tooling — a changed user agent, a slightly different command order — but case file 04's TFTP-Farmer cluster came out of exactly this bucket, which is the whole argument for periodically reviewing the unmatched pile by hand rather than only chasing whatever a signature already flags.

## Takeaways for defenders

- If a service can be moved off its default port or behind an allowlist, do it — the time-to-first-contact numbers above are for default ports specifically, and scanning coverage of non-default ports remains meaningfully sparser.
- Redis, in particular, deserves the same "never expose without authentication" treatment as SSH; the share of traffic exploiting it has grown faster than any other service tracked here.
- A small, unmatched fraction of any dataset like this is worth periodic manual review — it is disproportionately where new families first show up, as case file 04 demonstrated.
