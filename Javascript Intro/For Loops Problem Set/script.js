console.log("ALL NUMBERS BETWEEN -10 AND 19");
for (var i = -10; i <= 19; i++)
{
	console.log(i);
}

console.log("ALL EVEN NUMBERS BETWEEN 10 AND 40");
for (var i = 10; i <= 40; i+=2)
{
	console.log(i);
}

console.log("ALL ODD NUMBERS BETWEEN 300 AND 333");
for (var i = 300; i <= 333; i++)
{
	if (i % 2 != 0)
	{
		console.log(i);
	}
}

console.log("ALL NUMBERS DIVISIBLE BY 3 AND 5 BETWEEN 5 AND 50");
for (var i = 5; i <= 50; i++)
{
	if (i % 3 == 0 && i % 5 == 0)
	{
		console.log(i);
	}
}