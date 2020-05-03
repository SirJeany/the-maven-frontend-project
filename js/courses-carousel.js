// Credit to: Md. Ashiqur Rahman
// https://codepen.io/mdashikar/pen/VWPvgE

'use strict';

$(document).ready(function() {
    $(".course-cards").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        prevArrow: false,
        nextArrow: '.next-course',
        dots: false,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                // centerMode: true,
                // centerPadding: '20px',
                slidesToShow: 1
            }
        }
        ]
    });
});