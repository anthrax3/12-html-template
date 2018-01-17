(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
$('#menu').slicknav();

/*----------------------------
Search Box
------------------------------ */
  $(".search-box-icon").on('click', function(){
      $(".search-box").show("slow");
    });
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
/*--------------------------
bxslider active
---------------------------- */ 
  //Home slider     
  $('.item-content').bxSlider({
    pagerCustom: '.item-thumbnail',
    mode: 'fade',
    speed:1000,
    auto:true
  });

  //About slider
  $('.content-about').bxSlider({
    pagerCustom: '.image-action',
    mode: 'fade',
  });

  //Testimonial slider
  $('.testimonial').bxSlider({
    pagerCustom: '.thumb-list',
    mode: 'fade',
  });
/*----------------------------
 owl active
------------------------------ */
  //twitter slider
  $(".twitter-slider").owlCarousel({
    autoPlay: true, 
    pagination:false,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });
  //Event slider 
  var owl = $(".event-slider");
  $(".event-slider").owlCarousel({
    autoPlay: false, 
    pagination:false,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [750,1],
    itemsMobile : [479,1],
  });
  // Custom Navigation Events
  $(".next").on('click', function(){
    owl.trigger('owl.next');
  });

  $(".prev").on('click', function(){
    owl.trigger('owl.prev');
  });
/*----------------------------
 pickmeup active
------------------------------ */
  pickmeup('.clander', {
    flat : true
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
      enabled: false
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
isotope active
------------------------------ */     
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    stagger: 30
  });

  $('.gallery-menu').on( 'click', '.button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.filter').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', '.button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

})(jQuery); 