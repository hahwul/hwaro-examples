+++
title = "Structuring Tidewave's API Error Reference"
date = "2025-11-02"
description = "One taxonomy, one page per error family: designing a structured error reference for a messaging API."
+++

Tidewave's error documentation was, at the start of this project, a single alphabetized table of error codes with a one-line description each. It was accurate and nearly useless — a developer hitting `429` mid-integration had to scan sixty rows to find the one that mattered, with no sense of which errors were retryable and which meant their request would never succeed.

<!-- more -->

## The taxonomy

The rewrite grouped every error into one of five families — `validation`, `authentication`, `rate_limit`, `delivery`, and `internal` — each with its own page and a consistent field set: what triggered it, whether it is retryable, and the exact response shape.

```json
{
  "error": {
    "type": "rate_limit_exceeded",
    "family": "rate_limit",
    "retryable": true,
    "retry_after": 12,
    "message": "Message send rate exceeded for account acct_4Fk92LpQ."
  }
}
```

Every error page now opens with the same three-line summary before any prose:

```markdown
**Family:** rate_limit
**Retryable:** yes — respect `retry_after`
**HTTP status:** 429
```

## Why families, not an alphabetized list

Grouping by family instead of by code meant a developer building retry logic could read one page — `rate_limit` — and get every error that needed the same handling, instead of hunting through an alphabetical list for codes that happened to start with different letters but behaved identically.

```python
RETRYABLE_FAMILIES = {"rate_limit", "internal"}

def should_retry(error: dict) -> bool:
    return error["family"] in RETRYABLE_FAMILIES and error.get("retryable", False)
```

That snippet is lifted almost verbatim from a support engineer's internal tool once the family field existed — it did not exist as clean, groupable data before the rewrite, only as prose describing each code individually.

## Adoption

The format shipped as a documented convention, not just a one-off page redesign: any new error Tidewave's API returns is now required to declare a family before the corresponding endpoint change can merge, enforced by the same CI check that flags undocumented endpoints.
