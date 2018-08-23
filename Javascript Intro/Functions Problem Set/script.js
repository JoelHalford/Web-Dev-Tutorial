console.log(isEven(4));		//true
console.log(isEven(21));		//false
console.log(isEven(68));		//true
console.log(isEven(333));	//false

console.log(factorial(5));	//120
console.log(factorial(2));	//2
console.log(factorial(10));	//3628800
console.log(factorial(0));	//1

console.log(kebabtoSnake("hello-world"));
console.log(kebabtoSnake("dogs-are-awesome"));
console.log(kebabtoSnake("blah"));

function isEven(num)
{	//check if number is even
	return num % 2 === 0;
}

function factorial(num)
{	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for (var i = 1; i <= num; i++)
	{
		result *= i;
	}
	//return the result variable
	return result;
}

function kebabtoSnake(str)
{	//replace all dashes with underscore
	var myString = str.replace(/-/g, "_");
	return myString;
}