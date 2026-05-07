+++
title = "Performance Awareness"
weight = 20
+++

Performance is a property of the system, not of any single line. Most performance work happens at the boundaries: the database, the network, and the cache. Within a hot loop, the rules tighten, but those loops are rare and should be identified by measurement rather than by intuition.

## Principles

1.  **Measure Before Optimizing:** Always start with a profile. The first guess at the bottleneck is usually wrong.
2.  **Optimize the Boundary, Then the Body:** A query plan or a chatty network call dominates a tight inner loop in almost every web service.
3.  **Prefer Algorithmic Improvements:** Reducing complexity from O(n^2) to O(n log n) is worth more than any micro-optimization.

## Database Access

Each request should issue a bounded, predictable number of queries. The N+1 pattern, where a list query is followed by a per-row lookup, is the single most common cause of slow endpoints.

<div class="code-comparison">
  <div class="comparison-item bad">
    <div class="comparison-label">Bad</div>
    <pre><code class="language-typescript">const orders = await db.orders.findMany();
for (const order of orders) {
  order.customer = await db.customers.find(order.customerId);
}</code></pre>
  </div>
  <div class="comparison-item good">
    <div class="comparison-label">Good</div>
    <pre><code class="language-typescript">const orders = await db.orders.findMany({
  include: { customer: true },
});</code></pre>
  </div>
</div>

## Caching

Cache only what is expensive to compute and stable enough to invalidate. A cache hides the cost of a slow path; it does not remove the path. Every cache entry must have a written invalidation strategy, even if that strategy is "expire after one hour."

## Allocations

Inside a hot loop, prefer reusing buffers over allocating new ones. Outside of hot loops, prefer clarity. Premature pooling produces code that is harder to read for no measurable benefit.

## Asynchronous Work

Batch independent asynchronous calls with `Promise.all` or its equivalent. Issuing them serially is a frequent and easily fixed source of latency.

## Verification

A change made in the name of performance must be accompanied by a benchmark in the pull request description. The benchmark must show the before-and-after numbers and the input shape. Without that evidence, the change is speculation.
