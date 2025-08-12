const npButton = document.querySelector('#openButton');
const npBox = document.querySelector('#portfolio');
const closeNp = document.querySelector('#closeButton');
const slides = document.querySelectorAll(".slides img ");

let slideIndex = 0;
let intervalId = null;

// intializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }

}
function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}
function prevSlide() {
    // clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}


// modal
npButton.addEventListener("click", () => {
    npBox.showModal();
});
closeNp.addEventListener("click", () => {
    npBox.close();
});