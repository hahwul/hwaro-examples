+++
title = "Quickstart"
description = "Authenticate, create a customer, and issue your first idempotent charge in under five minutes."
toc = true
+++

Quartzite is a plain REST API over HTTPS. There is no client library you must install to follow this guide — every example below is an ordinary `curl` request, and the same request and response shapes apply whether you call Quartzite from a server-side framework, a queue worker, or by hand while you read this page.

## 1. Get a key

Every account has two live secret keys and two test secret keys, issued in rotating pairs so you can retire one half without downtime. Test keys are prefixed `sk_test_` and only ever touch simulated funds — use one for everything in this guide. Send it as a bearer token on every request:

```bash
curl https://api.quartzite.dev/v1/account \
  -H "Authorization: Bearer sk_test_51N0KpQ"
```

A working key returns your account's mode, default currency, and webhook signing secret. See [Authentication](/api/authentication/) for the full response shape.

## 2. Create a customer

Customers are the anchor every other object attaches to — payment methods, subscriptions, invoices, and charges all reference a `customer_id`.

```bash
curl https://api.quartzite.dev/v1/customers \
  -H "Authorization: Bearer sk_test_51N0KpQ" \
  -d email="asha@northfold.example" \
  -d name="Asha Reyes"
```

The response includes a generated `cus_` identifier. Keep it — you will use it in the next step, and in every subscription or charge you create for this person going forward.

## 3. Charge them, safely

Every write to Quartzite accepts an `Idempotency-Key` header. Generate one UUID per logical attempt — not per HTTP request — so that if your process retries after a timeout, Quartzite recognizes the retry and returns the original charge instead of creating a second one.

```bash
curl https://api.quartzite.dev/v1/charges \
  -H "Authorization: Bearer sk_test_51N0KpQ" \
  -H "Idempotency-Key: 8f14e45f-ceea-467e-9ec0-000000000001" \
  -d customer="cus_1JbQx9K" \
  -d amount=4200 \
  -d currency="usd"
```

A successful response returns a `charge` object in `succeeded` status. Re-send the identical request with the same idempotency key at any point in the next 24 hours and you will get the identical response back, with no second charge on the customer's card. Read [Charges](/api/charges/) for the full retry and conflict semantics before you go to production.

From here, the six guides in the API reference document every route in depth, each opening with the exact method and path it covers so you always know what you are calling.
