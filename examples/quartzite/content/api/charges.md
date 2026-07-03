+++
title = "Charges"
description = "Move money from a customer's payment method to your balance, with idempotency keys that make retries safe by construction."
weight = 3
date = "2025-04-18"
toc = true
[extra]
route = "POST /v1/charges"
method = "POST"
status = "stable"
+++

A charge moves money once. That sentence sounds obvious until you consider what "once" means across a flaky network: your server sends the request, the connection drops before the response arrives, and your retry logic — reasonably — sends it again. Without idempotency, that customer is charged twice for one purchase.

<!-- more -->

## The idempotency key

Every `POST /v1/charges` request should carry an `Idempotency-Key` header: a UUID you generate once per logical charge attempt, not once per HTTP request.

```bash
curl https://api.quartzite.dev/v1/charges \
  -H "Authorization: Bearer sk_test_51N0KpQ" \
  -H "Idempotency-Key: 8f14e45f-ceea-467e-9ec0-000000000001" \
  -d customer="cus_1JbQx9K" \
  -d amount=4200 \
  -d currency="usd" \
  -d description="Order #10441"
```

```json
{
  "id": "ch_9nRq2Lp",
  "amount": 4200,
  "currency": "usd",
  "customer": "cus_1JbQx9K",
  "status": "succeeded",
  "idempotency_key": "8f14e45f-ceea-467e-9ec0-000000000001",
  "created": "2025-04-18T11:47:03Z"
}
```

Resend the exact same request body with the same key, at any point in the following 24 hours, and Quartzite returns this identical `charge` object — same `id`, same `created` timestamp — instead of creating a second one. The card is charged exactly once regardless of how many times your retry logic fires.

{{ alert(type="warning", body="A key is scoped to its exact request body. Reusing a key with a *different* amount, customer, or currency returns `409 idempotency_key_reused` rather than silently charging the new parameters — Quartzite refuses to guess which request you meant.") }}

## Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `customer` | string | yes | must reference an existing customer |
| `amount` | integer | yes | smallest currency unit — cents for USD |
| `currency` | string | yes | three-letter ISO code, lowercase |
| `payment_method` | string | no | defaults to the customer's default |
| `description` | string | no | shown on the customer's statement |

## Statuses

A charge is `succeeded`, `failed`, or briefly `pending` while an asynchronous payment method settles. Failed charges include a `failure_code` such as `card_declined` or `insufficient_funds` — these are terminal for that specific attempt; create a new charge with a new idempotency key once the customer has updated their payment method, rather than retrying the failed one.

## Refunding

`POST /v1/charges/{id}/refunds` accepts an optional `amount` for partial refunds and is itself idempotent under the same key rules — safe to retry if your refund request times out on your end.
