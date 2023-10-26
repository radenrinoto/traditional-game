const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')
const carouselSlide = document.querySelector('.carousel__slide')
const ellipsContainer = document.querySelector('.list__ellips')
const menuBtn = document.getElementById('menu-btn')
const navLinks = document.getElementById('nav-links')

menuBtn.addEventListener('click', e => {
  navLinks.classList.toggle('open')
})

navLinks.addEventListener('click', e => {
  navLinks.classList.remove('open')
})

let slideIndex = 0

nextButton.addEventListener('click', () => {
  if (slideIndex < carouselSlide.children.length - 1) {
    slideIndex++
  } else {
    slideIndex = 0
  }
  updateCarousel()
})

prevButton.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--
  } else {
    slideIndex = carouselSlide.children.length - 1
  }
  updateCarousel()
})

function updateCarousel() {
  const slideWidth = carouselSlide.clientWidth
  carouselSlide.style.transform = `translateX(-${slideIndex * slideWidth}px)`

  // Menghapus semua ellips yang ada sebelumnya
  while (ellipsContainer.firstChild) {
    ellipsContainer.removeChild(ellipsContainer.firstChild)
  }

  // Menambahkan ellips sesuai dengan jumlah gambar dalam carousel
  for (let i = 0; i < carouselSlide.children.length; i++) {
    const ellips = document.createElement('img')
    ellips.src =
      i === slideIndex
        ? './assets/images/ellips-solid.svg'
        : './assets/images/ellips-outline.svg'
    ellips.alt = 'ellips'
    ellipsContainer.appendChild(ellips)
  }
}

updateCarousel()
