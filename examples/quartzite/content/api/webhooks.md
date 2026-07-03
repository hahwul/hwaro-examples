+++
title = "Webhooks"
description = "Register an endpoint, verify the HMAC signature on every delivery, and handle retries without duplicating side effects."
weight = 6
date = "2025-06-20"
toc = true
[extra]
route = "POST /v1/webhook_endpoints"
method = "POST"
status = "stable"
+++

Charges, invoices, and subscriptions all change state asynchronously — a card issuer takes a moment to respond, a trial ends at midnight, a disputed charge is resolved days later. Webhooks are how Quartzite tells your system about those changes as they happen, rather than making you poll for them.

<!-- more -->

## Registering an endpoint

```bash
curl https://api.quartzite.dev/v1/webhook_endpoints \
  -H "Authorization: Bearer sk_test_51N0KpQ" \
  -d url="https://api.northfold.example/hooks/quartzite" \
  -d "enabled_events[]"="charge.succeeded" \
  -d "enabled_events[]"="invoice.payment_failed" \
  -d "enabled_events[]"="subscription.updated"
```

The response includes a `secret` beginning `whsec_` — store it alongside your other credentials. You will need it to verify every delivery that arrives at this endpoint.

## Verifying the signature

Every delivery carries a `Quartzite-Signature` header containing a timestamp and an HMAC-SHA256 digest of the timestamp concatenated with the raw request body, keyed with your endpoint's signing secret.

```python
import hmac, hashlib

def verify(payload, header, secret):
    parts = dict(p.split("=") for p in header.split(","))
    signed = f"{parts['t']}.{payload}".encode()
    expected = hmac.new(secret.encode(), signed, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, parts["v1"])
```

Compare against the raw, unparsed request body — not a re-serialized version of it — and reject anything that fails verification before your handler does any work. An endpoint that skips this step will eventually process a forged event.

## Handling retries idempotently

Quartzite retries a failing delivery (any response outside `2xx`) on a backoff schedule for up to three days. Every delivery, including retries, carries the same `id` for that event. Record the `id` you have already processed — a set, a unique database constraint, whatever fits your stack — and skip any event you have seen before, the same discipline the [Charges](/api/charges/) route asks of you for idempotency keys.

## Event types worth handling first

`charge.succeeded` and `charge.failed` for order fulfillment, `invoice.payment_failed` to prompt a card update before a subscription lapses, and `subscription.updated` to keep your own record of a customer's plan in sync with Quartzite's.
