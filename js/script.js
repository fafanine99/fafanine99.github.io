window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_menu'),
    menuItem = document.querySelectorAll('.header_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_active');
        })
    })
})