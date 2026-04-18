+++
title = ""
date = "2026-03-22T11:15:00"
description = "CSS nesting is now supported in all major browsers. One less reason to reach for a preprocessor."
tags = ["css"]
template = "post"
+++

CSS nesting is now supported in all major browsers. One less reason to reach for a preprocessor.

```css
.card {
  padding: 1rem;

  & .title {
    font-weight: 700;
  }
}
```
