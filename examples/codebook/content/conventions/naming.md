+++
title = "Naming Conventions"
weight = 10
+++

Clear and consistent naming is the foundation of readable code. This section outlines our expectations for variable, function, and class names.

## Principles

1.  **Be Descriptive:** Names should clearly state the purpose of the element.
2.  **Be Concise:** Avoid overly long names, but never sacrifice clarity for brevity.
3.  **Use English:** Use standard English for all code elements.

## Good vs. Bad Examples

<div class="code-comparison">
  <div class="comparison-item bad">
    <div class="comparison-label">Bad</div>
    <pre><code class="language-javascript">// Non-descriptive naming
const d = new Date();
const x = 10;
function calc(a, b) {
  return a * b;
}</code></pre>
  </div>
  <div class="comparison-item good">
    <div class="comparison-label">Good</div>
    <pre><code class="language-javascript">// Descriptive and clear naming
const currentDate = new Date();
const maxRetryCount = 10;
function calculateTotalPrice(quantity, unitPrice) {
  return quantity * unitPrice;
}</code></pre>
  </div>
</div>

## Boolean Naming

Booleans should always be prefixed with `is`, `has`, `can`, or `should`.

<div class="code-comparison">
  <div class="comparison-item bad">
    <div class="comparison-label">Bad</div>
    <pre><code class="language-javascript">const active = true;
const exists = false;
const write = true;</code></pre>
  </div>
  <div class="comparison-item good">
    <div class="comparison-label">Good</div>
    <pre><code class="language-javascript">const isActive = true;
const hasRecords = false;
const canWrite = true;</code></pre>
  </div>
</div>
