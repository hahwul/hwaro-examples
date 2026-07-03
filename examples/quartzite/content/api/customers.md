+++
title = "Customers"
description = "Represent the people and businesses you bill, and attach the payment methods every later charge will reference."
weight = 2
date = "2025-03-04"
toc = true
[extra]
route = "POST /v1/customers"
method = "POST"
status = "stable"
+++

A customer is the anchor object every other resource in Quartzite attaches to. Payment methods, subscriptions, invoices, and charges all reference a `customer_id`, and Quartzite uses that reference to build the ledger you see in the dashboard.

<!-- more -->

## Creating a customer

```bash
curl https://api.quartzite.dev/v1/customers \
  -H "Authorization: Bearer sk_test_51N0KpQ" \
  -d email="asha@northfold.example" \
  -d name="Asha Reyes" \
  -d "metadata[account_id]"="nf_88213"
```

```json
{
  "id": "cus_1JbQx9K",
  "email": "asha@northfold.example",
  "name": "Asha Reyes",
  "default_payment_method": null,
  "metadata": { "account_id": "nf_88213" },
  "created": "2025-03-04T15:02:11Z"
}
```

`email` is the only required field. `metadata` is a free-form key-value bag limited to 20 entries — store your own internal identifiers there rather than encoding them into the customer's `name`.

## Attaching a payment method

Payment methods are created separately (tokenized client-side, per Quartzite's client library) and then attached by ID:

```bash
curl https://api.quartzite.dev/v1/customers/cus_1JbQx9K/payment_methods \
  -H "Authorization: Bearer sk_test_51N0KpQ" \
  -d payment_method="pm_4f8a2c" \
  -d set_as_default=true
```

Setting `set_as_default` means future subscription invoices and any charge that omits an explicit `payment_method` will use this one automatically. A customer can hold several payment methods at once; only one is ever the default.

## Updating and listing

`POST /v1/customers/{id}` accepts a partial update — fields you omit are left untouched. `GET /v1/customers` lists customers newest-first and accepts `email` as an exact-match filter, which is the fastest way to check whether a customer already exists before you create a duplicate.

## Deleting a customer

Deletion is soft: the customer record is marked `deleted` and can no longer be charged or attached to a new subscription, but existing invoices and charges referencing it are preserved unchanged, because your accounting records must never retroactively lose their subject.
