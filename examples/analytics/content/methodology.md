+++
title = "Methodology"
date = "2025-07-22"
description = "How the dashboard derives its numbers."
+++

<div class="card max-w-3xl mx-auto">
  <div class="prose prose-blue">
    <h2>Measurement Methodology</h2>
    <p>The dashboard does not invent metrics. Each tile is a documented function over a specific event stream, evaluated against a defined window. The goal is for any number on screen to be reproducible by anyone with access to the underlying logs.</p>

    <h3>Sessions</h3>
    <p>A session is a bounded sequence of events from a single visitor identifier. Idle time greater than thirty minutes closes the session. The next event opens a new one. The thirty-minute threshold is the default across the industry and is kept here for comparability.</p>

    <h3>Bounce Rate</h3>
    <p>A bounce is a session containing exactly one page event. Sessions that include scroll events, outbound clicks, or any custom interaction are not counted as bounces, even if the visitor stayed on a single page.</p>

    <h3>Cohorts</h3>
    <p>Cohort tables group visitors by the calendar week of their first recorded session. Subsequent activity is plotted relative to that week, not to the calendar date, so the shape of each cohort can be compared directly against the others.</p>
  </div>
</div>
