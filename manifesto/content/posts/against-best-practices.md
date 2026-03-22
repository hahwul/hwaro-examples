+++
title = "Against Best Practices"
date = "2026-03-01"
description = "Best practices are yesterday's solutions applied to today's problems. Think instead of copying."
tags = ["opinion", "engineering", "craft"]
categories = ["technology"]
+++

The phrase "best practice" should make you suspicious. Not because the advice is always wrong, but because the phrase is designed to end discussion. It says: *do not think about this. Someone already thought about it for you.*

That is a dangerous invitation.

<!-- more -->

## The Origin Problem

Every best practice started as someone's specific solution to a specific problem in a specific context. Then it got written up in a blog post, repeated at a conference, codified in a linter rule, and enforced in a code review. Somewhere along the way, the context evaporated.

"Always write unit tests" is good advice for a payment processing system. It is questionable advice for a prototype that will be thrown away next week. But the best practice does not distinguish between the two.

"Use dependency injection" makes sense in a large Java codebase with multiple deployment targets. It is pure overhead in a 200-line Python script. But the best practice does not care about your line count.

## The Cargo Cult

The real damage happens when teams adopt practices without understanding *why* they exist. They see a successful company doing X, and they conclude that X is the reason for the success. So they do X too, and when it does not work, they do X harder.

- Google uses microservices, so we should use microservices
- Netflix does chaos engineering, so we should do chaos engineering
- Stripe has a monorepo, so we should have a monorepo

This is not engineering. This is superstition.

Google uses microservices because they have thousands of engineers working on a system that serves billions of requests. You have twelve engineers and a Series A. **Your problems are not their problems.**

## What to Do Instead

Replace "best practice" with "default choice." A default is something you start with and change when you have a reason. A best practice is something you follow even when it hurts.

Ask three questions before adopting any practice:

1. **What problem does this solve?** If you cannot name it, you do not need it.
2. **Do I have that problem?** Not "might I have it someday" -- do I have it now?
3. **What does this cost?** Every practice has overhead. Time, complexity, cognitive load. Is the tradeoff worth it?

If the answer to all three is yes, proceed. If not, do the simpler thing and revisit when the situation changes.

## The Courage of Simplicity

It takes courage to look at an industry full of sophisticated tooling and say: *I do not need that.* It takes courage to ship code that an interviewer might call naive. It takes courage to optimize for clarity over cleverness.

But that courage is what separates engineers who build things that work from engineers who build things that impress other engineers.

**Build things that work.**
