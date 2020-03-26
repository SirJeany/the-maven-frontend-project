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
    // ToDo: Add check to see if the course is already in the cart (surely we only want one course per type for now?) - Implement Promise?
    cart.push(this);
    addCourseToCart(this);
    console.log(cart);
}

// Function to bin course from cart: 
Course.prototype.removeFromCart = function() {
    // Code to find the appropriate element in the array and remove it
    // cart.pop();
}

// Some courses:
let fullStackWebDev = new Course('Full Stack Web Developer', '12 Week Course', 'In Class', '/assets/images/full-stack-banner.png', 26000);
let frontEndWebDev = new Course('Front End Web Developer', '4 Week Course', 'In Class', '/assets/images/frontend-dev.png', 18000);

// Cart:
// Contains all courses that the user wishes to buy.
let cart = [];

// CODE TO POPULATE COURSES ON PAGE:

// CODE TO ADD COURSES TO CART:
// Note:
// 1) Buttons have an inline 'onclick' call that allows their respective events to fire.

function addCourseToCart(course) {
    let dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('dropdown-item');
    coursesContainer.appendChild(dropdownContainer); // Put the container in the cart.
    
    let flexContainer = document.createElement('div'); // Flex container wrapper
    flexContainer.classList.add('d-flex');
    dropdownContainer.appendChild(flexContainer);

    let removeContainer = document.createElement('div'); // x button container
    removeContainer.classList.add('d-flex', 'align-items-center', 'mr-4');
    flexContainer.appendChild(removeContainer);

    let removeBtnLink = document.createElement('a'); // x button a wrapper
    removeBtnLink.classList.add('remove-from-cart-btn');
    removeContainer.appendChild(removeBtnLink);

    let removeBtnIcon = document.createElement('i'); // x button icon
    removeBtnIcon.classList.add('fas', 'fa-times');
    removeBtnLink.appendChild(removeBtnIcon);

    let imgContainer = document.createElement('div'); // Course img container
    imgContainer.classList.add('mr-3');
    flexContainer.appendChild(imgContainer);

    let courseImg = document.createElement('img'); // Course img fetched from course class
    courseImg.setAttribute('src', course.image); // Set the attribute 'src' to be the appropriate course image.
    courseImg.style = 'width: 94px'; // Update default image size
    imgContainer.appendChild(courseImg);

    let textContainer = document.createElement('div'); // Container holding all text deatailing course..
    flexContainer.appendChild(textContainer);

    let courseNameP = document.createElement('p'); // Heading part 'Become a Fullstack/webdev' ...
    courseNameP.classList.add('cart-course-text', 'course-name-p');
    courseNameP.textContent = 'Become a ' + course.title;
    textContainer.appendChild(courseNameP);

    let courseInfoS = document.createElement('small'); // Course duration and position
    courseInfoS.classList.add('cart-course-text', 'd-block');
    courseInfoS.textContent = course.duration + ' - ' + course.distance;
    textContainer.appendChild(courseInfoS);

    let courseCost = document.createElement('small'); // Course Cost
    courseCost.classList.add('cart-course-text', 'd-block');
    courseCost.textContent = 'R' + course.price + ' Excl Vat';
    textContainer.appendChild(courseCost);


    // ToDo: Append 'view basket':
}