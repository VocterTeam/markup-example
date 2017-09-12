// scrollTopShow
function scrollTopShow(options) {
    if ($(this).scrollTop() > options.scrollPosition) {
        options.elementToShowHide.fadeIn();
    } else {
        options.elementToShowHide.fadeOut();
    }
}
// END:scrollTopShow
