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