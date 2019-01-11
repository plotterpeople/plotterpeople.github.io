---
layout: event
---
{% for post in site.posts limit:1 %}
{{post.content}}
{% endfor %}
