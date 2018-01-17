(function ($) {
 "use strict";

/*----------------------------
jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	

/*----------------------------
tooltip
------------------------------ */
	$('.social-icon').tooltip({
        placement: 'bottom'
    });


/*--------------------------
 Sticky Menu 
---------------------------- */
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>30 ){
			$('#sticky1').addClass('stick1');
			} else {
			$('#sticky1').removeClass('stick1');
		}
	});		   
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>30 ){
			$('#sticky2').addClass('sticky2');
			} else {
			$('#sticky2').removeClass('sticky2');
		}
	});
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>30 ){
			$('#sticky3').addClass('sticky3');
			} else {
			$('#sticky3').removeClass('sticky3');
		}
	});		 

/*----------------------------
wow js active
------------------------------ */
	new WOW().init();
 
/*----------------------------
owl active
------------------------------ */  
	$("#owl-demo").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [992,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	});
	//Client slider
	$(".client-slider").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 5,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [992,4],
		itemsTablet: [768,3],
		itemsMobile : [479,2],
	});


	//Feature slider
	$(".feature-slider").owlCarousel({
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


	//Product slider
	$(".product-slider").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [992,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	});



	//Team slider
	$(".team-slider").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 1,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [992,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	});
/*--------------------------
Theme Search Box
---------------------------- */
		function searchBox () {
		  var search = $("#search-button"),
		      mainSearch = $("#searchWrapper"),
		      close = $("#close-button");
		  if(search.length) {
		    search.on('click', function(){
		      mainSearch.addClass('show-box');
		    });
		    close.on('click', function() {
		      mainSearch.removeClass('show-box');
		    });
		  }
		}
		searchBox ();
/*--------------------------
 counterUp active
---------------------------- */
	$('.count').counterUp({
		delay: 10,
		time: 3000
	});

/*----------------------------
mixitup active
------------------------------ */  
	$('#Container').mixItUp();

/*----------------------------
magnific Popup active
------------------------------ */
	$('.single-portfolio').magnificPopup({
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
/*--------------------------
accordion active
---------------------------- */
$( "#accordion" ).accordion({
		collapsible: true
	});
/*--------------------------
jarallax active
---------------------------- */
	$('.jarallax').jarallax({
		speed: 0.5
	});

/*----------------------------
range-slider active
------------------------------ */  
	$( "#range-price" ).slider({
		range: true,
		min: 0,
		max: 1200,
		values: [ 0, 875 ],
		slide: function( event, ui ) {
	$( "#price" ).val("$" + ui.values[ 0 ] + " - " +  " $" + ui.values[ 1 ]  );
	}
	});

	$( "#price" ).val( "$" + $( "#range-price" ).slider( "values", 0 ) +
	" - " + " $" + $( "#range-price" ).slider( "values", 1 ));
/*----------------------------
list grid view active
------------------------------ */ 
	$('#list').on('click',function(event){
		event.preventDefault();
		$('#products .item').addClass('list-item');
	});
    $('#grid').on('click',function(event){
    	event.preventDefault();
    	$('#products .item').removeClass('list-item');
    	$('#products .item').addClass('grid-item');
    });
/*--------------------------
bxslider active
---------------------------- */ 
	//Home slider     
	 $('.content-slider').bxSlider({
	    pagerCustom: '.slider-thumbnail',
	    mode: 'fade',
	    speed:1000,
	    auto:true
	 });  
	//Testimonial slider	   
	$('.client-content').bxSlider({
	  pagerCustom: '.client-img'
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

/*--------------------------
bootstrap customize 
---------------------------- */	
	//Product slider
	$('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click( function(){
                var id_selector = $(this).attr("id");
                var id = id_selector.substr(id_selector.length -1);
                var id = parseInt(id);
                $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid', function (e) {
                var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
    //Product count
    $(".btn-minus").on("click",function(){
        var now = $(".total-product> input").val();
        if ($.isNumeric(now)){
            if (parseInt(now) -1 > 0){ now--;}
            $(".total-product> input").val(now);
        }else{
            $(".total-product> input").val("1");
        }
    })
    $(".btn-plus").on("click",function(){
        var now = $(".total-product> input").val();
        if ($.isNumeric(now)){
            $(".total-product> input").val(parseInt(now)+1);
        }else{
            $(".total-product > input").val("1");
        }
    }) 
 
})(jQuery); 