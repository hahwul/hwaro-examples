+++
title = "Sigil"
description = "Dara Voss — backend engineer building event-driven payment infrastructure. Ledger cores, settlement pipelines, and reconciliation systems in Go and Kafka."
template = "home"

[extra]
name = "Dara Voss"
role = "Backend Engineer — Event-Driven Payment Systems"
location = "Lisbon, remote-first"
email = "dara@sigil.dev"
focus = "exactly-once settlement"
about_teaser = "I got into backend work sideways, fixing a campus print-quota system, and stayed for the moment two services first agreed on a number they'd both computed independently."

[[extra.experience_log]]
period = "2023 — present"
role = "Staff Backend Engineer"
company = "Meridian Clearing"
detail = "Owns the event-sourced ledger core and its exactly-once settlement pipeline."

[[extra.experience_log]]
period = "2020 — 2023"
role = "Senior Backend Engineer"
company = "Northbridge Pay"
detail = "Built the real-time authorization and fraud-signal pipeline on Kafka Streams."

[[extra.experience_log]]
period = "2018 — 2020"
role = "Backend Engineer"
company = "Cobalt Transit"
detail = "Migrated fare settlement off a nightly batch job onto streaming CDC."

[[extra.experience_log]]
period = "2016 — 2018"
role = "Software Engineer"
company = "Ashgrove Labs"
detail = "First production Kafka deployment: queues, consumer groups, and a lot of postmortems."
+++

Backend engineer with nine years building the unglamorous plumbing that moves money correctly, once, and on time. I work mostly in Go and Kafka, on the systems that sit between a customer's card swipe and the ledger entry that has to match it exactly — settlement, reconciliation, and the retry logic that keeps a distributed payment system honest when a network call fails halfway through.

My compass metric has never been throughput. It's discrepancy count. Every payments team I've been on measures success in unreconciled cents, and I've spent most of a career getting that number as close to zero as physics and network partitions allow.
