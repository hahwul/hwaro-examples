+++
title = "A tiny ADIF de-duper in Python"
date = "2025-09-13"
description = "Merging a paper log with WSJT-X leaves duplicate QSOs. Forty lines of Python find them by call, band, mode, and date."
tags = ["code", "adif", "logging", "python"]
[extra]
serial = "0572"
utc = "0904Z"
freq = "10.136"
mode = "FT8"
call = "DL4GT"
+++

Every operator who keeps both a paper book and a digital log eventually creates
the same mess: the same contact entered twice, once by hand and once by the
computer, with slightly different timestamps. When you merge the two ADIF files
before an LoTW upload, the duplicates ride along. This entry is the script I run
first.

<!-- more -->

ADIF is a plain-text format where each field looks like `<CALL:6>DL4GT` — a tag,
a length, and the value. That length prefix means you never have to guess where a
value ends. Parsing it is a small regular expression and a dictionary.

I define a duplicate as the same **callsign, band, mode, and calendar date**. The
exact second rarely matches between a wristwatch and a PC clock, so the date is
the right granularity for a de-dupe key.

```python
import re
import sys
from collections import defaultdict

FIELD = re.compile(r"<(\w+):(\d+)(?::[^>]+)?>", re.IGNORECASE)

def parse_records(text):
    body = text.split("<EOH>")[-1]
    for chunk in re.split(r"<EOR>", body, flags=re.IGNORECASE):
        rec, pos = {}, 0
        for m in FIELD.finditer(chunk):
            name = m.group(1).upper()
            length = int(m.group(2))
            start = m.end()
            rec[name] = chunk[start:start + length]
        if rec:
            yield rec

def key(rec):
    return (
        rec.get("CALL", "").upper(),
        rec.get("BAND", "").lower(),
        rec.get("MODE", "").upper(),
        rec.get("QSO_DATE", ""),
    )

seen = defaultdict(int)
with open(sys.argv[1], encoding="utf-8", errors="replace") as fh:
    for rec in parse_records(fh.read()):
        seen[key(rec)] += 1

dupes = {k: n for k, n in seen.items() if n > 1}
for (call, band, mode, date), n in sorted(dupes.items()):
    print(f"{n}x  {call:<8} {band:<5} {mode:<5} {date}")

print(f"\n{len(dupes)} duplicate key(s) across {sum(seen.values())} QSOs")
```

Run it as `python dedupe.py station.adi` and it prints a tidy list of the
collisions without touching the file — I still want to eyeball them before
deleting anything. The FT8 sweep on 30 metres that surfaced the worst offender
(a **DL4GT** contact logged twice, four minutes apart) is what finally pushed me
to write it down. Forty lines beats scrolling five thousand records by hand.
