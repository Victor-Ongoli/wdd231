const navMenu = document.querySelector('#menu');
const navButton = document.querySelector('#nav-button');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navMenu.classList.toggle('show');
});