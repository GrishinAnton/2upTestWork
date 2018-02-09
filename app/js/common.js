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
	pageWidget(['index','blog','news','about_us','contact']);
});

//===========
// Toogle mnu
(function(){
	$(function(){
		$(".toggle-mnu").click(function() {
			$(this).addClass("on");
			$(".fixed-mnu").hide();
		});
	});
})();


//============
//YaMap
(function(){
	ymaps.ready(init);
	  var myMap,
	      myPlacemark;

  function init(){     
      myMap = new ymaps.Map("map", {
          center: [55.709738069037144,37.68927599999996],
          zoom: 16,
          controls: ['zoomControl']
      });

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  			myMap.behaviors.disable(['scrollZoom', 'drag']); 
			} else {
				myMap.behaviors.disable(['scrollZoom']); 
			}      

      myPlacemark = new ymaps.Placemark([55.709738069037144,37.68927599999996], { 
          hintContent: '2DТрейд', 
          balloonContent: '2DТрейд' 
      });

      myMap.geoObjects.add(myPlacemark);

  }
})();


//========================
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
//Magnific popup
(function(){
	$(document).ready(function($) {
		$('.popup-search').magnificPopup({
		    type: 'inline'
		});
	});
})();

//=================




//Fixed mnu

// $(window).scroll(function(){
// 	var scrollTop = $(window).scrollTop(),
// 	stickyBlock = $(".breadcrambs"),
// 	position = stickyBlock.offset().top;
	
// 		$(window).on('resize', function() {
// 			position = stickyBlock.offset().top;
// 		});

// 	if(scrollTop >= position){
// 		$(".wrapper--main_mnu").css('top', '0').addClass('fixed-mnu');
// 	}
// 	if(scrollTop <= position){
// 		$(".wrapper--main_mnu").css('top', '').removeClass('fixed-mnu'); 
// 	}
// });



//Scroll
$(function(){

	//scrollToTop
	var 
		scrolllink = $('.scrolltop'),
		scrollToTop = $('.scrolltop a')

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if (scroll > 300){
			scrolllink.show()
		} if (scroll < 300){
			scrolllink.hide()
		}

		$('.scrolltop a').on('click', function(event){
		event.preventDefault();

		var id  = $(this).attr('href'),
		top = $(id).offset().top;
	
		$('body,html').stop(true).animate({scrollTop: top}, 1000);		

	});	

});

	//Anchor
	$('.scroll').on('click', function(event){
		event.preventDefault();

		var id  = $(this).attr('href'),
		top = $(id).offset().top;
	
	$('body,html').stop(true).animate({scrollTop: top}, 1500);

	});	
});