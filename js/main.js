let slider = document.getElementById("slider"),
  slides = Array.from(document.getElementsByClassName("slide")),
  currentImg = 0;

setInterval(() => {
  activeClassRemove();
  if (currentImg < slides.length - 1) {
    currentImg++;
  } else {
    currentImg = 0;
  }
  slides[currentImg].classList.add("active");
}, 2500);

function activeClassRemove() {
  slides.forEach((e) => {
    e.classList.remove("active");
  });
}
