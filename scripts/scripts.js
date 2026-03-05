const mobileMenu = document.querySelector('.siteHeader__hamburger');
const nav = document.querySelector('.siteHeader nav');

if (mobileMenu && nav) {
    mobileMenu.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        mobileMenu.setAttribute('aria-expanded', isOpen);
        mobileMenu.textContent = isOpen ? '✕' : '☰';
    });
}