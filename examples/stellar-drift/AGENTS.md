# Stellar Drift Context

This is a Hwaro example site demonstrating a futuristic, dark sci-fi portfolio aesthetic.

## Aesthetic & Design
*   **Palette:** Deep space darks (`#0a0b10`, `#141526`) with neon cyan (`#00f0ff`) and magenta (`#ff0055`) glowing accents.
*   **Typography:** Space Grotesk (for headers) and Inter (for body).
*   **Key Features:** Glassmorphism (`backdrop-filter`), CSS particle background layer (`.particle-layer` in header.html), glowing box shadows and borders.
*   **Tone:** The copy should reflect a space-faring, "interstellar exploration" or "mission control" logbook feel.

## Architecture
*   `header.html` contains the main CSS, particle background, and layout scaffolding.
*   `page.html` wraps markdown content in a `.content-glass` glassmorphism card.
*   `section.html`, `taxonomy.html`, and `taxonomy_term.html` manage lists of pages/terms with the same `.content-glass` styling or stylized `ul.section-list` items.
*   `content/_index.md` acts as the root homepage.
