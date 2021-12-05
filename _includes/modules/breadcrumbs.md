<ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumb">
  <li itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem" class="breadcrumb-item">
    <a itemprop="item" href="{{site.url}}/{{include.parent}}">
    <span itemprop="name">{{include.parentname}}</span></a>
    <meta itemprop="position" content="1" />
  </li>
  <li itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem" class="breadcrumb-item active">
    <a itemprop="item" href="{{site.url}}{{page.url}}">
    <span itemprop="name">{{page['short title'] | downcase | default: page.title | downcase}}</span></a>
    <meta itemprop="position" content="2" />
  </li>
</ol>
