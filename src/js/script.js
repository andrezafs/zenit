const header = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});
header.reveal("#header", { delay: 0 });
header.reveal("#logos", { delay: 200 });
header.reveal("#about", { delay: 0 });
header.reveal(".img", { delay: 20 });
header.reveal("#portifolio", { delay: 50 });
header.reveal("#coments", { delay: 50 });
header.reveal(".hero", { delay: 100 });


header.reveal("#cta", { delay: 50 });
header.reveal("#footer", { delay: 50 });

const bg = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});
bg.reveal("#hero", { delay: 0 });


const rigth = ScrollReveal({
  origin: "rigth",
  distance: "50px",
  duration: 3000,
  reset: true,
});
rigth.reveal(".about-grid", { delay: 0 });



// CARROSSEL 


// BOTAO TOPO

scroll({
  top:0,
  behavior: "smooth"
});