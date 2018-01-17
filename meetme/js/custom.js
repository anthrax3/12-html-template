(function ($) {
 "use strict";

/*----------------------------
owl active
------------------------------ */  
	$(".review-slider").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 1,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [992,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	});





})(jQuery); 