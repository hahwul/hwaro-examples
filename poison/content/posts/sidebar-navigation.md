+++
title = "Sidebar Navigation Patterns"
date = "2026-02-15"
tags = ["design", "navigation", "css"]
categories = ["design"]
description = "Exploring sidebar navigation design patterns for blogs and documentation sites."
+++

Sidebar navigation is a classic pattern that keeps navigation accessible while maximizing content space. Let's explore how the Poison theme implements this.

## The Two-Column Layout

The Poison theme uses a flexbox-based two-column layout:

- **Sidebar** (fixed width, 18rem): Contains branding, navigation links, and social icons
- **Content area** (flexible): Scrolls independently from the sidebar

```css
body {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 18rem;
  height: 100vh;
  overflow-y: auto;
}

.content-wrapper {
  flex-grow: 1;
  overflow-y: auto;
}
```

## Navigation Hierarchy

The sidebar navigation supports two levels:

1. **Headings** — Section labels styled in muted gray
2. **Bullet items** — Indented links under each heading

This hierarchy helps organize content without overwhelming the reader.

## Mobile Responsiveness

On screens smaller than 48em, the sidebar collapses and a hamburger menu button appears. The sidebar slides in as an overlay when toggled.

## Table of Contents

On very wide screens (100em+), a floating table of contents appears on the right side of the content area. This provides a third level of navigation for long articles.
