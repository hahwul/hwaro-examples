+++
title = "{{ title }}"
date = "{{ date }}"
draft = {{ draft }}
description = ""
authors = ["RECOVERED"]
categories = ["broadcast-logs"]
tags = {{ tags }}
extra = { tape_id = "VHS-{{ range(70,99) | random }}-{{ range(1000,9999) | random }}", duration = "0{{ range(3,9) | random }}:{{ range(10,59) | random }}", origin = "UNKNOWN LOCATION — AFTER 3:33 AM" }
+++

[STATIC]

{{ content | default("") }}

{{ interference() }}

Do not watch this tape after midnight.
