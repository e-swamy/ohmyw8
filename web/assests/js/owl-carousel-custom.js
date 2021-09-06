$(document).ready(function () {
    $('.loop').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-caret-left text-dark fa-2x"></i>', '<i class="fas fa-caret-right text-dark fa-2x"></i>'],
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 2
            },
            991: {
                items: 4
            },
            1200: {
                items: 4
            },
            1920: {
                items: 6
            }
        }
    })
});

$(document).ready(function () {
    $('#unique-feature-slider').owlCarousel({
        items: 2,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-caret-left text-dark fa-2x"></i>', '<i class="fas fa-caret-right text-dark fa-2x"></i>'],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            991: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
});

$(document).ready(function () {
    $('#nutrient-check-slider').owlCarousel({
        items: 2,
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-caret-left text-dark fa-2x"></i>', '<i class="fas fa-caret-right text-dark fa-2x"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            767: {
                items: 1,
                nav: true
            },
            991: {
                items: 1,
                nav: true
            },
            1200: {
                items: 1,
                nav: true,
            },
            1920: {
                items: 1,
                nav: true
            }
        }
    })
});