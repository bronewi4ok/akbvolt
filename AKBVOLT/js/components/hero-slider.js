// LEADERS SLIDER
window.addEventListener('load', function () {
  var heroSlider = new Swiper(".hero__slider", {
    updateOnWindowResize: true,
    watchOverflow: true,
    spaceBetween: 0,
    loop: true,
    speed: 10000,
    slidesPerView: '1',
    grabCursor: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.hero__slider__pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  heroSlider.el.addEventListener("mouseenter", function (event) {
    heroSlider.autoplay.stop();
  }, false);

  heroSlider.el.addEventListener("mouseleave", function (event) {
    heroSlider.autoplay.start();
  }, false);
}, false);
// PARTNERS SLIDER
