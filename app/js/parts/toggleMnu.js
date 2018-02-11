//=====toggleMnu
;(function(){
	var mnuLink = $('.header__item--mnu a')
	var sidebar = $('.nav')
	var mainBlock = $('.mobile-page')

	if($(sidebar)[0]){

		mnuLink.on('click',toggleMnu);	

		sidebar.on('swipeleft', function(e){
			if($(this).hasClass('active')){
				toggleMnu(e)
			}
		})

		function toggleMnu(e){
			console.log("++")
			e.preventDefault()
			sidebar.toggleClass("active")
			mainBlock.toggleClass("active")
		}
	}
})();


//============