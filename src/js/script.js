const header = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 4000,
  reset: true,
});
header.reveal("#header", { delay: 100 });
header.reveal("#logos", { delay: 50 });
header.reveal("#about", { delay: 50 });
header.reveal(".img", { delay: 30 });
header.reveal("#portifolio", { delay: 50 });
header.reveal("#coments", { delay: 50 });
header.reveal(".coments-container-box", { delay: 80 });
header.reveal("#cta", { delay: 50 });
header.reveal("#footer", { delay: 50 });

const bg = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 10000,
  reset: true,
});
bg.reveal("#hero", { delay: 10 });


const rigth = ScrollReveal({
  origin: "rigth",
  distance: "50px",
  duration: 6000,
  reset: true,
});
rigth.reveal(".about-grid", { delay: 50 });



// CARROSSEL 

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
		
