+++
title = "Shortcodes"
weight = 2
tags = ["content", "shortcodes"]
+++

# Shortcodes

Shortcodes let you embed rich components in your Markdown content without writing raw HTML.

## Hint

Use hints to draw attention to important information:

```
{{ hint(type="info", message="This is an informational hint.") }}
```

{{ hint(type="info", message="This is an informational hint.") }}

{{ hint(type="warning", message="Be careful with this operation.") }}

{{ hint(type="danger", message="This action cannot be undone.") }}

### Hint Types

| Type | Color | Usage |
|------|-------|-------|
| `info` | Blue | General information |
| `warning` | Yellow | Caution or prerequisites |
| `danger` | Red | Destructive actions or errors |

## Alert

Alerts are similar to hints but include a bold label:

```
{{ alert(type="tip", message="You can combine shortcodes with Markdown.") }}
```

{{ alert(type="tip", message="You can combine shortcodes with Markdown.") }}

{{ alert(type="warning", message="This feature requires version 0.8.0 or later.") }}

## Creating Custom Shortcodes

Shortcodes are Jinja2 templates placed in `templates/shortcodes/`. Each shortcode is a single HTML file that receives named parameters from the Markdown call.

For example, `templates/shortcodes/hint.html`:

```html
<div class="hint hint-{{ type | default(value='info') }}">
  {{ message }}
</div>
```
