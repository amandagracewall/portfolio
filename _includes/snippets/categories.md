{% for category in page.categories %}
  {% if category == "ui" %}
    <span class="d-inline-block mr-2">ui design</span>
  {% endif %}
  {% if category == "dev" %}
    <span class="d-inline-block mr-2">full-stack development</span>
  {% endif %}
  {% if category == "viz" %}
    <span class="d-inline-block mr-2">info visualisation</span>
  {% endif %}
{% endfor %}