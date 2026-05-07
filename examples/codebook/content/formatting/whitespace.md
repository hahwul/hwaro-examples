+++
title = "Whitespace and Blank Lines"
weight = 30
+++

Whitespace is structural. It separates logical units within a function and signals the boundary between top-level declarations. Used carelessly, it inflates diffs and weakens the visual rhythm of the code.

## Blank Lines Between Declarations

Two blank lines separate top-level declarations in Python. One blank line separates them in JavaScript, TypeScript, Crystal, and Ruby. Methods inside a class are separated by a single blank line in every language we use.

## Blank Lines Inside Functions

Use a single blank line to mark a logical break inside a function. A function should not contain so many breaks that it reads as a list; if it does, the function is too long and should be split. Do not pad the start or end of a function body with a blank line.

<div class="code-comparison">
  <div class="comparison-item bad">
    <div class="comparison-label">Bad</div>
    <pre><code class="language-typescript">function loadInvoice(id: string) {

  const raw = db.fetch(id);

  const parsed = parse(raw);


  return parsed;

}</code></pre>
  </div>
  <div class="comparison-item good">
    <div class="comparison-label">Good</div>
    <pre><code class="language-typescript">function loadInvoice(id: string) {
  const raw = db.fetch(id);
  const parsed = parse(raw);
  return parsed;
}</code></pre>
  </div>
</div>

## Trailing Whitespace

Trailing whitespace at the end of a line is forbidden. The formatter removes it on save. Lines that end with significant whitespace, such as in a Markdown soft break, must be marked with an explicit `\` or with a trailing backslash escape, depending on the language.

## File Endings

Every text file ends with a single newline. Files that end without a newline produce noisy diffs and confuse line-oriented tools. Files that end with multiple newlines indicate a misconfigured editor.

## Tabs and Spaces

The codebase uses spaces exclusively. Tab characters are rejected by the pre-commit hook. The width of a tab is a property of the rendering environment, which is exactly what we want to avoid for source code.
