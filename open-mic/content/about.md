+++
title = "Sign Up"
description = "Join the lineup and share your voice."
+++

{% extends "base.html" %}

{% block content %}

<div class="signup-box">
  <h2 style="font-family: 'Caveat'; font-size: 48px; margin-bottom: 2rem;">HOW IT WORKS</h2>
  <p>1. ARRIVE BY 19:00 TO PUT YOUR NAME IN THE HAT.</p>
  <p>2. EACH SLOT IS LIMITED TO 5 MINUTES.</p>
  <p>3. RESPECT THE MIC. RESPECT THE AUDIENCE.</p>
  <p>4. NO BACKING TRACKS. RAW VOICES ONLY.</p>
</div>

<div style="margin-top: 4rem; text-align: center;">
  <svg width="200" height="100" viewBox="0 0 100 50">
    <rect x="5" y="5" width="90" height="40" fill="none" stroke="var(--ink)" stroke-width="2" />
    <text x="50" y="32" font-family="Courier Prime" font-size="8" fill="var(--pencil)" text-anchor="middle">OFFICIAL SIGNUP SHEET</text>
  </svg>
</div>

{% endblock %}
