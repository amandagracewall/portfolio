{% for category in page.categories %}
  {% if category == "ui" %}
    <span class="d-inline-block mr-2 tag bg-white">ui/ux design</span>
  {% endif %}
  {% if category == "dev" %}
    <span class="d-inline-block mr-2 tag bg-white">development</span>
  {% endif %}
  {% if category == "viz" %}
    <span class="d-inline-block mr-2 tag bg-white">graphic design</span>
  {% endif %}
  {% if category == "info" %}
    <span class="d-inline-block mr-2 tag bg-white">info design</span>
  {% endif %}
{% endfor %}
