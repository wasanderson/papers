\---

layout: layout.njk

title: developmentalamnesia.com

isHome: true

\---



<p style="font-size:1.05rem; color:#4a5568; margin:0 0 2rem;">

Collected writings by Wayne Sanderson. Theology, philosophy of mind,

behavioral science, and personal reflection. All papers in the public

domain (CC0 1.0).

</p>



<h2 style="font-size:1.3rem; color:#1a4480; margin:1rem 0;">Papers</h2>



<ul class="paper-list">

{% for paper in collections.papers %}

&#x20; <li>

&#x20;   <a class="paper-title" href="{{ paper.url }}">{{ paper.data.title }}</a>

&#x20;   <div class="paper-date">{{ paper.date | readableDate }}</div>

&#x20;   {% if paper.data.summary %}<div class="paper-summary">{{ paper.data.summary }}</div>{% endif %}

&#x20; </li>

{% endfor %}

</ul>

