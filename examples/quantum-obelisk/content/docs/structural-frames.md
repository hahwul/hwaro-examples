+++
title = "Structural Frames"
description = "Geometric constraints on monolithic interface design."
+++

# Structural Frames

A monolithic frame imposes the same constraint on every element it contains: nothing escapes the grid. The grid is not decorative. It is the substrate on which alignment, hierarchy, and rhythm are negotiated. When the grid yields, the frame loses its monolithic character and becomes ordinary.

## Grid Definition

The base grid is twelve columns wide with a fixed gutter. The gutter is a function of the column width, set at one quarter of the column dimension, and it is never adjusted at the page level. Adjusting the gutter to fit a particular layout decision is the most common way to break the system, and once broken, the system cannot be repaired without rebuilding the affected pages.

```css
.frame {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: calc(var(--column-width) / 4);
}
```

## Vertical Rhythm

The vertical axis is governed by a baseline grid pinned to the dominant typeface. Every block element snaps to a baseline multiple. Headings consume two baselines, body paragraphs consume one per line, and inline media is constrained to baseline multiples through reserved aspect ratios. The result is a page that holds together at any zoom level.

## Edge Cases

Two situations require deliberate handling. The first is wide media that exceeds the column count. The remedy is to break the media out of the grid into a full-bleed track that spans the viewport, then return the next element to the standard twelve-column structure. The second is asymmetric pairings, where a sidebar element and a content element share a row. The pairing must respect the gutter, even when the sidebar is narrow enough that the gutter dominates its width.

## Maintenance

Audit the grid weekly. Drift accumulates from incremental layout decisions, and the only reliable way to detect drift is to overlay the grid on rendered pages and look for misaligned elements. Five misalignments per page is the threshold at which intervention becomes necessary.
