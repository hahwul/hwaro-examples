+++
title = "The Mic"
description = "Raw voices and intimate performances."
+++

{% extends "base.html" %}

{% block content %}

<div class="mic-svg">
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--pencil)" stroke-width="1.5">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 3 3 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
</div>

<div class="performer-slot">
  <div class="speech-bubble">
    "The silence between the words is where the real poetry happens. Sometimes we just need a space to be heard."
  </div>
  <p style="font-family: 'Caveat'; font-size: 32px; text-align: right; color: var(--ink);">— Sarah Vance</p>
</div>

<div class="performer-slot">
  <div class="speech-bubble">
    "Comedy is just truth with a faster delivery. Tonight, we're all just trying to keep up with the punchlines."
  </div>
  <p style="font-family: 'Caveat'; font-size: 32px; text-align: right; color: var(--ink);">— Julian Thorne</p>
</div>

<div style="margin-top: 4rem; text-align: center;">
  <svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5" />
    <text x="50" y="55" font-family="Caveat" font-size="20" fill="var(--pencil)" text-anchor="middle">YOUR SPOT</text>
  </svg>
</div>

{% endblock %}
