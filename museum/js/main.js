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
      autoPlay: false, 
	  slideSpeed:500,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 
/*----------------------------
 Showcase active
------------------------------ */  
  $(".showcase-slider").owlCarousel({
      autoPlay: true, 
	  slideSpeed:500,
	  pagination:true,
	  navigation:true,
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [600,1],
	  itemsMobile : [479,1],
  });
 
/*----------------------------
 meseum cafe food active
------------------------------ */  
  $(".meseum-cafe-food").owlCarousel({
      autoPlay: true, 
	  slideSpeed:500,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
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