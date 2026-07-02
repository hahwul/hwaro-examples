+++
title = "Auto-logging grey-line FT8 with a shell hook"
date = "2026-01-18"
description = "Dawn on 40 metres to New Zealand, and a small watcher script that files every new QSO the moment WSJT-X writes it."
tags = ["code", "ft8", "40m", "grayline", "logging"]
[extra]
serial = "0715"
utc = "0742Z"
freq = "7.074"
mode = "FT8"
call = "ZL3QRP"
+++

Grey line is the operator's magic hour. For the twenty or thirty minutes while
the terminator — the line between day and night — sweeps over your station, the
D-layer that soaks up 40-metre signals in daylight has not woken up yet, and the
low bands open along the shadow to places you cannot normally hear. This morning
the line ran straight down to New Zealand.

<!-- more -->

At 0742Z, with the sky just going grey over the ridge, **ZL3QRP** decoded out of
the noise on 7.074 and came back to my call on the second try. Grey-line
propagation does not last; you work fast and you do not want to be fumbling with
a logging window while the path is open.

So the logging is automatic. WSJT-X appends every completed QSO to a file called
`wsjtx_log.adi`. A three-line shell watcher notices when that file grows and
hands the new lines to a Python filer:

```bash
#!/usr/bin/env bash
# watch-log.sh — file new QSOs the instant WSJT-X writes them
LOG="$HOME/.local/share/WSJT-X/wsjtx_log.adi"
inotifywait -m -e modify "$LOG" |
  while read -r _; do python3 file_qso.py "$LOG"; done
```

The filer tracks how many records it has already seen, so it only acts on the
newly appended ones:

```python
import re, sys, pathlib

state = pathlib.Path(".seen")
seen = int(state.read_text()) if state.exists() else 0
records = re.split(r"<EOR>", pathlib.Path(sys.argv[1]).read_text(), flags=re.I)
records = [r for r in records if "<call:" in r.lower()]

for rec in records[seen:]:
    call = re.search(r"<call:\d+>([^<]+)", rec, re.I)
    band = re.search(r"<band:\d+>([^<]+)", rec, re.I)
    if call:
        print(f"logged {call.group(1).strip():<8} {band.group(1) if band else '?'}")

state.write_text(str(len(records)))
```

It is deliberately dumb — no database, no upload, just an append and a printed
confirmation so I can keep my eyes on the waterfall. The weekly LoTW push is a
separate, more careful script, and it runs the
[ADIF de-duper](/logbook/adif-deduper-python/) first. During a grey-line
opening, dumb and instant beats clever and slow every time.
