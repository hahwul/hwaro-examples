+++
title = "01.01 — Introduction"
description = "What Vector OS is, what it is not, and why it exists."
weight = 1

[extra]
section_label = "01 · Docs"
section_number = "01.01"
+++

Vector OS is an operating layer for distributed compute. It does one thing well:
it lets you describe what should run, where the data lives, and how much it is
worth — and it schedules the rest. It is not a container runtime, not an
orchestrator in the Kubernetes sense, and not a workflow engine. It is the
small, opinionated piece that sits between those things.

A Vector OS cluster is a set of nodes — bare metal, virtual machines, or
attached accelerators — exposed through a single control plane. The control
plane keeps a typed catalog of resources, an event log of placements, and a
queue of pending work. Workers pull tasks, report progress, and surrender
resources when the deadline elapses or a higher-priority claim arrives.

The project began in 2024 as a tool for running short-lived inference jobs
across a mixed fleet of consumer GPUs. We wanted something that booted in under
a second, exposed a real HTTP API, and did not require a service mesh to get to
hello-world. The scope has widened — batch compute, scheduled tasks, and a
small storage interface — but the constraints have not. Every release must
build from a clean checkout in under sixty seconds, ship as a single static
binary, and pass the entire end-to-end suite without external services.

Vector OS is written in Rust. The binary is twelve megabytes. There are no
required runtime dependencies. State is kept in an embedded log; the control
plane can be backed by Postgres for multi-region deployments. The wire format
is protobuf over HTTP/2, with a JSON gateway for clients that need it.

The documentation is organized into three parts. The Docs section covers the
concepts and the day-one experience. The Guides section walks through specific
deployments. The Reference section is the long tail — every flag, endpoint,
and term, in alphabetical order.

## What you should read first

If you have never run Vector OS before, read the installation chapter, then the
architecture chapter. They are short. Skip the configuration chapter on a first
pass — the defaults are good.

If you are evaluating Vector OS against another tool, the architecture chapter
is the honest answer to most of the questions you will have. The trade-offs
are stated up front.

## Where to ask questions

Issues and discussions live on the project tracker. The maintainers triage on
Tuesday and Friday. There is no chat room; we have found that asynchronous
review produces better answers and keeps the archive searchable.
