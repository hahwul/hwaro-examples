+++
title = "Level AA Guidelines"
description = "Standard level of web accessibility compliance."
weight = 20
+++

# Level AA Compliance
## Standard Accessibility Requirements

Level AA is the target level of accessibility for most websites. It removes more barriers and is required by law in many jurisdictions.

### 1.4 Distinguishable: Contrast

#### 1.4.3 Contrast (Minimum)
The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for large text, which requires 3:1.

**Guidelines for Compliance:**
- Normal text: 4.5:1 ratio.
- Large text (18pt or 14pt bold): 3:1 ratio.
- Incidental or decorative text has no requirement.

#### 1.4.4 Resize Text
Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.

### 2.4 Navigable: Focus

#### 2.4.7 Focus Visible
Any keyboard-operable user interface has a mode of operation where the keyboard focus indicator is visible.

**Technical Implementation:**
- Do not use `outline: none` without providing a custom focus state.
- Ensure high-contrast focus indicators.

### 3.2 Predictable

#### 3.2.3 Consistent Navigation
Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

---

*This level is recommended for all professional websites.*
