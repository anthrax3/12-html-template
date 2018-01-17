(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  
  $(".slider-area").owlCarousel({
      autoPlay: true,
	  dots: true,
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
  // Custom Navigation Events
  $(".slide-dots-next").on('click', function () {
    owl.trigger('owl.next');
  });

  $(".slide-dots-prev").on('click', function () {
    owl.trigger('owl.prev');
  });
 
/*----------------------------
Our Live Camp
------------------------------ */  
	var owl = $(".total-camp");
  	  owl.owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,  
      items : 1,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
  // Custom Navigation Events
  $(".next").on('click', function () {
    owl.trigger('owl.next');
  });

  $(".prev").on('click', function () {
    owl.trigger('owl.prev');
  });
/*----------------------------
our animal
------------------------------ */  
  $(".total-area").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 5,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [600,2],
	  itemsMobile : [350,1],
  });
 /*----------------------------
our animal
------------------------------ */  
  $(".map-gallary").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 5,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
/*----------------------------
magnific Popup image
------------------------------ */
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});


/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*----------------------------
single details
------------------------------ */  
  $(".animal-slider").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 6,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      itemsDesktop : [1199,5],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [600,2],
	  itemsMobile : [450,1],
  });
  
 /*------------------------------------
 jquery Serch Box activation code 
 --------------------------------------*/
	 $(".search-icon").on('click', function(){
	    $(".search-box-area").slideToggle('slow');
	});

	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 