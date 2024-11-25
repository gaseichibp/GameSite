let slideIndex = 0;
let autoPlay;

// Function to show the next slide
function next() {
    slideIndex = (slideIndex + 1) % document.querySelectorAll('.slide').length;
    showSlide(slideIndex);
}

// Function to show the previous slide
function previous() {
    slideIndex = (slideIndex - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
    showSlide(slideIndex);
}

// Function to show a specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

// Event 1: Function to start autoplay
function playAutoPlay() {
    stopAutoPlay();
    autoPlay = setInterval(next, 2000); // Changes slide every 2 seconds
}

// Event 2: Function to stop autoplay
function stopAutoPlay() {
    clearInterval(autoPlay);
}

// Event 3 and 4: Go to a specific slide when clicking the button
function changeToSlide(numero) {
    slideIndex = numero - 1; // Adjusts the index to start at the chosen slide
    showSlide(slideIndex);
}

// Initializes the first slide
showSlide(slideIndex);