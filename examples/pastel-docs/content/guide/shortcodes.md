+++
title = "Shortcodes"
+++

Let's make your content even more engaging together! Shortcodes in Pastel Docs are designed to be friendly and easy to use.

## Using the `alert` shortcode

Need to grab someone's attention with a gentle message? Just use the `alert` shortcode:

```markdown
{{ alert(type="note", content="A friendly tip: You're doing a great job!") }}
```

## Creating new shortcodes

Want to add your own friendly components? You can easily create new shortcodes in the `templates/shortcodes/` folder!

- **`alert.html`:** A gentle message for your readers.
- **`button.html`:** A friendly call to action!

<div class="info-box note">
  **A friendly tip:** You can see your shortcode changes instantly as you save them! It's like magic, but better.
</div>

## Using Shortcodes in your content

Just like this:

```markdown
{{ alert(type="tip", content="A friendly tip: You can use shortcodes in any page!") }}
```

Happy writing!
