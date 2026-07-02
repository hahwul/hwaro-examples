+++
title = "Invoices"
description = "Assemble line items into a single billed document, finalize it, and collect payment automatically or by sending it to the customer."
weight = 5
date = "2025-06-02"
toc = true
[extra]
route = "GET /v1/invoices/{invoice_id}"
method = "GET"
status = "stable"
+++

An invoice is a collection of line items totalled into a single amount, with its own lifecycle independent of the charge that eventually pays it. Subscriptions generate invoices automatically; you can also assemble one by hand for one-off billing.

<!-- more -->

## Fetching an invoice

```bash
curl https://api.quartzite.dev/v1/invoices/in_5Rk9Wd \
  -H "Authorization: Bearer sk_test_51N0KpQ"
```

```json
{
  "id": "in_5Rk9Wd",
  "customer": "cus_1JbQx9K",
  "status": "open",
  "amount_due": 8400,
  "currency": "usd",
  "collection_method": "charge_automatically",
  "lines": [
    { "description": "Growth plan — May", "amount": 7900 },
    { "description": "Overage — 4,000 API calls", "amount": 500 }
  ],
  "due_date": "2025-06-09T00:00:00Z"
}
```

## Statuses

| Status | Meaning |
|---|---|
| `draft` | Editable; line items can still be added or removed |
| `open` | Finalized and awaiting payment |
| `paid` | Payment succeeded |
| `void` | Cancelled before payment, permanently |
| `uncollectible` | Marked as bad debt after exhausted retries |

Only `draft` invoices accept new line items through `POST /v1/invoice_items`. Finalizing with `POST /v1/invoices/{id}/finalize` locks the document and assigns it a sequential invoice number — the moment after which it becomes a real accounting record rather than a scratchpad.

## Collection methods

`collection_method` is set at creation and determines what happens after finalization. `charge_automatically` attempts the customer's default payment method immediately, following the same retry schedule as subscription renewals. `send_invoice` instead emails the customer a hosted payment page and gives them `days_until_due` to pay manually — the right choice for invoices from a sales-assisted or enterprise billing flow rather than self-serve subscriptions.

## Voiding versus refunding

An `open` or `draft` invoice that should never be collected is voided, not deleted — the record stays in your history with `status: void` so your books reconcile. A `paid` invoice cannot be voided; refund the underlying charge instead and the invoice remains the accurate record of what was originally billed.
