// Optional JS for extra effects like tracking mouse movement slightly
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.parallax-container');
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop && container) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            container.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
