(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
  jQuery('nav#dropdown').meanmenu();  
  
/*----------------------------
 Featured Product Carousel
------------------------------ */  
  $(".slider").owlCarousel({
      autoPlay: false, 
    slideSpeed:2000,
    pagination:true,
    navigation:false,    
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });


  $(".image-area").owlCarousel({
      autoPlay: true, 
    slideSpeed:2000,
    pagination:true,
    navigation:true,    
      items : 3,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  }); 

  $(".activities-text").owlCarousel({
    autoPlay: true, 
    slideSpeed:2000,
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

  $(".single-calender").owlCarousel({
      autoPlay: true, 
    slideSpeed:2000,
    pagination:true,
    navigation:true,    
      items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });
/*----------------------------
 header top hidden
------------------------------ */  
  $('.hidden-icon i').on('click', function () {
      $(".header-top .container , .header-top-hide-minus").slideToggle("slow");
      $(".header-top-hide-plus").slideToggle("slow");
  });
  /*$(".hidden-icon .fa-plus").click(function(){
      $(".hidden-icon .container , .header-top-hide-plus").slideToggle("slow");
      $(".header-top-hide-minus").slideToggle("slow");
  });*/
  
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();

})(jQuery); 