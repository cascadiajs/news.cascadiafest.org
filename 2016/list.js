---
permalink: /2016/news/list.js
---

_cascadiafest_news_callback([{% for post in site.categories.2016 %}
    {
      "title": "{{ post.title }}",
      "host": "{{ site.url }}",
      "url": "{{ post.url }}",
      "date": "{{ post.date }}",
      "abstract": "{{ post.abstract | escape }}"
    } {% if forloop.last %}{% else %},{% endif %}
{% endfor %}])
