document.addEventListener("scroll", function () {
  const section = document.querySelector(".meetsection");
  const sectionPosition = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // Hier startest du die Bewegung früher, indem du screenHeight verwendest
  if (sectionPosition < screenHeight && sectionPosition > -screenHeight / 2) {
    // Berechnung des Scroll-Prozentsatzes für die Bewegung
    const scrollPercentage = 1 - Math.abs(sectionPosition / screenHeight); // Früherer Start

    // Text 1: Von rechts nach links (schon bei 50% in der Mitte)
    const text1 = document.querySelector(".meettext1");
    const moveRight = Math.max(0, 75 - scrollPercentage * 100); // Startet bei 100%, endet bei 0%
    text1.style.transform = `translateX(${moveRight}%)`;

    // Text 2: Von links nach rechts (schon bei 50% in der Mitte)
    const text2 = document.querySelector(".meettext2");
    const moveLeft = Math.min(0, -75 + scrollPercentage * 100); // Startet bei -100%, endet bei 0%
    text2.style.transform = `translateX(${moveLeft}%)`;
  }
});

document.querySelectorAll(".team").forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("flipped"); /* Flip-Klasse wird umgeschaltet */
  });
});
