// This file contains all the content for courses and related events. 
'use strict';

// First a JSON object that holds all course details:
const allCourses = [
    {
        "courseID": "001",
        "title": "Full Stack Web Developer",
        "duration": "12 Week Course",
        "distance": "In Class",
        "images": [{
            "small": "/assets/images/full-stack-banner.png",
            "medium": "/assets/images/full-stack-banner@2x.png",
            "large": "/assets/images/full-stack-banner@3x.png"
        }],
        "price": 26000,
        "course-outline": [{
            "pre-work": "This is the pre-work for the Fullstack course",
            "module1": "This is the outline for the first module",
            "module2": "This is the outline for the second module",
            "module3": "This is the outline for the third module",
            "module4": "This is the outline for the fourth module",
            "master-class": "These are the master class electives for the fullstack course"
        }]
    },

    {
        "courseID": "002",
        "title": "Front End Web Developer",
        "duration": "4 Week Course",
        "distance": "In Class",
        "images": [{
            "small": "/assets/images/frontend-dev.png",
            "medium": "/assets/images/frontend-dev@2x.png",
            "large": "/assets/images/frontend-dev@3x.png"
        }],
        "price": 18000,
        "course-outline": [{
            "pre-work": "This is the pre-work for the Front End Webdev course",
            "module1": "This is the outline for the first module",
            "module2": "This is the outline for the second module",
            "module3": "This is the outline for the third module",
            "module4": "This is the outline for the fourth module",
            "master-class": "These are the master class electives for the Web Dev course"
        }]
    }

]

// Courses class:
function Course(courseID, title, duration, distance, image, price, courseOutline) {
    this.courseID = courseID;
    this.title = title;
    this.duration = duration;
    this.distance = distance;
    this.image = image;
    this.price = price;
    this.courseOutline = courseOutline;
}



// POPULATE THE CART: 
// to be done on each page load.
function loadCart() {
    document.cookie.split(';').forEach(cookie => {
        let id = cookie.split('=')[0].trim();
        let course = cookie.split('=')[1].trim();
        
        if(course){
            console.log(id);
            switch( id ){
                case "001": console.log('adding ' + course + ' to cart');
                            cart.push(fullStackWebDev);
                            addCourseToCart(fullStackWebDev);
                    break;
                case "002": console.log('adding ' + course + ' to cart');
                            cart.push(frontEndWebDev);
                            addCourseToCart(frontEndWebDev);
                    break;
            }
        } else {
            console.log('nothing')
        }
    });
}

// COURSE PROTOTYPES:

// Function to add course to cart:
Course.prototype.addToCart = function() {
    let check = addToCookies(this);
    if(check) {
        cart.push(this);
        addCourseToCart(this);
    }
    console.log('cart after adding course:');
    console.log(cart);
}

// Function to bin course from cart: 
Course.prototype.removeFromCart = function() {
    // Code to find the appropriate element in the array and remove it
    // cart.pop();
}

// Some courses:

let fullStackWebDev = new Course('001','Full Stack Web Developer', '12 Week Course', 'In Class', '/assets/images/full-stack-banner.png', 26000);
let frontEndWebDev = new Course('002','Front End Web Developer', '4 Week Course', 'In Class', '/assets/images/frontend-dev.png', 18000);

// CART:
// Contains all courses that the user wishes to buy.
let cart = [];

// CODE TO POPULATE COURSES ON PAGE:

function populateOurCourses() {
    allCourses.forEach(course => {
        
    });
}

// CODE TO ADD COURSES TO CART:
// Note:
// 1) Buttons have an inline 'onclick' call that allows their respective events to fire.

// The carts:
const coursesContainer = document.getElementById('coursesContainer');
const stickyCart = document.getElementById('stickyCart');

let fragment = document.createDocumentFragment(); // Fragment to be cloned. Holds all things until we add the contents to the individual carts.

function addCourseToCart(course) {
    let dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('dropdown-item');
    fragment.appendChild(dropdownContainer); // Use the fragment to add courses to cart
    
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


    // ToDo: Append 'view basket'

    //Edit badge:
    document.getElementById('badge').innerHTML = cart.length;
    document.getElementById('stickyBadge').innerHTML = cart.length;

    //Stitch them together:
    let fragClone = fragment.cloneNode(true); //Create the clone
    coursesContainer.appendChild(fragment); // Put the container in the cart.
    stickyCart.appendChild(fragClone); // Put course in sticky cart as well.
}


// COOKIES:
// let cookies = document.cookie;
//Clear cookies at start of site:
// document.cookie = '001=;';
// document.cookie = '002=;';

// CODE FOR COOKIES:
// @Program: Function to add a course to the cookies.
// @return: returns false if the course was already present. True of the course was added.
function addToCookies(course) {
    //Check of cookie exists:
    let check = document.cookie.split(';').filter(item => {
        return item.indexOf(course.courseID + '=' + course.title) >= 0
    }).length;

    if(check){
        return false;
    }

    document.cookie = course.courseID + '=' + course.title + ';';

    return true;
}