functions = {
    setButtonNav : function () {
        var windowWidth = $(window).width(),
            buttonNav = $('.side-nav__button');

        if (windowWidth < 500) {
            buttonNav.addClass('on-mobile');
        } else {
            buttonNav.removeClass('on-mobile');
        }
    }
};

$(document).ready(function () {
    functions.setButtonNav();

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
            buttonNavMobile = buttonNav.filter('.on-mobile'),
            scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            kudoSide = $('.kudo'),
            kudoBottom = $('.instapaper'), // $('.kudo-bottom')
            kudoBottomPosition = false;

            if (kudoBottom.length > 0) {
                kudoBottomPosition = kudoBottom.offset().top; // instapaper for now while adding kudo-bottom elem
            }

        if ( scrollTop > 150) {
            logotype.addClass('is-showed');
            buttonNav.addClass('no-opacity');
            if ( buttonNavMobile.length > 0) {
                buttonNavMobile.hide();
            }
        } else {
            logotype.removeClass('is-showed');
            buttonNav.removeClass('no-opacity');
            if ( buttonNavMobile.length > 0) {
                buttonNavMobile.show();
            }
        }

        if (kudoBottomPosition !== false && ( scrollTop + windowHeight > kudoBottomPosition)) {
            kudoSide.addClass('hide');
        } else {
            kudoSide.removeClass('hide');   
        }
    });

    $(window).resize(function () {
        functions.setButtonNav();
    });
});
