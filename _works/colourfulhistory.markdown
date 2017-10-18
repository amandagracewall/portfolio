---
title: A Colorful History
date: 2017-08-06 17:38:00 +10:00
permalink: "/work/colorful-history/"
categories:
- info
- ui
- dev
position: 6
thumbnail image: "/assets/images/work_thumbnails/colorful.jpg"
snippet: An interactive portrait of Cooper Hewitt's poster collection
description: In this academic project, I worked with a JSON dataset containing a collection
  of posters from the Cooper Hewitt Smithsonian Design Museum and ideated, designed,
  and developed a Processing program that illustrates the past century of American
  history through colour analysis.
question: How can a collection of data tell a story through interaction?
summary: In this academic project, I worked with a JSON dataset containing a collection
  of posters from the Cooper Hewitt Smithsonian Design Museum and ideated, designed,
  and developed a Processing program that illustrates the past century of American
  history through colour analysis.
project timeframe: Spring 2014
company: Georgia Institute of Technology
layout: work
---

There were two kinds of stories to tell with this collection – the way that posters had changed over time, and the stories in the individual compositions themselves. To tell these stories, the program analyzes colour composition and presents the data via two different modes: spectrum and poster.

<video width="100%" height="auto" controls autoplay loop class="mt-4">
 <source type="video/mp4" src="/resources/colorfulhistory/colorfulhistory_demo.mp4">
</video>
<p class="caption mt-2">A demonstration of the final project</p>

## Spectrum mode
Spectrum mode illustrates the popular colours of the given time period with a histogram. The user can filter posters for any given year between 1918 and 2013 by using the slider. With adjustment of the slider, the bars change in height, representing the ratio of pixels in a given hue to the number of posters in the set. Animation helps visualize these changes over time. Upon hover, the bar will display a tooltip with any dominant shades of that hue found in the poster set.

![hues.jpg](/uploads/hues.jpg)
<p class="caption">A tooltip highlights the dominant shades of the focused hue</p>

## Poster mode
Poster mode shows dot representations of each poster, coloured with the three dominant colours in the respective poster. The user can explore all of the dots by moving the cursor to the edges of the screen. The slider is fully functional in this mode also, filtering dots as the years change. Upon hover of a dot, a thumbnail of the poster displays as well as the estimated colour relationship.

![relationship.jpg](/uploads/relationship.jpg)
<p class="caption">A thumbnail of the focused poster and its estimated colour relationship</p>

Looking back, the limitations of [Processing](https://processing.org/) led to a few less than ideal interface choices, particularly in poster mode. There were some z-indexing issues which lead to posters being displayed behind the dots and prevented the colour relationship from being displayed as a tooltip with the poster, instead of floating in the menu bar. The efficiency and effectiveness of the colour analysis algorithms could also be improved, but flaws aside, the interface's storytelling abilities proved rather successful.

Since there is more than just one story to tell, the design encourages exploration. The consolidated interface and large, enticing slider give the user a jumping off point to start delving into the dataset. They can drill-down and examine the dataset in more detail through the tooltips. The expansive, moving canvas in poster mode also adds to this sense of exploration.

This exploration lets the user build a narrative experience that is meaningful for them. Maybe they want to see the popular colours of the "groovy" posters of the 1960s or what posters looked like the year they were born. Users can find and tell their own stories, filling in gaps with their own knowledge and experiences or researching to find the stories behind their observations.

![groovy.jpg](/uploads/groovy.jpg)
<p class="caption">This screenshot shows a spike in the use of purple in 1967. Hmm, <a href="https://en.wikipedia.org/wiki/Purple_Haze">I wonder why</a>...</p>

Feel free to [check out the source code](https://github.com/amandagracewall/digitalportrait) on Github.
