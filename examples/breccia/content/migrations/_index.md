+++
title = "Migrations"
description = "The expand-and-contract path from an old schema shape to a new one, six steps, always in this order."
sort_by = "weight"
template = "section"
+++

Every change Breccia manages follows the same six steps, whether it is adding one nullable column or replacing a table's primary key. The order is not a suggestion — Breccia's ledger enforces it, and `require_verify` will block step six until step five has actually reported clean.

<!-- more -->

Read them in order the first time. After that, you will mostly reach for one step at a time: plan when you are scoping a change, expand and backfill on the deploy that ships it, dual-write and verify while it soaks, contract on the deploy that quietly finishes the job.
