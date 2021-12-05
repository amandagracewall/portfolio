<section class="container">
  <hr class="accent">
  <h2 class="mt-4 mb-3">read more:</h2>
  <div class="row works">
  {% assign maxRelated = 3 %}
  {% assign minCommonTags =  0 %}
  {% assign maxRelatedCounter = 0 %}

  {% for post in site.posts %}

    {% assign sameTagCount = 0 %}
    {% assign commonTags = '' %}

    {% for category in post.categories %}
      {% if post.url != page.url %}
        {% if page.categories contains category %}
          {% assign sameTagCount = sameTagCount | plus: 1 %}
          {% capture tagmarkup %} <span class="label label-default">{{ category }}</span> {% endcapture %}
          {% assign commonTags = commonTags | append: tagmarkup %}
        {% endif %}
      {% endif %}
    {% endfor %}

    {% if sameTagCount >= minCommonTags and post.url != page.url %}
      {% include modules/blog_card.md %}
      {% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
      {% if maxRelatedCounter >= maxRelated %}
        {% break %}
      {% endif %}
    {% endif %}

  {% endfor %}
  </div>
</section>
