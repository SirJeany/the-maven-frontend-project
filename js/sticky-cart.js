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