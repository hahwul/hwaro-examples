+++
title = "Templates"
+++

Let's make your project look exactly how you want it to! Templates in Pastel Docs are designed to be friendly and flexible.

## The `templates/` folder

Your project's look is defined by the templates in the `templates/` folder. We've made them easy to understand and customize:

- **`header.html`:** The friendly top bar with your logo and navigation.
- **`footer.html`:** The gentle bottom section for your project's information.
- **`page.html`:** The main layout for your individual pages.
- **`section.html`:** The layout for your section overview pages.

## Customizing the `header.html`

Want to change the logo or the navigation links? Just open up `templates/header.html` and make your changes together!

```html
<header class="docs-header">
  <a href="{{ base_url }}/" class="logo">My Friendly Logo</a>
  <nav>
    <a href="{{ base_url }}/getting-started/">Getting Started</a>
    <!-- Add your own links here! -->
  </nav>
</header>
```

<div class="info-box note">
  **A friendly tip:** You can see your template changes instantly as you save them! It's like magic, but better.
</div>

## Using Crinja

Templates in Pastel Docs use a friendly language called Crinja. It's designed to be simple and easy to learn. Let's make something fantastic together!
