$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $('.logotype').css({'margin-right': '0'});
      $('.side-nav__button').css({'opacity': '1'});
    } else {
      $('.logotype').css({'margin-right':'-100px'});
      $('.side-nav__button').css({'opacity': '.3'});
    }
  });  

});
