const navMenu = document.querySelector('#menu');
const navButton = document.querySelector('#nav-button');

const npButton = document.querySelector('#npButton');
const npBox = document.querySelector('#npBox');
const closeNp = document.querySelector('#npCloseButton');

const bronzeButton = document.querySelector('#bronzeButton');
const bronzeBox = document.querySelector('#bronzeBox');
const closeBronze = document.querySelector('#closeBronze');

const silverButton = document.querySelector('#silverButton');
const silverBox = document.querySelector('#silverBox');
const closeSilver = document.querySelector('#closeSilver');

const goldButton = document.querySelector('#goldButton');
const goldBox = document.querySelector('#goldBox');
const closeGold = document.querySelector('#closeGold');


navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navMenu.classList.toggle('show');
});


npButton.addEventListener("click", () => {
    npBox.showModal();
});
closeNp.addEventListener("click", () => {
    npBox.close();
});


bronzeButton.addEventListener("click", () => {
    bronzeBox.showModal();
});
closeBronze.addEventListener("click", () => {
    bronzeBox.close();
});


silverButton.addEventListener("click", () => {
    silverBox.showModal();
});
closeSilver.addEventListener("click", () => {
    silverBox.close();
});


goldButton.addEventListener("click", () => {
    goldBox.showModal();
});
closeGold.addEventListener("click", () => {
    goldBox.close();
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navigation ul li a');
    const currentPath = window.location.pathname; 

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPath.endsWith(linkHref)) {
            navLinks.forEach(otherLink => otherLink.parentElement.classList.remove('current'));
            link.parentElement.classList.add('current');
        }
    });
});