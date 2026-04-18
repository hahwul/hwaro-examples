# Luminous Void

This directory contains a dark-themed Hwaro example site featuring a 'Luminous Void' deep space aesthetic.

## Aesthetic Guidelines
- **Palette**: The design relies heavily on Void Black (`#050510`), Nebula Purple (`#8a2be2`), Starlight Blue (`#00d2ff`), and Cosmic White (`#e0e0e0`).
- **Styling**: Glowing elements are achieved primarily through `box-shadow` and `text-shadow` in CSS rather than actual image assets. Emojis and unnecessary decoration are avoided to maintain the stark, high-contrast style.
- **Typography**: Uses 'Space Grotesk' for display headers and 'Inter' for body text.

## Structural Notes
- **Modular Navigation**: This project uses a modular template structure for its navigation. Shared elements, including the navigation bar and the search overlay, have been extracted into `nav.html`.
- **Template Includes**: Auxiliary templates such as `404.html`, `taxonomy.html`, and `taxonomy_term.html` must include `nav.html` and properly maintain the layout hierarchy (e.g., `<div class="blog-container"><main class="blog-main">...</main></div>`) to ensure styling consistency with the rest of the site.