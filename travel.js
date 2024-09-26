let currentSlide = 0;

function showSlide(slideIndex) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slideWidth = 233; // Width of each slide

    const totalSlides = document.querySelectorAll('.slide').length;

    if (slideIndex < 0) {
        currentSlide = totalSlides - 1; // If first slide, go to the last one
    } else if (slideIndex >= totalSlides) {
        currentSlide = 0; // If last slide, go to the first one
    } else {
        currentSlide = slideIndex;
    }

    sliderWrapper.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
