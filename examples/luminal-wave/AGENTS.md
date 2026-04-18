# Luminal Wave

The `luminal-wave` project is a dark-themed Hwaro example site featuring a "Luminal Wave" aesthetic. It utilizes a deep dark background (`#050510`), neon glowing accents (Cyan `#00ffff`, Magenta `#ff00ff`), fluid animated gradients, and frosted translucent content containers using `backdrop-filter: blur()`.

## CSS Guidelines

-   The site uses a central `style.css` file located in `static/`.
-   CSS variables for colors and effects should be defined in the `:root` pseudo-class.
-   Glassmorphism elements should use `backdrop-filter` and semi-transparent backgrounds (`rgba(20, 20, 35, 0.6)`).
-   Fonts used are **Space Grotesk** for headings and **Inter** for body text.

## Templates

-   `header.html` and `footer.html` contain structural elements including background orb effects.
-   `page.html` handles the layout for the index (hero view) and standard pages (glass panel view).
