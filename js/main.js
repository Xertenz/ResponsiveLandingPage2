$(document).ready(function () {
  // Start Navbar
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 80) {
      $(".navbar").addClass("bg-light");
      $(".navbar").removeClass("bg-transparent");
      $("nav .navbar-nav li a").css("color", "#000");
      $(".navbar .navbar-brand img").attr("src", "images/logo.webp");
      $(".navbar").css({
        paddingTop: "0",
        paddingBottom: "0",
      });
    } else {
      $(".navbar").addClass("bg-transparent");
      $(".navbar").removeClass("bg-light");
      $("nav .navbar-nav li a").css("color", "#fff");
      $(".navbar .navbar-brand img").attr("src", "images/logo-alt.webp");
      $(".navbar").css({
        paddingTop: "10px",
        paddingBottom: "10px",
      });
    }
  });

  // Start Owl Carousel
  $(".choose-us-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    animateOut: "fadeOut",
    animateIn: "fadeIut",
  });

  // Start Testimonial Carousel
  $(".testimonial-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  // Scroll To Top
  var scrl = $(".scroll-to-top");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 200) {
      if (scrl.is(":hidden")) {
        scrl.fadeIn(200);
      }
    } else {
      scrl.fadeOut(200);
    }
  });

  scrl.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      150
    );
  });
});
