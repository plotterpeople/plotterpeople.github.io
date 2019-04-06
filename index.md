---
layout: event
---
{% assign posts = site.posts | where: "categories","event-sf" %}
{% for post in posts limit:1 %}
{{post.content}}
{% endfor %}