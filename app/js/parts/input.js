//====focusInput

(function() {
	var input = $('.input');


	input.on("blur", function() {
		if ($(this).val().length >= 1) {
			$(this).closest('.input-block')
			.find('label')
			.addClass("active");
		} else {
			$(this).closest('.input-block')
			.find('label')
			.removeClass("active");
		}
	});
})();