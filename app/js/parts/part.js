;(function(){
	var conteiner = $('.feedback-contents')
	var blockWidth = $(conteiner).width()
	var contentsWidth = blockWidth * 3
	var items = $('.feedback-contents .feedback-content__item')
	var transform = 0

	//табы сверху
	var tab = $('.feedback-tabs__tab li')

	tab.on('click', function(){
		tabsSwitchActive($(this))

		var transformLi = $(this).index() * blockWidth
		containerTransform(-transformLi)
		transform = -transformLi
	})

	//выставляем ширину блока при загрузке
	$(conteiner).width(contentsWidth + 10)

	//выставляем шиирну всем блокам
	items.each(function(item, elem){
		$(elem).css('max-width', blockWidth)
	})


	
	//действия при свайпе по итемам в контейнере
	items.on('swipeleft', function(){
		transform+=-blockWidth
		if(transform == -contentsWidth){
			transform = -contentsWidth  + blockWidth
		}
		switch(transform){
			case -blockWidth:				
				tabsSwitchActive($(tab).eq(1))
				break
			case -blockWidth * 2: 
				tabsSwitchActive($(tab).eq(2))
				break
		}
		containerTransform(transform)
	})
	items.on('swiperight', function(){
		transform+=blockWidth
		if(transform >= 0){
			transform = 0
		}
		switch(transform){
			case 0: 
				tabsSwitchActive($(tab).eq(0))
				break
			case -blockWidth: 
				tabsSwitchActive($(tab).eq(1))
				break
		}
		containerTransform(transform)
	})

	function tabsSwitchActive($this){
		$this.addClass('active')
					.siblings()
					.removeClass('active')
	}

	function containerTransform(translate){
		$(conteiner).css('transform', 'translateX(' + translate + 'px' + ')')
	}
	

})();