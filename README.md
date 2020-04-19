# The Maven Frontend Project
We are building a fully responsive website that will use vanilla html, css and JavaScript. 

## Get started:
    - Click on github pages link
    - OR Fork -> open in vs Code. Open with live server extention..

### Prerequisites:
    - Compatible browser. Or if cloning:
    - VS Code with: 
        - Live server extention.

### Installing and Deploying:
    - Clone repo.
    - Open in VS Code.
    - Install the extention "Live Server": https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
    - Launch Live Server through VS Code. This should open the default browser, displaying the app.

## Adding courses:
### There are two or three places that one must update a course currently.
1) The JSON 'allcourses' object.
2) A new object needs to be created using the new Course cntr function.
3) Edit the populateCartFromCookies() function to include the new course in the switch statement.
```
-- Additionally One would need to add an extra course page - very easy. Just copy and rename any other course page then replace the indecies <body onload="loadSingleCourseCard(allCourses[x]), loadCourseOutline(allCourses[x])"> with the appropriate index of course ocurrence in the 'allCourses' object.
```

## Author:
* **Jean-Maree van Riet** - [SirJeany](https://github.com/SirJeany)

## Acknowledgements:
* **Nate Williams** - Lecturer and guide. Thanks for all your time and effort.
* **Md. Ashiqur Rahman** - As a reference to using the slick carousel [Client Logo Slider](https://codepen.io/mdashikar/pen/VWPvgE)