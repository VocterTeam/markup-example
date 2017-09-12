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