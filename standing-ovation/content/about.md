+++
title = "Event Details"
description = "Prestige and celebration of theatrical excellence."
+++

{% extends "base.html" %}

{% block content %}

<div style="text-align: center; margin-bottom: 4rem;">
  <h2 class="winner-name">A Night of Excellence</h2>
  <p style="max-width: 600px; margin: 2rem auto;">The Standing Ovation Gala is the pinnacle of the theatrical year, recognizing the extraordinary talent and dedication that define our stage.</p>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 4rem;">
  <div style="border: 2px solid var(--gold); padding: 2rem;">
    <h3 class="award-category">The Venue</h3>
    <p>The Grand Opera House, restored to its 19th-century glory, provides the perfect backdrop for our celebration.</p>
  </div>
  <div style="border: 2px solid var(--gold); padding: 2rem;">
    <h3 class="award-category">The Jury</h3>
    <p>Composed of industry veterans, critics, and visionary artists, our panel ensures the highest standards of recognition.</p>
  </div>
</div>

<div style="margin-top: 6rem; text-align: center;">
  <svg width="80" height="80" viewBox="0 0 24 24" fill="var(--gold)">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
  <p style="font-family: 'Poppins'; font-size: 14px; margin-top: 1rem;">BLACK TIE ATTIRE MANDATORY // GATES CLOSE AT 18:30</p>
</div>

{% endblock %}
