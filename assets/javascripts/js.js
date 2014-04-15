functions = {
    setButtonNav : function () {
        var windowWidth = $(window).width(),
            buttonNav = $('.side-nav__button');

        buttonNav.on('click', function () {
            var menu = $(this).closest('.side-nav-container');
            menu.toggleClass('is-showed');
            $(this).toggleClass('active');
        });

        if (windowWidth < 500) {
            buttonNav.addClass('on-mobile');
        } else {
            buttonNav.removeClass('on-mobile');
        }
    },
};

$(document).ready(function () {
    functions.setButtonNav();

    $('.side-nav-container').hover(function () {
        $(this).addClass('is-showed');
        $(this).find('.side-nav__button').addClass('active');
        $('.kudo').addClass('hide');
    }, function() {
        $(this).removeClass('is-showed');
        $(this).find('.side-nav__button').removeClass('active');
        $('.kudo').removeClass('hide');
    });

    $(window).scroll(function () {
        var logotype = $('.logotype'),
            buttonNav = $('.side-nav__button'),
            buttonNavMobile = buttonNav.filter('.on-mobile'),
            scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            windowWidth = $(window).width(),
            kudoSide = $('.kudo').last(),
            kudoBottom = $('.group'), //kudo-bottom
            kudoBottomPosition = false;

        if (kudoBottom.length > 0) {
            kudoBottomPosition = kudoBottom.offset().top;
        }

        if (windowWidth < 500 ) {
            if (scrollTop === 0) {
                buttonNav.closest('.side-nav-container').show();
            } else {
                buttonNav.closest('.side-nav-container').hide();
            }
        }

        if ( scrollTop > 150) {
            logotype.addClass('is-showed');
            buttonNav.addClass('no-opacity');
        } else {
            logotype.removeClass('is-showed');
            buttonNav.removeClass('no-opacity');
        }

        if (kudoBottomPosition !== false && ( scrollTop + windowHeight > kudoBottomPosition)) {
            kudoSide.addClass('hide-deep');
        } else {
            kudoSide.removeClass('hide-deep');   
        }
    });

    $(window).resize(function () {
        functions.setButtonNav();
    });
});
