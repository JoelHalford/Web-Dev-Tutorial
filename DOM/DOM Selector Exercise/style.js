var p1 = document.getElementById("first");
// <p id="first">
var p2 = document.getElementsByClassName("special");
// <p class="special">
// <li class="special">
var p3 = document.getElementsByTagName("p");
// <p>
var p4 = document.querySelector("#first");
// <p id="first">	Grabs the first ID in document
var p5 = document.querySelectorAll(".special");
// <p class="special">	Grabs ALL classes with name special

console.log(p1);
console.log(p2[0]);
console.log(p3[0]);
console.log(p4);
console.log(p5[0]);