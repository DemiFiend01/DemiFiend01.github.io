const mobileMenu = document.querySelector('.siteHeader__hamburger');
const nav = document.querySelector('.siteHeader nav');

mobileMenu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    mobileMenu.setAttribute('aria-expanded', isOpen); //expanded the navigation bar
    mobileMenu.textContent = isOpen ? '✕' : '☰';
});