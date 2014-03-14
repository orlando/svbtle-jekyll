$(document).ready(function () {

    $('.side-nav-container').hover(function () {
        $(this).addClass('is-showed');
        $('.kudo').addClass('hide');
    }, function() {
        $(this).removeClass('is-showed');
        $('.kudo').removeClass('hide');
    });

    $(window).scroll(function () {
        var logotype = $('.logotype'),
            buttonNav = $('.side-nav__button'),
            scrollTop = $(window).scrollTop(),
            windowHeight = $(window).outerHeight(),
            kudoSide = $('.kudo');
            kudoBottom = $('.instapaper'); // $('.kudo-bottom')
            kudoBottomPosition = kudoBottom.offset().top; // instapaper for now while adding kudo-bottom elem

        if ( scrollTop > 150) {
            logotype.addClass('is-showed');
            buttonNav.addClass('no-opacity');
        } else {
            logotype.removeClass('is-showed');
            buttonNav.removeClass('no-opacity')
        }

        if ( scrollTop + windowHeight > kudoBottomPosition) {
            kudoSide.addClass('hide');
        } else {
            kudoSide.removeClass('hide');   
        }
    });  
});
