// This file contains all the content for courses which will be available at MessageEvent. 

'use strict';

// Courses class:
function Course(title, duration, distance, image, price) {
    this.title = title;
    this.duration = duration;
    this.distance = distance;
    this.image = image;
    this.price = price;
}

// Courses prototypes:

Course.prototype.addToCart = function() {
    cart.push(this);
    console.log(cart);
}

// Some courses:
let fullStackWebDev = new Course('Become a Full Stack Web Developer', '12 Week Course', 'In class', '/assets/images/full-stack-banner.png', 26000);

// Cart:
// Contains all courses that the user wishes to buy.
let cart = [];