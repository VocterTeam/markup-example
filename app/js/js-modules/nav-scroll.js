$('.main-nav-list').on('click', 'li a', function(event) {
    event.preventDefault();
    var thisHref = $(this).attr('href');
    var thisTrimmedHref;
    var elementToScroll;
    var wpAdminBarHeight = 0;
    var additionalHeight = 0;

    if ($('#wpadminbar').length) {
        wpAdminBarHeight = $('#wpadminbar').outerHeight();
    }

    thisTrimmedHref = thisHref.substring(1);
    if (thisTrimmedHref.length > 1) {
        if (thisTrimmedHref === 'we-offer'){
            additionalHeight = parseInt($('.section-about__inner').css('top')) + parseInt($('.section-about__inner').css('padding-top'));
        }
        elementToScroll = $('#' + thisTrimmedHref);
        if (elementToScroll.length) {
            $('html, body').animate({
                scrollTop: elementToScroll.offset().top - $('.site-header').outerHeight() + parseInt(elementToScroll.css('padding-top')) + additionalHeight - wpAdminBarHeight
            }, 500)
            $('.main-nav').removeClass('active');
        }
    }

})