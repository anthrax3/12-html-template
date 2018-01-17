(function ($) {
 "use strict";

/*----------------------------
jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	


	$(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
/*----------------------------
Navbar shrink  active
------------------------------ */
	var winEle = $(window);
	var nav = $('header');

	winEle.scroll(function(){
		if (winEle.scrollTop() > 550) {
			nav.addClass('smallnav');
		}else {
			nav.removeClass('smallnav');
		}
	});	

/*----------------------------
wow js active
------------------------------ */
	new WOW().init();
/*----------------------------
 slick slider active
------------------------------ */ 
	//Property details one slider
	$('.product-img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.thumbnail'
	});
	$('.thumbnail').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product-img',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});  
/*--------------------------
jarallax active
---------------------------- */
	$('.jarallax').jarallax({
		speed: 0.5
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