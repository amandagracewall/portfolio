<div class="col-12 col-sm-6 col-lg-4 work-col mb-4">
  <a class="card-link" href="{{work.permalink}}">
    <div class="work-card {% for category in work.categories %} {{category}} {% endfor %}" style="background-image: url({{work['thumbnail image']}})">
      <div class="overlay">
        <div class="text-center w-100">
          <h3>{{work.title | downcase}}</h3>
          <p class="mb-2">{{work.snippet}}</p>
          <span class="cta">read more ></span>
        </div>
      </div>
    </div>
  </a>
</div>
