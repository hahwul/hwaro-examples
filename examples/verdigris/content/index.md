+++
title = "Verdigris"
template = "page"
+++

<div class="hero">
  <h1>Where ideas <span class="highlight">oxidize</span> into form</h1>
  <p>A space for bold thinking, slow craft, and the elegant decay of certainty. Like bronze exposed to air, the best ideas transform with time.</p>
</div>

<div class="section-heading">Recent Writing</div>

<ul class="post-list">
{% for post in site.pages | sort_by("date", reverse=true) %}
{% if post.section == "posts" %}
  <li class="post-item">
    <div class="post-title">
      <a href="{{ base_url }}{{ post.url }}">{{ post.title }}</a>
    </div>
    <div class="post-meta">
      {% if post.date %}{{ post.date | date("%Y.%m.%d") }}{% endif %}
    </div>
    {% if post.description %}
    <div class="post-excerpt">{{ post.description }}</div>
    {% endif %}
  </li>
{% endif %}
{% endfor %}
</ul>
