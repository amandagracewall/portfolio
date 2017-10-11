<head>
  <title>{{page.title}}</title>
  <!--meta-->
  <meta name="description" content="{{page.description}}">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--og meta-->
  <meta property="og:locale" content="en_us">
  <meta property="og:type" content="website">
  {% if page.is_post %}
  <meta property="og:title" content="{{page.title | default: site['og title']}}">
  {% else %}
  <meta property="og:title" content="{{site['og title']}}">
  {% endif %}
  <meta property="og:description" content="{{page['og description'] | default: site['og description']}}">
  <meta property="og:url" content="{{site.url}}{{page.url}}">
  <meta property="og:site_name" content="{{site.title}}">
  <meta property="og:image" content="{{page['og image'] | default: site['og image']}}">
  <!--favicons-->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/manifest.json">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f88a6b">
  <meta name="theme-color" content="#f9f9f9">
  <!--styles-->
  <link rel="stylesheet" href="/assets/style.css">
</head>
