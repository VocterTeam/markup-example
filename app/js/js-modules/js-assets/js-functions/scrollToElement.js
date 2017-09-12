// scrollToElement
function scrollToElement(options) {
    if (options.elementScrollTo) {
        $('html, body').animate({
            scrollTop: options.elementScrollTo.offset().top - options.offset
        }, options.speed);
    }
}
// END:scrollToElement
