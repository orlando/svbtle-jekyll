$(document).ready(function() {
  
  $(window).scroll(function () {
    var logotype = $('.logotype');
    var buttonNav = $('.side-nav__button');

    if ($(window).scrollTop() > 150) {
      logotype.addClass('is-showed');
      buttonNav.addClass('no-opacity');
    } else {
      logotype.removeClass('is-showed');
      buttonNav.removeClass('no-opacity')
    }
  });  

});
