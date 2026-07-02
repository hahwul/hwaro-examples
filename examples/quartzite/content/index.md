+++
title = "Quartzite"
description = "A payments SDK reference covering subscriptions, invoicing, and idempotent charges"
template = "home"
+++

Quartzite gives your team one predictable surface for moving money. Create a customer, attach a payment method, put them on a subscription schedule, and charge them without ever wondering whether a network retry just billed them twice.

Idempotency is not an opt-in header buried in an appendix — it is the default behavior of every mutating route in this reference. Send the same `Idempotency-Key` twice, on purpose or by accident, and Quartzite returns the original charge, the original invoice, the original subscription. Nothing is ever created a second time by mistake.

Authentication is a single bearer key, scoped to test or live mode, sent on every request. Responses always echo the object's canonical identifier, so the record in your logs and the record in Quartzite's ledger are the same record, described the same way, every time you look.

The six guides indexed above cover the full surface area you need for a production integration: authenticating requests, representing customers, running recurring billing, issuing invoices, charging cards safely, and receiving signed webhook events. Each one opens with the exact route and method it documents, so you always know precisely what you are calling before you read a single field.
