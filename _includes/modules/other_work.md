<section class="container">
  <hr class="accent">
  <h2 class="mt-4 mb-3">check out some of my other work:</h2>
  <div class="row works">

  {% assign maxRelated = 3 %}
  {% assign minCommonTags =  1 %}
  {% assign maxRelatedCounter = 0 %}

  {% assign sorted_works = site.works | sort:"position" %}
  {% for work in sorted_works %}
    {% assign sameTagCount = 0 %}
    {% assign commonTags = '' %}

    {% for category in work.categories %}
      {% if work.url != page.url %}
        {% if page.categories contains category %}
          {% assign sameTagCount = sameTagCount | plus: 1 %}
          {% capture tagmarkup %} <span class="label label-default">{{ category }}</span> {% endcapture %}
          {% assign commonTags = commonTags | append: tagmarkup %}
        {% endif %}
      {% endif %}
    {% endfor %}

    {% if sameTagCount >= minCommonTags %}
      {% include modules/work_card.md %}
      {% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
      {% if maxRelatedCounter >= maxRelated %}
        {% break %}
      {% endif %}
    {% endif %}

  {% endfor %}
  </div>
</section>
