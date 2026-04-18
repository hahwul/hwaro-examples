+++
title = "Plasma Workshop: Hands-On Systems Design"
description = "An intensive workshop on building resilient distributed systems from first principles"
date = "2026-05-20"
tags = ["workshop", "systems"]
categories = ["workshops"]
+++

# Plasma Workshop: Hands-On Systems Design

A full-day workshop where participants design, build, and break distributed systems in a controlled environment.

## What You Will Learn

This workshop takes a first-principles approach to distributed systems. Rather than surveying existing solutions, participants will discover the fundamental trade-offs by encountering them directly.

## Agenda

The day is divided into four phases:

### Phase 1: Single Node (09:00 - 10:30)

Build a key-value store that handles concurrent requests on a single machine. Understand the implications of threading, locking, and memory management.

### Phase 2: Replication (11:00 - 12:30)

Extend the system to multiple nodes. Encounter the CAP theorem not as a theoretical concept but as a practical constraint that forces design decisions.

### Phase 3: Failure (14:00 - 15:30)

Introduce network partitions, node failures, and clock skew. Watch your system behave in ways you did not anticipate. Learn to design for failure rather than against it.

### Phase 4: Recovery (16:00 - 17:30)

Implement recovery mechanisms. Understand consensus protocols, conflict resolution, and the operational reality of running distributed systems in production.

## Prerequisites

Participants should be comfortable with at least one systems programming language and have experience running networked services. The exercises are language-agnostic, but reference implementations are provided in Go and Rust.

## What to Bring

A laptop with Docker installed. All other dependencies are provided as container images.
