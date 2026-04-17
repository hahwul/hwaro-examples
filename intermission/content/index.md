+++
title = "The Program"
description = "A multi-day theater festival schedule."
+++

{% extends "base.html" %}

{% block content %}

<div class="program-listing">
  <div class="show-time">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v10l4.5 4.5"/>
      <circle cx="12" cy="12" r="10"/>
    </svg>
    18:30 — 20:15
  </div>
  <h2 class="show-title">The Glass Menagerie</h2>
  <p>A refined production of Tennessee Williams' classic, exploring memory and fragility in a changing world.</p>
  <div class="intermission-tag">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
    </svg>
    INTERMISSION: 15 MINUTES
  </div>
</div>

<div class="hourglass-svg">
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.5">
    <path d="M5 2h14M5 22h14M6 2v6c0 3.31 2.69 6 6 6s6-2.69 6-6V2M6 22v-6c0-3.31 2.69-6 6-6s6 2.69 6 6v6" />
    <path d="M12 12v4M10 19h4" opacity="0.5"/>
  </svg>
</div>

<div class="program-listing">
  <div class="show-time">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v10l4.5 4.5"/>
      <circle cx="12" cy="12" r="10"/>
    </svg>
    20:45 — 22:30
  </div>
  <h2 class="show-title">Waiting for Godot</h2>
  <p>Samuel Beckett's masterpiece of existential uncertainty, staged in total darkness with minimal set design.</p>
  <div class="intermission-tag">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
    </svg>
    INTERMISSION: 10 MINUTES
  </div>
</div>

<div style="text-align: center; margin-top: 4rem;">
  <svg width="100" height="60" viewBox="0 0 100 60" fill="none" stroke="var(--gold)" stroke-width="1">
    <path d="M10 50 Q 50 10 90 50" />
    <path d="M20 50 Q 50 20 80 50" />
    <path d="M30 50 Q 50 30 70 50" />
  </svg>
  <p class="day-label" style="font-size: 14px;">Curtain Call at 23:00</p>
</div>

{% endblock %}
