'use strict';

/// Show/remove sticky cart:
const stickyCartDiv = document.getElementById('stickyCartDiv');
stickyCartDiv.className = "stickyCartDiv hide"; // Start off hidden

let myScrollFunc = () => {
    let y = window.scrollY;
    if(y >= 120) {
        stickyCartDiv.className = "stickyCartDiv show";
    } else {
        stickyCartDiv.className = "stickyCartDiv hide";
    }
}

window.addEventListener('scroll', myScrollFunc);


// To wrap carts with a-tag taking them to the carts page when a certain width is met
let cartWrappers = document.getElementsByClassName('cart-wrapper-a');

function whenWidth(windowWidth) {
    if(windowWidth.matches){
        for (let i = 0; i < cartWrappers.length; i++) {
            cartWrappers[i].removeAttribute('disabled');
        }
    } else {
        for (let i = 0; i < cartWrappers.length; i++) {
            cartWrappers[i].setAttribute('disabled', 'true');
        }
    }
}

let windowWidth = window.matchMedia("(max-width: 720px)");
whenWidth(windowWidth);
windowWidth.addListener(whenWidth);