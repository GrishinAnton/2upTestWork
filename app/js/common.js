//pageWidget
function pageWidget(pages) {
	var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
	widgetWrap.prependTo("body");
	for (var i = 0; i < pages.length; i++) {
		$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
	}
	var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
	widgetStilization.prependTo(".widget_wrap");
}

$(document).ready(function ($) {
	pageWidget([
		'index',
		'create-accaunt',
		'story',
		'widgets',
		'feedback',

		]);
});

//===========
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
//=====playVideo


// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = $('.article__media__image-inner');
  playButton.on("click", function() {
  	playButton.fadeOut('slow')
    player.playVideo();
  });  

  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//=====slider

;(function(){
	$('.article-slider').slick({
	  arrows: false,
	  dots: true,
	  slidesToScroll: 1,
    centerMode: true,
		centerPadding: '80px',
    slidesToShow: 1,
  //   responsive: [
  //   {
  //     breakpoint: 420,
  //     settings: {
	 //  		slidesToScroll: 1,
  //       centerMode: true,
  //   		centerPadding: '20px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
	});
})();
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