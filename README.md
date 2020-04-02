## the-maven-frontend-project
We are building a fully responsive website that will use vanilla html, css and JavaScript. 

# Get started:
## Click on github pages link
## OR Fork -> open in vs Code. Open with live server extention..

# Dummy data:
Dummy cards were added to index.html - Our courses. This is just to show off the ability to have a carousel
Remove Dummy data where indicated.

# Issues: 
## Issue 1:
Removing items from cart (By pressing the x) will remove the cart item to an extent - but an error with the eventhandler that connects the 'x' to the course interrupts the process.
Refreshing does show that the item has indeed been removed - type in document.cookie into the console.

## Issue 2/ToDo:
Popup and grey-ing out of page yet to be implemented for the 'Click here to dl curriculum' on the course pages. (As is shown by the Zeplin brief).

# ToDo:
## ToDo 1:
Update the arrows of the carousel accoring to that of Zeplin brief.

## ToDo 2:
Update the 'Contact Us' page.

# Adding courses:
There are two or three places that one must update a course currently.
1) The JSON 'allcourses' object.
2) A new object needs to be created using the new Course cntr function.
3) Edit the populateCartFromCookies() function to include the new course in the switch statement.

-- Additionally One would need to add an extra course page - very easy. Just copy and rename any other course page then replace the indecies <.body onload="loadSingleCourseCard(allCourses[x]), loadCourseOutline(allCourses[x])"> with the appropriate index of course ocurrence in the 'allCourses' object.