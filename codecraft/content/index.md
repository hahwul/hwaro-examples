+++
title = "Codecraft"
+++

This documentation site is designed to look sophisticated, trendy, and entirely focused on the developer experience. It features clean typography, a deep dark theme, and custom components for showcasing technical content.

## Features

- **Refined Typography** - Crisp, readable fonts for prose and code.
- **Deep Dark Theme** - Easy on the eyes, elegant, and minimal.
- **No Gradients** - Solid colors and subtle borders ensure a timeless look.

## Inline Code Playgrounds

Simulate live code execution or interactive examples. The dual-pane layout separates the code from the visual output or interactive state.

<div class="code-playground">
  <div class="code-playground-header">
    <span>React Component</span>
    <span>Live Preview</span>
  </div>
  <div class="code-playground-body">
<pre><code class="language-jsx">function Greeting({ name }) {
  return (
    &lt;div className="greeting"&gt;
      Hello, {name}!
    &lt;/div&gt;
  );
}</code></pre>
    <div class="code-playground-preview" style="display:flex; align-items:center; justify-content:center; color:#58a6ff; font-weight:bold;">
      Hello, Developer!
    </div>
  </div>
</div>

## API Endpoint Cards

Present your RESTful or GraphQL endpoints cleanly with distinct methods and parameters.

<div class="api-card">
  <div class="api-card-header">
    <span class="api-method get">GET</span>
    <span class="api-endpoint">/api/v1/users/{id}</span>
  </div>
  <div class="api-card-body">
    <p>Retrieve the details of a specific user by their unique identifier.</p>
    <br>
    <h5>Parameters</h5>
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>id</code></td>
        <td>String</td>
        <td>The UUID of the user to retrieve.</td>
      </tr>
      <tr>
        <td><code>include_profile</code></td>
        <td>Boolean</td>
        <td>Whether to include extended profile data.</td>
      </tr>
    </table>
  </div>
</div>

<div class="api-card">
  <div class="api-card-header">
    <span class="api-method post">POST</span>
    <span class="api-endpoint">/api/v1/users</span>
  </div>
  <div class="api-card-body">
    <p>Create a new user in the system.</p>
  </div>
</div>

## Terminal Styled Blocks

Show CLI commands and server output in realistic terminal windows.

<div class="terminal-window">
  <div class="terminal-header">
    <div class="terminal-controls">
      <span class="close"></span>
      <span class="minimize"></span>
      <span class="maximize"></span>
    </div>
    <div class="terminal-title">bash - server-deploy</div>
  </div>
<pre><code class="language-bash">$ hwaro build --minify
Building site in /codecraft...
✓ Processed 14 markdown files
✓ Generated 21 html files
✓ Processed static assets
Done in 142ms. Output to public/</code></pre>
</div>
