jQuery(document).on('ready',function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area ul.nav.navbar-nav li a").on("click", function () {
        $(".mainmenu-area .navbar-collapse").removeClass("in");
    });

    /*------------------
    Light-box
    --------------------*/
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        showImageNumberLabel: false,
    })

    /* Gallery Slider Active
    =============================*/
    $('.full_screen_slider').owlCarousel({
        loop: true,
        items: 1,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 2000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    $(".owl-controls").append('<button id="full_screen_btn" type="button"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></button>');
    $('#full_screen_btn').on("click", function () {
        $(this).toggleClass('expand');
    });
    /*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/
    $(function () {
        $(".gallery_single_item").slice(0, 6).show();
        $("#lode_more").on('click', function (e) {
            e.preventDefault();
            $(".gallery_single_item:hidden").slice(0, 3).slideDown();
            if ($(".gallery_single_item:hidden").length == 0) {
                $("#lode_more").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });
}(jQuery));


/* Preloader Js
===================*/
jQuery(window).on("load", function () {
    $('.preeloader').fadeOut(500);

});