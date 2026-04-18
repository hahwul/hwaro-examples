+++
title = "Lineup"
description = "Multi-stage music festival schedule."
+++

{% extends "base.html" %}

{% block content %}

<div class="band-row">
  <h2 class="band-name">Sonic Bloom</h2>
  <div class="stage-meta">
    STAGE 01 // 19:00<br>
    <span style="color: var(--blue);">GENRE: ELECTRONIC</span>
  </div>
</div>

<div class="band-row">
  <h2 class="band-name">Iron Pulse</h2>
  <div class="stage-meta">
    STAGE 02 // 20:30<br>
    <span style="color: var(--magenta);">GENRE: INDUSTRIAL</span>
  </div>
</div>

<div class="band-row">
  <h2 class="band-name">Static Void</h2>
  <div class="stage-meta">
    STAGE 01 // 22:00<br>
    <span style="color: var(--cyan);">GENRE: NOISE</span>
  </div>
</div>

<div style="margin-top: 6rem; display: flex; gap: 4rem; justify-content: center;">
  <div style="text-align: center;">
    <svg class="knob-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--black)" stroke-width="5" />
      <line x1="50" y1="50" x2="50" y2="10" stroke="var(--blue)" stroke-width="10" transform="rotate(45 50 50)" />
    </svg>
    <p style="font-family: 'Space Mono'; font-size: 12px;">GAIN: 80%</p>
  </div>
  <div style="text-align: center;">
    <svg class="knob-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--black)" stroke-width="5" />
      <line x1="50" y1="50" x2="50" y2="10" stroke="var(--magenta)" stroke-width="10" transform="rotate(120 50 50)" />
    </svg>
    <p style="font-family: 'Space Mono'; font-size: 12px;">BASS: 100%</p>
  </div>
</div>

{% endblock %}
