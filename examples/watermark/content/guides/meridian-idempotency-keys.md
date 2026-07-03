+++
title = "Documenting Idempotency Keys for Meridian Pay"
date = "2026-04-18"
description = "Rewriting the safe-retry guide for a payments API, with runnable request and response pairs."
+++

The idempotency-key page was the single most support-ticketed page in the Meridian Pay reference. The old version explained the concept correctly and left the reader to work out the mechanics themselves — which header, which values were safe to reuse, what happened on a mismatched retry. This is the shape it took after a rewrite built entirely around the two questions integrators actually asked.

<!-- more -->

## What changed

The previous page opened with three paragraphs on why idempotency matters before showing a single example. The rewrite leads with the request:

```bash
curl https://api.meridianpay.dev/v1/charges \
  -H "Authorization: Bearer sk_live_••••" \
  -H "Idempotency-Key: 8f14e45f-ceea-467e-bd42-1a5c3f9e2b10" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 4200,
    "currency": "usd",
    "customer": "cus_1H8x2KLmN9pQ"
  }'
```

Retrying the exact same request with the same key returns the original charge instead of creating a duplicate:

```json
{
  "id": "ch_3P9q2KLmN9pQ8fA0",
  "status": "succeeded",
  "amount": 4200,
  "currency": "usd",
  "idempotent_replayed": true
}
```

The `idempotent_replayed` field was the detail that solved the most support tickets. Integrators could not previously tell, from the response alone, whether a charge was created fresh or returned from cache — so the field became part of the rewrite's scope, not just its documentation. I filed the change with the API team and wrote both the endpoint update and the doc in the same pull request.

## The mismatch case

The second most common question — what happens if you reuse a key with a different request body — got its own section with a real error response instead of a warning paragraph:

```json
{
  "error": {
    "type": "idempotency_error",
    "message": "Idempotency-Key was reused with a different request body.",
    "key": "8f14e45f-ceea-467e-bd42-1a5c3f9e2b10"
  }
}
```

## Result

Idempotency-related tickets dropped by roughly a third in the following quarter, measured against the same period the year prior. The `idempotent_replayed` field shipped to all four SDKs the same release.
