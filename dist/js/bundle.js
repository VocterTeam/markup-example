/*FUNCTIONS*/
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
function popupClose() {
	$('body').removeClass('overflow');
	$('.popup-inner').animate({
		top: '60%'
	}, 500, function () {
		$('.popup').fadeOut(500).find('.popup-inner').animate({
			top: '-500%'
		}, 500)
	})
}
// clickOutside
function clickOutside(args) {
  // argsCheck
  function argsCheck() {
    if (args.elementRemoveClass) {
      args.elementRemoveClass.removeClass("active");
    } else if (args.fadeOut) {
      popupClose();
    }
  }
  // END:argsCheck

  $("body").on("mouseup touchstart", function(event) {
    if (
      !args.elementToPreserve.is(event.target) &&
      args.elementToHide.has(event.target).length === 0
    ) {
      argsCheck();
    }
  });
  $(document).on("keyup", function(event) {
    if (event.keyCode == 27) {
      argsCheck();
    }
  });
}
// END:clickOutside
/*END:FUNCTIONS*/

jQuery(document).ready(function($) {
    $('#topBtn').on('click', function(event) {
    	event.preventDefault();
    
    	$('html, body').animate({
    		scrollTop: 0
    	}, 500)
    });
    $('.js-popup-close-btn').on('click', function(event) {
        event.preventDefault();
        popupClose();
    });
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