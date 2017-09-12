function popupShow(options) {
    $('[data-popup]').on('click', function(event) {
        event.preventDefault();

        var thisPopup = $(this).data('popup').substring(-1);
        thisPopupElement = $('#' + thisPopup);
        thisPopupElementInner = thisPopupElement.find('.popup-inner');

        var clickOutsideArgs = {
            fadeOut: true,
            elementToPreserve: $(".popup-inner"),
            elementToHide: $('.popup')
        };

        // clickOutside(clickOutsideArgs);

        if (thisPopupElement.length) {
            $('body').addClass('overflow');
            thisPopupElementInner.css('top', '500%');
            thisPopupElement.fadeIn(500);
            thisPopupElementInner.animate({
                top: '50%'
            }, 500);
        }
    });
    $('.popup').on('click', function(event) {
        popupClose();
    });
    $('.popup-inner').on('click', function(event) {
        event.stopPropagation();
    });
}