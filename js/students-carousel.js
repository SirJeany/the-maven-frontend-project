// Credit to: Md. Ashiqur Rahman
// https://codepen.io/mdashikar/pen/VWPvgE

'use strict';

$(document).ready(function() {
    $(".students-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        // arrows: true,
        nextArrow: '.next-student',
        prevArrow: false,
        dots: false,
        pauseOnHover: false
    });
});