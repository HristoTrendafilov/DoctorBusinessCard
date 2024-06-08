// initialize counterUp
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1800,
});

// initialize owlCarousel
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: true,
  dots: true,
  loop: true,
  nav: true,
  navText: ["<-", "->"],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
});
