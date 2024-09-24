const slides = document.querySelectorAll('.fade-slide');
let currentSlide = 0;
const slideInterval = 5000; // Change slide every 5 seconds (adjust timing as needed)

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Show the first slide initially
slides[currentSlide].classList.add('active');

// Automatically transition slides
setInterval(nextSlide, slideInterval);