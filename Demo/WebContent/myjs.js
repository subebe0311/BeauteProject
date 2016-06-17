$(document).ready(function(){
    var carousel = $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('a.gallery').featherlightGallery({
        gallery: {
            previous: '«',
            next: '»',
            fadeIn: 300
        },
        openSpeed: 300
    });
});