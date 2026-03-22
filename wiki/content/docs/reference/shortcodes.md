+++
title = "Shortcodes"
weight = 3
description = "Reusable content components you can use in Markdown"
tags = ["shortcodes", "reference"]
categories = ["reference"]
+++

# Shortcodes

Shortcodes are reusable components that extend Markdown with custom functionality. Use them in your content files to embed rich elements.

## Alert

Display a notice, warning, or informational message.

**Syntax:**

```markdown
{{ alert(type="info", message="This is an informational message.") }}
```

**Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `type` | yes | Alert style: `info`, `warning`, `danger`, `success` |
| `message` | yes | The alert text |

**Examples:**

{{ alert(type="info", message="This is an informational alert.") }}

{{ alert(type="warning", message="Proceed with caution when modifying configuration files.") }}

{{ alert(type="danger", message="This action cannot be undone.") }}

{{ alert(type="success", message="Your changes have been saved successfully.") }}

## Creating Custom Shortcodes

Shortcodes are Jinja2 templates stored in `templates/shortcodes/`. The filename becomes the shortcode name.

Create `templates/shortcodes/note.html`:

```html
<div class="note">
  <strong>{{ title }}</strong>
  <p>{{ message }}</p>
</div>
```

Use it in content:

```markdown
{{ note(title="Remember", message="Save your work frequently.") }}
```

### Available Variables

Inside a shortcode template, you can access:

- All parameters passed to the shortcode
- `site` object for site-wide configuration
- `page` object for the current page

### Block Shortcodes

For shortcodes that wrap content:

```html
{# templates/shortcodes/details.html #}
<details>
  <summary>{{ summary }}</summary>
  {{ body }}
</details>
```

Usage:

```markdown
{% details(summary="Click to expand") %}
Hidden content goes here.
{% enddetails %}
```
