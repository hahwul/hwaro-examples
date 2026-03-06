+++
title = "Customizing Your Beautiful Hwaro Site"
date = "2024-05-18"
description = "A practical guide to personalizing your Beautiful Hwaro theme"
tags = ["hwaro", "customization", "tutorial"]
categories = ["tutorials"]
authors = ["Beautiful Hwaro"]
+++

Now that you have Beautiful Hwaro up and running, let's customize it to make it truly yours.

## Changing Site Information

Start with `config.toml`. Update these key fields:

```toml
title = "Your Site Name"
description = "Your site description"
base_url = "https://yourdomain.com"
```

## Updating Navigation

The navigation links are defined in `templates/header.html`. Find the navbar section and update the links:

```html
<ul class="navbar-nav">
  <li><a href="{{ base_url }}/">Home</a></li>
  <li><a href="{{ base_url }}/blog/">Blog</a></li>
  <li><a href="{{ base_url }}/projects/">Projects</a></li>
  <li><a href="{{ base_url }}/about/">About</a></li>
</ul>
```

## Customizing Colors

The theme uses CSS custom properties. Find the `:root` block in `header.html` and adjust:

```css
:root {
  --navbar-col: #FFFFFF;       /* Navbar background */
  --hover-col: #0085A1;        /* Accent color */
  --text-col: #404040;         /* Body text */
  --link-col: #008AFF;         /* Link color */
  --footer-col: #F5F5F5;       /* Footer background */
}
```

### Popular Color Schemes

**Ocean Blue** (default):
- Primary: `#0085A1`
- Links: `#008AFF`

**Forest Green**:
- Primary: `#2E7D32`
- Links: `#43A047`

**Sunset Orange**:
- Primary: `#E65100`
- Links: `#FF6D00`

## Adding Social Links

Update the footer in `templates/footer.html` with your social profiles:

```html
<div class="social-links">
  <a href="https://github.com/yourusername" class="github">
    <i class="fab fa-github"></i>
  </a>
  <!-- Add more links as needed -->
</div>
```

## Creating New Pages

Add a new `.md` file in `content/`:

```toml
+++
title = "Projects"
description = "Things I've built"
+++

## My Projects
...
```

## Adding Blog Posts

Create files in `content/blog/` with the naming convention `YYYY-MM-DD-slug.md`:

```toml
+++
title = "My New Post"
date = "2024-05-18"
tags = ["topic"]
+++

Post content here...
```

## Conclusion

Beautiful Hwaro is designed to be easily customizable. Start with the basics and iterate as your site grows. The most important thing is to make it your own!
