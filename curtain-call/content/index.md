+++
title = "The Bow"
description = "Closing night performance and final credits."
+++

{% extends "base.html" %}

{% block content %}

<div class="spotlight-reveal">
  <div class="spotlight-beam"></div>
  <h2 style="font-family: 'Abril Fatface'; font-size: 48px; color: var(--gold);">The Final Act</h2>
  <p style="font-size: 24px; margin-top: 2rem;">A climactic conclusion to our 2026 season. We thank the audience for their unwavering presence through every scene and sequence.</p>
  
  <div class="rose-svg">
    <svg viewBox="0 0 24 24">
      <path d="M12 2C11.17 2 10.5 2.67 10.5 3.5c0 .34.14.65.36.88L12 5.76l.14-.14c.22-.23.36-.54.36-.88 0-.83-.67-1.5-1.5-1.5zM12 6c-2.76 0-5 2.24-5 5 0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3 0-2.76-2.24-5-5-5zm0 14c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/>
    </svg>
  </div>
</div>

<div class="credits-roll">
  <h3 style="font-family: 'Overpass Mono'; color: var(--gold); margin-top: 4rem;">CAST</h3>
  <p>Elena Vance as The Architect</p>
  <p>Marcus Thorne as The Sledge</p>
  <p>Sarah Chen as The Kinetic</p>

  <h3 style="font-family: 'Overpass Mono'; color: var(--gold); margin-top: 4rem;">DIRECTED BY</h3>
  <p>A. H. Wul</p>
</div>

{% endblock %}
