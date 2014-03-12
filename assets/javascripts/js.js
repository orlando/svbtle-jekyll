$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $('.logotype').show();
      $('.side-nav__button').css({'opacity': '1'});
    } else {
      $('.logotype').hide();
      $('.side-nav__button').css({'opacity': '.3'});
    }
  });  

});
