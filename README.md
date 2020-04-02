## the-maven-frontend-project
We are building a fully responsive website that will use vanilla html, css and JavaScript. 

# Issues: 
Removing items from cart (By pressing the x) will remove the cart item to an extent - but an error with the eventhandler that connects the 'x' to the course interrupts the process.
Refreshing does show that the item has indeed been removed - type in document.cookie into the console.

# Adding courses:
There are two or three places that one must update a course currently.
1) The JSON 'allcourses' object.
2) A new object needs to be created using the new Course cntr function.
3) Edit the populateCartFromCookies() function to include the new course in the switch statement.

-- Additionally One would need to add an extra course page - very easy. Just copy and rename any other course page then replace the indecies <.body onload="loadSingleCourseCard(allCourses[x]), loadCourseOutline(allCourses[x])"> with the appropriate index of course ocurrence in the 'allCourses' object.