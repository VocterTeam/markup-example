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