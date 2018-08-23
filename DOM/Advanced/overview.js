// The Syntax
// To add a listener, we use a method called addEventListener

element.addEventListener(type, functionToCall);


//ANONYMOUS FUNCTION

var button = document.querySelector("button");
button.addEventListener("click", function() {
	console.log("SOMEONE CLICKED THE BUTTON!");
});


//USING NAMED FUNCTION

button.addEventListener("click", changeText);

function changeText() {
	paragraph.textContent = "Someone clicked the button!";
}