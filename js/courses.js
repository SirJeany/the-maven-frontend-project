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

// Function to add course to cart:
Course.prototype.addToCart = function() {
    cart.push(this);
    console.log(cart);
}

// Function to bin course from cart: 
Course.prototype.removeFromCart = function() {
    // Code to find the appropriate element in the array and remove it
    // cart.pop();
}

// Some courses:
let fullStackWebDev = new Course('Become a Full Stack Web Developer', '12 Week Course', 'In class', '/assets/images/full-stack-banner.png', 26000);
let frontEndWebDev = new Course('Become a Front End Web Developer', '4 Week Course', 'In Class', '/assets/images/', 18000);

// Cart:
// Contains all courses that the user wishes to buy.
let cart = [];