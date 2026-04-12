+++
title = "Components"
+++

Components (shortcodes) are reusable content snippets you can embed in your research sequence to enhance data synthesis.

## Using Components

In your Markdown content:

```jinja
{{ alert(type="info", message="This is an info alert") }}
```

## Built-in Components

### Alert

Display an alert box for critical parameters or findings:

```jinja
{{ alert(type="warning", message="Be careful!") }}
```

Available types: `note`, `warning`, `tip`

## Synthesis Examples

### Warning Node

{{ alert(type="warning", message="Data contamination detected in trial 4-B.") }}

### Prototyping Tip

{{ alert(type="tip", message="Always isolate your environment before synthesis.") }}

## Advanced Components

Shortcode templates are located in `templates/shortcodes/`. They have access to all passed arguments plus the `site` and `page` objects, allowing for highly dynamic and contextual UI elements.
