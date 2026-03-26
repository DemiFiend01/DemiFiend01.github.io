const mobileMenu = document.querySelector('.siteHeader__hamburger');
const nav = document.querySelector('.siteHeader nav');

let slideIndex = 1;
showSlides(slideIndex);

if (mobileMenu && nav) {
    mobileMenu.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        mobileMenu.setAttribute('aria-expanded', isOpen);
        mobileMenu.textContent = isOpen ? '✕' : '☰';
    });
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("mySlidesDot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("mySlidesDotActive", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " mySlidesDotActive";
}