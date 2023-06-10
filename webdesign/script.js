window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-background');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});




var slides = document.getElementsByClassName("slide");
var currentSlide = 1;

function showSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

setInterval(showSlide, 3000);