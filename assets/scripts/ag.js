/* Accessible smooth scrolling */
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

/* Active nav linking */
// on click
$('.nav-link').click(function() {
  $('.nav-link.active').removeClass('active');
  $(this).addClass('active');
  $(this).blur();
});
// on scroll
$(document).ready(function() {
  if ($("body").hasClass("watch-scroll")) {
    $(document).on("scroll", function() {
      var scrollPos = $(document).scrollTop();
      $('.nav-link').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos + 50 && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav-link.active').removeClass("active");
              currLink.addClass("active");
          } else {
              currLink.removeClass("active");
          }
      });
    });
  }
});

// $(".filters").scroll(function() {
//   var scrollPos = $(this).scrollLeft();
//   if (scrollPos >= 50) {
//     $(".filters").addClass("show-left-arrow");
//   } else {
//     $(".filters").removeClass("show-left-arrow");
//   }
//   console.log(scrollPos);
//   if (scrollPos >= 600 - $(window).width()) {
//     $(".filters").removeClass("show-right-arrow");
//   } else {
//     $(".filters").addClass("show-right-arrow");
//   }
// });

// filtering
$('.filter').click(function() {
  $('.filter.active').removeClass('active');
  $(this).addClass('active');
  var curr = $(this).data('category');
  if (curr == "") {
    $(".work-col").fadeIn(200);
  } else {
    $(".work-card").each(function() {
      if ($(this).hasClass(curr)) {
        $(this).closest(".work-col").stop().fadeIn(200);
      } else {
        $(this).closest(".work-col").stop().fadeOut(200);
      }
    });
  }
});

//random Clue(do) placeholders
var names = ["Colonel Mustard", "Miss Scarlett", "Professor Plum", "Mrs. Peacock", "Mr. Green", "Mrs. White"];
var items = ["candlestick", "dagger", "leadpipe", "revolver", "rope", "spanner"];
var rooms = ["kitchen", "ballroom", "conservatory", "diningroom", "lounge", "hall", "study", "library", "billiardroom"];

var name = names[Math.floor(Math.random() * names.length)];
var item = items[Math.floor(Math.random() * items.length)];
var room = rooms[Math.floor(Math.random() * rooms.length)];

$("[name=name]").attr("placeholder", name);
$("[name=contact]").attr("placeholder", item + "@" + room + ".com");

//input type change
$("[name=method]").change(function() {
  if ($(this).val() == "email") {
    $("[name=contact]").attr("type", "email");
    item = items[Math.floor(Math.random() * items.length)];
    room = rooms[Math.floor(Math.random() * rooms.length)];
    $("[name=contact]").attr("placeholder", item + "@" + room + ".com");
  } else {
    $("[name=contact]").attr("type", "text");
    $("[name=contact]").attr("placeholder", "0410 123 456");
  }
});

$.validator.addMethod("phone", function(value, element) {
  var val = value.replace(/\D/g,'');
  var tendigits = /^0[0-8]\d{8}$/g;
  var ninedigits = /^[0-8]\d{8}$/g;
  var valid = false;
  if (tendigits.test(val) || ninedigits.test(val)) {
    valid = true;
  }
  return valid;
}, "Please enter a valid Australian phone number.");

$("#contactform").validate({
  onkeyup: false,
  rules: {
    contact: {
      required: true,
      phone: {
        depends: function(element) {
          return ($("[name=method]").val() == "phone");
        }
      }
    }
  },
  messages: {
    name: "Oops, looks like you're forgetting something.",
    contact: {
      required: "Oops, looks like you're forgetting something.",
      email: "Double check that email or try another.",
      phone: "Please enter a valid Australian number."
    }
  },
  submitHandler: function(form) {
    $.ajax({
      url: "https://hooks.zapier.com/hooks/catch/2448615/5nrzbn/",
      method: "POST",
      data: $(form).serialize(),
      success: function() {
        $("#messages").html("Thanks for reaching out – I'll get back to you soon.");
        $("#contactform")[0].reset();
      },
      error: function() {
        $("#messages").html("Yikes – seems there's been an error. Double check your connection and try again.");
      }
    });
  },
  showErrors: function(errorMap, errorList) {
    if (errorList[0]) {
      var msg = errorList[0].message;
     $("#messages").html(msg);
   } else {
     $("#messages").html("");
   }
 }
});

function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);
