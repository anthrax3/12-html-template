(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();


	$(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  
  $(".slide-area").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [992,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });

  //Testimonial silder
  $(".testimonial-silder").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [992,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });


  //Blog silder
  $(".blog-slider").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [992,2],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });

  //Screenshots silder
  $(".screenshots-slider").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [992,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });

/*--------------------------
 Sticky Menu Activation Code
---------------------------- */	
$(window).on('scroll', function(){
	if( $(window).scrollTop()>80 ){
		$('#sticky').addClass('stick');
		} else {
		$('#sticky').removeClass('stick');
	}
});
/*--------------------------
 One Page Navigatiopn active
---------------------------- */
	$('#nav').onePageNav({
		scrollOffset: 70
	});
/*--------------------------
 counterUp
---------------------------- */
	$('.count').counterUp({
		delay: 10,
		time: 3000
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