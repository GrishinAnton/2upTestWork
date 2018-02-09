//mailJs
(function(){
	$('.popup-rieltor-day-form').on('submit', function(e) { 
		var th = $(this);
		var sendFail = true;
		var ref = th.find("[required]");
		var popupSendButton = $('.js-popup-rieltor-day-order-button');

				if ( $(ref).val() == '' )
					 {
					alert("Заполните поля пожалуйста");
					var sendFail = false;
					e.preventDefault();
					return false;
			 }
		if (sendFail == true){
			popupSendButton.prop('disabled', true);
			popupSendButton.text('Запрос отправляется...');

		$.ajax({
			type: "POST",
			url: "", 
			data: th.serialize()
		}).done(function() {
			
			setTimeout(function(){

				th.trigger("reset");
			},20000)
			
		});
		}return false;
	});
})();



//=================