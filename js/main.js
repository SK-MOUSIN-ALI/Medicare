AOS.init();
// Typing Animation
var typed = new Typed(".auto-type", {
    strings: ["Doctors.", "Facilities."],
    typeSpeed: 150,
    backkSpeed: 1000,
    loop:true
  })


// Gsap animation
gsap.from(".phone, .social, .navbar-toggler", {
  opacity:0,
  y: -40,
  stagger: 0.3
})
gsap.from("#logo, .nav-link", {
  opacity:0,
  x: -20,
  skewX: "-30",
  stagger: 0.15,
  delay: 0.7
})
gsap.from("h1, .desc, .get",  {
  opacity:0,
  y: 50,
  x: -20,
  skewX: "-30",
  stagger: 0.2,
  delay: 1.6
})
gsap.from(".banner-img, .satisfy, .medicine, .small-review",  {
  opacity:0,
  y: -50,
  x: -20,
  skewX: "30",
  ease: "power3",
  stagger: 0.35,
  delay: 2.5
})




// Review Carousal
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
  
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

