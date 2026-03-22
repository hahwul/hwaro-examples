+++
title = "Thesis"
description = "An academic journal theme for Hwaro. Clean typography, structured layouts, and a focus on long-form scholarly content."
+++

<div class="article-abstract">
  <div class="article-abstract-label">About This Theme</div>
  <p>Thesis is a Hwaro theme designed for academic writing and research publications. It features serif typography, a table of contents sidebar, footnotes, references, and structured metadata -- everything needed to present scholarly work on the web.</p>
</div>

## Recent Papers

<ul class="paper-list">
{% for p in site.pages %}
{% if p.section == "papers" %}
  <li class="paper-list-item">
    <div class="paper-list-title"><a href="{{ p.url }}">{{ p.title }}</a></div>
    <div class="paper-list-meta">
      {% if p.extra.authors %}{{ p.extra.authors }} &middot; {% endif %}{{ p.date | date("%B %d, %Y") }}
    </div>
    {% if p.description %}
    <div class="paper-list-excerpt">{{ p.description | truncate_words(30) }}</div>
    {% endif %}
  </li>
{% endif %}
{% endfor %}
</ul>
