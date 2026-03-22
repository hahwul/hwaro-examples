+++
title = "Components"
tags = ["design", "components"]
+++

## Buttons

Three button variants cover the majority of interface needs. Use Primary for the main call to action, Secondary for alternatives, and Ghost for low-emphasis actions.

<div class="component-card">
  <div class="component-preview" style="gap: 12px;">
    <button class="demo-btn demo-btn-primary">Primary</button>
    <button class="demo-btn demo-btn-secondary">Secondary</button>
    <button class="demo-btn demo-btn-ghost">Ghost</button>
  </div>
  <div class="component-meta">
    <div class="component-name">Button</div>
    <div class="component-desc">
      Primary: <code>background-color: var(--accent); color: #fff</code><br>
      Secondary: <code>background-color: var(--surface-0); border: 1px solid var(--border-default)</code><br>
      Ghost: <code>background: transparent; color: var(--accent-text)</code>
    </div>
  </div>
</div>

## Text Input

A standard text input with a focus ring that matches the accent color. Pair with labels placed above the field.

<div class="component-card">
  <div class="component-preview">
    <input class="demo-input" type="text" placeholder="Enter a value..." readonly>
  </div>
  <div class="component-meta">
    <div class="component-name">Input</div>
    <div class="component-desc">
      <code>border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 10px 12px</code>
    </div>
  </div>
</div>

## Badges

Badges communicate status or category. Five semantic variants are provided.

<div class="component-card">
  <div class="component-preview" style="gap: 8px; flex-wrap: wrap;">
    <span class="demo-badge demo-badge-default">Default</span>
    <span class="demo-badge demo-badge-accent">Accent</span>
    <span class="demo-badge demo-badge-success">Success</span>
    <span class="demo-badge demo-badge-warning">Warning</span>
    <span class="demo-badge demo-badge-danger">Danger</span>
  </div>
  <div class="component-meta">
    <div class="component-name">Badge</div>
    <div class="component-desc">
      <code>padding: 3px 10px; border-radius: 100px; font-size: 11px; font-weight: 600</code>
    </div>
  </div>
</div>

## Avatar

A circular placeholder for user identity. Falls back to initials when no image is available.

<div class="component-card">
  <div class="component-preview" style="gap: 12px;">
    <span class="demo-avatar">AB</span>
    <span class="demo-avatar" style="background-color: #ebfbee; color: #2b8a3e;">CD</span>
    <span class="demo-avatar" style="background-color: #fff9db; color: #e67700;">EF</span>
    <span class="demo-avatar" style="background-color: #fff5f5; color: #c92a2a;">GH</span>
  </div>
  <div class="component-meta">
    <div class="component-name">Avatar</div>
    <div class="component-desc">
      <code>width: 40px; height: 40px; border-radius: 50%; font-size: 13px; font-weight: 700</code>
    </div>
  </div>
</div>

## Card

A contained surface for grouping related information. Cards use a subtle border and minimal shadow.

<div class="component-card">
  <div class="component-preview">
    <div class="demo-card">
      <div class="demo-card-title">Card Title</div>
      <div class="demo-card-text">A brief description of the content that this card represents in the interface.</div>
    </div>
  </div>
  <div class="component-meta">
    <div class="component-name">Card</div>
    <div class="component-desc">
      <code>background: var(--surface-0); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: var(--space-lg)</code>
    </div>
  </div>
</div>

## Spacing Scale

Consistent spacing keeps layouts harmonious. All values are multiples of 4px.

| Token | Value | Visual |
|---|---|---|
| `--space-xs` | `4px` | <span style="display:inline-block;width:4px;height:16px;background:#364fc7;border-radius:2px;vertical-align:middle;"></span> |
| `--space-sm` | `8px` | <span style="display:inline-block;width:8px;height:16px;background:#364fc7;border-radius:2px;vertical-align:middle;"></span> |
| `--space-md` | `16px` | <span style="display:inline-block;width:16px;height:16px;background:#364fc7;border-radius:2px;vertical-align:middle;"></span> |
| `--space-lg` | `24px` | <span style="display:inline-block;width:24px;height:16px;background:#364fc7;border-radius:2px;vertical-align:middle;"></span> |
| `--space-xl` | `32px` | <span style="display:inline-block;width:32px;height:16px;background:#364fc7;border-radius:2px;vertical-align:middle;"></span> |
| `--space-2xl` | `48px` | <span style="display:inline-block;width:48px;height:16px;background:#364fc7;border-radius:2px;vertical-align:middle;"></span> |
| `--space-3xl` | `64px` | <span style="display:inline-block;width:64px;height:16px;background:#364fc7;border-radius:2px;vertical-align:middle;"></span> |

## Border Radius

| Token | Value | Preview |
|---|---|---|
| `--radius-sm` | `4px` | <span style="display:inline-block;width:32px;height:32px;background:var(--surface-2);border:1px solid #dee2e6;border-radius:4px;vertical-align:middle;"></span> |
| `--radius-md` | `6px` | <span style="display:inline-block;width:32px;height:32px;background:var(--surface-2);border:1px solid #dee2e6;border-radius:6px;vertical-align:middle;"></span> |
| `--radius-lg` | `8px` | <span style="display:inline-block;width:32px;height:32px;background:var(--surface-2);border:1px solid #dee2e6;border-radius:8px;vertical-align:middle;"></span> |
