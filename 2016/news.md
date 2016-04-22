---
layout: 2016/page
title: CascadiaFEST 2016 News
permalink: /2016/news/
---

<ul class="post-list">
  {% for post in site.posts %}
    <li class="{% for c in post.categories %}post-cat-{{c}}{% endfor %}">
      <h3>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h3>

      <p class="post-meta">
        <span class="date">{{ post.date | date: "%b %-d, %Y" }}</span>
        {% for category in post.categories %}
          <a href="/{{ category }}/posts/" class="btn btn-xs btn-default">{{ category }}</a>
        {% endfor %}
      </p>

      {% if post.abstract %}
      <p class="lead">{{ post.abstract }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>