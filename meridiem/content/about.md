+++
title = "About Meridiem"
tags = ["about"]
+++

<div class="about-content">

# About Meridiem

Meridiem is a time-aware dashboard that adapts its appearance based on the time of day. The name comes from the Latin term "meridiem," meaning midday -- the dividing line between AM and PM.

## How the Theme Works

The interface automatically switches between two visual modes:

- **AM Mode (6:00 AM to 5:59 PM):** Warm whites, sunrise peach accents, and sky blue highlights create a bright, energizing workspace suited for daylight hours.
- **PM Mode (6:00 PM to 5:59 AM):** Midnight blue backgrounds, sunset orange accents, and twilight purple tones provide a comfortable, low-light environment for evening and nighttime use.

The transition between themes is smooth, with colors fading gently rather than snapping abruptly. If JavaScript is unavailable, the site falls back to the `prefers-color-scheme` media query to respect your system preference.

## Features

<ul class="feature-list">
  <li><strong>Automatic theme switching</strong> -- based on your local clock, updated every minute</li>
  <li><strong>Live analog clock</strong> -- CSS-rendered clock face with real-time rotating hands</li>
  <li><strong>Digital time display</strong> -- precise hours, minutes, and seconds with AM/PM indicator</li>
  <li><strong>Daily task log</strong> -- track tasks with start times, durations, and categories</li>
  <li><strong>Summary cards</strong> -- at-a-glance totals for hours, tasks, and focus time</li>
  <li><strong>Weekly overview</strong> -- seven-day grid with progress bars for each day</li>
  <li><strong>Responsive layout</strong> -- adapts cleanly from desktop to mobile</li>
  <li><strong>No gradients</strong> -- solid colors throughout for a clean, refined aesthetic</li>
</ul>

## Design Philosophy

Meridiem treats time as a design input, not just data to display. By letting the clock influence the visual environment, the interface stays in harmony with the natural rhythm of the day. Morning light calls for warmth and clarity; evening calls for depth and calm.

Every element uses solid colors only. There are no gradients, no blur effects, and no unnecessary decoration. The result is a dashboard that feels purposeful and easy to read at any hour.

## Built With

Meridiem is a static site built with [Hwaro](https://github.com/hahwul/hwaro). The theme switching is handled entirely in the browser with a small amount of vanilla JavaScript. The clock, layout, and animations are all CSS-driven.

</div>
