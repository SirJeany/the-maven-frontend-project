// This file contains all the content for courses and related events. 
'use strict';

// First a JSON object that holds all course details:
const allCourses = [
    {
        "courseID": "001",
        "title": "Full Stack Web Developer",
        "duration": "12 Week Course",
        "distance": "In Class",
        "images": {
            "small": "./assets/images/full-stack-banner.png",
            "medium": "./assets/images/full-stack-banner@2x.png",
            "large": "./assets/images/full-stack-banner@3x.png"
        },
        "price": 26000,
        "courseOutline": {
            "preWork": "Pre Work%You don’t have to understand everything about the MEAN stack to dive in to the introductory tutorial. Your initial challenge will be to build Google’s official “Tour of Heroes” app. Don’t worry! We’re going to explain the hard parts in great detail during your course.",
            "module1": "Module 1%You’ve completed the Tour of Heroes tutorial as your pre-work; now we’ll build upon that together as a class with a “Tour of Students” app. We’ll review some core concepts in HTML, JS, and CSS to make sure they’re fresh, then jump into HTML5 advanced features, TypeScript, and SCSS to give your code superpowers.",
            "module2": "Module 2%Get ready to jump into the deep end! Our detailed study of Angular will simulate a real-world onboarding experience, just as you may expect to experience when you’re hired and beginning your first job with Angular. You’ll look over an Angular app running in production, and dissect it piece by piece as you build it back up from the ground up as a class. You’ll make the leap from your Tour of Students app to the production-grade final solution where you’ll add yourself to the database as a Maven Academy Alumni for all the world to see!",
            "module3": "Module 3%Node.js is a powerful back end environment, and you’ll learn everything you need to support your Angular app with a back end server running the Express framework, MongoDB with the Mongoose ORM, and a REST API you can be proud of.",
            "module4": "Module 4%Cutting your teeth in new territory, you’ll be asked to change how certain parts of the app behave, as well as adding new features on your own. This is when the going gets tough, but don’t worry! Your instructors will guide you through everything you need to prepare for a self-sufficient mindset as you prepare to graduate and enter the workforce.",
            "masterClass": "Master Class Electives%We take you the extra mile in our standard curriculum, but for those that want to go even further beyond that—check out our Master Class Electives."
        },
        "available": true,
        "pageLink": "./fullstack-course.html",
        "varIdentity": "fullStackWebDev"
    },

    {
        "courseID": "002",
        "title": "Front End Web Developer",
        "duration": "4 Week Course",
        "distance": "In Class",
        "images": {
            "small": "./assets/images/frontend-dev.png",
            "medium": "./assets/images/frontend-dev@2x.png",
            "large": "./assets/images/frontend-dev@3x.png"
        },
        "price": 18000,
        "courseOutline": {
            "preWork": "Pre Work%All you need to have done beforehand, is create a few accounts with websites like Github, Gmail, CodePen and LinkedIn so that you can hit the ground running on Day 1.",
            "module1": "Module1%Welcome to The Maven Academy. This is the beginning of your journey to becoming a world-class developer. This course will take you through the information as though you're starting a new job as a frontend web developer. Learn 'on the job' and up-skill in both the core aspects of HTML, CSS & Javascript, as well as being a useful team member at your first job.",
            "module2": "Module2%We need intro In this module, you'll learn about the fundamentals of every web page: HTML & CSS. Using these 2 technologies, you'll see how to create beautiful components and layouts to create your very own site. You'll also learn how to keep a log of every change to your files, through Git, and how to safely store your code on Github. here…",
            "module3": "Module3%In this module, you'll discover the power of your first programming language — Javascript. You'll learn core concepts and techniques to make your website more dynamic and interactive.",
            "module4": "Module4%By phase 3, you will be familiar with Javascript in the front-end. So now it's time to see how Javascript can also be a powerful back-end. Using Node.js, we'll explore how Javascript can power a server, and how you can easily add functionality to your system with the Node Package Manager.",
            "masterClass": "Master Class Electives%We take you the extra mile in our standard curriculum, but for those that want to go even further beyond that—check out our Master Class Electives."
        },
        "available": true,
        "pageLink": "./webdev-course.html",
        "varIdentity": "frontEndWebDev"
    }

]

// CART:
// Contains all courses that the user wishes to buy.
let cart = [];

// Courses class:
function Course(courseID, title, duration, distance, image, price, courseOutline, varIdentity, pageLink) {
    this.courseID = courseID;
    this.title = title;
    this.duration = duration;
    this.distance = distance;
    this.image = image;
    this.price = price;
    this.courseOutline = courseOutline;
    this.varIdentity = varIdentity;
    this.pageLink = pageLink;
}

// Some courses:

let fullStackWebDev = new Course('001', 'Full Stack Web Developer', '12 Week Course', 'In Class', './assets/images/full-stack-banner.png', 26000, '', "fullStackWebDev", "./fullstack-course.html");
let frontEndWebDev = new Course('002', 'Front End Web Developer', '4 Week Course', 'In Class', './assets/images/frontend-dev.png', 18000, '', "frontEndWebDev", "./webdev-course.html");



// POPULATE THE CART: 
// to be done on each page load.
// https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
// Dynamicy rating: LOW - would need to update this part for more courses to be recognised in the cookie cutter
$(document).ready(populateCartFromCookies);
function populateCartFromCookies() {
    document.cookie.split(';').forEach(crum => {
        if(crum.split('=').length > 1 && crum.split('=')[1].length > 1){ // Check if cookie holds any courses.
            let id = crum.split('=')[0].trim();
            let course = crum.split('=')[1].trim();

            switch (id) {
                case "001": console.log('Adding ' + course + ' to cart');
                    cart.push(fullStackWebDev);
                    addCourseToCart(fullStackWebDev);
                    // Remove functionality:
                    // document.getElementById('removeBtnIcon' + id).addEventListener('click', fullStackWebDev.removeFromCart());
                    break;
                case "002": console.log('Adding ' + course + ' to cart');
                    cart.push(frontEndWebDev);
                    addCourseToCart(frontEndWebDev);
                    break;
            }
        } else {
            console.log("Cookie has nothing");
        }
    });
}

// COURSE PROTOTYPES:
// Function to add course to cart:
Course.prototype.addToCart = function () {
    let check = addToCookies(this);
    if (check) {
        cart.push(this);
        addCourseToCart(this);
    }
    console.log('cart after adding course:');
    console.log(cart);
}

// Function to bin course from cart: 
Course.prototype.removeFromCart = function () {
    console.log("Cart before deleting: ");
    console.log(cart);
    let itemIndex = -1;
    cart.forEach(item => { 
        console.log(item);
        if( item.courseID === this.courseID) { 
            console.log("Found " + this.title)
            itemIndex = cart.indexOf(item);

            cart.splice(itemIndex, 1); // Remove from cart - easy

            //Remove from document.cookie:
            document.cookie = this.courseID + "=;";

            return itemIndex;
        } else { 
            console.log(this.title + " not in cart yet.");
        } 
    });
    console.log("Cart AFTER deleting: ");
    console.log(cart);
    return itemIndex;
}

// CODE TO ADD COURSES TO CART:
// Note:
// 1) Buttons have an inline 'onclick' call that allows their respective events to fire.

// The carts:
const coursesContainer = document.getElementById('coursesContainer');
// Sticky cart removed.
// const stickyCart = document.getElementById('stickyCartContainer');

const viewBasketDiv = document.getElementById('viewBasketDiv'); //Main nav cart
const viewStickyBasketDiv = document.getElementById('viewStickyBasketDiv'); //Sticky cart
let viewBasketBtn = document.createElement('button');
viewBasketBtn.onclick =  () => location.href = "./cart.html";
viewBasketBtn.innerText = "View Basket";
let basketBtnClone = viewBasketBtn.cloneNode(true);
basketBtnClone.onclick =  () => location.href = "./cart.html";
try {
    viewBasketDiv.appendChild(viewBasketBtn);
    viewStickyBasketDiv.appendChild(basketBtnClone);
} catch (error) {
    console.log("No Cart on this page");
}


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

    let removeBtnIcon = document.createElement('i'); // x button icon
    removeBtnIcon.id = "removeBtnIcon" + course.courseID; 
    removeBtnIcon.classList.add('fas', 'fa-times');
    removeBtnIcon.setAttribute('onclick', course.varIdentity + '.removeFromCart(), location.reload()');
    removeContainer.appendChild(removeBtnIcon);

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

    //Edit badge:
    document.getElementById('badge').innerHTML = cart.length;
    // document.getElementById('stickyBadge').innerHTML = cart.length;

    //Stitch them together:
    let fragClone = fragment.cloneNode(true); //Create the clone
    coursesContainer.appendChild(fragment); // Put the container in the cart.
    // stickyCart.appendChild(fragClone); // Put course in sticky cart as well.
}

// CODE FOR COOKIES:
// @Program: Function to add a course to the cookies.
// @return: returns false if the course was already present. True of the course was added.
function addToCookies(course) {
    //Check of cookie exists:
    let check = document.cookie.split(';').filter(item => {
        return item.indexOf(course.courseID + '=' + course.title) >= 0
    }).length;

    if (check) {
        return false;
    }

    document.cookie = course.courseID + '=' + course.title + ';';

    return true;
}

// GENERAL FUNCTION TO LOAD CARDS:
function loadCard(course){
    let newCard = document.createElement('div');
    newCard.classList.add('card', 'h-100');

    let newBody = document.createElement('div');
    newBody.classList.add('card-body', 'text-center');

    let cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title', 'text-blue-dodger');
    cardTitle.innerHTML = `<strong>${course.title}</strong>`;
    newBody.appendChild(cardTitle);

    let courseDuration = document.createElement('div');
    courseDuration.classList.add('card-text');
    courseDuration.innerHTML = `<span>${course.duration} - ${course.distance}</span>`;
    newBody.appendChild(courseDuration);

    let courseImg = document.createElement('img');
    courseImg.classList.add('card-img');
    courseImg.setAttribute('src', course.images['small']);
    newBody.appendChild(courseImg);

    let coursePrice = document.createElement('div');
    coursePrice.classList.add('card-text', 'text-blue-dodger');
    let priceText = 'R' + course.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ',00 Excl Vat';
    coursePrice.innerHTML = `<h5><strong>${priceText}</strong></h5>`;
    newBody.appendChild(coursePrice);

    let courseDetail = document.createElement('div');
    courseDetail.classList.add('card-text');
    courseDetail.innerHTML = `<small><u><a class="card-course-detail-a" href="${course.pageLink}">View course detail</a></u></small>`;
    newBody.appendChild(courseDetail);

    let courseBtn = document.createElement('div');
    courseBtn.classList.add('d-flex', 'flex-column', 'card-button-div');
    courseBtn.innerHTML = `<button class="course-buttons text-wrap" onclick="${course.varIdentity}.addToCart()">Add to enquiry</button>`;
    newBody.appendChild(courseBtn);

    newCard.appendChild(newBody);

    return newCard;
}

// FUNCTION TO LOAD COURSES ON CART PAGE:
try {
    const cardsContainer = document.getElementById('cardsContainer');
    function displayCourses() {
        allCourses.forEach(course => {
            // console.log(course.images['small']);
            let newSlide = document.createElement('div');
            newSlide.classList.add('slide', 'pb-4', 'pt-4');

            let newCard = loadCard(course);

            newSlide.appendChild(newCard);
            cardsContainer.prepend(newSlide);
        });
    }
    displayCourses(); //Give time to get cookies into cart
} catch (error) {
    console.log('No course loader needed on this page');
}

// ALL COURSES LOADER:
const allCoursesCardDeck = document.getElementById('allCoursesCardDeck');
function loadCardDeck() {
    allCourses.forEach(course => {
        let newCol = document.createElement('div');
        newCol.classList.add('col', 'mb-4');

        let newCard = loadCard(course);
        
        newCol.appendChild(newCard);
        allCoursesCardDeck.prepend(newCol);
    });

}


// LOAD COURSE INFO:
const singleCourseCard = document.getElementById('singleCourseCard'); 
function loadSingleCourseCard(course) {
    let newCard = loadCard(course);
    singleCourseCard.appendChild(newCard);

    document.querySelector('.card').classList.add('border-0');
    document.querySelector('.course-buttons').classList.add('pl-1', 'pr-1', 'pb-2', 'pt-2');
}

const courseOutlineContainer = document.getElementById('courseOutlineContainer');
function loadCourseOutline(course) {
    // Thanks to: https://stackoverflow.com/questions/34240678/converting-json-object-to-js-key-value-pairs-array
    let outline = $.map(course.courseOutline, (value, key) => [[key, value]]);
    let count = 0; //Keeps track of what to call the tab heading.
    const listTab =  document.getElementById('list-tab');
    const navTabContent = document.getElementById('nav-tabContent');
    outline.forEach(item => {
        let courseHeading = item[1].split('%').splice(0,1);
        let courseContent = item[1].split('%').splice(1);
        // console.log(courseContent);
        if(count == 0){
            listTab.innerHTML = `<a class="list-group-item list-group-item-action active" id="list-${item[0]}-list" data-toggle="list" href="#list-${item[0]}" role="tab" aria-controls="home">${courseHeading}</a>`;

            navTabContent.innerHTML = `
                <div class="tab-pane fade show active" id="list-${item[0]}" role="tabpanel" aria-labelledby="list-${item[0]}">
                <h5 class="tab-content-title mb-5">${courseHeading}</h5>
                <p>${courseContent}</p>
                </div>`;
            
        } else {
            listTab.innerHTML += `<a class="list-group-item list-group-item-action" id="list-${item[0]}-list" data-toggle="list" href="#list-${item[0]}" role="tab" aria-controls="home">${courseHeading}</a>`;

            navTabContent.innerHTML += `
                <div class="tab-pane fade" id="list-${item[0]}" role="tabpanel" aria-labelledby="list-${item[0]}">
                <h5 class="tab-content-title mb-5">${courseHeading}</h5>
                <p>${courseContent}</p>
                </div>
            `;
        }
        count++;
    });
}


// CART PAGE:
function populateCartPage() {
    //Remove borders:
    document.querySelectorAll('th').forEach(th => th.classList.add('border-0'));
    let totals = 0.0;
    const tableBody = document.getElementById('tableBody');
    cart.forEach(item => {
        totals += item.price;
        let newRecord = document.createElement('tr');

        let newRow = document.createElement('td');
        newRow.setAttribute('scope', 'row');
        newRow.innerHTML = `<i class="fas fa-times" onclick="${item.varIdentity}.removeFromCart(), location.reload()" aria-hidden="true" style="margin-top: 40px"></i>`;
        newRecord.appendChild(newRow);

        let newImg = document.createElement('td');
        newImg.innerHTML = `<a href="${item.pageLink}"><img src="${item.image}" style="width: 90px;"></img></a>`;
        newRecord.appendChild(newImg);

        let newContent = document.createElement('td');
        newContent.innerHTML = `<div class="row"><p>Become a ${item.title}</p></div>
                                <div class="row"><p>${item.duration} - ${item.distance}</p></div>`;
        newContent.classList.add('remove');
        newRecord.appendChild(newContent);

        let newPrice = document.createElement('td');
        newPrice.innerText = "R" + item.price + " Excl Vat";
        newPrice.classList.add('remove');
        newRecord.appendChild(newPrice);

        let newQuantity = document.createElement('td');
        newQuantity.innerText = 1;
        newQuantity.classList.add('remove');
        newRecord.appendChild(newQuantity);

        let newTotal = document.createElement('td');
        newTotal.innerText = "R" + item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ',00 Excl Vat';
        newRecord.appendChild(newTotal);

        tableBody.appendChild(newRecord);
    });
    let vat = totals*0.15;
    console.log('Vat  = ' + vat)
    let grandTotal = (totals + vat).toFixed(0);
    vat = vat.toFixed(0);
    console.log("Grand total for all items = R" + grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ',00 Excl Vat');

    //ADD TO "CART TOTALS":
    document.getElementById('subtotalTD').innerText = 'R' + totals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ',00 Excl Vat';

    document.getElementById('vatTD').innerText = 'R' + vat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    document.getElementById('totalTD').innerText = 'R' + grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ',00 Excl Vat';
}