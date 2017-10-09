<div class="col-12 col-sm-6 col-lg-12 mb-4">
  <a class="blog-card-link card-link" href="{{post.permalink}}">
    <div class="bg-white">
      <div class="row blog-card">
        <div class="col-12 col-lg-4">
          <img class="w-100" src="{{post['thumbnail image']}}">
        </div>
        <div class="col-12 col-lg-8 post-detail">
          <h3 class="mb-2">{{post.title | downcase}}</h3>
          <p class="mb-3">{{post.excerpt}}</p>
          <span class="cta" href="{{post.permalink}}">read more ></span>
        </div>
      </div>
    </div>
  </a>
</div>
