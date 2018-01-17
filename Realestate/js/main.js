(function ($) {
 "use strict";
/*----------------------------
 Submit property Form
------------------------------ */
	$( ".submit-btn" ).click(function() {
	  $( ".submit-form" ).slideToggle("slow")
	});
	$(".close-form").click(function(){
        $(".submit-form").hide("slow");
    });
	
/*----------------------------
Main Menu
------------------------------ */
	//Home 1 main menu
	$(".show-menu").click(function(){
		$(".main-menu").slideToggle("slow");
	});	

	//Home 2 main menu
	$(".open-menu").click(function(){
		$(".menu-hiden").slideToggle("slow");
	});	
	$(".close-menu").click(function(){
        $(".menu-hiden").slideToggle("slow");
    });
	
/*----------------------------
magnific Popup image
------------------------------ */

	//properties image
	$('.properties-image').magnificPopup({
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
	
	
	//Galleru v2 image
	$('.image-list').magnificPopup({
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
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  

	//Home v1 - slider
  $(".slider-home1").owlCarousel({ 	  
      items :1,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
	  pagination:true,
	  navigation:false,
	  loop:true,
	  autoPlay: true,
	  // autoplayTimeout:8000,
	  animateOut: 'fadeOut',
	  mouseDrag: false,
  });

	//Home v2 - slider
	$(".slider-home2").owlCarousel({ 	  
		items :1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
		pagination:false,
		navigation:true,
		autoPlay: true,
	});


	//properties v1 slider
	$(".properties-slider").owlCarousel({ 	  
		items :1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
		pagination:false,
		navigation:true,
		autoPlay: false,
	});
	
	//properties v2 slider
	$(".properties-slider2").owlCarousel({ 	  
		items :3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
		pagination:false,
		navigation:true,
		autoPlay: false,
	});

	//properties v3 slider
	$(".feature-slider").owlCarousel({ 	  
		items :3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
		pagination:true,
		navigation:false,
		autoPlay: false,
	});
	
	
	//Home v1 - Agent slider
	$(".agent-slider-v1").owlCarousel({ 	  
		items :4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
		pagination:true,
		navigation:false,
		autoPlay: false
	});

	//Home v2 - Agent slider
	$(".agent-slider-v2").owlCarousel({ 	  
		items :3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
		pagination:true,
		navigation:false,
		autoPlay: false
	});


	//Home v3 - Agent slider
	$(".agent-slider-v3").owlCarousel({ 	  
		items :4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
		pagination:false,
		navigation:false,
		autoPlay: false
	});


	//partner v2 slider
	$(".partner-slider").owlCarousel({ 	  
		items :6,
		itemsDesktop : [1199,6],
		itemsDesktopSmall : [980,4],
		itemsTablet: [768,3],
		itemsMobile : [479,2],
		pagination:false,
		navigation:false,
		autoPlay: false,
	});

	
	
/*----------------------------
 price-slider active
------------------------------ */  
	//price-range for home 1
	$( "#price-range" ).slider({
		range: true,
		min: 100,
		max: 1000,
		values: [ 300, 800 ],
		slide: function( event, ui ) {
	$( "#price-main" ).val("$ " + ui.values[ 0 ] + " - " + ui.values[ 1 ] +" $" );
	}
	});
	$( "#price-main" ).val(  " $" + $( "#price-range" ).slider( "values", 0 ) +
	" - " + $( "#price-range" ).slider( "values", 1 ) + " $"  );  
	   
   //area-range for home 1
   $( "#area-range" ).slider({
	   range: true,
	   min: 100,
	   max: 1000,
	   values: [ 210, 900 ],
	   slide: function( event, ui ) {
	$( "#area-main" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] +" ft" );
   	}
  	});
  $( "#area-main" ).val( $( "#area-range" ).slider( "values", 0 ) +
	   " - " + $( "#area-range" ).slider( "values", 1 ) + " ft"  );
	  
	//rooms-range for home 1
	$( "#rooms-range" ).slider({
		range: true,
		min: 0,
		max:40,
		values: [ 0, 30 ],
		slide: function( event, ui ) {
	$( "#rooms" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
	}
	});
	$( "#rooms" ).val( $( "#rooms-range" ).slider( "values", 0 ) +
	" - " + $( "#rooms-range" ).slider( "values", 1 ) );
	
	//price-range for home 3
	$( "#price-range-v3" ).slider({
		range: true,
		min: 100,
		max: 1000,
		values: [ 300, 800 ],
		slide: function( event, ui ) {
	$( "#price-v3" ).val("$ " + ui.values[ 0 ] + " - " + ui.values[ 1 ] +" $" );
	}
	});
	$( "#price-v3" ).val("$ " + $( "#price-range-v3" ).slider( "values", 0 ) +
	" - " + $( "#price-range-v3" ).slider( "values", 1 ) + " $"  );  

	//area-range for property list
	$( "#range-area" ).slider({
		range: true,
		min: 0,
		max: 988,
		values: [ 0, 988 ],
		slide: function( event, ui ) {
	$( "#area" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] +" ft" );
	}
	});
	$( "#area" ).val( $( "#range-area" ).slider( "values", 0 ) +
	" - " + $( "#range-area" ).slider( "values", 1 ) + " ft"  );


	//price-range for property list
	$( "#range-price" ).slider({
		range: true,
		min: 0,
		max: 1200,
		values: [ 0, 1200 ],
		slide: function( event, ui ) {
	$( "#price" ).val("$ " + ui.values[ 0 ] + " - " + ui.values[ 1 ] +" $" );
	}
	});
	$( "#price" ).val( "$ " + $( "#range-price" ).slider( "values", 0 ) +
	" - " + $( "#range-price" ).slider( "values", 1 ) + " $"  );  
	   
	   
/*--------------------------
bxslider
---------------------------- */	
	//Testimonial slider	   
	$('.client-content').bxSlider({
	  pagerCustom: '.client-img'
	});

	//Property details slider	   
	$('.bg-photo').bxSlider({
	  pagerCustom: '.sm-photo'
	});


/*----------------------------
 slick slider active
------------------------------ */ 
	//Property details one slider
	$('.big-photo').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.pagin-slider'
	});
	$('.pagin-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.big-photo',
		dots: false,
		centerMode: true,
		focusOnSelect: true
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
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 