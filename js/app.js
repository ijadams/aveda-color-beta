'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};
	return {
		init: _init
	};

})(document, jQuery);

(function() {
	app.init();
})();





$(function() {
  $(".left-off-canvas-toggle, .exit-off-canvas").click(function() {
        $('#locations i').toggleClass("rotated");
    });
});
