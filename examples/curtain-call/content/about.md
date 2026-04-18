+++
title = "Backstage"
description = "Production and technical credits."
+++

{% extends "base.html" %}

{% block content %}

<div class="technical-credits">
  <h3 style="color: var(--gold);">PRODUCTION TEAM</h3>
  <p>Lighting Design: Orion Spark</p>
  <p>Sound Engineering: Echo Volt</p>
  <p>Stage Management: Stella Rig</p>
</div>

<div style="margin-top: 4rem; text-align: center;">
  <svg width="200" height="100" viewBox="0 0 100 50">
    <line x1="10" y1="10" x2="10" y2="40" stroke="var(--crimson)" stroke-width="2" />
    <line x1="90" y1="10" x2="90" y2="40" stroke="var(--crimson)" stroke-width="2" />
    <circle cx="20" cy="20" r="2" fill="var(--gold)" />
    <circle cx="80" cy="20" r="2" fill="var(--gold)" />
    <path d="M10 10 Q 50 0 90 10" fill="none" stroke="var(--crimson)" stroke-width="1" />
  </svg>
  <p style="font-family: 'Overpass Mono'; font-size: 11px; margin-top: 1rem;">RIGGING PLAN 04 // FINAL APPROVAL</p>
</div>

{% endblock %}
