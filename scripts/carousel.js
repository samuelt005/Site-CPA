// =============================================================================
// PARAMETROS PARA O CARROSSEL
// =============================================================================
$(document).ready(function(){
    $('.carousel_container').slick({
        dots: true,
        infinite: true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });
  });