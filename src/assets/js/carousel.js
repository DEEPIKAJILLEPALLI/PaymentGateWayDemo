/*BELOW CODE BELONGS TO OWL CAROUSEL */
if ($(window).width() < 991) {
    jQuery(document).ready(function () {
        togglecarousel(1);
        jQuery('.owl-carousel').trigger('to.owl.carousel', 1);
    })
} else {
    jQuery(document).ready(function () {
        togglecarousel(0)
    })
}
jQuery(window).resize(function () {
    if (jQuery(window).width() < 991) {
        togglecarousel(1);
    } else {
        togglecarousel(0);
    }
});

function togglecarousel(flag) {
    if (flag) {
        jQuery('.owl-carousel').owlCarousel({
            stagePadding: 35,
            loop: false,
            margin: 0,
            nav: true,
            dots: true,
            dotsData: true,
            touchDrag: true,
            navText: ["<img width='16' height='16' src='./assets/img/arrow.svg'>", "<img width='16' height='16' src='./assets/img/arrow.svg'>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1,
                    stagePadding: 200
                },
                1000: {
                    items: 1
                }
            }
        })
    }
    else {
        var owl = jQuery('.owl-carousel');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');
    }
}