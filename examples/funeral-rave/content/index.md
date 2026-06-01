+++
title = "FUNERAL RAVE"
date = "2026-05-30"
description = "The last party. Black glitter. Open bar until the lights go out forever."
template = "page"
+++

<div class="venue-hero">
  <div class="last-night">THE FINAL NIGHT • THE FINAL SET</div>
  <h1 style="margin-bottom:0.2rem;">FUNERAL<br>RAVE</h1>
  <p style="font-size:1.15rem;max-width:460px;margin:0 auto 1.4rem;color:#b8a27c;">
    Everyone is invited.<br>
    <span class="heartbeat">No one is leaving.</span>
  </p>

  <div class="mirrorball" style="margin:1.6rem auto 0.6rem;">
    <div class="ghost"></div>
  </div>
</div>

<div class="dancefloor">
  <p style="text-align:center;max-width:46ch;margin:0 auto 1.6rem;font-size:1.02rem;color:#d4c3a3;">
    This is the dance floor. The caskets are open. The strobe never stops.<br>
    Step inside. The music is already inside you.
  </p>

  <!-- THE INTERACTIVE DANCEFLOOR -->
  <div id="dancefloor-interactive" aria-label="Interactive dance floor. Click or move to release glitter and petals. Press D, L, M, or SPACE.">
    <!-- JS populates particles + mirrorball + counters -->
  </div>

  <div style="text-align:center;margin-top:1rem;font-size:0.72rem;letter-spacing:2.5px;color:#66553e;">
    CLICK TO BURST • MOVE TO SCATTER • <span class="kbd">D</span> TO DANCE • <span class="kbd">L</span> TO KILL THE LIGHTS
  </div>
</div>

{{ last_call() | safe }}

## THE LAST SIX EULOGIES

<p class="tragic" style="text-align:center;max-width:420px;margin:1.1rem auto 2rem;">
  These are the only recordings that survived. Play them with your eyes closed and your body open.
</p>

<div class="casket-grid">
  <a href="{{ base_url }}/posts/we-danced-until-our-bodies-forgot-how-to-stop/" style="text-decoration:none;color:inherit;display:block;">
    <article class="casket">
      <div class="casket-meta">JUNE 1 • 3:11 AM</div>
      <h3>We Danced Until Our Bodies Forgot How to Stop</h3>
      <p>The beat became our blood. The floor became our religion.</p>
      <div class="casket-footer"><span>READ</span> <span class="body-count counter">1184</span></div>
    </article>
  </a>

  <a href="{{ base_url }}/posts/the-strobe-light-saw-everything/" style="text-decoration:none;color:inherit;display:block;">
    <article class="casket">
      <div class="casket-meta">JUNE 1 • 3:47 AM</div>
      <h3>The Strobe Light Saw Everything</h3>
      <p>It caught every kiss, every collapse, every final surrender.</p>
      <div class="casket-footer"><span>READ</span> <span class="body-count counter">973</span></div>
    </article>
  </a>

  <a href="{{ base_url }}/posts/this-song-is-for-everyone-who-wont-be-here-tomorrow/" style="text-decoration:none;color:inherit;display:block;">
    <article class="casket">
      <div class="casket-meta">JUNE 1 • 4:19 AM</div>
      <h3>This Song Is For Everyone Who Won’t Be Here Tomorrow</h3>
      <p>We dedicated it to the ones who were already ghosts on the dance floor.</p>
      <div class="casket-footer"><span>READ</span> <span class="body-count counter">1341</span></div>
    </article>
  </a>
</div>

<div style="text-align:center;margin:2.4rem 0 1rem;">
  <a href="{{ base_url }}/posts/" style="font-size:0.95rem;letter-spacing:3px;border-bottom:1px solid rgba(212,175,122,0.4);padding-bottom:2px;">VIEW THE COMPLETE SETLIST →</a>
</div>

{{ glitter(count=42) | safe }}

{{ dying_flower() | safe }}

<div style="height:2rem;"></div>