// Gsap animation
gsap.from("#hero, .phone, .social, .navbar-toggler", {
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
  gsap.from("h1, .links",  {
    opacity:0,
    y: 50,
    x: -20,
    skewX: "-30",
    stagger: 0.2,
    delay: 1.6
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
