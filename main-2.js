//initialize swiper when document ready
var swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 10,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // Scroll Reveal
ScrollReveal().reveal('.social-bar', { delay: 500 });
// Event menu responsive
document.querySelector('.menu-btn').addEventListener('click', ()=> {
  document.querySelector('.nav-menu').classList.toggle('show');
});

