// SELECT
var tag = document.getElementById("hi");

// MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

//add a class to the selected element
tag.classList.add("some-class"); //some-class defined in CSS
//remove a class
tag.classList.remove("some-class");
//toggle a class
tag.classList.toggle("some-class");

//Retrieve the textContent
tag.textContent //doesn't keep tag
// "This is an awesome paragraph"

//alter the textContent
tag.textContent = "blah blah blah";

tag.innerHTML  //keeps tag
//"This is an <strong>awesome</strong> paragragh"

//*****************//
// **ATTRIBUTES** //
//*****************//

var link = document.querySelector("a");
link.getAttribute("href"); //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href", "www.dogs.com");
// <a href="www.dogs.com">I am a link</a>

//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("srcset", "corgi.png");
//<img src="corgi.png">