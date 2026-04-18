+++
title = "The Stage is Yours"
description = "Welcome to Spotlight Hour, where authority meets elegance."
+++

{% extends "base.html" %}
{% block content %}

<div class="stage-section">
  <div class="podium-icon">
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.5">
      <path d="M4 20h16M7 20v-4h10v4M9 16V8h6v8M12 8V4" />
      <circle cx="12" cy="3" r="1" fill="var(--gold)"/>
    </svg>
  </div>
  <h2 class="talk-title" style="font-size: 32px; color: var(--gold);">The Main Event</h2>
  <p class="talk-abstract" style="max-width: 600px; margin: 1rem auto;">A curated evening of high-impact discourse, focusing on the intersection of modern technology and human agency. No distractions. No filters. Just the spotlight.</p>
</div>

<div class="speaker-grid">
  <!-- Speaker 1 -->
  <div class="speaker-card">
    <div class="spotlight-halo">
      <svg width="240" height="240" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="var(--gold)" stroke-width="0.5" stroke-dasharray="2 2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="var(--gold)" stroke-width="1" opacity="0.3" />
      </svg>
    </div>
    <div class="speaker-image">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="var(--gold)">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    </div>
    <div class="time-slot">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
      18:00 — 18:45
    </div>
    <h3 class="speaker-name">Elena Vance</h3>
    <p class="talk-title">The Architecture of Silence</p>
    <p class="talk-abstract">Exploring how minimalist design principles in digital spaces can foster deeper human connections and cognitive clarity.</p>
  </div>

  <!-- Speaker 2 -->
  <div class="speaker-card">
    <div class="spotlight-halo">
      <svg width="240" height="240" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="var(--gold)" stroke-width="0.5" stroke-dasharray="2 2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="var(--gold)" stroke-width="1" opacity="0.3" />
      </svg>
    </div>
    <div class="speaker-image">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="var(--gold)">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    </div>
    <div class="time-slot">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
      19:00 — 19:45
    </div>
    <h3 class="speaker-name">Marcus Thorne</h3>
    <p class="talk-title">Synthetic Authority</p>
    <p class="talk-abstract">Critical analysis of trust frameworks in the age of generative AI and the shifting landscape of intellectual ownership.</p>
  </div>

  <!-- Speaker 3 -->
  <div class="speaker-card">
    <div class="spotlight-halo">
      <svg width="240" height="240" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="var(--gold)" stroke-width="0.5" stroke-dasharray="2 2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="var(--gold)" stroke-width="1" opacity="0.3" />
      </svg>
    </div>
    <div class="speaker-image">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="var(--gold)">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    </div>
    <div class="time-slot">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
      20:00 — 20:45
    </div>
    <h3 class="speaker-name">Sarah Chen</h3>
    <p class="talk-title">Kinetic Geometry</p>
    <p class="talk-abstract">How mathematics and motion define our perception of physical space in virtual environments.</p>
  </div>
</div>

{% endblock %}
