+++
title = "Program"
description = "A dramatic theater festival lineup."
+++

{% extends "base.html" %}

{% block content %}

<div style="text-align: center; margin-bottom: 6rem;">
  <div class="mask-icon">
    <svg viewBox="0 0 24 24">
      <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm-3 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3 5c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3z"/>
    </svg>
  </div>
  <span class="act-label">ACT I: THE AWAKENING</span>
  <h2 style="font-family: 'DM Serif Display'; font-size: 48px; margin: 1rem 0;">Echoes of the Void</h2>
  <div style="margin-top: 2rem;">
    <h3 class="cast-name">Julian Thorne</h3>
    <p style="font-variant: small-caps; font-size: 14px; opacity: 0.7;">Lead Performer</p>
  </div>
</div>

<div style="text-align: center; margin-bottom: 6rem;">
  <span class="act-label">ACT II: THE REVELATION</span>
  <h2 style="font-family: 'DM Serif Display'; font-size: 48px; margin: 1rem 0;">Shadows on the Wall</h2>
  <div style="margin-top: 2rem;">
    <h3 class="cast-name">Sarah Vance</h3>
    <p style="font-variant: small-caps; font-size: 14px; opacity: 0.7;">Lead Performer</p>
  </div>
</div>

<div style="text-align: center;">
  <svg width="100" height="40" viewBox="0 0 100 40">
    <path d="M10 20 L50 10 L90 20 L50 30 Z" fill="none" stroke="white" stroke-width="1" />
  </svg>
  <p class="act-label" style="margin-top: 1rem;">INTERVAL: 20 MINUTES</p>
</div>

{% endblock %}
