//number of squares on screen
var numSquares = 6;
//amount of random colours to generate
var colours = [];
//make array of squares from square class
var squares = document.querySelectorAll(".square");
//randomly picked colour
var pickedColour;

// SELECTORS //
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll('.mode');

init();

function init()
{
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons()
{//setup for difficulties
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares()
{
	for (var i = 0; i < squares.length; i++)
	{//loop through squares
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab colour of clicked square
			var clickedColour = this.style.backgroundColor;
			//compare colour to pickedColour
			if (clickedColour === pickedColour)
			{//if colours match
				//call changeColours and pass in clickedColour
				changeColours(clickedColour);
				//display message "Correct"
				messageDisplay.textContent = "Correct!";
				//change button text to display "Play again?"
				resetButton.textContent = "Play Again?";
			}
			else
			{//if colours do not match
				//set background colour to same colour as background
				this.style.backgroundColor = "#232323";
				//display message "Try Again"
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
function reset() 
{//resets the page
	colours = generateRandomColours(numSquares);
	//pick a new random colour from array
	pickedColour = pickColour();
	//change colourDisplay to match pickedColour
	colourDisplay.textContent = pickedColour;
	//change colours of squares
	for(var i = 0; i < squares.length; i++)
	{//change each colour to match given colour
		if(colours[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click", function()
	{
	//call reset function
	reset();
	//change button text to display "New Colours"
	resetButton.textContent = "New Colours";
	//change message display to ""
	messageDisplay.textContent = "";
});
function changeColours(colour)
{//changes all colours to clicked colour
	//loop through all squares
	for(var i = 0; i < colours.length; i++)
	{//change each colour to match given colour
		squares[i].style.backgroundColor = colour;
	}
	//change background header to given colour
	h1.style.backgroundColor = colour;
}
function pickColour()
{//picks random colours
	//get random number from colour array length
	var random = Math.floor(Math.random() * colours.length);
	//return random element in the array
	return colours[random];
}
function generateRandomColours(num)
{//generates random colours based on number input
	//make an array
	var arr = [];
	//add num random colours to array
	for(var i = 0; i < num; i++)
	{//get random colour and push into array
		arr.push(randomColour());
	}
	//return that array
	return arr;
}
function randomColour()
{//creates a random colour
	//pick a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var blue = Math.floor(Math.random() * 256);
	//return the rgb
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}