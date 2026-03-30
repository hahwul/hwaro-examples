+++
title = "Level A Guidelines"
description = "Minimum level of web accessibility compliance."
weight = 10
+++

# Level A Compliance
## Minimum Accessibility Standards

Level A is the absolute minimum requirement for a website to be considered accessible. Failure to meet these criteria creates significant barriers for users with disabilities.

### 1.1 Perceivable: Text Alternatives

#### 1.1.1 Non-text Content
All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.

**Implementation Checklist:**
- [ ] Provide alt text for all informative images.
- [ ] Use empty alt attributes (`alt=""`) for decorative images.
- [ ] Provide text labels for functional icons (e.g., search buttons).

### 1.3 Adaptable: Content Structure

#### 1.3.1 Info and Relationships
Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

**Technical Requirements:**
- Use semantic HTML tags (e.g., `<h1>`, `<nav>`, `<footer>`).
- Ensure form fields have properly associated `<label>` elements.
- Maintain a logical heading hierarchy.

#### 1.3.2 Meaningful Sequence
When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

### 1.4 Distinguishable

#### 1.4.1 Use of Color
Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

---

*This level must be achieved by all digital products.*
