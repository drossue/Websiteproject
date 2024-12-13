let currentSlide = 0;
const slides = document.querySelectorAll(".slider-image"); // Select all slider images
const totalSlides = slides.length;

// Function to move the slide
function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop back to last slide
    }
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to first slide
    }
    updateSlider();
}

// Function to update the slider based on currentSlide
function updateSlider() {
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentSlide * 100}%)`; // Move slider horizontally
}

// Initialize the slider
updateSlider();
