(function($) {
    "use strict";

    //Preloader
    $('#preloader').delay(350).fadeOut('slow');

    //Navbar Fixed
    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 80) {
            $('.sticky-header,.off-canvas-menu-bar').addClass('fixed-top');
        } else {
            $('.sticky-header,.off-canvas-menu-bar').removeClass('fixed-top');
        }
    });

    // WooCommerce Variations as Radio Buttons
    $(document).on('change', '.variation-radios input', function() {
      $('select[name="'+$(this).attr('name')+'"]').val($(this).val()).trigger('change');
    });
    
    // Product social share
    $(".product-social-share .float").click(function() {
        $(this).html($(this).html() == '<i class="fa fa-times my-float"></i>' ? '<i class="fa fa-share-alt my-float"></i>' : '<i class="fa fa-times my-float"></i>');
        $(".product-social-share .social").toggleClass("padding");
    });

    // Plyr
    const player = Plyr.setup('#tijarah-player', {
        hideControls: true,
        controls:['play-large']
    });

    const player_product_single = new Plyr('#tijarah-player-product-single', {
        hideControls: true
    });

    //Accordion
    $('.tijarah-accordion-item:first-child').addClass('active');
    $('.tijarah-accordion-item:first-child .collapse').addClass('show');
    $('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function() {
        $(this).parent().removeClass('active');
    });

    //Mobile Nav Hide Show
    if ($('.off-canvas-menu').length) {

        var mobileMenuContent = $('.desktop-menu>ul').html();
        $('.off-canvas-menu .navigation').append(mobileMenuContent);

        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('off-canvas-menu-visible');
        });

        //Menu Toggle Btn
        $('.off-canvas-menu .menu-backdrop,.off-canvas-menu .close-btn').on('click', function() {
            $('body').removeClass('off-canvas-menu-visible');
        });
    }

    $('.off-canvas-menu li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
    $('.off-canvas-menu li.menu-item-has-children .dropdown-btn').on('click', function() {
        $(this).prev('ul').slideToggle(500);
    });

    // magnificPopup gallery view
    $('a.preview-image-popup').on('click', function(event) {
        event.preventDefault();

        var gallery = $(this).attr('href');

        $(gallery).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');
    });

    // Image popup
    $('.zoom-gallery').magnificPopup({
        delegate: '.photo-product-item-click',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot; <a href="'+item.el.attr('data-source')+'" target="_blank">See Details</a>';
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

    // Nice Select
    $(".woocommerce-ordering select,.tijarah-product-search-form select").niceSelect();


    // magnificPopup video view
    if ($(".preview-video-popup")[0]) {
        $('.preview-video-popup').magnificPopup({
            type: 'iframe'
        });
    }

    //Back to top
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 700) {
            $('#backtotop').fadeIn(500);
        } else {
            $('#backtotop').fadeOut(500);
        }
    });

    $('#backtotop').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

})(jQuery);