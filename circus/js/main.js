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
  $(".text-slider").owlCarousel({
      autoPlay: true, 
	  slideSpeed:500,
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

   
/*----------------------------
 Tab Content
------------------------------ */  
  $(".content-fetures").owlCarousel({
      autoPlay: true, 
	  slideSpeed:500,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
  /*----------------------------
   Tab Content
  ------------------------------ */  
    $(".images-fetures").owlCarousel({
        autoPlay: true, 
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
   Tab Content
  ------------------------------ */  
    $(".upcomming-events-slider").owlCarousel({
        autoPlay: true, 
  	  slideSpeed:500,
  	  pagination:false,
  	  navigation:true,	  
        items : 3,
  	  /* transitionStyle : "fade", */    /* [This code for animation ] */
  	  navigationText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        itemsDesktop : [1199,3],
  	  itemsDesktopSmall : [980,2],
  	  itemsTablet: [768,1],
  	  itemsMobile : [479,1],
    });
    /*----------------------------
     Tab Content
    ------------------------------ */  
    var shedule = $(".show-shedule-table");

    shedule.owlCarousel({
      autoPlay: true, 
      slideSpeed:500,
      pagination:false,
      navigation:false,    
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
    });
   
    // Custom Navigation Events
    $('.next').on('click', function () {
      shedule.trigger('owl.next');
    })
    $('.prev').on('click', function () {
      shedule.trigger('owl.prev');
    })
    /*----------------------------
   Tab Content
  ------------------------------ */  
    $(".single-product-thumb").owlCarousel({
        autoPlay: false, 
      slideSpeed:500,
      pagination:false,
      navigation:true,    
        items : 1,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-arrow-right'></i>","<i class='fa fa-arrow-left'></i>"],
        itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
    });
  /*----------------------------
   Tab Content
  ------------------------------ */  
    $(".related-product-slider").owlCarousel({
        autoPlay: true, 
  	  slideSpeed:500,
  	  pagination:false,
  	  navigation:true,	  
        items : 4,
  	  /* transitionStyle : "fade", */    /* [This code for animation ] */
  	  navigationText:["<i class='fa fa-arrow-left' style='color:#e3bf8d'></i>","<i class='fa fa-arrow-right' style='color:#e3bf8d'></i>"],
        itemsDesktop : [1199,4],
  	  itemsDesktopSmall : [991,3],
  	  itemsTablet: [768,2],
  	  itemsMobile : [479,1],
    });
  /*----------------------------
   Tab Content
  ------------------------------ */  
    $(".our-Partner").owlCarousel({
        autoPlay: true, 
      slideSpeed:500,
      pagination:false,
      navigation:true,    
        items : 5,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [760,2],
      itemsMobile : [479,1],
    });
  /*----------------------------
   Tab Content
  ------------------------------ */  
    $(".twitter-slide").owlCarousel({
        autoPlay: true, 
  	  slideSpeed:500,
  	  pagination:false,
  	  navigation:true,	  
        items : 1,
  	  /* transitionStyle : "fade", */    /* [This code for animation ] */
  	  navigationText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        itemsDesktop : [1199,1],
  	  itemsDesktopSmall : [980,1],
  	  itemsTablet: [768,1],
  	  itemsMobile : [479,1],
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
mixitup active
------------------------------ */ 
   $('#container').imagesLoaded( function() {
    $('#Container').mixItUp();
  });

/*----------------------------
 Flex Slider About us page
------------------------------ */ 
  $(window).on('load', function() {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
  });
/*----------------------------
 Modal center
------------------------------ */ 
  function reposition() {
    var modal = $(this),
      dialog = modal.find('.modal-dialog');
    modal.css('display', 'block');
    dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
  }
  $('.modal').on('show.bs.modal', reposition);
  $(window).on('resize', function() {
    $('.modal:visible').each(reposition);
  });
  $('#show-info-modal').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
  });
 
})(jQuery); 
