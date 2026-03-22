+++
title = "Typography"
tags = ["design", "typography"]
+++

## Typeface

The system uses **Inter** as the primary sans-serif family and a monospace stack for code and token values. Inter provides excellent readability at small sizes and clean geometric forms at display sizes.

| Property | Value |
|---|---|
| Sans-serif | Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif |
| Monospace | SF Mono, Cascadia Code, Fira Code, monospace |

## Type Scale

Each step in the scale serves a specific role. Avoid using arbitrary font sizes outside of this set.

<div class="type-specimen">
  <div class="type-specimen-label">
    Display
    <span class="type-specimen-css">36px / 700</span>
  </div>
  <div class="type-specimen-sample" style="font-size: 36px; font-weight: 700; letter-spacing: -0.03em;">
    The quick brown fox jumps
  </div>
</div>

<div class="type-specimen">
  <div class="type-specimen-label">
    Heading 1
    <span class="type-specimen-css">28px / 700</span>
  </div>
  <div class="type-specimen-sample" style="font-size: 28px; font-weight: 700; letter-spacing: -0.02em;">
    The quick brown fox jumps over the lazy dog
  </div>
</div>

<div class="type-specimen">
  <div class="type-specimen-label">
    Heading 2
    <span class="type-specimen-css">22px / 700</span>
  </div>
  <div class="type-specimen-sample" style="font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">
    The quick brown fox jumps over the lazy dog
  </div>
</div>

<div class="type-specimen">
  <div class="type-specimen-label">
    Heading 3
    <span class="type-specimen-css">18px / 600</span>
  </div>
  <div class="type-specimen-sample" style="font-size: 18px; font-weight: 600;">
    The quick brown fox jumps over the lazy dog
  </div>
</div>

<div class="type-specimen">
  <div class="type-specimen-label">
    Body
    <span class="type-specimen-css">15px / 400</span>
  </div>
  <div class="type-specimen-sample" style="font-size: 15px; font-weight: 400; line-height: 1.6;">
    The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump.
  </div>
</div>

<div class="type-specimen">
  <div class="type-specimen-label">
    Small
    <span class="type-specimen-css">13px / 500</span>
  </div>
  <div class="type-specimen-sample" style="font-size: 13px; font-weight: 500; line-height: 1.5;">
    The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
  </div>
</div>

<div class="type-specimen">
  <div class="type-specimen-label">
    Caption
    <span class="type-specimen-css">11px / 600 / uppercase</span>
  </div>
  <div class="type-specimen-sample" style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #868e96;">
    The quick brown fox jumps over the lazy dog
  </div>
</div>

## Weight System

| Weight | CSS Value | Usage |
|---|---|---|
| Regular | `400` | Body text, descriptions |
| Medium | `500` | Navigation items, labels |
| Semibold | `600` | Subheadings, table headers |
| Bold | `700` | Page titles, emphasis |
| Extra Bold | `800` | Display text, hero elements |

## Token Reference

| Token | Value | Role |
|---|---|---|
| `--font-sans` | Inter, system stack | Primary typeface |
| `--font-mono` | SF Mono, Cascadia Code | Code, token values |
| `--font-size-xs` | `11px` | Captions, labels |
| `--font-size-sm` | `13px` | Small text, metadata |
| `--font-size-base` | `15px` | Body copy |
| `--font-size-lg` | `18px` | Subheadings |
| `--font-size-xl` | `22px` | Section headings |
| `--font-size-2xl` | `28px` | Page titles |
| `--font-size-3xl` | `36px` | Display text |
