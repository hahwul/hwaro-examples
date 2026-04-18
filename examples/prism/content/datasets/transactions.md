+++
title = "Transactions"
date = "2026-03-19"
description = "Financial transaction records from payment processing systems"
weight = 2
tags = ["financial", "real-time", "critical"]

[extra]
records = "489,201"
throughput = "87/s"
quality_score = "91"
category = "financial"
+++

## Overview

The `transactions` dataset contains all financial transaction records processed through the payment gateway. This is a critical dataset with strict SLA requirements and enhanced data quality monitoring.

## Schema

| Field | Type | Description |
|---|---|---|
| tx_id | UUID | Transaction identifier |
| user_id | STRING | Customer identifier |
| amount | DECIMAL(12,2) | Transaction amount |
| currency | STRING | ISO 4217 currency code |
| status | ENUM | pending, completed, failed, refunded |
| payment_method | STRING | card, bank_transfer, wallet |
| merchant_id | STRING | Merchant identifier |
| created_at | TIMESTAMP | Transaction creation time |
| settled_at | TIMESTAMP | Settlement timestamp (nullable) |

## Volume by Status

| Status | Count | Percentage |
|---|---|---|
| Completed | 461,402 | 94.3% |
| Pending | 12,841 | 2.6% |
| Failed | 9,784 | 2.0% |
| Refunded | 5,174 | 1.1% |

## Compliance Notes

- PCI DSS Level 1 compliant storage
- Card numbers are tokenized at the collection layer
- All queries are audit-logged with requester identity
- Data access requires `finance:read` RBAC role
