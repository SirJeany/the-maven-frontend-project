// Credit to: Md. Ashiqur Rahman
// https://codepen.io/mdashikar/pen/VWPvgE

'use strict';

$(document).ready(function() {
    $(".course-cards").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2
            }
        },
        {
            breakpoint: 520,
            settings: {
            slidesToShow: 1
            }
        }
        ]
    });
});