var age = prompt("What is your age?");

if (age < 18)
{
	alert("You are too young to drink");
}

if (age == 18)
{
	alert("Perfect age");
}

if (age > 18)
{
	alert("You are old enough to drink");
}

if (age == 21)
{
	alert("Happy 21st birthday");
}

if (age % 2 !== 0)
{
	alert("your age is odd!")
}

if (age % Math.sqrt(age) === 0)
{
	alert("Your age is a perfect square!");
}