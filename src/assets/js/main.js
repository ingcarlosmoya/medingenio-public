(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        

        
        // -------------------------------------------------------------
        // responsive menu start
        // -------------------------------------------------------------
       if ($.fn.slicknav) {
         $('ul#dropdown-menu').slicknav({
            prependTo:".responsive_menu",
            label:""
            
            })
        
       }
        
        /*====  slider-area-carousel Start =====*/
        if ($.fn.owlCarousel) {
        $('.home-page-sliders').owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
         }
        
         /*====  slider-area-carousel End =====*/
        
         /*====  testimonials-area-carousel Start =====*/
        if ($.fn.owlCarousel) {
        $('.testimonials-list').owlCarousel({
                loop: true,
                items: 1,
                autoplay: false,
                nav: true,
                navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],

            });
        }
        
        /*====  testimonials-area-carousel End =====*/
        
        /*====  clients-area-carousel Start =====*/
        if ($.fn.owlCarousel) {
        $('.clients-list-item').owlCarousel({
                loop: true,
                items: 6,
                margin: 30,
                autoplay: true,
                nav: true,
                navText:false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:2,
                        nav:true
                    },
                    600:{
                        items:4,
                        nav:false
                    },
                    1000:{
                        items:5,
                        nav:true,
                        loop:true
                    }
                }
                
            });
        }
        /*====  clients-area-carousel End =====*/
        
        /*====  project-area-carousel Start =====*/
        if ($.fn.owlCarousel) {
        $('.project-carousel-item-list').owlCarousel({
                loop: true,
                items: 5,
                autoplay: false,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsiveClass:true,
                responsive:{
                    0:{
                        items:2,
                        nav:true
                    },
                    600:{
                        items:5,
                        nav:false
                    },
                    1000:{
                        items:5,
                        nav:true,
                        loop:false
                    }
                }
            });
        }
        /*====  project-area-carousel End =====*/
        
        /*==== video-area magnificPopupl Start =====*/
        if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'video'

            });
        }
            
        
        
        /*==== projects-area magnificPopupl Start =====*/
        if ($.fn.magnificPopup) {
            $('.light-box').magnificPopup({
                type: 'image'
            });

        }
        /*==== video-area magnificPopupl End =====*/
        
        /*==== video-area animationCounter Start =====*/
        
        if ($.fn.animationCounter) {
        $('.count-products').animationCounter({
          start: 150,
          step: 5,
          delay:1000
            });
        }
        
        
        if ($.fn.animationCounter) {
        $('.count-customer').animationCounter({
          start:570,
          step: 10,
          delay:2000
            });   
         }   

        if ($.fn.animationCounter) {
        $('.count-wordpress').animationCounter({
          start: 238,
          step: 8,
          delay:1000
            });
        }
            
         if ($.fn.animationCounter) {
        $('.count-themes').animationCounter({
          start: 866,
          step: 20,
          delay:500
        });
     }
        

//    });
    
    
    $('.project-option ul li').on('click', function () {
            $(".project-option ul li").removeClass("active");
            $(this).addClass("active");


//            if ($.fn.isotope) {
                var selector = $(this).attr('data-filter');
                $(".project-items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        
//        }
    
        if ($.fn.perfectScrollbar) {
            $('.single-testimonial-style-3-author-name').perfectScrollbar();
    
        }

    
    
      });

  
    jQuery(window).load(function(){
    
    /*====  preloader js Start =====*/
    $('#loading').delay(600).fadeOut('slow',function(){$(this).remove();});
        
    /*====  animation js Start =====*/
        new WOW().init(); 
        
         if ($.fn.isotope) {
            jQuery(".project-items").isotope({
                itemSelector: '.project-items .single-project-wrap',
                layoutMode: 'fitRows',
                });

              }
        
         /*====  masonry js Start =====*/
         if ($.fn.masonry) {
            $('.blog-mesonary-items').masonry({
                // options...
                itemSelector: '.blog-mesonary-items',
                columnWidth: 0
            });
        
        }

        
    });
    
}(jQuery));	