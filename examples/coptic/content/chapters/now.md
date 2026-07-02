+++
title = "Now Is Not a Value"
date = "2025-05-02"
description = "A timestamp captured in a signature is a decision made once, then repeated forever."
weight = 3
toc = true
[extra]
n = "03"
lang = "python"
question = "If now was decided when the function was born, then when is now?"
+++

You wanted each log line stamped with the current time. You gave the timestamp a sensible default so callers could override it. Every line came out bearing the same second, no matter how long the program ran.

<!-- more -->

```python
from datetime import datetime

def log(event, at=datetime.now()):
    print(f"{at:%H:%M:%S}  {event}")

log("boot")     # 00:14:07  boot
log("ready")    # 00:14:07  ready   (minutes later, same instant)
```

## What happens

`datetime.now()` runs once, while Python is evaluating the `def` line and constructing the default arguments. Its result — a single `datetime` object — is bound to `at` and reused on every call that does not supply its own. You did not schedule a clock reading; you scheduled a clock reading and then threw the clock away, keeping only the number it happened to show.

The fix is to defer the reading until the call actually occurs:

```python
def log(event, at=None):
    at = at or datetime.now()
    print(f"{at:%H:%M:%S}  {event}")
```

## The turn

The mistake in [the jar that remembers](/chapters/jar/) and the mistake here are the same mistake. A default argument is not a promise to compute; it is a value, already computed. `now` felt like a live wire, something that would be true whenever you touched it. But the moment you wrote it into a signature, you froze it into a noun. Time only flows for expressions that are allowed to run more than once.
