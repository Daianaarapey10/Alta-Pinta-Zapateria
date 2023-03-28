const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-button-left");
const nextButton = document.querySelector(".carousel-button-right");

let currentIndex = 0;
let interval;

function moveCarousel(direction) {
  if (direction === "prev") {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
  } else if (direction === "next") {
    currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
  }

  const itemWidth = carouselItems[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

interval = setInterval(() => moveCarousel("next"), 5000);

prevButton.addEventListener("click", () => {
    clearInterval(interval);
    moveCarousel("prev");
});

nextButton.addEventListener("click", () => {
    clearInterval(interval);
    moveCarousel("next");
});

function toggleButton(show){
    const nav = document.querySelector('.nav-container')
    if(show) {
        nav.classList.add('show-nav')
    } else {
        nav.classList.remove('show-nav')
    }
}