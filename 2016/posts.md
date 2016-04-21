---
layout: page
title: CascadiaFEST 2016
permalink: /2016/posts/
---

<ul>
	{% for post in site.categories.2016 %}
	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
	{% endfor %}
</ul>