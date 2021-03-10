// Menu responsive mobile
var iconBar = document.querySelector('.top-nav__icon-menu-mobile');
var iconClose = document.querySelector('.menu-mobile__icon-close');
var menuMobile = document.querySelector('.top-nav__menu-mobile');
iconBar.addEventListener('click', () => {
    menuMobile.style.transform = 'translateX(0)';
});

iconClose.addEventListener('click', () => {
    menuMobile.style.transform = 'translateX(-100%)';
});




