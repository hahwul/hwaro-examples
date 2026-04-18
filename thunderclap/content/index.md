+++
title = "Acts"
description = "A drum and percussion festival lineup."
+++

{% extends "base.html" %}

{% block content %}

<div class="section-title-wrap">
  <svg class="starburst-svg" viewBox="0 0 100 100">
    <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
  </svg>
  <h2 style="font-size: 60px; margin: 0; color: var(--yellow);">MAIN STAGE</h2>
</div>

<div class="act-listing">
  <span style="display: block; font-size: 14px; color: var(--white); opacity: 0.7;">19:00 — 20:00</span>
  THE KINETIC SQUAD
</div>

<div class="act-listing">
  <span style="display: block; font-size: 14px; color: var(--white); opacity: 0.7;">20:30 — 21:30</span>
  IRON RHYTHM
</div>

<div class="act-listing">
  <span style="display: block; font-size: 14px; color: var(--white); opacity: 0.7;">22:00 — 23:30</span>
  THUNDER CLAN
</div>

<div class="crossed-sticks">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="1" y1="23" x2="23" y2="1" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
</div>

<div class="schedule-grid">
  <div>
    <h3 style="color: var(--yellow);">STAGE 02</h3>
    <p>18:00 BEAT COLLECTIVE</p>
    <p>19:30 RESONANCE</p>
    <p>21:00 PULSE TRIO</p>
  </div>
  <div>
    <h3 style="color: var(--yellow);">WORKSHOPS</h3>
    <p>14:00 MASTERING TEMPO</p>
    <p>16:00 HYBRID BEATS</p>
  </div>
</div>

{% endblock %}
