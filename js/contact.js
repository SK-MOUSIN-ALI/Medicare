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