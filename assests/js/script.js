// Initialize AOS
AOS.init({
  duration: 2000,
  once: true,
});

// const mainNav = document.querySelector('#mainNav');
// const navbarBrand = document.querySelector('.navbar-brand');
// const navLinks = mainNav.querySelectorAll('.nav-link');
// const mainNavContent = mainNav.querySelector('#mainNavContent');

// navbarBrand.addEventListener('click', function () {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// });

// navLinks.forEach(link => {
//   link.addEventListener('click', function () {
//     mainNavContent.classList.remove('show');
//   });
// });

// Play video when video modal is opened
const videModal = document.querySelector('#videoModal');
const heroVideo = document.querySelector('#hero-video');

videModal.addEventListener('shown.bs.modal', function () {
  heroVideo.play();
});

videModal.addEventListener('hidden.bs.modal', function () {
  heroVideo.currentTime = 0;
  heroVideo.pause();
});
