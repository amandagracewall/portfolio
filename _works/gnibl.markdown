---
title: Gnibl Box
date: 2017-10-14 12:30:00 +11:00
permalink: "/work/gnibl-box/"
categories:
- ui
- viz
- dev
position: 7
thumbnail image: "/assets/images/work_thumbnails/gnibl.jpg"
snippet: An e-commerce solution for subscription snack boxes
description: Gnibl, a healthy snack machine company, wanted to branch out into the
  subscription snack market with Gnibl Box. The new e-commerce experience should be
  comparable to the snack machine experience, with their signature colourful branding
  and health-driven messaging.
question: How can a subscription snack service inspire healthy workplaces?
summary: Gnibl, a healthy snack machine company, wanted to branch out into the subscription
  snack market with [Gnibl Box](http://gniblbox.com.au). The new e-commerce experience
  should be comparable to the snack machine experience, with their signature colourful
  branding and health-driven messaging.
project timeframe: Spring 2016
company: Gnibl via [We Are Visionists](http://wav.agency)
---

## Playful design
The Gnibl Box site design is heavily stylised, using brand elements such as marker streaks, wave borders, and "hand-drawn" accents and shapes, as well as their bright colour palette. These whimsical elements play off of the more organic cardboard textures and product photography to create a bold identity.


<div class="phone-shape">
	<div class="top-details">
		<span class="camera"></span>
		<span class="speaker"></span>
	</div>
	<div class="phone-screen">
		<div class="screen">
			<img class="screens" src="/resources/gnibl/mobile.jpg" width="100%">
		</div>
	</div>
	<div class="circle-button"></div>
</div>
<p class="caption">The mobile version of the Gnibl Box home page</p>

The whimsical elements above aren't inherently web-friendly, and as such, required some clever CSS to implement. Using a combination of SVG backgrounds, masking, clipping, and positioning, the design works across most modern browsers with graceful fallbacks in IE.

## Simple sign-up
While Gnibl Box offers several purchase configurations, including subscription and one-off options, the calculator interface is an intuitive way to quickly compare and comprehend the different offerings and pricing. And should the pricing structure or options change, the code is completely configurable through the client backend.

<video width="100%" height="auto" controls autoplay loop class="mt-4">
 <source type="video/mp4" src="/resources/gnibl/gnibl_demo.mp4">
</video>
<p class="caption mt-2">A video demonstrating the pricing calculator interface</p>

## Client-friendly templating
Which brings us to maintenance – a well-developed site should be simple for clients to update and maintain with minimal programming knowledge.

> I don't believe that a client should have to rely on a developer to make minor changes to their site, and I implement that philosophy through highly configurable templating.

The Gnibl Box site was built using [Siteleaf](https://www.siteleaf.com/), a Jekyll-based content-management system I recommend 1000 times over for simple, static builds. The client-facing backend is much cleaner and more intuitive than WordPress, and the hosting costs are practically nothing for a static site.

However, great CMS is only as good as its template, and that's where my philosophy kicks in. All of the headers, body copy, and CTAs are editable fields. Sections such as the testimonials only display if they contain content, and FAQs can easily be added or removed as the client pleases.

And more complex sections, such as the product section on the home page, are also configurable. The client can add as many products as they'd like to the carousel, and simply check the features that they would like to display.

![gniblproduct.gif](/uploads/gniblproduct.gif)
<p class="caption">A demo of the configurable settings for each product</p>

To check out the full site or purchase some snacks, visit [gniblbox.com.au](http://gniblbox.com.au).
