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