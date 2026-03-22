+++
title = "Shortcodes"
weight = 7
description = "Reusable template components"
tags = ["templates"]
[extra]
chapter = "Templates"
+++

# Shortcodes

Embed reusable components directly in your Markdown.

## Defining a Shortcode

Create a file in `templates/shortcodes/`:

```html
<!-- templates/shortcodes/alert.html -->
{% raw %}<div class="alert alert-{{ type }}">
  <strong>{{ title }}</strong>
  <p>{{ message }}</p>
</div>{% endraw %}
```

## Using in Content

```markdown
{% raw %}{{ alert(type="warning", title="Note", message="This is important.") }}{% endraw %}
```

## Common Use Cases

- **Alerts** -- Info, warning, error messages
- **Figures** -- Images with captions
- **Embeds** -- YouTube, CodePen, etc.
- **Call-to-action** -- Buttons, banners
- **Code tabs** -- Multi-language examples
