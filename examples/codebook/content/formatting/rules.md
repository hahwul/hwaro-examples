+++
title = "Formatting Rules"
weight = 10
+++

Consistency in formatting makes the codebase more predictable and easier to read for everyone.

## Indentation and Spacing

-   **Indentation:** Use 2 spaces for indentation. Never use tabs.
-   **Max Line Length:** 100 characters per line.
-   **Trailing Whitespace:** Remove all trailing whitespace.
-   **Newlines:** End every file with a single newline character.

## Language-Specific Formatting

<div class="tab-container">
  <div class="tab-header">
    <button class="tab-button active" data-tab="js">JavaScript</button>
    <button class="tab-button" data-tab="py">Python</button>
    <button class="tab-button" data-tab="cr">Crystal</button>
  </div>
  <div class="tab-content active" data-tab="js">
    <pre><code class="language-javascript">// JavaScript formatting style
function greet(name) {
  if (!name) return "Hello, Stranger!";
  
  return `Hello, ${name}!`;
}</code></pre>
  </div>
  <div class="tab-content" data-tab="py">
    <pre><code class="language-python"># Python formatting style (PEP 8)
def greet(name=None):
    if not name:
        return "Hello, Stranger!"
        
    return f"Hello, {name}!"</code></pre>
  </div>
  <div class="tab-content" data-tab="cr">
    <pre><code class="language-crystal"># Crystal formatting style
def greet(name : String? = nil)
  return "Hello, Stranger!" unless name
  
  "Hello, #{name}!"
end</code></pre>
  </div>
</div>

## Lint Rules

| Rule Name | Severity | Description |
| :--- | :--- | :--- |
| `no-unused-vars` | Error | Prevent unused variables from polluting the codebase |
| `semi` | Warning | Ensure consistent semicolon usage |
| `quotes` | Error | Enforce single quotes for strings |
| `indent` | Error | Strictly enforce 2-space indentation |
| `max-len` | Warning | Limit line length to 100 characters |
| `no-console` | Error | Prevent accidental console.log in production |

## Auto-Formatting

We use **Prettier** for automated formatting. Please ensure your editor is configured to format-on-save using the project's `.prettierrc` configuration.
