const menu_button = document.querySelector('.header_menu')
const menu = document.querySelector('.lateral_menu')

menu_button.addEventListener('click', () => {
    menu.classList.toggle('lateral_menu--active')
})