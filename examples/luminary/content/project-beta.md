+++
title = "Project Beta"
date = 2024-06-22
description = "A typographic studio for long-form publications."
template = "page"
+++

## Premise

Project Beta began as a quiet response to the noise of contemporary publishing tools. The brief called for a writing environment that respected the rhythm of long-form prose and refused to interrupt the writer with peripheral concerns. The result is a studio built around a single column of well-set text and a sidebar of metadata that recedes when not needed.

## Typography

The composition engine handles ligatures, optical sizing, and hanging punctuation. Body copy is drawn from a humanist serif tuned for screen rendering, with a complementary sans-serif reserved for marginalia. Line length is fixed at sixty-six characters, and line height adjusts with the working font size to preserve the proportional relationship between baseline grid and stroke weight.

## Workflow

Drafts are stored in plain text with a small set of inline annotations for emphasis, citation, and structural markers. The system maintains a continuous version history without requiring explicit save or commit actions, and the history is browsable from a side panel that opens on demand. Side notes attach to specific paragraphs and travel with the paragraph if the writer rearranges the document.

```javascript
function applyOpticalSizing(point) {
  return point < 14 ? "regular" : "display";
}
```

The studio has been used to produce three book-length manuscripts and a quarterly journal. The interface holds up under sustained writing sessions, and the typography survives the transition from screen to print without intervention.
