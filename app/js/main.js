'use strict';

(function ($) {
	$(document).ready(function () {
		// Code
		$('.menu__burger').click(function (onClick) {
			$('.menu__burger,.menu__list').toggleClass('active');
		});
	});
})(jQuery);
