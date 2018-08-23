var stringGuess = prompt("Guess a number between 1 and 100");
var guess = Number(stringGuess);

var number = 50;

while (guess != number)
{
	console.log(guess + " " + number);

	if (guess < number)
	{
		guess = Number(prompt("Too low, try again"));
	}	
	else if (guess > number)
	{
		guess = Number(prompt("Too high, try again"));
	}
}

alert("Perfect");