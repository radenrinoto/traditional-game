const slider = document.querySelector(".slider");
const slideItems = document.querySelectorAll(".slide");

let index = 0;
let interval;
let touchStartX = 0;
let touchEndX = 0;

function startSlide() {
    interval = setInterval(nextSlide, 5000);
}

function nextSlide() {
    index = (index + 1) % slideItems.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + slideItems.length) % slideItems.length;
    updateSlide();
}

function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", startSlide);

slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const SWIPE_THRESHOLD = 100;

    if (touchEndX - touchStartX > SWIPE_THRESHOLD) {
        prevSlide();
    } else if (touchStartX - touchEndX > SWIPE_THRESHOLD) {
        nextSlide();
    }
}

startSlide();