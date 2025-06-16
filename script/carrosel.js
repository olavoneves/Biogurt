let index = 0;
function moverSlide(direcao) {
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;

  index += direcao;
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  slides.style.transform = `translateX(-${index * 100}vw)`;
}
