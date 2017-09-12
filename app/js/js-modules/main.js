//= js-assets/functions

jQuery(document).ready(function($) {
    //= topBtn
    //= popupCloseBtn
    //= nav-scroll
    popupShow();
    $('input[type="tel"]').mask('+3 (999) 999-99-99');
    $('#toggleBtn').on('click', function(event) {
        event.preventDefault();
        $('.main-nav').toggleClass('active');

        var clickOutsideArgs = {
            elementRemoveClass: $('.main-nav'),
            elementToPreserve: $('.main-nav'),
            elementToHide: $('.main-nav, #toggleBtn')
        };

        clickOutside(clickOutsideArgs);
    });
});

$(window).on('load', function(event) {
    $('.intro .wow').addClass('active');
    new WOW().init();
    $("#compareSlider").twentytwenty();
    $('#introSlider').slick({
        arrows: false,
        dots: true
    });
    var $grid = $('#catalogGallery').isotope({
        itemSelector: '.catalog-gallery__item',
        resizable: false,
        layoutMode: 'fitRows'
    });
    var isotopeFilters = {};
    // flatten object by concatting values
    function isotopeFiltersConcatValues(obj) {
        var value = '';
        for (var prop in obj) {
            value += obj[prop];
        }
        return value;
    }
    $('.js-isotope-filter').on('click', '.js-isotope-filter__link', function(event) {
        event.preventDefault();
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.js-isotope-filter-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        isotopeFilters[filterGroup] = $this.attr('data-filter');
        // combine filters
        var filterValue = isotopeFiltersConcatValues(isotopeFilters);
        $grid.isotope({ filter: filterValue });
    });
    $('.js-isotope-filter-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.js-isotope-filter__link', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });
});