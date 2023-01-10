export default function headerMenuToggle() {
    const headerMenu = document.querySelector('.header-nav');
    const headerToggle = document.querySelector('.header-nav-toggle');

    if (headerToggle) headerToggle.addEventListener('click', () => {
        headerMenu.classList.toggle('is-active');
        headerToggle.classList.toggle('is-active');
        document.body.classList.toggle('no-scroll');
    });
}