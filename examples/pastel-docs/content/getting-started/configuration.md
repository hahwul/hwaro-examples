+++
title = "Configuration"
+++

Let's make this project feel exactly like you! Configuring Pastel Docs is designed to be a gentle and intuitive process.

## The `config.toml` file

Your project's heart lives in the `config.toml` file. This is where you can give your project a title, a description, and more!

```toml
# =============================================================================
# Site Configuration
# =============================================================================

title = "My Friendly Project"
description = "A beautiful, approachable documentation site."
base_url = "http://localhost:3000"
```

## Customizing the Look

You can make Pastel Docs truly your own by adjusting the CSS variables in `static/css/style.css`.

- **Primary Color:** `--primary`
- **Pastel Colors:** `--pastel-blue`, `--pastel-pink`, and more!

<div class="info-box note">
  **A friendly tip:** Don't be afraid to experiment! We've made it easy to try out new colors and see what feels best for you.
</div>

## Adding a Logo

You can easily add your own logo to the header by updating the `header.html` template. Let's make it look fantastic together!
