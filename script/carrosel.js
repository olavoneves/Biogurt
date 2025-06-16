// Carrosel Destaque
let index = 0;
function moverSlide(direcao) {
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;

  index += direcao;
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  slides.style.transform = `translateX(-${index * 100}vw)`;
}

// Carrosel Experimente Hoje
let indexCarrossel = 0;
  const totalSlides = 4; // atualize se mudar a quantidade
  const slides = document.getElementById("carrosselSlides");

  function moverCarrossel(direcao) {
      indexCarrossel += direcao;

      if (indexCarrossel < 0) indexCarrossel = totalSlides - 1;
      if (indexCarrossel >= totalSlides) indexCarrossel = 0;

      slides.style.transform = `translateX(-${indexCarrossel * 100}%)`;
  }