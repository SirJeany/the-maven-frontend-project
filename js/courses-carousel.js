// Credit to: Md. Ashiqur Rahman
// https://codepen.io/mdashikar/pen/VWPvgE

'use strict';

$(document).ready(function() {
    $(".course-cards").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 900,
            settings: {
            slidesToShow: 2
            }
        },
        {
            breakpoint: 560,
            settings: {
            slidesToShow: 1
            }
        }
        ]
    });
});

document.querySelector('.course-cards-container')
    .querySelectorAll('button.slick-arrow')
    .forEach(arrow => arrow.classList.add('bg-dark'));