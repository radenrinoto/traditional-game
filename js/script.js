const hamburgerButton = document.querySelector('.navbar-hamburger')
const navbarMenu = document.querySelector('.navbar-menu')

hamburgerButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active')
})