+++
title = "The Case for Boring Technology"
date = "2026-03-15"
description = "Every technology choice is a bet. Boring technology is a bet with known odds, and in production systems, known odds are everything."
tags = ["engineering", "systems"]
categories = ["engineering"]
template = "post"
+++

Dan McKinley wrote the definitive piece on this topic years ago, and the core argument has only grown stronger with time: you should choose technologies you understand deeply over technologies that excite you.

This is counterintuitive in an industry that celebrates the new. But production systems do not care about novelty. They care about uptime, debuggability, and the speed at which your team can respond when something goes wrong at three in the morning.

## Innovation Tokens

McKinley's framing of "innovation tokens" remains useful. Every organization has a limited capacity for absorbing new, unfamiliar technology. Spend that capacity on the problems that are genuinely unique to your business. For everything else, use the proven tool.

If your core challenge is search relevance, spend your innovation token there. Use PostgreSQL for your data, Rails or Django for your web layer, and Redis for your cache. These are boring choices. They are also correct choices, because they free your attention for the problem that actually differentiates your product.

## The Hidden Cost of New

New technology carries hidden costs that do not appear in the README:

- **Sparse documentation.** The edge cases that matter most are the ones nobody has written about yet.
- **Small community.** When you hit a wall, fewer people have hit it before you.
- **Immature tooling.** Debugging, profiling, and monitoring support arrives late.
- **Migration risk.** The API may change under your feet. Early adopters absorb the cost of the ecosystem finding its shape.

None of these are arguments against new technology in absolute terms. They are arguments against adopting new technology without accounting for its true cost.

## When to Choose New

There are legitimate reasons to adopt something new. The existing tool may be fundamentally incapable of meeting a requirement. The new tool may address a category of problem that nothing else does. Performance characteristics may genuinely matter at your scale.

The key is honesty. Most of the time, the reason engineers want to use something new is that it is interesting. Interest is a valid motivation for personal projects. It is not sufficient justification for production infrastructure that a team must maintain for years.

## A Practical Heuristic

Before adopting a new technology, ask three questions. Has it been in production at a company of similar scale for at least two years? Can you find detailed postmortems from teams that use it? Does your team have at least one person who has operated it under real load?

If the answer to any of these is no, you are spending an innovation token. Make sure it is worth it.
