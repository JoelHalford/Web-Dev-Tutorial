var num1 = -10;

console.log("ALL NUMBERS BETWEEN -10 AND 19");
while (num1 <= 19)
{
	console.log(num1);
	num1++;
}

var num2 = 10;

console.log("ALL EVEN NUMBERS BETWEEN 10 AND 40");
while (num2 <= 40)
{
	if (num2 % 2 == 0)
	{
		console.log(num2);
	}
	num2++;
}

var num3 = 300;

console.log("ALL ODD NUMBERS BETWEEN 300 AND 333");
while (num3 <= 333)
{
	if (num3 % 2 != 0)
	{
		console.log(num3);
	}
	num3++;
}

var num4 = 5;

console.log("ALL NUMBERS DIVISIBLE BY 3 AND 5 BETWEEN 5 AND 50");
while (num4 <= 50)
{
	if (num4 % 3 == 0 && num4 % 5 == 0)
	{
		console.log(num4);
	}
	num4++;
}