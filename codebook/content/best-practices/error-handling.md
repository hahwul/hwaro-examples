+++
title = "Error Handling"
weight = 10
+++

Robust error handling is critical for maintaining application stability and providing a good user experience.

## Principles

1.  **Fail Fast:** Catch and handle errors as early as possible.
2.  **Provide Context:** Include meaningful information in error messages.
3.  **Recover Gracefully:** Attempt to recover or provide a fallback when an error occurs.
4.  **Log Strategically:** Log errors that require developer attention, but avoid noise.

## Good vs. Bad Examples

<div class="code-comparison">
  <div class="comparison-item bad">
    <div class="comparison-label">Bad</div>
    <pre><code class="language-javascript">// Swallowing errors
try {
  const data = JSON.parse(response);
} catch (e) {
  // Do nothing
}</code></pre>
  </div>
  <div class="comparison-item good">
    <div class="comparison-label">Good</div>
    <pre><code class="language-javascript">// Explicitly handling errors
try {
  const data = JSON.parse(response);
} catch (error) {
  logger.error("Failed to parse response JSON", { error, response });
  throw new ParseError("Server returned invalid data format");
}</code></pre>
  </div>
</div>

## Throwing Errors

Always throw specialized error classes instead of generic `Error` or strings.

<div class="code-comparison">
  <div class="comparison-item bad">
    <div class="comparison-label">Bad</div>
    <pre><code class="language-javascript">if (!user) {
  throw "No user found";
}</code></pre>
  </div>
  <div class="comparison-item good">
    <div class="comparison-label">Good</div>
    <pre><code class="language-javascript">if (!user) {
  throw new NotFoundError(`User with ID ${userId} could not be found`);
}</code></pre>
  </div>
</div>
