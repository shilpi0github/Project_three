document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = Array.from(carousel.children);
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to one another
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    // Function to move carousel to next slide
    function moveToSlide(carousel, currentSlide, targetSlide) {
        carousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('active');
        targetSlide.classList.add('active');
    }

    // Event listener for previous button
    prevBtn.addEventListener('click', function () {
        const currentSlide = carousel.querySelector('.active');
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
        moveToSlide(carousel, currentSlide, prevSlide);
    });

    // Event listener for next button
    nextBtn.addEventListener('click', function () {
        const currentSlide = carousel.querySelector('.active');
        const nextSlide = currentSlide.nextElementSibling || slides[0];
        moveToSlide(carousel, currentSlide, nextSlide);
    });

    // Responsive behavior on window resize
    window.addEventListener('resize', function () {
        slideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        });
        const currentSlide = carousel.querySelector('.active');
        carousel.style.transform = 'translateX(-' + currentSlide.style.left + ')';
    });
});
