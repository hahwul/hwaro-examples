# AGENTS.md - Luminous Glass

This document provides instructions for AI agents working on the `luminous-glass` Hwaro example site.

## Project Overview

`luminous-glass` is a dark-themed Hwaro example blog featuring a highly stylized glassmorphism aesthetic. The design aims to combine deep, rich backgrounds with frosted, semi-transparent content layers.

## Aesthetic & Design Rules

* **Palette:**
    * Dark Base: `#0f172a` (Deep Slate)
    * Text: `#f8fafc` (Soft White)
    * Accents: Bright, vibrant colors via radial gradients (e.g., Indigo `#6366f1`, Purple `#a855f7`, Sky `#38bdf8`)
* **Glassmorphism:**
    * Elements like headers, content wrappers (`.blog-main`), blockquotes, and search modals *must* retain their `backdrop-filter: blur(...)` properties.
    * Backgrounds for these elements should use highly transparent `rgba` values (e.g., `rgba(255, 255, 255, 0.02)` or `rgba(15, 23, 42, 0.5)`).
    * Borders should be subtle (`rgba(255, 255, 255, 0.1)`).
* **Background:** The `body::before` pseudo-element contains an animated `radial-gradient` that acts as the "light" source behind the frosted glass. Do not remove this animation.

## Template Structure Rules

* **Navigation (Crucial Constraint):**
    * To ensure consistency and avoid repetitive code, the `<header class="blog-header">` and `<div class="search-overlay">` elements have been extracted into `templates/nav.html`.
    * All primary templates (`page.html`, `section.html`, `post.html`, `404.html`, `taxonomy.html`, `taxonomy_term.html`) **must** include this navigation using `{% include "nav.html" %}`. Do not duplicate header markup in these files.
* **Layout Wrappers:**
    * The main content must be wrapped in `<div class="blog-container"><main class="blog-main">` to match the layout CSS and the closing tags in `footer.html`.

## Commands

* Build site: `hwaro build`
* Dev server: `hwaro serve`