// Slider Images Function
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let index = 0;

function moveSlide(index) {
    const position = -index * slideWidth;
    slider.style.transform = `translateX(${position}px)`;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    moveSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    moveSlide(index);
}

document.querySelector('.slider-control.prev').addEventListener('click', prevSlide);
document.querySelector('.slider-control.next').addEventListener('click', nextSlide);

moveSlide(index);

// Hamburger Menu Function
let menuIcon = document.querySelector('#menu-icon')
let navbar1 = document.querySelector('.menu')
let navbar2 = document.querySelector('.auth')

menuIcon.onClick = () => {
    menuIcon.classList.toogle('bx-x')
    navbar1.classList.toogle('active')
}
