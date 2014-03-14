$(document).ready(function() {
  
  $('.side-nav-container').hover(function() {
    $(this).addClass('is-showed');
    $('.kudo').addClass('hide');
  }, function() {
    $(this).removeClass('is-showed');
    $('.kudo').removeClass('hide');
  });

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
