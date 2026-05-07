+++
title = "Testing Discipline"
weight = 30
+++

Tests are a contract between the author of a module and every future reader. They describe the shape of valid inputs, the shape of valid outputs, and the failure modes the module promises to handle. A change that breaks a test is a change to that contract.

## Principles

1.  **Test Behavior, Not Implementation:** A test should fail when the public behavior changes, not when an internal helper is renamed.
2.  **One Assertion Concept Per Test:** A test may carry multiple `expect` calls, but they should verify a single behavioral claim.
3.  **Keep Tests Independent:** No test depends on the order of execution or on the side effects of another test.

## Test Pyramid

The bulk of test coverage lives at the unit level. A smaller layer of integration tests verifies that real adapters cooperate. A thin layer of end-to-end tests covers the critical user paths and runs in the deployment pipeline rather than on every commit.

```
end-to-end       (10 tests)
integration      (100 tests)
unit             (1,000 tests)
```

## Naming the Test

A test name describes the input condition and the expected outcome. The reader should not need to read the body to understand what the test verifies.

<div class="code-comparison">
  <div class="comparison-item bad">
    <div class="comparison-label">Bad</div>
    <pre><code class="language-typescript">test("works", () => { /* ... */ });
test("invoice", () => { /* ... */ });</code></pre>
  </div>
  <div class="comparison-item good">
    <div class="comparison-label">Good</div>
    <pre><code class="language-typescript">test("rejects an invoice with a negative line item", () => { /* ... */ });
test("formats currency in the customer's locale", () => { /* ... */ });</code></pre>
  </div>
</div>

## Fixtures and Factories

Prefer factories that produce minimal valid objects with named overrides. A factory keeps the relevant fields in the test body and hides the irrelevant ones, which makes the test's intent obvious.

## Flaky Tests

A flaky test is a defect, not a nuisance. Quarantine it within one business day. Investigate the root cause before re-enabling. Common sources of flakiness are time-dependent assertions, shared mutable state, and unstable orderings.

## Coverage

Coverage is a diagnostic, not a goal. Use it to find untested branches. Do not write tests whose only purpose is to raise the coverage number; those tests verify nothing and slow the suite.
