// Event menu responsive
document.querySelector('.menu-btn').addEventListener('click', ()=> {
        document.querySelector('.nav-menu').classList.toggle('show');
});


// Scroll Reveal
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
ScrollReveal().reveal('.social-bar', { delay: 500 });
