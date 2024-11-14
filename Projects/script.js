// JavaScript for Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill");

    // Loop through each skill bar and animate the width to the specified percentage
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0"; // Reset to 0 for animation
        setTimeout(() => {
            bar.style.width = width; // Animate to specified width
        }, 500);
    });
});
