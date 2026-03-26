+++
title = "Understanding System Design Tradeoffs"
date = "2026-03-10"
description = "There are no right answers in system design. There are only tradeoffs, and the quality of your architecture depends on how honestly you evaluate them."
tags = ["systems", "engineering"]
categories = ["architecture"]
template = "post"
+++

The most common mistake in system design is searching for the best solution. There is no best solution. There are only solutions that trade one set of problems for another. The art of architecture is choosing which problems you would rather have.

## Consistency vs. Availability

The CAP theorem is well known, but its practical implications are poorly understood. Most real systems do not face a binary choice between consistency and availability. They face a spectrum of decisions about how much inconsistency is tolerable, for how long, and for which operations.

A shopping cart can tolerate eventual consistency. An account balance cannot. A social media feed can show stale data for seconds. A financial ledger must not. These are product decisions disguised as technical ones, and they should be made with product people in the room.

## Monolith vs. Microservices

The monolith-to-microservices narrative has caused enormous damage. Not because microservices are bad, but because the narrative implies that monoliths are a problem to be solved rather than a legitimate architecture.

A well-structured monolith, with clear module boundaries and disciplined dependency management, is easier to deploy, debug, and reason about than a distributed system. Microservices introduce network boundaries, serialization costs, partial failure modes, and distributed tracing overhead. These costs are justified when you need independent deployment, independent scaling, or organizational autonomy. For many teams, none of these apply.

## Latency vs. Throughput

You can optimize for the speed of individual requests or the volume of requests processed per unit of time. These goals often conflict.

Batching improves throughput at the cost of individual latency. Caching improves latency at the cost of freshness. Queuing improves resilience at the cost of immediacy. Each of these tradeoffs has a right answer that depends entirely on your specific requirements.

## Simplicity vs. Flexibility

This may be the most important tradeoff of all. Simple systems are easy to understand, easy to operate, and easy to change. Flexible systems accommodate more use cases but carry more complexity.

The instinct is always to build for flexibility, because it feels like good engineering. But flexibility you do not need is indistinguishable from unnecessary complexity. Every abstraction that exists to support a hypothetical future requirement is a tax on everyone who reads, debugs, or modifies the system today.

## Making Tradeoffs Explicit

Document your tradeoffs. Write down what you chose, what you gave up, and why. This practice has two benefits. First, it forces you to articulate your reasoning, which often reveals assumptions you did not know you were making. Second, it gives future engineers the context they need to evaluate whether the tradeoff still holds as requirements evolve.

Architecture is not a destination. It is a continuous series of bets, and the best architects are the ones who make their bets with open eyes.
