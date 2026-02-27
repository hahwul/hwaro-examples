+++
title = "Why Dark Themes Matter"
date = "2026-02-20"
tags = ["design", "ui", "dark-theme"]
categories = ["blog"]
description = "Exploring the benefits and considerations of dark theme design."
+++

Dark themes have become increasingly popular in modern web design. Let's explore why.

## Benefits

### Reduced Eye Strain

Dark backgrounds with light text can be easier on the eyes, especially in low-light environments. This is particularly important for developers and writers who spend hours staring at screens.

### Battery Savings

On OLED and AMOLED displays, dark pixels consume less power. A dark theme can noticeably extend battery life on mobile devices.

### Focus on Content

Dark themes naturally draw attention to the content, creating a distraction-free reading experience. The reduced visual noise helps readers focus on what matters.

## Design Considerations

When implementing a dark theme, keep these in mind:

```css
:root {
  --text: #c6cddb;        /* Soft, not pure white */
  --bg: #494f5c;          /* Not pure black */
  --accent: #018574;      /* Teal accent color */
  --code-bg: #31333d;     /* Slightly darker for code */
}
```

Key principles:

1. **Avoid pure black** - Use dark grey instead for a softer feel
2. **Reduce contrast slightly** - Pure white on pure black is harsh
3. **Use accent colors carefully** - They stand out more on dark backgrounds
4. **Test readability** - Ensure sufficient contrast ratios for accessibility

## The Hermit Approach

This theme uses a carefully selected dark palette inspired by [hermit_zola](https://github.com/VersBinarii/hermit_zola):

| Element | Color | Purpose |
|---------|-------|---------|
| Background | `#494f5c` | Main page background |
| Header | `#3b3e48` | Navigation bar |
| Code blocks | `#31333d` | Code background |
| Text | `#c6cddb` | Primary text |
| Accent | `#018574` | Links and highlights |

The result is a cohesive, comfortable reading experience that works well day and night.
