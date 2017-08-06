$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });

$('.nav-link').click(function() {
  $('.nav-link.active').removeClass('active');
  $(this).addClass('active');
});

$('.filter').click(function() {
  $('.filter.active').removeClass('active');
  $(this).addClass('active');
});

$(document).ready(function() {
  $(document).on("scroll", function() {
    var scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-link.active').removeClass("active");
            currLink.addClass("active");
        }
        else if (currLink.attr("href") == "#about" && refElement.position().top <= 50) {
          $('.nav-link.active').removeClass("active");
          currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
  });
});
