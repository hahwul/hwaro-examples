+++
title = "CLI Command Reference"
description = "Comprehensive guide to all Command Center CLI tools and utilities."
+++

The Command Center CLI (`cc`) is your primary interface for interacting with the platform. Below is a detailed reference of available commands and their options.

## Global Options

The following flags can be used with any command:

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Flag</th>
        <th>Description</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--verbose</code></td>
        <td>Enable detailed logging output for debugging.</td>
        <td><code>false</code></td>
      </tr>
      <tr>
        <td><code>--config</code></td>
        <td>Path to a custom configuration file.</td>
        <td><code>./cc.toml</code></td>
      </tr>
      <tr>
        <td><code>--format</code></td>
        <td>Output format: <code>text</code>, <code>json</code>, or <code>yaml</code>.</td>
        <td><code>text</code></td>
      </tr>
    </tbody>
  </table>
</div>

## `cc init`

Initialize a new project environment.

```bash
cc init [project-name] [flags]
```

### Options

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--template</code></td>
        <td>Specify a starter template (e.g., <code>api</code>, <code>web</code>, <code>worker</code>).</td>
      </tr>
      <tr>
        <td><code>--private</code></td>
        <td>Initialize as a private repository.</td>
      </tr>
    </tbody>
  </table>
</div>

## `cc deploy`

Deploy your project to the Command Center cloud.

```bash
cc deploy [environment]
```

### Examples

Deploy to the production environment:
```bash
cc deploy production --verbose
```

## `cc status`

Check the real-time status of your services.

```bash
cc status --watch
```

<div class="info-box warning">
  <strong>Warning:</strong> Continuous watching of status may consume significant bandwidth in large-scale deployments.
</div>
